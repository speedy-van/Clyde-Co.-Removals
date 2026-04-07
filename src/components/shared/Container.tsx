"use client";

import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

export interface ContainerProps {
  children: ReactNode;
  /** Maximum width variant */
  maxW?: "sm" | "md" | "lg" | "xl" | "2xl" | "full";
  /** Optional className for additional styling */
  className?: string;
  /** Remove padding on mobile */
  noPaddingMobile?: boolean;
}

const maxWidthMap = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1200px",
  "2xl": "1400px",
  full: "100%",
};

/**
 * Centered container with responsive padding and max-width
 */
export function Container({
  children,
  maxW = "xl",
  className,
  noPaddingMobile = false,
}: ContainerProps) {
  return (
    <Box
      w="100%"
      maxW={maxWidthMap[maxW]}
      mx="auto"
      px={{
        base: noPaddingMobile ? 0 : 4,
        sm: 6,
        md: 8,
      }}
      className={className}
    >
      {children}
    </Box>
  );
}
