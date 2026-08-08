"use client";

import { useEffect, useRef, useState } from "react";

const WORDS = ["MOVIMENTO", "IMPULSO", "RITMO", "AVANÇO", "EQUILÍBRIO", "PROGRESSO"];
const LOOP_MS = 9000;
const SEGMENT_MS = LOOP_MS / 4;
const HOLD_MS = 1200;

export default function StrideDivider() {
  const strideRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [word, setWord] = useState(WORDS[0]);
  const [show, setShow] = useState(false);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const strideEl = strideRef.current;
    const trackEl = trackRef.current;
    if (!strideEl || !trackEl) return;

    let started = false;
    let wordIndex = 0;
    const timeouts: ReturnType<typeof setTimeout>[] = [];

    function runCycle() {
      trackEl!.style.animationPlayState = "running";
      timeouts.push(
        setTimeout(() => {
          trackEl!.style.animationPlayState = "paused";
          setWord(WORDS[wordIndex]);
          wordIndex = (wordIndex + 1) % WORDS.length;
          setShow(true);
          timeouts.push(
            setTimeout(() => {
              setShow(false);
              runCycle();
            }, HOLD_MS),
          );
        }, SEGMENT_MS),
      );
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !started) {
            started = true;
            setInView(true);
            runCycle();
          }
        });
      },
      { threshold: 0.4 },
    );
    observer.observe(strideEl);

    return () => {
      observer.disconnect();
      timeouts.forEach(clearTimeout);
    };
  }, []);

  return (
    <div className={`stride ${inView ? "in-view" : ""}`} ref={strideRef}>
      <div className="stride-track" ref={trackRef}>
        {[0, 1].map((i) => (
          <svg key={i} viewBox="0 0 640 90" preserveAspectRatio="none">
            <path d="M0,45 Q40,11 80,45 T160,45 T240,45 T320,45 T400,45 T480,45 T560,45 T640,45" />
            <circle className="dot" cx="160" cy="45" r="4.5" />
            <circle className="dot" cx="320" cy="45" r="4.5" />
            <circle className="dot" cx="480" cy="45" r="4.5" />
            <circle className="dot" cx="640" cy="45" r="4.5" />
          </svg>
        ))}
      </div>
      <div className={`stride-word ${show ? "show" : ""}`}>{word}</div>
    </div>
  );
}
