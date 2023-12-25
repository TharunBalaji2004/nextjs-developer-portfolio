import AboutSection from "@/components/AboutSection";
import BottomNavBar from "@/components/BottomNavBar";
import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <NavBar />
      <div className="container mx-auto mt-5 mb-20 py-4 px-12">
        <HeroSection />
        <AboutSection />
        <ProjectSection />
      </div>
    <BottomNavBar />
    </main>
  )
}
