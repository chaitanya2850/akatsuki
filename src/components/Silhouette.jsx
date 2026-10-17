// Generic hooded silhouette shown while an image loads or when it is missing.
export default function Silhouette({ color = '#d11a2a' }) {
  return (
    <svg
      className="silhouette"
      viewBox="0 0 200 520"
      role="img"
      aria-label="Character image placeholder"
      preserveAspectRatio="xMidYMax meet"
    >
      <defs>
        <linearGradient id={`sg-${color.slice(1)}`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor={color} stopOpacity="0.55" />
          <stop offset="1" stopColor="#0a0a0c" stopOpacity="0.95" />
        </linearGradient>
      </defs>
      <ellipse cx="100" cy="70" rx="34" ry="40" fill={`url(#sg-${color.slice(1)})`} />
      <path
        d="M100 108 C 55 112 38 170 30 260 L 22 500 L 178 500 L 170 260 C 162 170 145 112 100 108 Z"
        fill={`url(#sg-${color.slice(1)})`}
      />
    </svg>
  )
}
