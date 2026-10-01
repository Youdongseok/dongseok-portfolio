export default function ArrowIcon({ size = 10, stroke = '#fff', strokeWidth = 1.4 }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 10 10"
      fill="none"
      stroke={stroke}
      strokeWidth={strokeWidth}
    >
      <path d="M1 9 9 1M3 1h6v6" />
    </svg>
  );
}
