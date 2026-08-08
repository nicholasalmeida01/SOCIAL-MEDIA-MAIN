import type { CSSProperties, ReactNode } from "react";

export default function Eyebrow({ children, color, style }: { children: ReactNode; color?: string; style?: CSSProperties }) {
  return <div className="eyebrow" style={{ ...(color ? { color } : {}), ...style }}>{children}</div>;
}
