import HeroSection from "@/components/HeroSection";
import NavBar from "@/components/NavBar";
import Image from "next/image";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
    <NavBar />
      <div className="container mx-auto mt-20 py-4 px-12">
        <HeroSection />
      </div>
    </main>
  )
}
