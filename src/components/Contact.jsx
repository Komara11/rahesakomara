"use client";

import { useState } from "react";
import {
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
} from "./SocialIcons";
import { useInView } from "@/hooks/useInView";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [cardRef, isInView] = useInView({ threshold: 0.1 });
  const email = "rahesakomara12@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const socialLinks = [
    { icon: GithubIcon, href: "https://github.com/Komara11", label: "GitHub" },
    { icon: LinkedinIcon, href: "https://www.linkedin.com/in/rahesa-komara-4256443b0/", label: "LinkedIn" },
    { icon: InstagramIcon, href: "https://www.instagram.com/rahesakomaraa/", label: "Instagram" },
  ];

  return (
    <section id="contact" className="relative py-10 sm:py-16 lg:py-24 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 w-full">
        
        {/* Centered Glassmorphism Showcase Card with Scroll Reveal Animation */}
        <div
          ref={cardRef}
          className={`relative rounded-3xl p-5 sm:p-10 lg:p-14 glass-panel border border-white/10 overflow-hidden text-center flex flex-col items-center shadow-2xl shadow-black/50 transition-all duration-800 ease-out transform ${
            isInView ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-[0.96] translate-y-10"
          }`}
        >
          
          {/* Subtle Ambient Radial Glows inside the Card - Animated Glow Pulse */}
          <div className="absolute -top-24 -left-24 w-72 h-72 rounded-full bg-cyan-500/15 blur-[80px] pointer-events-none animate-subtle-glow" />
          <div className="absolute -bottom-24 -right-24 w-72 h-72 rounded-full bg-pink-500/15 blur-[80px] pointer-events-none animate-subtle-glow" />

          {/* 1. Status Text - Plain & Clean */}
          <p className={`relative z-10 text-xs font-semibold uppercase tracking-widest text-cyan-400 mb-3 sm:mb-4 transition-all duration-600 delay-100 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Available for new opportunities
          </p>

          {/* 2. Headline */}
          <h2 className={`relative z-10 text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-tight max-w-2xl mx-auto transition-all duration-600 delay-150 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Let&apos;s Work Together
          </h2>

          {/* 3. Description */}
          <p className={`relative z-10 text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed max-w-md mx-auto pt-2 sm:pt-3 font-normal transition-all duration-600 delay-200 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            Have an innovative AI project, a product to build, or simply want to connect? My inbox is always open.
          </p>

          {/* 4. Sleek Email Badge with Smooth Hover Feedback */}
          <div className={`relative z-10 my-6 sm:my-8 px-4 sm:px-7 py-2.5 sm:py-3 rounded-full bg-white/[0.03] border border-white/10 hover:border-cyan-400/40 hover:bg-white/[0.06] hover:scale-[1.01] transition-all duration-300 max-w-full transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="font-mono text-xs sm:text-sm md:text-base font-semibold text-slate-200 break-all sm:break-normal">
              {email}
            </span>
          </div>

          {/* 5. Action Buttons */}
          <div className={`relative z-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4 transition-all duration-600 delay-300 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <a
              href={`mailto:${email}`}
              className="px-7 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-white border border-white hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
            >
              Send Email
            </a>

            <button
              onClick={handleCopy}
              className="px-7 sm:px-8 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-slate-300 border border-white/20 hover:border-white hover:text-white hover:bg-white/5 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 cursor-pointer"
            >
              {copied ? "Copied!" : "Copy Email"}
            </button>
          </div>

          {/* 6. Social Links Footer inside the Card */}
          <div className={`relative z-10 pt-8 mt-8 border-t border-white/[0.08] w-full max-w-sm flex flex-col items-center gap-3 transition-all duration-600 delay-350 transform ${
            isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}>
            <span className="text-[11px] uppercase tracking-widest text-slate-500 font-mono">
              Connect On Socials
            </span>
            <div className="flex items-center justify-center gap-6 text-slate-400 pt-1">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-1 hover:text-cyan-400 hover:-translate-y-1 hover:scale-120 active:scale-95 transition-all duration-200"
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
