import { useCallback, useEffect, useRef, useState } from "react";

// "Bug Hunt": fireflies drift around the hero; catching one reveals the next fact.
// Everything per-frame lives in refs so React only re-renders when the score changes.

export type HuntState = {
  caught: number;
  total: number;
  lastFact: string | null;
  finishedIn: number | null;
  best: number | null;
};

type Bug = {
  x: number;
  y: number;
  vx: number;
  vy: number;
  heading: number;
  speed: number;
  phase: number;
  rate: number;
  caught: boolean;
};

type Burst = { x: number; y: number; born: number };

const BEST_KEY = "kzk-bughunt-best";
const AMBER = "214, 138, 24"; // halo and burst colour
const CORE = "138, 82, 16"; // matches the ochre text colour
const FLEE_RADIUS = 120;
const FLEE_FORCE = 420;
const MAX_SPEED = 240;
const EDGE = 36;
const TOP_EDGE = 76; // keeps bugs out from under the fixed nav
const BURST_MS = 650;
const GLOW_RADIUS = 24;

const clamp = (v: number, lo: number, hi: number) => Math.min(hi, Math.max(lo, v));

function readBest(): number | null {
  try {
    const n = Number(localStorage.getItem(BEST_KEY));
    return n > 0 ? n : null;
  } catch {
    return null;
  }
}

function writeBest(seconds: number) {
  try {
    localStorage.setItem(BEST_KEY, String(seconds));
  } catch {
    // storage can be blocked (private mode); the best time just isn't remembered
  }
}

function makeBug(w: number, h: number): Bug {
  return {
    x: EDGE + Math.random() * Math.max(1, w - EDGE * 2),
    y: TOP_EDGE + Math.random() * Math.max(1, h - TOP_EDGE - EDGE),
    vx: 0,
    vy: 0,
    heading: Math.random() * Math.PI * 2,
    speed: 18 + Math.random() * 16,
    phase: Math.random() * Math.PI * 2,
    rate: 1.2 + Math.random() * 1.4,
    caught: false,
  };
}

export function useBugHunt(facts: readonly string[], onWin?: (seconds: number) => void) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const bugsRef = useRef<Bug[]>([]);
  const burstsRef = useRef<Burst[]>([]);
  const sizeRef = useRef({ w: 0, h: 0 });
  const startRef = useRef<number | null>(null);
  const bestRef = useRef<number | null>(readBest());
  const onWinRef = useRef(onWin);
  const total = facts.length;

  const [state, setState] = useState<HuntState>(() => ({
    caught: 0,
    total,
    lastFact: null,
    finishedIn: null,
    best: bestRef.current,
  }));

  useEffect(() => {
    onWinRef.current = onWin;
  }, [onWin]);

  const spawn = useCallback(() => {
    const { w, h } = sizeRef.current;
    bugsRef.current = Array.from({ length: total }, () => makeBug(w, h));
  }, [total]);

  const reset = useCallback(() => {
    spawn();
    burstsRef.current = [];
    startRef.current = null;
    setState((s) => ({ ...s, caught: 0, lastFact: null, finishedIn: null }));
  }, [spawn]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const area = canvas?.parentElement;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !area || !ctx) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    let pointer: { x: number; y: number } | null = null;
    let raf = 0;
    let last = 0;
    let inView = true;

    const draw = (now: number) => {
      const { w, h } = sizeRef.current;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, w, h);

      // soft lantern light that follows the mouse
      if (pointer) {
        const g = ctx.createRadialGradient(pointer.x, pointer.y, 0, pointer.x, pointer.y, 240);
        g.addColorStop(0, "rgba(255, 251, 240, 0.6)");
        g.addColorStop(1, "rgba(255, 251, 240, 0)");
        ctx.fillStyle = g;
        ctx.fillRect(pointer.x - 240, pointer.y - 240, 480, 480);
      }

      const t = now / 1000;
      for (const b of bugsRef.current) {
        if (b.caught) continue;
        const glow = reduced ? 0.85 : 0.55 + 0.45 * Math.sin(t * b.rate + b.phase);
        const halo = ctx.createRadialGradient(b.x, b.y, 0, b.x, b.y, GLOW_RADIUS);
        halo.addColorStop(0, `rgba(${AMBER}, ${0.7 * glow})`);
        halo.addColorStop(0.4, `rgba(${AMBER}, ${0.26 * glow})`);
        halo.addColorStop(1, `rgba(${AMBER}, 0)`);
        ctx.fillStyle = halo;
        ctx.beginPath();
        ctx.arc(b.x, b.y, GLOW_RADIUS, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = `rgba(${CORE}, ${0.75 + 0.25 * glow})`;
        ctx.beginPath();
        ctx.arc(b.x, b.y, 2.6, 0, Math.PI * 2);
        ctx.fill();
      }

      burstsRef.current = burstsRef.current.filter((burst) => now - burst.born < BURST_MS);
      ctx.lineWidth = 1.5;
      for (const burst of burstsRef.current) {
        // a frame's timestamp can predate the tap that made the burst, so never let progress go negative
        const p = Math.max(0, (now - burst.born) / BURST_MS);
        const e = 1 - Math.pow(1 - p, 3);
        ctx.strokeStyle = `rgba(${AMBER}, ${1 - p})`;
        ctx.beginPath();
        ctx.arc(burst.x, burst.y, 4 + e * 30, 0, Math.PI * 2);
        ctx.stroke();
        for (let k = 0; k < 8; k++) {
          const a = (k / 8) * Math.PI * 2;
          const r1 = 8 + e * 18;
          const r2 = 12 + e * 26;
          ctx.beginPath();
          ctx.moveTo(burst.x + Math.cos(a) * r1, burst.y + Math.sin(a) * r1);
          ctx.lineTo(burst.x + Math.cos(a) * r2, burst.y + Math.sin(a) * r2);
          ctx.stroke();
        }
      }
    };

    const step = (dt: number) => {
      const { w, h } = sizeRef.current;
      const ease = Math.min(1, dt * 1.5);
      for (const b of bugsRef.current) {
        if (b.caught) continue;

        // lazy wander
        b.heading += (Math.random() - 0.5) * 3 * dt;
        b.vx += (Math.cos(b.heading) * b.speed - b.vx) * ease;
        b.vy += (Math.sin(b.heading) * b.speed - b.vy) * ease;

        // dart away from the cursor (mouse only, so touch players get a fair chance)
        if (pointer) {
          const dx = b.x - pointer.x;
          const dy = b.y - pointer.y;
          const d = Math.hypot(dx, dy);
          if (d > 0.5 && d < FLEE_RADIUS) {
            const push = (1 - d / FLEE_RADIUS) * FLEE_FORCE * dt;
            b.vx += (dx / d) * push;
            b.vy += (dy / d) * push;
          }
        }

        // steer back in from the edges
        if (b.x < EDGE) b.vx += (EDGE - b.x) * 6 * dt;
        if (b.x > w - EDGE) b.vx -= (b.x - (w - EDGE)) * 6 * dt;
        if (b.y < TOP_EDGE) b.vy += (TOP_EDGE - b.y) * 6 * dt;
        if (b.y > h - EDGE) b.vy -= (b.y - (h - EDGE)) * 6 * dt;

        const speed = Math.hypot(b.vx, b.vy);
        if (speed > MAX_SPEED) {
          b.vx *= MAX_SPEED / speed;
          b.vy *= MAX_SPEED / speed;
        }
        b.x = clamp(b.x + b.vx * dt, 8, w - 8);
        b.y = clamp(b.y + b.vy * dt, 8, h - 8);
      }
    };

    const resize = () => {
      const { width, height } = area.getBoundingClientRect();
      sizeRef.current = { w: width, h: height };
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      if (bugsRef.current.length === 0) {
        spawn();
      } else {
        for (const b of bugsRef.current) {
          b.x = clamp(b.x, EDGE, width - EDGE);
          b.y = clamp(b.y, TOP_EDGE, height - EDGE);
        }
      }
      draw(performance.now());
    };

    const frame = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      if (!reduced) step(dt);
      draw(now);
      raf = requestAnimationFrame(frame);
    };

    // only animate while the hero is on screen and the tab is visible
    const sync = () => {
      const run = inView && !document.hidden;
      if (run && !raf) {
        last = performance.now();
        raf = requestAnimationFrame(frame);
      } else if (!run && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const toLocal = (e: PointerEvent) => {
      const r = canvas.getBoundingClientRect();
      return { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    const onMove = (e: PointerEvent) => {
      pointer = e.pointerType === "mouse" ? toLocal(e) : null;
    };

    const onLeave = () => {
      pointer = null;
    };

    const onDown = (e: PointerEvent) => {
      // links and buttons in the hero keep working normally
      if (e.target instanceof Element && e.target.closest("a, button")) return;

      const p = toLocal(e);
      let hit: Bug | null = null;
      let nearest = e.pointerType === "mouse" ? 30 : 40;
      for (const b of bugsRef.current) {
        if (b.caught) continue;
        const d = Math.hypot(b.x - p.x, b.y - p.y);
        if (d < nearest) {
          nearest = d;
          hit = b;
        }
      }
      if (!hit) return;

      hit.caught = true;
      const now = performance.now();
      if (!reduced) burstsRef.current.push({ x: hit.x, y: hit.y, born: now });
      if (startRef.current === null) startRef.current = now;

      const caught = bugsRef.current.filter((b) => b.caught).length;
      const lastFact = facts[caught - 1] ?? null;
      if (caught < total) {
        setState((s) => ({ ...s, caught, lastFact }));
        return;
      }

      const finishedIn = (now - startRef.current) / 1000;
      const best = bestRef.current === null ? finishedIn : Math.min(bestRef.current, finishedIn);
      bestRef.current = best;
      writeBest(best);
      setState((s) => ({ ...s, caught, lastFact, finishedIn, best }));
      onWinRef.current?.(finishedIn);
    };

    const ro = new ResizeObserver(resize);
    ro.observe(area);
    const io = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    io.observe(area);
    document.addEventListener("visibilitychange", sync);
    area.addEventListener("pointermove", onMove);
    area.addEventListener("pointerleave", onLeave);
    area.addEventListener("pointerdown", onDown);
    resize();
    sync();

    return () => {
      cancelAnimationFrame(raf);
      raf = 0;
      ro.disconnect();
      io.disconnect();
      document.removeEventListener("visibilitychange", sync);
      area.removeEventListener("pointermove", onMove);
      area.removeEventListener("pointerleave", onLeave);
      area.removeEventListener("pointerdown", onDown);
    };
  }, [facts, total, spawn]);

  return { canvasRef, state, reset };
}
