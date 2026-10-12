import { useEffect, useRef, useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../data/resume";

// px from the top of the screen: the 64px nav bar plus a little room. A section that is
// jumped to lands with its top 32px from the top, comfortably above this line.
const ACTIVE_LINE = 112;

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Highlight the last section whose top has scrolled up to just under the nav bar.
  // Measuring from the top (not the middle of the screen) keeps short sections like
  // Skills highlighted after a jump, instead of the taller section below them.
  useEffect(() => {
    const ids = ["top", ...navLinks.map((l) => l.id)];
    let frame = 0;

    const update = () => {
      frame = 0;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= ACTIVE_LINE) current = id;
      }
      // at the very bottom of the page the last section wins
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
      if (atBottom) current = ids[ids.length - 1];
      setActive(current);
    };

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, []);

  // Escape closes the mobile menu and hands focus back to its button
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Escape") return;
      setMenuOpen(false);
      menuButton.current?.focus();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  const solid = scrolled || menuOpen;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300 ${
        solid ? "border-line bg-paper/90 backdrop-blur-md" : "border-transparent"
      }`}
    >
      <nav aria-label="Primary">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4 sm:px-6">
          <a
            href="#top"
            aria-label="Khoo Ze Kang, back to top"
            onClick={() => setMenuOpen(false)}
            className="font-wide inline-flex h-11 items-center rounded-lg text-lg font-extrabold tracking-tight"
          >
            K<span className="text-accent">/</span>K
          </a>

          {/* inline links from tablet up */}
          <ul className="hidden items-center sm:flex">
            {navLinks.map((l) => {
              const on = active === l.id;
              return (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    aria-current={on ? "true" : undefined}
                    className={`inline-flex h-11 items-center rounded-lg px-3 text-sm transition-colors ${
                      on
                        ? "text-ink underline decoration-ochre decoration-2 underline-offset-[10px]"
                        : "text-muted hover:text-ink"
                    }`}
                  >
                    {l.label}
                  </a>
                </li>
              );
            })}
          </ul>

          {/* phones get a menu button so links never get squeezed */}
          <button
            ref={menuButton}
            type="button"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((o) => !o)}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-line-strong px-3 text-sm text-ink transition-colors hover:border-subtle active:scale-[0.97] sm:hidden"
          >
            {menuOpen ? <X className="size-4" aria-hidden="true" /> : <Menu className="size-4" aria-hidden="true" />}
            Menu
          </button>
        </div>

        {menuOpen && (
          <ul
            id="mobile-menu"
            className="animate-[rise_0.3s_cubic-bezier(0.25,1,0.5,1)_both] border-t border-line px-4 pb-3 pt-1 motion-reduce:animate-none sm:hidden"
          >
            {navLinks.map((l) => {
              const on = active === l.id;
              return (
                <li key={l.id} className="border-b border-line last:border-b-0">
                  <a
                    href={`#${l.id}`}
                    aria-current={on ? "true" : undefined}
                    onClick={() => setMenuOpen(false)}
                    className={`flex h-12 items-center justify-between text-base ${on ? "text-ink" : "text-muted"}`}
                  >
                    {l.label}
                    {on && <span aria-hidden="true" className="size-1.5 rounded-full bg-ochre" />}
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Nav;
