import Image from "next/image";
import { CommandTerminal } from "@/components/CommandTerminal";
import { ProjectShowcase } from "@/components/ProjectShowcase";
import { Timeline } from "@/components/Timeline";
import {
  siteConfig,
  hero,
  about,
  focusAreas,
  techStack,
  nowItems,
  philosophy,
} from "@/data/portfolioData";
import {
  ArrowUpRight,
  Github,
  Twitter,
  Mail,
  ArrowRight,
  Cpu,
  Layers,
  Terminal as TermIcon,
  Globe,
  Server,
  Sparkles,
  BookOpen,
  ArrowRightLeft,
  Blocks,
  Network,
  LucideIcon
} from "lucide-react";

// Icon mapping for Focus Areas
const iconMap: Record<string, LucideIcon> = {
  Cpu: Cpu,
  Layers: Layers,
  Terminal: TermIcon,
  Globe: Globe,
  Server: Server,
};

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-zinc-950 text-zinc-900 dark:text-zinc-300 overflow-x-hidden selection:bg-indigo-500/20">

      {/* ─── HERO SECTION ─── */}
      <section className="relative overflow-hidden grid-bg pt-32 pb-24 md:pt-40 md:pb-36 border-b border-zinc-200 dark:border-zinc-900/80">

        {/* Glow ambient backgrounds */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-indigo-500/10 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 left-1/3 w-[300px] h-[300px] rounded-full bg-pink-500/5 dark:bg-pink-500/3 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center flex flex-col items-center">

            {/* Pranay Gupta's Big Circular Image */}
            <div className="relative mb-8 select-none animate-scale-in">
              {/* Animated Glow Border under the Avatar */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 blur-xl opacity-40 dark:opacity-30 animate-pulse-glow" />

              {/* Outer Ring with Premium Gradient */}
              <div className="relative p-[3px] rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-pink-500 hover:scale-105 transition-transform duration-500 ease-out shadow-2xl">
                <div className="rounded-full p-1 bg-white dark:bg-zinc-950">
                  <img
                    src="/4a8ef68c-b1f8-40f5-bd89-31cdce4b8298.png"
                    alt="Pranay Gupta"
                    className="w-48 h-48 sm:w-64 sm:h-64 rounded-full object-cover grayscale-[20%] hover:grayscale-0 transition-all duration-300"
                    loading="eager"
                  />
                </div>
              </div>
            </div>

            {/* Eyebrow Label */}
            <span className="inline-flex items-center gap-1.5 text-xs font-mono text-zinc-500 dark:text-zinc-400 uppercase tracking-widest px-3 py-1 rounded-full border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/40 backdrop-blur-sm animate-fade-in-up delay-100 opacity-0 mb-4 select-none">
              <Sparkles size={11} className="text-indigo-500 dark:text-indigo-400 animate-pulse" />
              {hero.eyebrow}
            </span>

            {/* Central Master Heading */}
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] bg-gradient-to-r from-blue-600 via-indigo-600 to-pink-500 dark:from-blue-400 dark:via-indigo-400 dark:to-pink-400 bg-clip-text text-transparent animate-fade-in-up delay-200 opacity-0 mb-6 max-w-2xl">
              {hero.title}
            </h1>

            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed font-sans max-w-2xl mx-auto animate-fade-in-up delay-300 opacity-0 mb-8">
              {hero.description}
            </p>

            {/* VERY Long Interactive Command Terminal */}
            <div className="w-full animate-fade-in-up delay-500 opacity-0 mb-10">
              <CommandTerminal />
            </div>

            {/* CTA and social link block */}
            <div className="flex flex-wrap items-center justify-center gap-4 animate-fade-in-up delay-600 opacity-0">
              <a
                href="#projects"
                className="inline-flex items-center gap-1.5 bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-950 px-5 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-800 dark:hover:bg-zinc-200 active:scale-[0.98] transition-all duration-200 shadow-md hover:shadow-lg dark:shadow-zinc-950/20"
              >
                Explore Projects
                <ArrowRight size={14} className="stroke-[2.5px]" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 border border-zinc-200 dark:border-zinc-800/80 bg-zinc-100/50 dark:bg-zinc-900/30 text-zinc-900 dark:text-zinc-300 px-5 py-3 rounded-lg text-sm font-semibold hover:bg-zinc-200 dark:hover:bg-zinc-800/80 hover:text-zinc-900 dark:hover:text-white active:scale-[0.98] transition-all duration-200"
              >
                Get in Touch
              </a>

              <div className="h-6 w-px bg-zinc-200 dark:bg-zinc-800 mx-2 hidden sm:block" />

              <div className="flex items-center gap-2">
                {siteConfig.github && (
                  <a
                    href={siteConfig.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub Profile"
                    className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/70 rounded-lg border border-zinc-200/50 dark:border-zinc-800/60 transition-all shadow-sm"
                  >
                    <Github size={18} />
                  </a>
                )}
                {siteConfig.twitter && (
                  <a
                    href={siteConfig.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter Profile"
                    className="p-2.5 text-zinc-500 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-900/70 rounded-lg border border-zinc-200/50 dark:border-zinc-800/60 transition-all shadow-sm"
                  >
                    <Twitter size={18} />
                  </a>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── ABOUT SECTION ─── */}
      <section id="about" className="py-32 px-6 border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-white to-zinc-50/40 dark:from-zinc-950 dark:to-zinc-950/60 relative overflow-hidden">
        {/* Beautiful decorative background */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/8 dark:bg-blue-500/3 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-64 h-64 bg-indigo-500/5 dark:bg-indigo-500/2 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-50/60 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/40">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <p className="text-xs font-mono text-indigo-600 dark:text-indigo-400 uppercase tracking-widest font-semibold">About Me</p>
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] bg-gradient-to-br from-zinc-900 to-zinc-700 dark:from-white dark:to-zinc-300 bg-clip-text text-transparent">
                {about.heading}
              </h2>
              <div className="flex gap-2">
                <div className="h-1.5 w-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                <div className="h-1.5 w-8 bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
              </div>
            </div>

            <div className="lg:col-span-7 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-zinc-700 dark:text-zinc-300 leading-[1.8] font-sans text-base md:text-lg hover:text-zinc-900 dark:hover:text-white transition-colors duration-300 relative pl-4 border-l-2 border-indigo-200 dark:border-indigo-800/50 hover:border-indigo-400 dark:hover:border-indigo-600">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── FOCUS AREAS SECTION ─── */}
      <section className="py-32 px-6 border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-50 to-white dark:from-zinc-950 dark:to-zinc-950/40 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-indigo-50/30 via-transparent to-transparent dark:from-indigo-950/10 pointer-events-none" />
        <div className="absolute top-1/2 left-1/3 w-64 h-64 rounded-full bg-pink-500/5 dark:bg-pink-500/2 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-indigo-950/30 dark:to-pink-950/20 border border-indigo-200/40 dark:border-indigo-800/30 mb-4">
              <Blocks size={14} className="text-indigo-600 dark:text-indigo-400" />
              <p className="text-xs font-mono text-indigo-700 dark:text-indigo-300 uppercase tracking-wider font-semibold">Focus Areas</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-5">
              Where I Invest My Time & Energy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Deep explorations, intentional learning, and applied research across these core domains.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {focusAreas.map((area, i) => {
              const IconComponent = iconMap[area.icon] || Cpu;
              const gradientColors = [
                "from-blue-500/20 via-indigo-500/10 to-blue-500/5",
                "from-purple-500/20 via-pink-500/10 to-purple-500/5",
                "from-amber-500/20 via-orange-500/10 to-amber-500/5",
                "from-emerald-500/20 via-teal-500/10 to-emerald-500/5",
                "from-rose-500/20 via-red-500/10 to-rose-500/5"
              ];
              const iconColors = [
                "bg-gradient-to-br from-blue-500 to-indigo-600",
                "bg-gradient-to-br from-purple-500 to-pink-600",
                "bg-gradient-to-br from-amber-500 to-orange-600",
                "bg-gradient-to-br from-emerald-500 to-teal-600",
                "bg-gradient-to-br from-rose-500 to-red-600"
              ];
              const textColors = [
                "text-blue-700 dark:text-blue-300",
                "text-purple-700 dark:text-purple-300",
                "text-amber-700 dark:text-amber-300",
                "text-emerald-700 dark:text-emerald-300",
                "text-rose-700 dark:text-rose-300"
              ];

              return (
                <div
                  key={i}
                  className="group relative bg-white/80 dark:bg-zinc-900/40 border border-zinc-200/50 dark:border-zinc-800/40 rounded-2xl p-8 backdrop-blur-sm hover:border-zinc-300/80 dark:hover:border-zinc-700/60 hover:shadow-2xl hover:shadow-zinc-300/30 dark:hover:shadow-zinc-950/50 hover:-translate-y-3 transition-all duration-500"
                >
                  {/* Gradient background overlay */}
                  <div className={`absolute inset-0 ${gradientColors[i % gradientColors.length]} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10">
                    <div className={`${iconColors[i % iconColors.length]} w-14 h-14 rounded-2xl flex items-center justify-center mb-7 group-hover:scale-110 transition-transform duration-500 shadow-lg`}>
                      <IconComponent size={24} className="text-white stroke-[2]" />
                    </div>

                    <h3 className={`text-xl font-bold mb-4 ${textColors[i % textColors.length]} group-hover:scale-105 transition-transform duration-300`}>
                      {area.title}
                    </h3>

                    <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                      {area.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── PROJECT SHOWCASE SECTION ─── */}
      <div className="border-b border-zinc-200 dark:border-zinc-900">
        <ProjectShowcase />
      </div>

      {/* ─── TECH STACK SECTION ─── */}
      <section id="stack" className="py-32 px-6 border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-950/60 relative overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-80 h-80 rounded-full bg-blue-500/10 dark:bg-blue-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 rounded-full bg-purple-500/8 dark:bg-purple-500/3 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950/30 dark:to-purple-950/20 border border-blue-200/40 dark:border-blue-800/30 mb-4">
              <Network size={14} className="text-blue-600 dark:text-blue-400" />
              <p className="text-xs font-mono text-blue-700 dark:text-blue-300 uppercase tracking-wider font-semibold">Technical Arsenal</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-5">
              Technologies I Build With
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              A curated collection of tools, languages, and frameworks that power my engineering workflow.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {techStack.map((cat, i) => {
              const categoryColors = [
                { bg: "bg-gradient-to-b from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10", border: "border-blue-200 dark:border-blue-800/40", text: "text-blue-700 dark:text-blue-300" },
                { bg: "bg-gradient-to-b from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10", border: "border-purple-200 dark:border-purple-800/40", text: "text-purple-700 dark:text-purple-300" },
                { bg: "bg-gradient-to-b from-emerald-50 to-teal-50 dark:from-emerald-950/20 dark:to-teal-950/10", border: "border-emerald-200 dark:border-emerald-800/40", text: "text-emerald-700 dark:text-emerald-300" },
                { bg: "bg-gradient-to-b from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10", border: "border-amber-200 dark:border-amber-800/40", text: "text-amber-700 dark:text-amber-300" },
                { bg: "bg-gradient-to-b from-rose-50 to-red-50 dark:from-rose-950/20 dark:to-red-950/10", border: "border-rose-200 dark:border-rose-800/40", text: "text-rose-700 dark:text-rose-300" }
              ];
              const colorSet = categoryColors[i % categoryColors.length];

              return (
                <div
                  key={i}
                  className={`${colorSet.bg} ${colorSet.border} rounded-2xl p-6 backdrop-blur-sm border transition-all duration-500 group hover:scale-105 hover:shadow-2xl hover:shadow-zinc-300/30 dark:hover:shadow-zinc-950/50`}
                >
                  <div className="flex items-center gap-3 mb-5">
                    <div className={`w-3 h-3 rounded-full ${colorSet.text} bg-current`} />
                    <h3 className={`font-bold text-sm font-mono uppercase tracking-wider ${colorSet.text}`}>
                      {cat.label}
                    </h3>
                  </div>

                  <ul className="space-y-3.5">
                    {cat.items.map((item, j) => (
                      <li key={j} className="flex items-center gap-3">
                        <div className="flex-1 h-px bg-gradient-to-r from-zinc-200 to-transparent dark:from-zinc-800" />
                        <span className="text-sm font-medium text-zinc-800 dark:text-zinc-200 group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300 whitespace-nowrap">
                          {item}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── NOW SECTION ─── */}
      <section id="now" className="py-32 px-6 border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-50/50 to-white dark:from-zinc-950/40 dark:to-zinc-950/80 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-gradient-to-br from-emerald-500/15 to-teal-500/10 dark:from-emerald-500/5 dark:to-teal-500/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-gradient-to-tr from-amber-500/10 to-orange-500/5 dark:from-amber-500/3 dark:to-orange-500/2 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="flex flex-col md:flex-row gap-12 items-start">
            <div className="md:w-1/3 space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-emerald-50 to-amber-50 dark:from-emerald-950/30 dark:to-amber-950/20 border border-emerald-200/40 dark:border-emerald-800/30">
                <BookOpen size={14} className="text-emerald-600 dark:text-emerald-400" />
                <p className="text-xs font-mono text-emerald-700 dark:text-emerald-300 uppercase tracking-wider font-semibold">Current Status</p>
              </div>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.1] bg-gradient-to-r from-zinc-900 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-300 dark:to-zinc-500 bg-clip-text text-transparent">
                What I&apos;m Focused On Now
              </h2>

              <p className="text-zinc-700 dark:text-zinc-300 text-base leading-relaxed">
                A living snapshot of my current priorities—what I&apos;m actively building, learning, and exploring at this moment. Inspired by Derek Sivers&apos; &quot;now&quot; page philosophy.
              </p>

              <div className="flex items-center gap-3 mt-8 p-3 rounded-lg bg-white/50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800">
                <div className="relative">
                  <div className="w-4 h-4 rounded-full bg-emerald-500 animate-ping" />
                  <div className="absolute top-1 left-1 w-2 h-2 rounded-full bg-emerald-500" />
                </div>
                <div className="font-mono text-xs text-zinc-700 dark:text-zinc-300">
                  <span className="block font-semibold">Updated August 2026</span>
                  <span className="text-zinc-500 dark:text-zinc-500">Dynamic • Living • Iterative</span>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {nowItems.map((item, i) => {
                  const typeConfig = {
                    "Building": {
                      bg: "bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/10",
                      border: "border-blue-200 dark:border-blue-800/40",
                      headerBg: "bg-gradient-to-r from-blue-600 to-indigo-600",
                      text: "text-blue-700 dark:text-blue-300",
                      icon: <Blocks size={16} className="text-white" />
                    },
                    "Learning": {
                      bg: "bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-950/20 dark:to-pink-950/10",
                      border: "border-purple-200 dark:border-purple-800/40",
                      headerBg: "bg-gradient-to-r from-purple-600 to-pink-600",
                      text: "text-purple-700 dark:text-purple-300",
                      icon: <BookOpen size={16} className="text-white" />
                    },
                    "Exploring": {
                      bg: "bg-gradient-to-br from-amber-50 to-orange-50 dark:from-amber-950/20 dark:to-orange-950/10",
                      border: "border-amber-200 dark:border-amber-800/40",
                      headerBg: "bg-gradient-to-r from-amber-600 to-orange-600",
                      text: "text-amber-700 dark:text-amber-300",
                      icon: <ArrowRightLeft size={16} className="text-white" />
                    }
                  };

                  const config = typeConfig[item.type] || typeConfig["Building"];

                  return (
                    <div
                      key={i}
                      className={`${config.bg} ${config.border} rounded-2xl p-0 border overflow-hidden group hover:shadow-2xl hover:shadow-zinc-300/30 dark:hover:shadow-zinc-950/50 hover:-translate-y-2 transition-all duration-500`}
                    >
                      <div className={`${config.headerBg} px-6 py-4 flex items-center justify-between`}>
                        <div className="flex items-center gap-2">
                          {config.icon}
                          <span className="text-sm font-bold text-white uppercase tracking-wider">
                            {item.type}
                          </span>
                        </div>
                        <div className="text-xs font-mono text-white/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Active Now
                        </div>
                      </div>

                      <div className="p-6">
                        <p className="text-zinc-800 dark:text-zinc-200 text-base leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                          {item.description}
                        </p>

                        <div className="flex items-center gap-2 mt-5 pt-5 border-t border-zinc-200 dark:border-zinc-800">
                          <div className={`w-1.5 h-1.5 rounded-full ${config.text} bg-current`} />
                          <span className="text-xs text-zinc-600 dark:text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-300">
                            Ongoing • Engaged • Active
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PHILOSOPHY SECTION ─── */}
      <section className="py-32 px-6 border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-white via-zinc-50/30 to-zinc-100/30 dark:from-zinc-950 dark:via-zinc-950/60 dark:to-zinc-950/40 relative overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-gradient-to-br from-indigo-500/12 to-purple-500/8 dark:from-indigo-500/5 dark:to-purple-500/3 blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/3 w-56 h-56 rounded-full bg-gradient-to-tr from-pink-500/10 to-rose-500/5 dark:from-pink-500/3 dark:to-rose-500/2 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950/30 dark:to-pink-950/20 border border-purple-200/40 dark:border-purple-800/30 mb-4">
              <Sparkles size={14} className="text-purple-600 dark:text-purple-400" />
              <p className="text-xs font-mono text-purple-700 dark:text-purple-300 uppercase tracking-wider font-semibold">Guiding Principles</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-5">
              My Engineering Philosophy
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              The mental models and core beliefs that shape how I build software, solve problems, and make decisions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophy.map((item, i) => {
              const gradients = [
                "from-blue-500/20 via-indigo-500/10 to-purple-500/5",
                "from-purple-500/20 via-pink-500/10 to-rose-500/5",
                "from-emerald-500/20 via-teal-500/10 to-cyan-500/5",
                "from-amber-500/20 via-orange-500/10 to-red-500/5",
                "from-rose-500/20 via-red-500/10 to-orange-500/5",
                "from-indigo-500/20 via-blue-500/10 to-cyan-500/5"
              ];
              const borderColors = [
                "border-blue-300/50 dark:border-blue-700/40",
                "border-purple-300/50 dark:border-purple-700/40",
                "border-emerald-300/50 dark:border-emerald-700/40",
                "border-amber-300/50 dark:border-amber-700/40",
                "border-rose-300/50 dark:border-rose-700/40",
                "border-indigo-300/50 dark:border-indigo-700/40"
              ];

              return (
                <div
                  key={i}
                  className="group relative bg-white/60 dark:bg-zinc-900/40 backdrop-blur-sm border border-zinc-200/60 dark:border-zinc-800/50 rounded-2xl p-8 hover:border-transparent hover:shadow-2xl hover:shadow-zinc-300/40 dark:hover:shadow-zinc-950/60 hover:-translate-y-2 transition-all duration-500"
                >
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 ${gradients[i % gradients.length]} opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-500 pointer-events-none`} />

                  <div className="relative z-10">
                    {/* Number badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-black text-lg text-white bg-gradient-to-br ${gradients[i % gradients.length].split(" ")[0]} ${gradients[i % gradients.length].split(" ")[1]}`}>
                        {i + 1}
                      </div>
                      <div className={`w-2 h-2 rounded-full ${gradients[i % gradients.length].split(" ")[0].replace("from-", "bg-")} animate-pulse`} />
                    </div>

                    <h3 className="text-xl font-black text-zinc-900 dark:text-white mb-4 group-hover:scale-105 transition-transform duration-300">
                      {item.principle}
                    </h3>

                    <p className="text-zinc-700 dark:text-zinc-300 text-sm leading-relaxed group-hover:text-zinc-900 dark:group-hover:text-white transition-colors duration-300">
                      {item.note}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className={`absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none`}>
                    <div className={`absolute top-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br ${gradients[i % gradients.length].split(" ")[0]} opacity-30`} />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── TIMELINE SECTION ─── */}
      <div className="border-b border-zinc-200 dark:border-zinc-900">
        <Timeline />
      </div>

      {/* ─── WRITING / NOTES SECTION ─── */}
      <section id="writing" className="py-32 px-6 border-b border-zinc-200 dark:border-zinc-900 bg-gradient-to-b from-zinc-100/50 to-white dark:from-zinc-950/60 dark:to-zinc-950 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-64 h-64 rounded-full bg-indigo-500/15 dark:bg-indigo-500/5 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-56 h-56 rounded-full bg-pink-500/12 dark:bg-pink-500/4 blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-pink-50 to-rose-50 dark:from-pink-950/30 dark:to-rose-950/20 border border-pink-200/40 dark:border-pink-800/30 mb-4">
              <BookOpen size={14} className="text-pink-600 dark:text-pink-400" />
              <p className="text-xs font-mono text-pink-700 dark:text-pink-300 uppercase tracking-wider font-semibold">Writing & Thoughts</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900 dark:text-white leading-[1.1] mb-5">
              Recent Ramblings & Insights
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
              Deep dives into systems architecture, AI engineering, product thinking, and lessons learned from shipping real software.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Article 1 */}
            <div className="group relative bg-white dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/50 rounded-2xl p-8 hover:border-indigo-300/60 dark:hover:border-indigo-700/50 hover:shadow-2xl hover:shadow-indigo-300/20 dark:hover:shadow-indigo-950/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Systems Engineering
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                </div>

                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors duration-300">
                  Optimizing Next.js SSR for Global Edge Deliveries
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  An in-depth look at caching models, stale-while-revalidate configurations, and Edge runtime database optimizations for sub-100ms response times globally.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-20 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                      <div className="w-[75%] h-full bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 ml-1">75%</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Article 2 */}
            <div className="group relative bg-white dark:bg-zinc-900/60 border border-zinc-200/60 dark:border-zinc-800/50 rounded-2xl p-8 hover:border-pink-300/60 dark:hover:border-pink-700/50 hover:shadow-2xl hover:shadow-pink-300/20 dark:hover:shadow-pink-950/30 hover:-translate-y-2 transition-all duration-500 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-pink-500 via-rose-500 to-red-500" />
              <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-pink-500/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 text-[10px] font-mono font-semibold text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
                    Artificial Intelligence
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-pink-500 animate-pulse" />
                </div>

                <h4 className="text-xl font-bold text-zinc-900 dark:text-white mb-3 group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors duration-300">
                  Building Task Loops with Model Context Protocols
                </h4>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-6">
                  Exploring agentic integrations, context optimization strategies, system action validation guards, and building reliable autonomous agent workflows.
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-zinc-100 dark:border-zinc-800">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-500 to-rose-600 flex items-center justify-center">
                      <ArrowRight size={14} className="text-white" />
                    </div>
                    <span className="text-xs font-medium text-zinc-500 dark:text-zinc-500">Coming Soon</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <div className="w-20 h-1.5 rounded-full bg-zinc-200 dark:bg-zinc-700 overflow-hidden">
                      <div className="w-[60%] h-full bg-gradient-to-r from-pink-500 to-rose-500 rounded-full" />
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400 ml-1">60%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACT FOOTER ─── */}
      <footer id="contact" className="py-40 px-6 bg-gradient-to-b from-zinc-100 to-white dark:from-zinc-950 dark:to-zinc-950 relative overflow-hidden">
        {/* Ambient glow backgrounds */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-gradient-to-r from-blue-500/10 via-indigo-500/10 to-pink-500/10 dark:from-blue-500/3 dark:via-indigo-500/3 dark:to-pink-500/3 blur-3xl pointer-events-none" />

        <div className="max-w-4xl mx-auto text-center space-y-10 relative z-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gradient-to-r from-indigo-50 to-pink-50 dark:from-indigo-950/30 dark:to-pink-950/20 border border-indigo-200/40 dark:border-indigo-800/30 mb-6">
            <Sparkles size={14} className="text-indigo-600 dark:text-indigo-400" />
            <p className="text-xs font-mono text-indigo-700 dark:text-indigo-300 uppercase tracking-wider font-semibold">Get In Touch</p>
          </div>

          <h2 className="text-5xl md:text-7xl font-black tracking-tight leading-[1] bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 dark:from-white dark:via-zinc-200 dark:to-zinc-400 bg-clip-text text-transparent">
            Have an idea<br />worth building?
          </h2>

          <p className="text-zinc-700 dark:text-zinc-300 max-w-xl mx-auto text-lg leading-relaxed">
            I&apos;m always excited to discuss engineering challenges, AI workflows, systems design, and ambitious product ideas. Let&apos;s build something meaningful together.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-5 pt-4">
            <a
              href={`mailto:${siteConfig.email}`}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-zinc-900 to-zinc-800 dark:from-white dark:to-zinc-200 text-white dark:text-zinc-950 px-8 py-4 rounded-xl text-base font-bold hover:scale-105 active:scale-[0.98] transition-all duration-300 shadow-2xl shadow-zinc-900/20 dark:shadow-white/10"
            >
              <Mail size={20} />
              Say hello — email me
              <ArrowUpRight size={18} className="opacity-60" />
            </a>

            {siteConfig.github && (
              <a
                href={siteConfig.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 border-2 border-zinc-300 dark:border-zinc-700 bg-white/60 dark:bg-zinc-900/60 hover:bg-white dark:hover:bg-zinc-800 px-8 py-4 rounded-xl text-base font-bold text-zinc-800 dark:text-zinc-200 hover:border-zinc-400 dark:hover:border-zinc-600 active:scale-[0.98] transition-all duration-300 backdrop-blur-sm"
              >
                <Github size={20} />
                Connect on GitHub
              </a>
            )}
          </div>

          <div className="pt-20 flex flex-col sm:flex-row items-center justify-between gap-6 border-t border-zinc-200 dark:border-zinc-800/60">
            <p className="text-zinc-600 dark:text-zinc-500 text-sm">
              © {new Date().getFullYear()} <span className="font-semibold text-zinc-900 dark:text-zinc-300">Pranay Gupta</span>. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <a href={siteConfig.github} className="text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Github size={20} />
              </a>
              <a href={siteConfig.twitter} className="text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href={`mailto:${siteConfig.email}`} className="text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-white transition-colors">
                <Mail size={20} />
              </a>
            </div>
            <p className="font-mono text-xs text-zinc-400 dark:text-zinc-600">
              Built with Next.js 14 • TypeScript • Tailwind CSS
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
