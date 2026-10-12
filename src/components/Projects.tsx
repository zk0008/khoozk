import { useState } from "react";
import { projects, projectTags, type ProjectTag } from "../data/resume";
import { delay } from "../lib/style";
import Section from "./Section";

type Filter = "All" | ProjectTag;
const filters: Filter[] = ["All", ...projectTags];

const countFor = (f: Filter) =>
  f === "All" ? projects.length : projects.filter((p) => p.tags.includes(f)).length;

const Projects = () => {
  const [filter, setFilter] = useState<Filter>("All");
  const shown = filter === "All" ? projects : projects.filter((p) => p.tags.includes(filter));

  return (
    <Section id="projects" title="Projects" lead="Selected builds. Filter by what you're hiring for.">
      <div role="group" aria-label="Filter projects" className="flex flex-wrap gap-2">
        {filters.map((f) => {
          const on = filter === f;
          return (
            <button
              key={f}
              type="button"
              aria-pressed={on}
              onClick={() => setFilter(f)}
              className={`inline-flex h-11 items-center gap-2 rounded-lg border px-4 text-sm transition-colors duration-200 active:scale-[0.97] ${
                on
                  ? "border-accent bg-accent font-semibold text-paper"
                  : "border-line-strong text-muted hover:border-subtle hover:text-ink"
              }`}
            >
              {f}
              <span className={`font-mono text-xs ${on ? "text-paper/80" : "text-subtle"}`}>
                {countFor(f)}
              </span>
            </button>
          );
        })}
      </div>

      {/* re-keying on filter replays the staggered entrance */}
      <ul key={filter} className="mt-8 grid gap-4 md:grid-cols-2">
        {shown.map((p, i) => (
          <li key={p.name} className="rise" style={delay(i * 60)}>
            <article className="flex h-full flex-col rounded-lg border border-line bg-surface/70 p-5 sm:p-6">
              <p className="flex justify-between gap-4 font-mono text-xs uppercase tracking-[0.14em] text-subtle">
                <span>{p.kind}</span>
                <span>{p.year}</span>
              </p>
              <h3 className="mt-3 text-xl font-semibold text-ink">{p.name}</h3>
              <p className="mt-2 flex-1 text-muted">{p.blurb}</p>
              <p className="mt-5 font-mono text-xs text-accent">{p.stack.join("  /  ")}</p>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Projects;
