"use client";

import { Box, Text, Heading } from "@chakra-ui/react";

export interface SectionHeadingProps {
  /** Small text above the title */
  eyebrow?: string;
  /** Main heading text */
  title: string;
  /** Optional subtitle below the title */
  subtitle?: string;
  /** Text alignment */
  align?: "left" | "center" | "right";
  /** Light variant for dark backgrounds */
  light?: boolean;
}

/**
 * Reusable section heading with optional eyebrow and subtitle
 */
export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  light = false,
}: SectionHeadingProps) {
  const textAlign = align;
  const textColor = light ? "white" : "neutralDark";
  const mutedColor = light ? "whiteAlpha.800" : "muted";
  const accentColor = "heatherGold";

  return (
    <Box textAlign={textAlign} mb={8}>
      {eyebrow && (
        <Text
          fontSize="sm"
          fontWeight="600"
          textTransform="uppercase"
          letterSpacing="wider"
          color={accentColor}
          mb={2}
        >
          {eyebrow}
        </Text>
      )}
      <Heading
        as="h2"
        fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
        fontFamily="var(--font-playfair)"
        fontWeight="700"
        color={textColor}
        lineHeight="1.2"
      >
        {title}
      </Heading>
      {subtitle && (
        <Text
          mt={3}
          fontSize={{ base: "md", md: "lg" }}
          color={mutedColor}
          maxW="2xl"
          mx={align === "center" ? "auto" : undefined}
        >
          {subtitle}
        </Text>
      )}
    </Box>
  );
}
