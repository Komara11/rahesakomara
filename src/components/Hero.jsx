"use client";

import Image from "next/image";
import { Cpu, Bot, Code2 } from "lucide-react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "./SocialIcons";

export default function Hero() {
  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/Komara11", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/rahesa-komara-4256443b0/", label: "LinkedIn" },
    { icon: InstagramIcon, href: "https://www.instagram.com/rahesakomaraa/", label: "Instagram" },
  ];

  const scrollToProject = () => {
    const el = document.getElementById("project");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[auto] lg:min-h-screen flex items-center justify-center pt-28 pb-14 sm:pt-32 sm:pb-16 lg:py-0 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-16 w-full grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-center pt-0 lg:pt-12">
        
        {/* PHOTO COLUMN: On mobile it is ORDER-1 (Top), on desktop it is ORDER-2 (Right) */}
        <div className="order-1 lg:order-2 lg:col-span-5 relative flex justify-center items-center py-2 lg:py-0 animate-fade-in-scale animation-delay-200">
          
          {/* Studio mood lighting directly behind the cutout - Subtle GPU Pulse */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center animate-subtle-glow">
            {/* Cyan glow on left behind subject */}
            <div className="absolute -left-8 top-1/4 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-cyan-500/20 blur-[90px] sm:blur-[110px]" />
            {/* Magenta glow on right behind subject */}
            <div className="absolute -right-8 top-1/3 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-pink-500/15 blur-[90px] sm:blur-[110px]" />
          </div>

          {/* Photo Wrapper - Responsively Sized & Anchored */}
          <div className="relative z-10 w-full max-w-[270px] sm:max-w-[340px] lg:max-w-[460px] flex justify-center items-center">
            
            {/* 1. Top-Left Badge: Cpu / AI Chip (Cyan) - Asynchronous 5.5s float + interactive hover */}
            <div 
              className="absolute top-6 sm:top-8 left-[14%] sm:left-[20%] z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-2xl glass-panel border border-cyan-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.35)] animate-float-cpu cursor-pointer hover:scale-115 hover:border-cyan-300 hover:shadow-[0_0_30px_rgba(6,182,212,0.65)] transition-all duration-300 active:scale-95"
              title="AI Architecture"
            >
              <Cpu className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-cyan-400 transition-transform duration-300 hover:rotate-12" />
            </div>

            {/* 2. Bottom-Left Badge: Bot / AI Agent (Purple) - Asynchronous 7s float + interactive hover */}
            <div 
              className="absolute bottom-14 sm:bottom-24 left-1 sm:left-3 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-2xl glass-panel border border-purple-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(168,85,247,0.35)] animate-float-bot cursor-pointer hover:scale-115 hover:border-purple-300 hover:shadow-[0_0_30px_rgba(168,85,247,0.65)] transition-all duration-300 active:scale-95"
              title="Autonomous Agents"
            >
              <Bot className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-purple-400 transition-transform duration-300 hover:scale-110" />
            </div>

            {/* 3. Right Badge: Code2 / Code Architecture (Pink) - Asynchronous 6.2s float + interactive hover */}
            <div 
              className="absolute bottom-20 sm:bottom-32 right-1 sm:right-3 z-20 w-10 h-10 sm:w-12 sm:h-12 lg:w-13 lg:h-13 rounded-2xl glass-panel border border-pink-400/40 flex items-center justify-center shadow-[0_0_20px_rgba(244,63,94,0.35)] animate-float-code cursor-pointer hover:scale-115 hover:border-pink-300 hover:shadow-[0_0_30px_rgba(244,63,94,0.65)] transition-all duration-300 active:scale-95"
              title="Modern Engineering"
            >
              <Code2 className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-pink-400 transition-transform duration-300 hover:scale-110" />
            </div>

            {/* Subject Cutout Image */}
            <Image
              src="/images/rahesa-hero.png"
              alt="Rahesa Komara"
              width={480}
              height={560}
              priority
              className="w-full h-auto object-contain pointer-events-none select-none drop-shadow-[-12px_0px_35px_rgba(6,182,212,0.3)] drop-shadow-[12px_0px_35px_rgba(244,63,94,0.25)]"
            />
          </div>

        </div>

        {/* TEXT COLUMN: On mobile it is ORDER-2 (Bottom & Centered), on desktop it is ORDER-1 (Left) */}
        <div className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10 space-y-4 sm:space-y-6 lg:space-y-7 py-2 sm:py-6">
          
          {/* Headline - Responsive Scaling & Staggered Entrance */}
          <div className="space-y-1.5 sm:space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extrabold text-white tracking-tight animate-fade-in-up animation-delay-100">
              Hello!
            </h2>
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight animate-fade-in-up animation-delay-200">
              I Am Rahesa Komara
            </h1>
            <p className="text-xs sm:text-sm font-semibold uppercase tracking-widest text-cyan-400 animate-fade-in-up animation-delay-300">
              AI-Driven Developer
            </p>
          </div>

          {/* AI-Driven Bio - Staggered Entrance */}
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg leading-relaxed max-w-lg font-normal animate-fade-in-up animation-delay-400">
            I craft modern websites and high-performance digital products powered by artificial intelligence.
          </p>

          {/* Clean Pill Buttons - Centered on mobile & Staggered Entrance */}
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1 sm:pt-2 animate-fade-in-up animation-delay-500">
            <button
              onClick={scrollToProject}
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-white hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              See Project
            </button>

            <button
              disabled
              className="px-6 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-500 border border-white/10 cursor-not-allowed opacity-60"
            >
              Resume/CV
            </button>
          </div>

          {/* Minimal Social Links - Centered on mobile & Staggered Entrance */}
          <div className="pt-3 sm:pt-6 flex items-center justify-center lg:justify-start gap-5 sm:gap-6 text-slate-400 animate-fade-in-up animation-delay-600">
            {socialLinks.map((social) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="p-1 hover:text-cyan-400 hover:-translate-y-1 hover:scale-115 active:scale-95 transition-all duration-200"
                >
                  <IconComponent className="w-5 h-5" />
                </a>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
