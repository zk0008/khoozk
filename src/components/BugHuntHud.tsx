import { ArrowRight, RotateCcw } from "lucide-react";
import type { HuntState } from "../game/useBugHunt";
import { delay } from "../lib/style";

type Props = {
  state: HuntState;
  coarsePointer: boolean;
  onReset: () => void;
};

const BugHuntHud = ({ state, coarsePointer, onReset }: Props) => {
  const { caught, total, lastFact, finishedIn, best } = state;
  const done = finishedIn !== null;

  const message =
    lastFact === null
      ? `${total} bugs got loose in here. ${coarsePointer ? "Tap" : "Click"} the glowing ones, each carries a fact about me.`
      : `Bug ${caught}: ${lastFact}`;

  return (
    <div
      className="rise mt-10 max-w-md rounded-lg border border-line-strong bg-surface/80 p-4 backdrop-blur-sm"
      style={delay(420)}
    >
      <div className="flex items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.18em] text-ochre">Bug hunt</p>
        <div className="flex flex-1 items-center justify-end gap-1" aria-hidden="true">
          {Array.from({ length: total }, (_, i) => (
            <span
              key={i}
              className={`h-1.5 w-2.5 rounded-sm transition-colors duration-300 sm:w-3 ${
                i < caught ? "bg-ochre" : "bg-line-strong"
              }`}
            />
          ))}
        </div>
        <p className="font-mono text-xs tabular-nums text-muted">
          {caught}/{total}
        </p>
      </div>

      <p className="mt-3 min-h-[2.75rem] text-sm leading-relaxed text-ink/90" aria-live="polite">
        {message}
        {done && (
          <span className="mt-1 block font-mono text-xs text-ochre">
            All {total} fixed in {finishedIn.toFixed(1)}s
            {best !== null && ` · best ${best.toFixed(1)}s`}
          </span>
        )}
      </p>

      {done && (
        <div className="mt-3 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={onReset}
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-line-strong px-4 text-sm text-ink transition-colors hover:border-subtle active:scale-[0.97]"
          >
            <RotateCcw className="size-4" aria-hidden="true" />
            Play again
          </button>
          <a
            href="#contact"
            className="inline-flex h-11 items-center gap-2 rounded-lg px-3 text-sm font-semibold text-accent transition-colors hover:text-ink"
          >
            Hire the debugger
            <ArrowRight className="size-4" aria-hidden="true" />
          </a>
        </div>
      )}
    </div>
  );
};

export default BugHuntHud;
