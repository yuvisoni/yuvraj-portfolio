import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://yuvrajsoni.dev"),
  title: "Yuvraj Soni — AI/ML Enthusiast & Software Developer",
  authors: {
    name: "Yuvraj Soni",
  },
  description:
    "Computer Science Engineering student passionate about Artificial Intelligence, Machine Learning, Generative AI and Software Development. Building intelligent solutions through code.",
  openGraph: {
    title: "Yuvraj Soni — AI/ML Enthusiast & Software Developer",
    description:
      "Computer Science Engineering student passionate about AI, Machine Learning, and Software Development.",
    url: "https://yuvrajsoni.dev",
    siteName: "Yuvraj Soni",
    type: "website",
  },
  keywords: [
    "Yuvraj Soni",
    "AI ML developer",
    "machine learning",
    "software developer",
    "computer science student",
    "portfolio",
    "generative AI",
    "Python developer",
    "NLP",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
