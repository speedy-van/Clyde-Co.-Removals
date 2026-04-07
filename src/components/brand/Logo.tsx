"use client";

export interface LogoProps {
  /** Logo variant: full (default), mark (emblem only), mono (all white) */
  variant?: "full" | "mark" | "mono";
  /** Height in pixels */
  height?: number;
  /** Optional className for additional styling */
  className?: string;
}

/**
 * Clyde & Co. Removals Logo Component
 * 
 * The emblem features a circular design with:
 * - A horizontal wavy line representing the River Clyde
 * - A simple geometric moving-box outline above it
 * 
 * Variants:
 * - full: Complete logo with emblem and wordmark (default)
 * - mark: Emblem only
 * - mono: All white for use on dark backgrounds
 */
export function Logo({ variant = "full", height = 48, className }: LogoProps) {
  const isMono = variant === "mono";
  const navyColor = isMono ? "currentColor" : "#0B2A4A";
  const goldColor = isMono ? "currentColor" : "#E8A33D";
  const textColor = isMono ? "currentColor" : "#0B2A4A";

  // Calculate proportional width based on height
  const emblemSize = height;
  const fullWidth = variant === "mark" ? emblemSize : emblemSize * 4;

  if (variant === "mark") {
    return (
      <svg
        width={emblemSize}
        height={emblemSize}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-label="Clyde & Co. Removals"
        role="img"
      >
        {/* Circular border */}
        <circle
          cx="32"
          cy="32"
          r="30"
          stroke={navyColor}
          strokeWidth="2.5"
          fill="none"
        />
        
        {/* Moving box - simple geometric outline */}
        <g stroke={navyColor} strokeWidth="2" fill="none">
          {/* Main box body */}
          <rect x="20" y="18" width="24" height="18" rx="1" />
          {/* Box flaps (open) */}
          <path d="M20 18 L26 12 L32 18" />
          <path d="M32 18 L38 12 L44 18" />
          {/* Box tape/seam line */}
          <line x1="32" y1="18" x2="32" y2="36" strokeDasharray="3 2" />
        </g>
        
        {/* River Clyde - wavy line */}
        <path
          d="M12 46 Q20 42 28 46 T44 46 T52 46"
          stroke={goldColor}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
        />
      </svg>
    );
  }

  return (
    <svg
      width={fullWidth}
      height={emblemSize}
      viewBox="0 0 200 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Clyde & Co. Removals"
      role="img"
    >
      {/* Emblem */}
      <g transform="translate(0, 0)">
        {/* Circular border */}
        <circle
          cx="24"
          cy="24"
          r="22"
          stroke={navyColor}
          strokeWidth="2"
          fill="none"
        />
        
        {/* Moving box */}
        <g stroke={navyColor} strokeWidth="1.5" fill="none">
          <rect x="14" y="14" width="20" height="14" rx="1" />
          <path d="M14 14 L19 9 L24 14" />
          <path d="M24 14 L29 9 L34 14" />
          <line x1="24" y1="14" x2="24" y2="28" strokeDasharray="2 1.5" />
        </g>
        
        {/* River Clyde wave */}
        <path
          d="M8 35 Q14 32 20 35 T32 35 T40 35"
          stroke={goldColor}
          strokeWidth="2"
          strokeLinecap="round"
          fill="none"
        />
      </g>
      
      {/* Wordmark */}
      <g fill={textColor}>
        {/* CLYDE & CO. - Playfair Display style */}
        <text
          x="56"
          y="23"
          fontFamily="var(--font-playfair), 'Playfair Display', serif"
          fontSize="16"
          fontWeight="700"
          letterSpacing="0.5"
        >
          CLYDE &amp; CO.
        </text>
        
        {/* REMOVALS - Inter style, letter-spaced */}
        <text
          x="56"
          y="38"
          fontFamily="var(--font-inter), 'Inter', sans-serif"
          fontSize="10"
          fontWeight="500"
          letterSpacing="2"
        >
          REMOVALS
        </text>
      </g>
    </svg>
  );
}
