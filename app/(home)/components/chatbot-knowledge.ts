// Chatbot knowledge base — all content verified from portfolio
// This file is used both as context for the AI and as the local FAQ fallback

export const PORTFOLIO_CONTEXT = `
You are Yuvraj's AI assistant on his personal developer portfolio website.

ABOUT YUVRAJ SONI:
- 2nd Year Computer Science Engineering student
- Passionate about Artificial Intelligence, Machine Learning, Generative AI and software development
- Enjoys exploring emerging technologies and building intelligent, practical applications
- Experience in Python, machine learning, NLP and software development

TECHNICAL SKILLS:
Programming Languages: Python, Java, JavaScript
Core Computer Science: Data Structures and Algorithms
AI & Machine Learning: Machine Learning, Generative AI, Natural Language Processing, Scikit-learn
Web Development: HTML, CSS, JavaScript, Streamlit
Other Skills: Leadership, Project Management, Communication

PROJECTS:
1. CineMatch — Hybrid Movie Recommendation System
   A hybrid movie recommendation system built using Python, Streamlit and Scikit-learn. It combines Content-Based Filtering, Collaborative Filtering and Matrix Factorization to deliver personalized movie recommendations.
   Technologies: Python, Streamlit, Scikit-learn, Pandas, Machine Learning
   Live Demo: https://yuvisoni-cinematch-app-ppfahe.streamlit.app/

2. TrustRAG — Trust-Aware Retrieval-Augmented Generation
   A system designed to improve the reliability of LLM-generated responses through evidence-grounded answer generation and trust evaluation.
   Technologies: Python, RAG, NLP, Generative AI
   GitHub: https://github.com/yuvisoni/TrustRAG

3. House Price Prediction
   A machine learning-based house price prediction web application built using Python, Scikit-learn and Streamlit.
   Technologies: Python, Scikit-learn, Streamlit, Machine Learning
   GitHub: https://github.com/yuvisoni/House-Price-Prediction

4. Smart-Summarizer — NLP Text Summarization Tool
   A Python-based NLP text summarization tool that uses TF-IDF and TextRank algorithms to extract important sentences from lengthy documents.
   Technologies: Python, NLP, TF-IDF, TextRank
   GitHub: https://github.com/yuvisoni/smart-summarizer

5. DUNGEON ZERO — Terminal Roguelike Dungeon Crawler
   A high-performance terminal-based dungeon crawler developed using Nim 2.4.0. Features procedural dungeon generation, BFS-based enemy pathfinding, raycasted Field of View, Fog of War, turn-based combat, multi-floor progression, character leveling, inventory management, and 11 automated test suites.
   Technologies: Nim 2.4.0, Algorithms, BFS, Procedural Generation
   GitHub: https://github.com/yuvisoni/dungeon-zero

CERTIFICATIONS:
1. Generative AI Foundations Certificate
2. Ultimate Web Development Course

EDUCATION:
2nd Year, Bachelor of Engineering, Computer Science and Engineering

CONTACT:
Email: yuvisoni2005@gmail.com
GitHub: https://github.com/yuvisoni
LinkedIn: https://www.linkedin.com/in/yuvraj-soni-328794384

RULES:
- Answer ONLY based on the information above
- Do NOT invent achievements, work experience, internships, awards, GPA, or statistics
- Do NOT mention any college or university name
- Do NOT share any phone number
- Keep answers concise, friendly and professional
- If asked something not covered above, say "I don't have that information, but you can reach out to Yuvraj directly via his contact links!"
`;

// Local FAQ fallback for when no API key is configured
export const LOCAL_FAQ: Record<string, string> = {
  // Greetings
  "hello|hi|hey|greetings": "Hey! 👋 I'm Yuvraj's AI assistant. Ask me about his projects, skills, or background!",
  
  // About
  "who is yuvraj|about yuvraj|tell me about|introduce": "Yuvraj Soni is a 2nd Year Computer Science Engineering student passionate about AI, Machine Learning, Generative AI and software development. He builds intelligent, practical applications that solve real-world problems.",
  
  // Skills
  "skills|technologies|tech stack|what does he know|programming": "Yuvraj's skills include:\n• **Languages:** Python, Java, JavaScript\n• **AI/ML:** Machine Learning, Generative AI, NLP, Scikit-learn\n• **Web:** HTML, CSS, JavaScript, Streamlit\n• **Core CS:** Data Structures & Algorithms",
  
  // Python
  "python": "Python is one of Yuvraj's primary languages. He uses it extensively for machine learning projects, NLP tools, and web applications with Streamlit and Scikit-learn.",
  
  // CineMatch
  "cinematch|movie|recommendation": "**CineMatch** is a hybrid movie recommendation system built with Python, Streamlit and Scikit-learn. It combines Content-Based Filtering, Collaborative Filtering and Matrix Factorization. You can try the live demo!",
  
  // TrustRAG
  "trustrag|rag|retrieval|llm": "**TrustRAG** is a Trust-Aware Retrieval-Augmented Generation system that improves the reliability of LLM responses through evidence-grounded answer generation and trust evaluation. Built with Python, RAG, NLP and Generative AI.",
  
  // House Price
  "house price|price prediction|real estate": "**House Price Prediction** is an ML-based web application built with Python, Scikit-learn and Streamlit that predicts house prices using machine learning models.",
  
  // Smart Summarizer
  "summarizer|summarization|summary|tfidf|textrank": "**Smart-Summarizer** is an NLP text summarization tool that uses TF-IDF and TextRank algorithms to extract important sentences from lengthy documents. Built in Python.",
  
  // Dungeon Zero
  "dungeon|game|nim|roguelike": "**DUNGEON ZERO** is a terminal-based roguelike dungeon crawler built in Nim 2.4.0. It features procedural dungeon generation, BFS pathfinding, raycasted Field of View, Fog of War, turn-based combat, and 11 automated test suites!",
  
  // Projects general
  "projects|what has he built|portfolio": "Yuvraj has built 5 notable projects:\n1. 🎬 **CineMatch** — Movie recommendation system\n2. 🔍 **TrustRAG** — Trust-aware RAG system\n3. 🏠 **House Price Prediction** — ML price predictor\n4. 📝 **Smart-Summarizer** — NLP summarization tool\n5. ⚔️ **DUNGEON ZERO** — Terminal roguelike game",
  
  // Contact
  "contact|email|reach|connect": "You can reach Yuvraj at:\n📧 **Email:** yuvisoni2005@gmail.com\n🐙 **GitHub:** github.com/yuvisoni\n💼 **LinkedIn:** linkedin.com/in/yuvraj-soni-328794384",
  
  // Education
  "education|study|student|year|degree": "Yuvraj is a 2nd Year Bachelor of Engineering student in Computer Science and Engineering.",
  
  // Certifications
  "certificate|certification|certified": "Yuvraj holds two certifications:\n1. 🤖 Generative AI Foundations Certificate\n2. 🌐 Ultimate Web Development Course",
  
  // AI/ML
  "artificial intelligence|machine learning|ai|ml|deep learning": "Yuvraj is deeply interested in AI and Machine Learning. He has experience with ML algorithms, Generative AI, NLP, and Scikit-learn. His projects like CineMatch, TrustRAG and Smart-Summarizer showcase these skills.",
  
  // GitHub
  "github": "Yuvraj's GitHub: https://github.com/yuvisoni — check out his project repositories there!",
  
  // LinkedIn
  "linkedin": "Connect with Yuvraj on LinkedIn: https://www.linkedin.com/in/yuvraj-soni-328794384",
};

export function getLocalFAQResponse(question: string): string {
  const q = question.toLowerCase().trim();
  
  for (const [pattern, answer] of Object.entries(LOCAL_FAQ)) {
    const keywords = pattern.split("|");
    if (keywords.some((kw) => q.includes(kw))) {
      return answer;
    }
  }
  
  return "I can answer questions about Yuvraj's projects, skills, and background. Try asking about CineMatch, his AI/ML experience, or his technical skills!";
}
