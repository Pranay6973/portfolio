"use client";

import React, { useState, useEffect } from "react";
import { Terminal, Shield, RefreshCw } from "lucide-react";

interface Token {
  text: string;
  className: string;
}

interface TerminalLine {
  type: "command" | "code" | "info" | "empty" | "success" | "warn" | "output";
  prefix?: string;
  lineNo?: number;
  tokens: Token[];
  delay: number;
}

const lines: TerminalLine[] = [
  {
    type: "command",
    prefix: "$",
    tokens: [
      {
        text: "whoami",
        className: "text-zinc-800 dark:text-zinc-300 font-semibold",
      },
    ],
    delay: 50,
  },
  {
    type: "output",
    prefix: ">",
    tokens: [
      {
        text: "Pranay Gupta",
        className: "text-purple-600 dark:text-purple-400 font-bold",
      },
    ],
    delay: 250,
  },
  {
    type: "empty",
    tokens: [],
    delay: 350,
  },
  {
    type: "command",
    prefix: "$",
    tokens: [
      {
        text: "cat role.txt",
        className: "text-zinc-800 dark:text-zinc-300 font-semibold",
      },
    ],
    delay: 500,
  },
  {
    type: "output",
    prefix: ">",
    tokens: [
      {
        text: "Developer & AI Engineer",
        className: "text-emerald-600 dark:text-emerald-400 font-medium",
      },
    ],
    delay: 700,
  },
  {
    type: "empty",
    tokens: [],
    delay: 800,
  },
  {
    type: "command",
    prefix: "$",
    tokens: [
      {
        text: "cat focus.txt",
        className: "text-zinc-800 dark:text-zinc-300 font-semibold",
      },
    ],
    delay: 950,
  },
  {
    type: "output",
    prefix: ">",
    tokens: [
      {
        text: "Building software, AI systems, developer tools, and products.",
        className: "text-sky-600 dark:text-sky-400",
      },
    ],
    delay: 1150,
  },
  {
    type: "empty",
    tokens: [],
    delay: 1250,
  },
  {
    type: "success",
    prefix: "✔",
    tokens: [
      { text: "System ready.", className: "text-zinc-500 dark:text-zinc-400" },
    ],
    delay: 1400,
  },
];

export function CommandTerminal() {
  const [visible, setVisible] = useState(0);
  const [sessionCount, setSessionCount] = useState(1);

  useEffect(() => {
    const timers = lines.map((_, i) =>
      setTimeout(() => setVisible(i + 1), lines[i].delay),
    );
    return () => timers.forEach(clearTimeout);
  }, [sessionCount]);

  const handleRestart = () => {
    setVisible(0);
    setTimeout(() => {
      setSessionCount((prev) => prev + 1);
    }, 50);
  };

  return (
    <div className="relative mt-8 w-full max-w-2xl mx-auto">
      {/* Glow effect */}
      <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-indigo-500/10 dark:from-indigo-500/25 via-violet-500/5 dark:via-violet-500/10 to-transparent blur-md pointer-events-none" />

      {/* Terminal Window with small dimension and fully dynamic light/dark styling */}
      <div className="relative bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800/90 rounded-xl overflow-hidden shadow-2xl dark:shadow-zinc-950/50">
        {/* Title bar */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-zinc-900/50">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <span className="w-3 h-3 rounded-full bg-red-400/90 dark:bg-red-500/80 border border-red-500/30 dark:border-red-600/30" />
              <span className="w-3 h-3 rounded-full bg-amber-400/90 dark:bg-amber-500/80 border border-amber-500/30 dark:border-amber-600/30" />
              <span className="w-3 h-3 rounded-full bg-emerald-400/90 dark:bg-emerald-500/80 border border-emerald-500/30 dark:border-emerald-600/30" />
            </div>
            <div className="flex items-center gap-1.5 ml-3 text-zinc-400 dark:text-zinc-500">
              <Terminal size={12} className="stroke-[2.5px]" />
              <span className="text-[11px] font-mono leading-none select-none text-zinc-500 dark:text-zinc-500">
                ~/pranay/system — tsx
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4 text-xs font-mono">
            <div className="hidden sm:flex items-center gap-1.5 text-zinc-500 dark:text-zinc-600 select-none">
              <Shield size={11} />
              <span>TLS 1.3 Secure</span>
            </div>
            <button
              onClick={handleRestart}
              className="flex items-center gap-1 text-zinc-500 dark:text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors cursor-pointer select-none"
              title="Restart Terminal Stream"
            >
              <RefreshCw
                size={11}
                className={visible < lines.length ? "animate-spin" : ""}
              />
              <span>Rerun</span>
            </button>
          </div>
        </div>

        {/* Code body (White background in light mode, dark in dark mode. Height adjusted to 320px for a 'small' look) */}
        <div className="p-5 font-mono text-[12px] leading-relaxed text-zinc-600 dark:text-zinc-400 select-all overflow-hidden text-left min-h-[320px] max-h-[320px]">
          {lines.slice(0, visible).map((line, i) => {
            if (line.type === "empty") return <div key={i} className="h-3.5" />;

            if (line.type === "command") {
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 select-text py-0.5 mt-2 mb-2"
                >
                  <span className="text-indigo-500 dark:text-indigo-400 font-bold select-none">
                    {line.prefix}
                  </span>
                  <span className="flex gap-1">
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={tok.className}>
                        {tok.text}
                      </span>
                    ))}
                  </span>
                </div>
              );
            }

            if (
              line.type === "info" ||
              line.type === "success" ||
              line.type === "output" ||
              line.type === "warn"
            ) {
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 select-text py-0.5 border-l-2 border-zinc-200 dark:border-zinc-900 pl-2 mt-1"
                >
                  <span className="text-zinc-400 dark:text-zinc-600 font-semibold select-none text-[10.5px] uppercase tracking-wider min-w-[48px]">
                    {line.prefix}
                  </span>
                  <span className="flex flex-wrap gap-0.5">
                    {line.tokens.map((tok, j) => (
                      <span key={j} className={tok.className}>
                        {tok.text}
                      </span>
                    ))}
                  </span>
                </div>
              );
            }

            // Code lines with numbers
            return (
              <div
                key={i}
                className="flex items-start select-text py-0.5 hover:bg-zinc-100 dark:hover:bg-zinc-900/40 -mx-5 px-5"
              >
                <span className="text-zinc-400 dark:text-zinc-700 text-[10px] mr-4 mt-0.5 select-none w-5 text-right font-light">
                  {line.lineNo}
                </span>
                <span className="flex flex-wrap gap-0">
                  {line.tokens.map((tok, j) => (
                    <span key={j} className={tok.className}>
                      {tok.text}
                    </span>
                  ))}
                </span>
              </div>
            );
          })}

          {/* Cursor block */}
          {visible > 0 && (
            <div className="flex items-center py-0.5 pl-5 -mx-5 mt-1">
              {visible < lines.length && lines[visible].type === "code" ? (
                <span className="text-zinc-400 dark:text-zinc-700 text-[10px] mr-4 select-none w-5 text-right font-light">
                  {lines[visible].lineNo}
                </span>
              ) : (
                <span className="text-zinc-400 dark:text-zinc-700 text-[10px] mr-4 select-none w-5 text-right font-light">
                  &nbsp;
                </span>
              )}
              <span className="w-[7px] h-[14px] bg-indigo-500 dark:bg-indigo-400 opacity-80 animate-pulse inline-block" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
