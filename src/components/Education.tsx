import { education, volunteering } from "../data/resume";
import Section from "./Section";

const periodClass = "font-mono text-xs uppercase tracking-[0.14em] text-subtle";

const Education = () => (
  <Section id="education" title="Education">
    <ul className="space-y-8">
      {education.map((e) => (
        <li key={e.school} className="flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-6">
          <div>
            <h3 className="text-xl font-semibold text-ink">{e.school}</h3>
            <p className="mt-0.5 text-muted">{e.award}</p>
            {e.note && <p className="mt-0.5 text-sm text-subtle">{e.note}</p>}
          </div>
          <p className={`${periodClass} order-first shrink-0 sm:order-none sm:pt-2`}>{e.period}</p>
        </li>
      ))}
    </ul>

    <div className="mt-12 border-t border-line pt-8">
      <h3 className="font-mono text-xs uppercase tracking-[0.18em] text-ochre">Volunteering</h3>
      <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-between sm:gap-6">
        <div>
          <p className="text-lg font-semibold text-ink">{volunteering.title}</p>
          <p className="mt-0.5 text-accent">{volunteering.role}</p>
          <p className="mt-2 max-w-xl text-muted">{volunteering.summary}</p>
        </div>
        <p className={`${periodClass} order-first shrink-0 sm:order-none sm:pt-1.5`}>{volunteering.period}</p>
      </div>
    </div>
  </Section>
);

export default Education;
