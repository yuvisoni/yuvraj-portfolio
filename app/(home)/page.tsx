import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const Page = () => {
  return (
    <div className="min-h-screen bg-[#09090b] overflow-x-hidden">
      <Navbar />
      <HeroSection />
      <div className="max-w-7xl mx-auto">
        <AboutSection />
        <Skills />
        <Projects />
        <Certifications />
        <Contact />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
