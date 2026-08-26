"use client";

import { useState } from "react";
import { ExternalLink, Github } from "lucide-react";
import { projects, type ProjectCategory } from "@/data/portfolioData";

const categories: { label: string; value: ProjectCategory | "All" }[] = [
  { label: "All", value: "All" },
  { label: "AI", value: "AI" },
  { label: "SaaS", value: "SaaS" },
  { label: "Dev Tools", value: "Dev Tools" },
  { label: "Infrastructure", value: "Infrastructure" },
  { label: "Experiments", value: "Experiments" },
];

const statusStyles: Record<string, string> = {
  "active":    "bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border-emerald-200 dark:border-emerald-800",
  "building":  "bg-amber-100 dark:bg-amber-950 text-amber-700 dark:text-amber-400 border-amber-200 dark:border-amber-800",
  "shipped":   "bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-400 border-blue-200 dark:border-blue-800",
  "archived":  "bg-zinc-100 dark:bg-zinc-900 text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-700",
};

export function ProjectShowcase() {
  const [active, setActive] = useState<ProjectCategory | "All">("All");

  const filtered =
    active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="projects" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="mb-12">
        <p className="text-xs font-mono text-zinc-500 uppercase tracking-widest mb-3">Projects</p>
        <h2 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100">Things I&apos;ve built</h2>
        <p className="mt-3 text-zinc-600 dark:text-zinc-400 max-w-lg">
          A mix of experiments, tools, and products — some shipped, some still baking.
        </p>
      </div>

      {/* Filter pills */}
      <div className="flex flex-wrap gap-2 mb-10" role="tablist" aria-label="Filter projects by category">
        {categories.map((cat) => (
          <button
            key={cat.value}
            role="tab"
            aria-selected={active === cat.value}
            onClick={() => setActive(cat.value)}
            className={`px-3.5 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 ${
              active === cat.value
                ? "bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 border-zinc-900 dark:border-zinc-100"
                : "bg-transparent text-zinc-500 dark:text-zinc-400 border-zinc-200 dark:border-zinc-800 hover:border-zinc-400 dark:hover:border-zinc-600 hover:text-zinc-900 dark:hover:text-zinc-200"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {filtered.map((project) => (
          <article
            key={project.id}
            className="group relative bg-zinc-100 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 rounded-xl p-6 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-200 dark:hover:bg-zinc-900 transition-all duration-300"
          >
            {/* Top row */}
            <div className="flex items-start justify-between gap-4 mb-4">
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-zinc-900 dark:text-zinc-100 font-semibold text-[15px]">{project.title}</h3>
                  {project.featured && (
                    <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/60 border border-blue-200 dark:border-blue-900 px-1.5 py-0.5 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <span
                  className={`inline-flex items-center px-2 py-0.5 rounded text-[11px] font-mono border ${
                    statusStyles[project.status] ?? statusStyles["archived"]
                  }`}
                >
                  {project.status}
                </span>
              </div>

              {/* Action links */}
              <div className="flex items-center gap-2 shrink-0">
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} GitHub repository`}
                    className="p-1.5 rounded-md text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <Github size={15} />
                  </a>
                )}
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${project.title} live project`}
                    className="p-1.5 rounded-md text-zinc-400 dark:text-zinc-600 hover:text-zinc-700 dark:hover:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>
            </div>

            {/* Description */}
            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-5">{project.description}</p>

            {/* Tags */}
            <div className="flex flex-wrap gap-1.5">
              {project.tags.slice(0, 5).map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-0.5 rounded text-[11px] font-mono text-zinc-500 bg-zinc-200 dark:bg-zinc-800/70 border border-zinc-200 dark:border-zinc-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>

      {filtered.length === 0 && (
        <p className="text-center text-zinc-400 dark:text-zinc-600 py-16">No projects in this category yet.</p>
      )}
    </section>
  );
}
