export default function LogoMark({ size = 32 }: { size?: number }) {
  // Recreates the EDU mark in pure SVG so it sits cleanly on a white background
  // without the dark plate from the source PNG. Preserves the bracket frame
  // and 5-bar waveform from the original logo.
  const stroke = Math.max(2, Math.round(size / 14));
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="EDU Media Systems mark"
      fill="none"
    >
      <path
        d="M22 8 H12 a4 4 0 0 0 -4 4 V52 a4 4 0 0 0 4 4 H22"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      <path
        d="M42 8 H52 a4 4 0 0 1 4 4 V52 a4 4 0 0 1 -4 4 H42"
        stroke="currentColor"
        strokeWidth={stroke}
        strokeLinecap="round"
      />
      {/* waveform: 5 bars, center-tallest */}
      <line x1="20" y1="26" x2="20" y2="38" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
      <line x1="27" y1="22" x2="27" y2="42" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
      <line x1="34" y1="16" x2="34" y2="48" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
      <line x1="41" y1="22" x2="41" y2="42" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
      <line x1="48" y1="26" x2="48" y2="38" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" />
    </svg>
  );
}
