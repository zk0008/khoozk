import { skillGroups } from "../data/resume";
import Section from "./Section";

const Skills = () => (
  <Section id="skills" title="Skills" lead="What I build with.">
    <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
      {skillGroups.map((g) => (
        <div key={g.label}>
          <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-subtle">{g.label}</h3>
          <ul className="mt-3 flex flex-wrap gap-2">
            {g.items.map((s) => (
              <li
                key={s}
                className="rounded-lg border border-line-strong bg-surface/70 px-3 py-1.5 text-sm text-ink/90"
              >
                {s}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </Section>
);

export default Skills;
