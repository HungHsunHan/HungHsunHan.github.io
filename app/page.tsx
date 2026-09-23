import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Projects from "@/components/Projects";
import BeyondPOC from "@/components/BeyondPOC";
import TroubleshootingMindset from "@/components/TroubleshootingMindset";
import EngineeringStories from "@/components/EngineeringStories";
import Experience from "@/components/Experience";
import KnowledgeSharing from "@/components/KnowledgeSharing";
import TechStack from "@/components/TechStack";
import CurrentlyExploring from "@/components/CurrentlyExploring";
import EngineeringPrinciples from "@/components/EngineeringPrinciples";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import CursorSpotlight from "@/components/CursorSpotlight";

export default function Home() {
  return (
    <>
      <CursorSpotlight />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Expertise />
        <Projects />
        <BeyondPOC />
        <TroubleshootingMindset />
        <EngineeringStories />
        <Experience />
        <KnowledgeSharing />
        <TechStack />
        <CurrentlyExploring />
        <EngineeringPrinciples />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
