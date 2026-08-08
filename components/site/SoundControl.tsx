"use client";

import { useEffect, useRef, useState } from "react";
import {
  getSoundVolume,
  isSoundEnabled,
  playShutter,
  setSoundEnabled,
  setSoundVolume,
} from "@/lib/shutterSound";

export default function SoundControl() {
  const [enabled, setEnabled] = useState(false);
  const [volume, setVolume] = useState(50);
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  // Read the real localStorage-backed values only after mount: doing it in the initial render
  // would read `window` during SSR (always the default) and mismatch the client's first paint.
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setEnabled(isSoundEnabled());
    setVolume(getSoundVolume());
  }, []);

  useEffect(() => {
    function handleOutsideClick(e: MouseEvent) {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleOutsideClick);
    return () => document.removeEventListener("click", handleOutsideClick);
  }, []);

  function handleVolumeChange(next: number) {
    setVolume(next);
    setSoundVolume(next);
    if (next > 0 && !enabled) {
      setEnabled(true);
      setSoundEnabled(true);
    }
  }

  return (
    <div className={`sound-control ${open ? "open" : ""}`} ref={rootRef}>
      <button
        className={`sound-toggle ${enabled ? "active" : ""}`}
        aria-label={enabled ? "Desativar som" : "Ativar som"}
        title={enabled ? "Desativar efeitos sonoros" : "Ativar efeitos sonoros"}
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
      >
        <svg className="icon-sound-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <line x1="23" y1="9" x2="17" y2="15" />
          <line x1="17" y1="9" x2="23" y2="15" />
        </svg>
        <svg className="icon-sound-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
          <path d="M11 5 6 9H2v6h4l5 4V5Z" />
          <path d="M15.54 8.46a5 5 0 0 1 0 7.07" />
          <path d="M19.07 4.93a10 10 0 0 1 0 14.14" />
        </svg>
      </button>
      <div className="volume-popover">
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={volume}
          aria-label="Volume"
          onChange={(e) => handleVolumeChange(parseInt(e.target.value, 10))}
          onMouseUp={() => playShutter()}
        />
        <span className="volume-value mono">{volume}%</span>
      </div>
    </div>
  );
}
