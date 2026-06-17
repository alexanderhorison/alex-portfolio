import type { PathData } from "@/data/portfolio";

interface IconProps {
  paths: PathData[];
  size?: number;
  className?: string;
  style?: React.CSSProperties;
}

export function Icon({ paths, size = 20, className, style }: IconProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {paths.map((d, i) =>
        Array.isArray(d) ? (
          <circle key={i} cx={d[0]} cy={d[1]} r={d[2]} />
        ) : (
          <path key={i} d={d} />
        )
      )}
    </svg>
  );
}
