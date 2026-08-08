import type { CSSProperties } from "react";

interface LogoMarkProps {
  idPrefix: string;
  className?: string;
  width?: number;
  height?: number;
  style?: CSSProperties;
}

export default function LogoMark({ idPrefix, className, width, height, style }: LogoMarkProps) {
  return (
    <svg className={className} width={width} height={height} style={style} viewBox="0 0 40 40" fill="none">
      <path d="M6 8 L20 20 L6 32 Z" fill={`url(#${idPrefix}-1)`} />
      <path d="M20 8 L34 20 L20 32 Z" fill={`url(#${idPrefix}-2)`} opacity={0.9} />
      <defs>
        <linearGradient id={`${idPrefix}-1`} x1="6" y1="8" x2="20" y2="32">
          <stop offset="0%" stopColor="#FF3B1F" />
          <stop offset="100%" stopColor="#FF7A1A" />
        </linearGradient>
        <linearGradient id={`${idPrefix}-2`} x1="20" y1="8" x2="34" y2="32">
          <stop offset="0%" stopColor="#FF7A1A" />
          <stop offset="100%" stopColor="#FFB648" />
        </linearGradient>
      </defs>
    </svg>
  );
}
