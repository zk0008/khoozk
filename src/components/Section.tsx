import type { ReactNode } from "react";
import { delay } from "../lib/style";

type Props = {
  id: string;
  title: string;
  lead?: string;
  children: ReactNode;
};

// Shared section shell: title column sticks on the left on large screens, stacks on mobile.
const Section = ({ id, title, lead, children }: Props) => (
  <section id={id} aria-labelledby={`${id}-title`} className="scroll-mt-8 border-t border-line">
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[17rem_1fr] lg:gap-16">
      <header data-reveal className="lg:sticky lg:top-24 lg:self-start">
        <h2 id={`${id}-title`} className="font-wide text-3xl font-extrabold tracking-tight sm:text-4xl">
          {title}
        </h2>
        {lead && <p className="mt-3 max-w-sm text-muted">{lead}</p>}
      </header>
      <div data-reveal style={delay(100)}>
        {children}
      </div>
    </div>
  </section>
);

export default Section;
