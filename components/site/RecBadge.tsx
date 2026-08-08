import type { ReactNode } from "react";

export default function RecBadge({ children, style }: { children?: ReactNode; style?: React.CSSProperties }) {
  return (
    <div className="rec" style={style}>
      <span className="dot" />
      {children}
    </div>
  );
}
