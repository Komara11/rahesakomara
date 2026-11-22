"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    if (window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", id: "home" },
    { name: "Project", id: "project" },
    { name: "Contact", id: "contact" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-4 sm:top-6 left-0 right-0 z-50 flex justify-center pointer-events-none px-4 animate-fade-in-down animation-delay-50">
      {/* Compact Centered Floating Wrapper - Fully Responsive */}
      <nav
        className={`pointer-events-auto transition-all duration-300 rounded-full flex items-center justify-center gap-6 sm:gap-10 px-6 sm:px-9 py-2 sm:py-2.5 ${
          scrolled
            ? "bg-[#080e14]/90 backdrop-blur-md border border-white/10 shadow-xl shadow-black/50"
            : "bg-transparent border border-transparent"
        }`}
      >
        {navLinks.map((link) => (
          <button
            key={link.name}
            onClick={() => scrollTo(link.id)}
            className="text-xs sm:text-sm font-medium text-slate-300 hover:text-white transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
          >
            {link.name}
          </button>
        ))}
      </nav>
    </header>
  );
}
