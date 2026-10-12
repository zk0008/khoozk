import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Copy, Github, Linkedin } from "lucide-react";
import { profile } from "../data/resume";

const linkBtn =
  "inline-flex h-12 items-center gap-2 rounded-lg border border-line-strong px-4 text-ink transition duration-150 hover:-translate-y-px hover:border-subtle hover:bg-surface active:scale-[0.97]";

const Contact = ({ huntTime }: { huntTime: number | null }) => {
  const [copied, setCopied] = useState(false);
  const timer = useRef<number>();

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard can be unavailable; the mailto link is still right there
    }
  };

  return (
    <footer id="contact" aria-labelledby="contact-title" className="scroll-mt-8 border-t border-line">
      <div className="contact-screen mx-auto flex max-w-6xl flex-col px-4 pb-10 pt-16 sm:px-6">
        <div data-reveal className="mb-16">
          <h2
            id="contact-title"
            className="font-wide max-w-4xl text-[clamp(2.25rem,7vw,4.75rem)] font-extrabold leading-[0.95] tracking-tight"
          >
            Hiring a software engineer?
          </h2>
          <p className="mt-5 max-w-xl text-lg text-muted">
            I'm open to software engineering roles. Email is the quickest way to reach me.
          </p>
          {huntTime !== null && (
            <p className="mt-3 font-mono text-sm text-ochre">
              You fixed every bug in {huntTime.toFixed(1)}s. Imagine what we could fix together.
            </p>
          )}

          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-3">
            <a
              href={`mailto:${profile.email}`}
              className="group inline-flex items-center gap-2 break-all text-2xl font-semibold text-ink underline decoration-accent decoration-2 underline-offset-8 transition-colors hover:text-accent sm:text-3xl"
            >
              {profile.email}
              <ArrowUpRight
                className="size-6 shrink-0 transition-transform duration-150 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </a>
            <button
              type="button"
              onClick={copyEmail}
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-line-strong px-3 text-sm text-muted transition-colors hover:border-subtle hover:text-ink active:scale-[0.97]"
            >
              {copied ? (
                <Check className="size-4 text-accent" aria-hidden="true" />
              ) : (
                <Copy className="size-4" aria-hidden="true" />
              )}
              <span aria-live="polite">{copied ? "Copied" : "Copy email"}</span>
            </button>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className={linkBtn}>
              <Linkedin className="size-5" aria-hidden="true" />
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className={linkBtn}>
              <Github className="size-5" aria-hidden="true" />
              GitHub
            </a>
          </div>
        </div>

        <div className="mt-auto flex flex-col justify-between gap-2 border-t border-line pt-6 font-mono text-xs text-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} {profile.fullName}</p>
          <p>Designed and built in Singapore</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
