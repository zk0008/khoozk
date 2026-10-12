import { useState } from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { bugFacts, profile, stats } from "../data/resume";
import { useBugHunt } from "../game/useBugHunt";
import { delay } from "../lib/style";
import BugHuntHud from "./BugHuntHud";
import Contours from "./Contours";

const secondaryBtn =
  "inline-flex h-12 min-w-12 items-center justify-center gap-2 rounded-lg border border-line-strong px-3.5 text-ink transition duration-150 hover:-translate-y-px hover:border-subtle hover:bg-surface active:scale-[0.97] sm:px-4";

const Hero = ({ onWin }: { onWin: (seconds: number) => void }) => {
  const { canvasRef, state, reset } = useBugHunt(bugFacts, onWin);
  const [coarsePointer] = useState(() => window.matchMedia("(pointer: coarse)").matches);

  return (
    <section id="top" aria-label="Introduction" className="relative isolate overflow-hidden">
      <Contours />
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full"
      />

      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col px-4 pb-10 pt-28 sm:px-6 sm:pt-36">
        <div className="flex-1">
          <p className="rise font-mono text-xs uppercase tracking-[0.2em] text-muted">
            Software engineer · Singapore
          </p>
          <h1
            className="rise font-wide mt-4 text-[clamp(3.25rem,16vw,9.5rem)] font-extrabold leading-[0.9] tracking-tight"
            style={delay(80)}
          >
            Ze Kang
          </h1>
          <p className="rise mt-6 max-w-2xl text-xl leading-snug text-ink sm:text-2xl" style={delay(160)}>
            I build full-stack products and AI pipelines that make it to production.
          </p>
          <p className="rise mt-3 max-w-2xl text-muted" style={delay(220)}>
            Computer Science at NTU. Comfortable across the stack, from data models to mobile apps.
          </p>

          <div className="rise mt-8 flex flex-wrap items-center gap-3" style={delay(300)}>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex h-12 items-center gap-2 rounded-lg bg-accent px-5 font-semibold text-paper transition duration-150 hover:-translate-y-px hover:bg-accent-hover active:scale-[0.97]"
            >
              <Mail className="size-5" aria-hidden="true" />
              Email me
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn (opens in a new tab)"
              className={secondaryBtn}
            >
              <Linkedin className="size-5" aria-hidden="true" />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub (opens in a new tab)"
              className={secondaryBtn}
            >
              <Github className="size-5" aria-hidden="true" />
              <span className="hidden sm:inline">GitHub</span>
            </a>
          </div>

          <BugHuntHud state={state} coarsePointer={coarsePointer} onReset={reset} />
        </div>

        <dl
          className="rise mt-14 grid gap-px overflow-hidden rounded-lg border border-line bg-line sm:grid-cols-3"
          style={delay(520)}
        >
          {stats.map((s) => (
            <div
              key={s.value}
              className="flex items-baseline gap-4 bg-paper/90 px-4 py-4 sm:flex-col sm:gap-1 sm:px-5 sm:py-5"
            >
              <dt className="order-2 text-sm text-muted sm:order-none">{s.label}</dt>
              <dd className="font-wide order-1 min-w-[5.5rem] text-2xl font-extrabold text-ochre sm:order-first sm:text-3xl">
                {s.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
