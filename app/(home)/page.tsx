import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import AskYuvrajAI from "./components/AskYuvrajAI";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#09090b] overflow-x-hidden relative">
      {/* Background ambient particles */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden" aria-hidden="true">
        <div className="absolute top-[15%] left-[10%] w-1 h-1 rounded-full bg-purple-500/30 animate-float-slow" />
        <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 rounded-full bg-purple-400/20 animate-float" />
        <div className="absolute top-[55%] left-[20%] w-1 h-1 rounded-full bg-violet-500/25 animate-float-slow" style={{ animationDelay: "2s" }} />
        <div className="absolute top-[70%] right-[25%] w-1 h-1 rounded-full bg-purple-500/20 animate-float" style={{ animationDelay: "3s" }} />
        <div className="absolute top-[85%] left-[35%] w-1.5 h-1.5 rounded-full bg-purple-400/25 animate-float-slow" style={{ animationDelay: "1s" }} />
        <div className="absolute top-[40%] right-[8%] w-1 h-1 rounded-full bg-violet-400/20 animate-float" style={{ animationDelay: "4s" }} />
        <div className="absolute top-[20%] left-[60%] w-1 h-1 rounded-full bg-purple-500/20 animate-float-slow" style={{ animationDelay: "5s" }} />
        <div className="absolute top-[65%] left-[80%] w-1 h-1 rounded-full bg-purple-400/15 animate-float" style={{ animationDelay: "2.5s" }} />
        <div className="absolute top-[45%] left-[5%] w-1 h-1 rounded-full bg-violet-500/20 animate-float-slow" style={{ animationDelay: "3.5s" }} />
        <div className="absolute top-[90%] right-[40%] w-1 h-1 rounded-full bg-purple-500/25 animate-float" style={{ animationDelay: "1.5s" }} />
      </div>

      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto relative z-10">
        <AboutSection />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>

      {/* AI Chatbot — floating, fixed position */}
      <AskYuvrajAI />
    </div>
  );
};

export default Page;
