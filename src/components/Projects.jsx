"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import { useInView } from "@/hooks/useInView";

function SectionHeader() {
  const [headerRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={headerRef}
      className={`flex flex-col md:flex-row md:items-end justify-between items-center md:items-end text-center md:text-left gap-3 sm:gap-4 pb-8 sm:pb-12 border-b border-white/[0.08] transition-all duration-700 ease-out transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
    >
      <div className="space-y-1.5 sm:space-y-2">
        <p className="text-xs font-semibold uppercase tracking-widest text-cyan-400">
          Portfolio
        </p>
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
          Featured Projects
        </h2>
      </div>
      <p className="text-slate-400 text-xs sm:text-sm md:text-base max-w-md font-normal leading-relaxed text-center md:text-left">
        Selected digital products and real-world web platforms built with modern architecture.
      </p>
    </div>
  );
}

function MobileProjectSlider({ projects }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  const handleScroll = () => {
    if (!sliderRef.current) return;
    const { scrollLeft, clientWidth } = sliderRef.current;
    const cardWidth = clientWidth * 0.84;
    const index = Math.round(scrollLeft / cardWidth);
    setActiveIndex(Math.min(Math.max(index, 0), projects.length - 1));
  };

  const scrollToSlide = (index) => {
    if (!sliderRef.current) return;
    const card = sliderRef.current.children[index];
    if (card) {
      card.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
      setActiveIndex(index);
    }
  };

  return (
    <div className="block md:hidden pt-8 pb-4">
      {/* Horizontal Swipeable Track */}
      <div
        ref={sliderRef}
        onScroll={handleScroll}
        className="flex overflow-x-auto snap-x snap-mandatory gap-4.5 pb-6 pt-2 -mx-4 px-5 no-scrollbar scroll-smooth items-stretch"
        style={{ WebkitOverflowScrolling: "touch" }}
      >
        {projects.map((project) => (
          <div
            key={project.id}
            id={`mobile-${project.id}`}
            className="snap-center shrink-0 w-[84vw] max-w-[330px] rounded-2xl bg-[#0c141d]/90 border border-white/10 p-4.5 flex flex-col justify-between shadow-2xl shadow-black/60 transition-all duration-300"
          >
            {/* Image Preview Box */}
            <div className={`relative ${project.mobileAspect} w-full rounded-xl overflow-hidden bg-[#080e14] border border-white/10 mb-4`}>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="330px"
                className={`${project.imageFit} transition-transform duration-500`}
              />
              {project.isLive && (
                <div className="absolute top-3 right-3 z-10 px-2.5 py-0.5 rounded-full bg-[#080e14]/90 backdrop-blur-md border border-cyan-400/40 text-[10px] font-semibold text-cyan-300 shadow-md">
                  Live Website
                </div>
              )}
            </div>

            {/* Details */}
            <div className="space-y-3 flex-1 flex flex-col justify-between text-left">
              <div className="space-y-1.5">
                <span className="text-[11px] uppercase font-semibold tracking-wider text-cyan-400">
                  {project.category}
                </span>
                <h3 className="text-xl font-extrabold text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-normal">
                  {project.description}
                </p>
              </div>

              {/* Ecosystem Tags */}
              <div className="pt-0.5 flex flex-wrap gap-1.5">
                {project.ecosystem.map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-0.5 rounded-full text-[10px] font-medium bg-white/[0.04] border border-white/[0.08] text-slate-300"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* Action Button */}
              <div className="pt-2">
                {project.isLive ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full text-center py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-white hover:border-cyan-400 hover:text-cyan-300 transition-all block"
                  >
                    Visit Website
                  </a>
                ) : (
                  <span className="w-full text-center py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/20 block">
                    {project.linkLabel}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Swipe Indicators (Subtle Minimalist Dots - No Clutter) */}
      <div className="flex items-center justify-center gap-2 pt-1">
        {projects.map((_, idx) => (
          <button
            key={idx}
            onClick={() => scrollToSlide(idx)}
            aria-label={`Go to slide ${idx + 1}`}
            className={`transition-all duration-300 rounded-full h-1.5 cursor-pointer ${
              activeIndex === idx
                ? "w-6 bg-cyan-400 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                : "w-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

function ProjectRow({ project, idx }) {
  const [rowRef, isInView] = useInView({ threshold: 0.1 });
  const isEven = idx % 2 === 1;

  return (
    <div
      ref={rowRef}
      id={project.id}
      className={`group py-10 sm:py-14 lg:py-18 transition-all duration-700 ease-out transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 items-center">
        
        {/* Visual Image Column */}
        <div
          className={`order-1 ${
            isEven ? "lg:order-2" : "lg:order-1"
          } lg:col-span-6`}
        >
          <div className={`relative ${project.containerAspect} rounded-2xl overflow-hidden bg-[#0c141d]/90 border border-white/10 group-hover:border-cyan-400/40 group-hover:shadow-[0_0_35px_rgba(6,182,212,0.2)] transition-all duration-500 shadow-2xl shadow-black/60`}>
            <Image
              src={project.image}
              alt={project.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className={`${project.imageFit} group-hover:scale-105 transition-transform duration-700 ease-out`}
            />
            
            {/* Live Badge - Pure Clean Text (No Dot Symbol) */}
            {project.isLive && (
              <div className="absolute top-3.5 right-3.5 z-10 px-3 py-1 rounded-full bg-[#080e14]/90 backdrop-blur-md border border-cyan-400/40 text-[11px] font-semibold text-cyan-300 shadow-lg">
                Live Website
              </div>
            )}
          </div>
        </div>

        {/* Information Details Column - Crisp & Minimal (No 123 numbers, No symbols) */}
        <div
          className={`order-2 ${
            isEven ? "lg:order-1" : "lg:order-2"
          } lg:col-span-6 space-y-3.5 sm:space-y-4 text-left`}
        >
          {/* Category Label */}
          <div>
            <span className="text-xs uppercase font-semibold tracking-widest text-cyan-400">
              {project.category}
            </span>
          </div>

          {/* Title */}
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white group-hover:text-cyan-300 transition-colors duration-300 tracking-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-slate-400 text-xs sm:text-sm md:text-base leading-relaxed font-normal">
            {project.description}
          </p>

          {/* Ecosystem Tags */}
          <div className="pt-0.5 flex flex-wrap gap-2">
            {project.ecosystem.map((item) => (
              <span
                key={item}
                className="px-2.5 sm:px-3 py-1 rounded-full text-[11px] sm:text-xs font-medium bg-white/[0.04] border border-white/[0.08] text-slate-300 group-hover:border-white/15 transition-colors duration-300"
              >
                {item}
              </span>
            ))}
          </div>

          {/* Action Button - Pure Clean Text (No Symbol Arrow) */}
          <div className="pt-2 sm:pt-3">
            {project.isLive ? (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 sm:px-7 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-white border border-white hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-block"
              >
                Visit Website
              </a>
            ) : (
              <span className="px-6 sm:px-7 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider text-slate-300 border border-white/20 inline-block">
                {project.linkLabel}
              </span>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}

function GitHubCTA({ githubProfile }) {
  const [ctaRef, isInView] = useInView({ threshold: 0.1 });

  return (
    <div
      ref={ctaRef}
      id="github-cta"
      className={`pt-10 sm:pt-16 pb-2 text-center transition-all duration-700 ease-out transform ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
    >
      <a
        href={githubProfile}
        target="_blank"
        rel="noopener noreferrer"
        className="px-8 sm:px-9 py-3 sm:py-3.5 rounded-full text-xs sm:text-sm font-semibold uppercase tracking-wider text-black bg-white hover:bg-cyan-400 hover:shadow-[0_0_25px_rgba(6,182,212,0.45)] hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200 inline-block"
      >
        View All Projects on GitHub
      </a>
    </div>
  );
}

export default function Projects() {
  const GITHUB_PROFILE = "https://github.com/Komara11";

  const projects = [
    {
      id: "siparwis",
      title: "Siparwis",
      category: "Tourism Ecosystem",
      description:
        "Integrated tourism platform featuring a public portal, visitor mobile app, and admin management dashboard.",
      ecosystem: ["Web Portal", "Mobile App", "Admin Dashboard"],
      image: "/images/project/siparwis-focused.jpg",
      link: "#",
      linkLabel: "Explore System",
      isLive: false,
      containerAspect: "aspect-[3/4] w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto",
      mobileAspect: "aspect-[4/5]",
      imageFit: "object-cover",
    },
    {
      id: "sidara",
      title: "Sidara",
      category: "Public Sector & Governance",
      description:
        "Digital village asset management and public service portal with integrated administrative controls.",
      ecosystem: ["Public Portal", "Asset Management", "Admin Panel"],
      image: "/images/project/sidara-focused.jpg",
      link: "#",
      linkLabel: "Explore System",
      isLive: false,
      containerAspect: "aspect-[3/4] w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto",
      mobileAspect: "aspect-[4/5]",
      imageFit: "object-cover",
    },
    {
      id: "royani-wedding",
      title: "Royani Wedding",
      category: "Commercial Platform",
      description:
        "Live digital platform for wedding organizing services with catalog showcases, booking management, and client CRM.",
      ecosystem: ["Public Website", "Client CRM", "Live Production"],
      image: "/images/project/royani-focused.jpg",
      link: "https://royaniwedding.com",
      linkLabel: "Visit Website",
      isLive: true,
      containerAspect: "aspect-[3/4] w-full max-w-[320px] sm:max-w-[380px] lg:max-w-[420px] mx-auto",
      mobileAspect: "aspect-[4/5]",
      imageFit: "object-cover",
    },
  ];

  return (
    <section id="project" className="relative py-12 sm:py-16 lg:py-24 scroll-mt-20 sm:scroll-mt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 w-full">
        {/* Centered on mobile, left-aligned on desktop */}
        <SectionHeader />

        {/* Mobile: Horizontal Swipe Carousel Slider */}
        <MobileProjectSlider projects={projects} />

        {/* Desktop: Editorial Staggered Rows */}
        <div className="hidden md:block divide-y divide-white/[0.08]">
          {projects.map((project, idx) => (
            <ProjectRow key={project.id} project={project} idx={idx} />
          ))}
        </div>

        {/* View All Projects on GitHub */}
        <GitHubCTA githubProfile={GITHUB_PROFILE} />
      </div>
    </section>
  );
}
