import type { CSSProperties } from "react";

// Stagger helper for the `.rise` entrance animation defined in index.css.
export const delay = (ms: number) => ({ "--d": `${ms}ms` }) as CSSProperties;
