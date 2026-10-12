"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "motion/react";

// Replays an illustration on a cycle while it's on screen. Use `run` as a React key
// on the animated part so it restarts, and `play` as its animate state.
export function useLoop<T extends Element>(cycleMs: number) {
  const ref = useRef<T>(null);
  const inView = useInView(ref, { amount: 0.4 });
  const reduce = useReducedMotion();
  const [run, setRun] = useState(0);

  useEffect(() => {
    if (!inView || reduce) return;
    const id = setInterval(() => setRun((r) => r + 1), cycleMs);
    return () => clearInterval(id);
  }, [inView, reduce, cycleMs]);

  return { ref, run, play: inView ? "show" : "hidden" };
}
