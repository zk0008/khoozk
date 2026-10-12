import { useId, useState } from "react";
import { Plus } from "lucide-react";
import { roles, type Role } from "../data/resume";
import Section from "./Section";

const RoleItem = ({ role, latest }: { role: Role; latest: boolean }) => {
  const [open, setOpen] = useState(latest);
  const panelId = useId();

  return (
    <li className="relative pb-12 pl-7 last:pb-0 sm:pl-9">
      <span
        aria-hidden="true"
        className={`absolute -left-[5px] top-[5px] size-[9px] rounded-full ring-4 ${
          latest ? "bg-ochre ring-ochre/20" : "bg-line-strong ring-paper"
        }`}
      />
      <p className="font-mono text-xs uppercase tracking-[0.14em] text-subtle">{role.period}</p>
      <h3 className="mt-2 text-xl font-semibold text-ink sm:text-2xl">{role.title}</h3>
      <p className="mt-0.5 text-accent">{role.company}</p>
      <p className="mt-3 max-w-2xl text-ink/85">{role.summary}</p>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-controls={panelId}
        className="group -ml-2 mt-2 inline-flex h-11 items-center gap-2 rounded-lg px-2 text-sm text-muted transition-colors hover:text-ink"
      >
        <span className="grid size-6 place-items-center rounded-md border border-line-strong transition-colors group-hover:border-subtle">
          <Plus
            className={`size-3.5 transition-transform duration-300 ease-quart ${open ? "rotate-45" : ""}`}
            aria-hidden="true"
          />
        </span>
        {open ? "Hide highlights" : `Show highlights (${role.highlights.length})`}
      </button>

      <div
        id={panelId}
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-500 ease-quart ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <ul className="max-w-2xl space-y-2.5 pb-1 pt-2 text-muted">
            {role.highlights.map((h) => (
              <li key={h} className="flex gap-3">
                <span aria-hidden="true" className="mt-[0.7em] h-px w-3 shrink-0 bg-accent" />
                <span>{h}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};

const Experience = () => (
  <Section id="experience" title="Experience" lead="From clean rooms to LLM pipelines.">
    <ol className="relative ml-1 border-l border-line-strong">
      {roles.map((role, i) => (
        <RoleItem key={role.company} role={role} latest={i === 0} />
      ))}
    </ol>
  </Section>
);

export default Experience;
