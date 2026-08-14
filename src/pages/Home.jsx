import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import SynergyMatrix from "@/components/sections/SynergyMatrix";
import EcosystemPortal from "@/components/sections/EcosystemPortal";
import Vision from "@/components/sections/Vision";
import Bridgehead from "@/components/sections/Bridgehead";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <div className="bg-[#121417]">
      <Navbar />
      <main>
        <Hero />
        {/* Structural Scroll: dark → light transition into implementation */}
        <div className="h-[12vh] bg-gradient-to-b from-[#121417] to-[#F4F1ED]" />
        <SynergyMatrix />
        {/* light → dark back into the ecosystem */}
        <div className="h-[12vh] bg-gradient-to-b from-[#F4F1ED] to-[#121417]" />
        <EcosystemPortal />
        <Vision />
        <Bridgehead />
      </main>
      <Footer />
    </div>
  );
}