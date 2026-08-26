import { timeline } from "@/data/portfolioData";

export function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6 max-w-5xl mx-auto">
      {/* Heading */}
      <div className="mb-16 text-center">
        <p className="text-xs font-mono text-zinc-500 dark:text-zinc-500 uppercase tracking-widest mb-3">
          Journey
        </p>
        <h2 className="text-4xl font-bold text-zinc-900 dark:text-zinc-100">
          My Path
        </h2>
        <p className="mt-4 text-zinc-600 dark:text-zinc-400 max-w-xl mx-auto">
          Key milestones in my engineering journey — from first lines of code to
          building AI systems.
        </p>
      </div>

      {/* Modern Card Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
        {timeline.map((milestone, i) => (
          <div
            key={i}
            className="group relative p-6 rounded-xl bg-white dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 transition-all duration-300 hover:shadow-lg dark:hover:shadow-zinc-950/50"
          >
            {/* Card number badge */}
            <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-600 flex items-center justify-center text-white text-xs font-bold shadow-lg">
              {i + 1}
            </div>

            {/* Era title */}
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 mb-3 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
              {milestone.era}
            </h3>

            {/* Detail */}
            <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
              {milestone.detail}
            </p>

            {/* Decorative gradient line */}
            <div className="mt-4 h-1 w-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
        ))}
      </div>
    </section>
  );
}
