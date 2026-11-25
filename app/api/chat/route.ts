import { NextRequest, NextResponse } from "next/server";
import { PORTFOLIO_CONTEXT, getLocalFAQResponse } from "@/app/(home)/components/chatbot-knowledge";

/* ── Per-IP rate limiting (in-memory) ──────────────────────
   NOTE: On Vercel serverless, each cold-start gets its own
   memory, so this is best-effort rather than globally strict.
   A determined user could exceed the limit across instances.
   For stricter enforcement, use Vercel KV or Upstash Redis.
   ────────────────────────────────────────────────────────── */
const rateLimitMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 20; // requests
const RATE_WINDOW = 60_000; // 1 minute

function isRateLimited(ip: string): boolean {
  const now = Date.now();

  // Lazy cleanup: evict stale entries when map grows large
  if (rateLimitMap.size > 500) {
    Array.from(rateLimitMap.entries()).forEach(([key, val]) => {
      if (now > val.resetAt) rateLimitMap.delete(key);
    });
  }

  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetAt) {
    rateLimitMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT;
}

/* ── POST /api/chat ────────────────────────────────────── */
export async function POST(request: NextRequest) {
  try {
    // Rate limit check
    const ip =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      "unknown";

    if (isRateLimited(ip)) {
      return NextResponse.json(
        { message: "Please wait a moment before sending more messages.", fallback: false },
        { status: 429 }
      );
    }

    // Parse and validate input
    const body = await request.json();
    const message = typeof body.message === "string" ? body.message.trim() : "";

    if (!message || message.length > 500) {
      return NextResponse.json(
        { message: "Please enter a valid question (max 500 characters).", fallback: false },
        { status: 400 }
      );
    }

    // Check if API key is configured
    const apiKey = process.env.GEMINI_API_KEY;

    if (!apiKey) {
      // Local FAQ fallback
      const answer = getLocalFAQResponse(message);
      return NextResponse.json({ message: answer, fallback: true });
    }

    // Call Gemini API via @google/genai
    const { GoogleGenAI } = await import("@google/genai");
    const ai = new GoogleGenAI({ apiKey });

    const controller = new AbortController();
    const timeout = setTimeout(() => controller.abort(), 10_000);

    try {
      const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: message,
        config: {
          systemInstruction: PORTFOLIO_CONTEXT,
          maxOutputTokens: 300,
          temperature: 0.7,
        },
      });

      clearTimeout(timeout);

      const text = response.text || "Sorry, I couldn't generate a response. Try again!";

      return NextResponse.json({ message: text, fallback: false });
    } catch (aiError: any) {
      clearTimeout(timeout);

      // If AI fails, fall back to local FAQ
      console.error("Gemini API error:", aiError?.message || aiError);
      const answer = getLocalFAQResponse(message);
      return NextResponse.json({ message: answer, fallback: true });
    }
  } catch (error: any) {
    console.error("Chat API error:", error?.message || error);
    return NextResponse.json(
      { message: "Sorry, I'm having trouble right now. Try again!", fallback: false },
      { status: 500 }
    );
  }
}
