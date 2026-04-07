"use client";

import * as React from "react";

export interface LogoProps {
  variant?: "full" | "mark" | "mono";
  height?: number;
  className?: string;
}

export function Logo({ variant = "full", height = 44, className }: LogoProps) {
  // Color logic:
  // - "full"  → navy emblem + navy wordmark (for light backgrounds)
  // - "mono"  → all white (for dark backgrounds)
  // - "mark"  → emblem only, navy
  const isMono = variant === "mono";
  const primaryColor = isMono ? "#FFFFFF" : "#0B2A4A";
  const accentColor = isMono ? "#FFFFFF" : "#E8A33D";

  // Aspect ratio: emblem is 56x56, wordmark area is ~180x56
  const isMarkOnly = variant === "mark";
  const viewBoxWidth = isMarkOnly ? 56 : 240;
  const viewBoxHeight = 56;
  const width = (height / viewBoxHeight) * viewBoxWidth;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
      width={width}
      height={height}
      className={className}
      role="img"
      aria-label="Clyde and Co. Removals"
    >
      {/* Emblem: circle with moving box and wavy river line */}
      <g>
        {/* Outer circle */}
        <circle
          cx="28"
          cy="28"
          r="26"
          fill="none"
          stroke={primaryColor}
          strokeWidth="2"
        />
        {/* Moving box (geometric, simple) */}
        <rect
          x="17"
          y="15"
          width="22"
          height="16"
          rx="1.5"
          fill="none"
          stroke={primaryColor}
          strokeWidth="2"
        />
        {/* Box tape line */}
        <line
          x1="28"
          y1="15"
          x2="28"
          y2="31"
          stroke={primaryColor}
          strokeWidth="2"
        />
        {/* Wavy river (Clyde) below the box */}
        <path
          d="M 12 40 Q 18 36, 24 40 T 36 40 T 44 40"
          fill="none"
          stroke={accentColor}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </g>

      {/* Wordmark — only for full and mono variants */}
      {!isMarkOnly && (
        <g>
          <text
            x="66"
            y="28"
            fontFamily="'Playfair Display', Georgia, serif"
            fontSize="20"
            fontWeight="700"
            fill={primaryColor}
            dominantBaseline="middle"
          >
            CLYDE &amp; CO.
          </text>
          <text
            x="66"
            y="44"
            fontFamily="'Inter', system-ui, sans-serif"
            fontSize="9"
            fontWeight="500"
            letterSpacing="2.5"
            fill={primaryColor}
            dominantBaseline="middle"
          >
            REMOVALS
          </text>
        </g>
      )}
    </svg>
  );
}

export default Logo;
