import Hero from "@/components/Hero";
import AboutMe from "@/components/AboutMe";
import Process from "@/components/Process";
import Motion from "@/components/Motion";
import ThreeDVisuals from "@/components/ThreeDVisuals";
import Brand from "@/components/Brand";
import Web from "@/components/Web";
import Development from "@/components/Development";
import WorkTogether from "@/components/WorkTogether";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <main className="min-h-screen overflow-x-hidden">
        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <AboutMe />

        {/* Process Section */}
        <Process />

        {/* Motion Graphics Section */}
        <Motion />

        {/* 3D Visualization Section */}
        <ThreeDVisuals />

        {/* Brand Identity Section */}
        <Brand />

        {/* Web Design Section */}
        <Web />

        {/* Development Section */}
        <Development />

        {/* Work Together Section */}
        <WorkTogether />
      </main>

      {/* Footer */}
      <Footer />
    </>
  );
}
