// Faint topographic lines behind the hero. Generated once at module load.

const W = 1440;
const H = 960;
const LINES = 16;
const ACCENT_LINE = 6;

function buildPaths() {
  const paths: string[] = [];
  for (let i = 0; i < LINES; i++) {
    const base = (H / (LINES + 1)) * (i + 1);
    let d = "";
    for (let x = 0; x <= W; x += 24) {
      const y =
        base +
        Math.sin(x / 260 + i * 0.55) * 34 +
        Math.sin(x / 113 + i * 1.7) * 9 +
        Math.sin(x / 640 - i * 0.35) * 52;
      d += `${x === 0 ? "M" : "L"}${x} ${y.toFixed(1)}`;
    }
    paths.push(d);
  }
  return paths;
}

const PATHS = buildPaths();

const Contours = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute inset-0 -z-10 h-full w-full [mask-image:radial-gradient(ellipse_at_70%_35%,black_15%,transparent_72%)]"
    viewBox={`0 0 ${W} ${H}`}
    preserveAspectRatio="xMidYMid slice"
    fill="none"
  >
    {PATHS.map((d, i) => (
      <path
        key={i}
        d={d}
        stroke={i === ACCENT_LINE ? "#B5701A" : "#45603A"}
        strokeOpacity={i === ACCENT_LINE ? 0.35 : 0.14}
        strokeWidth="1"
        vectorEffect="non-scaling-stroke"
      />
    ))}
  </svg>
);

export default Contours;
