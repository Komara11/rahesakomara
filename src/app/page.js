import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import BackgroundGlow from "@/components/BackgroundGlow";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#080e14] text-slate-100 flex flex-col justify-between selection:bg-cyan-500 selection:text-black">
      {/* Ambient Lighting Gradients */}
      <BackgroundGlow />

      {/* Header / Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="flex-1 w-full">
        <Hero />
        <Projects />
        <Contact />
      </main>

      {/* Minimal Footer */}
      <footer className="py-6 sm:py-10 text-center text-xs text-slate-600 border-t border-white/[0.04]">
        <div className="max-w-7xl mx-auto px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© 2026 Rahesa Komara. All rights reserved.</p>
          <p className="text-slate-500">
            Crafted with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}
