"use client";

import { Button, Link } from "@chakra-ui/react";
import { FiPhone } from "react-icons/fi";
import { telHref } from "@/lib/links";
import { SITE } from "@/lib/config";

export interface PhoneButtonProps {
  /** Button variant style */
  variant?: "primary" | "outline" | "ghost";
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Make button full width */
  fullWidth?: boolean;
  /** Show phone number text */
  showNumber?: boolean;
  /** Custom phone number override */
  phone?: string;
  /** Custom label override */
  label?: string;
}

/**
 * Phone call button with tel: link
 */
export function PhoneButton({
  variant = "primary",
  size = "md",
  fullWidth = false,
  showNumber = true,
  phone,
  label,
}: PhoneButtonProps) {
  const phoneNumber = phone ?? SITE.phone;
  const displayText = label ?? (showNumber ? SITE.phoneDisplay : "Call Us");

  const getStyles = () => {
    switch (variant) {
      case "primary":
        return {
          bg: "heatherGold",
          color: "white",
          _hover: { bg: "#d4922f" },
        };
      case "outline":
        return {
          bg: "transparent",
          color: "heatherGold",
          border: "2px solid",
          borderColor: "heatherGold",
          _hover: { bg: "heatherGold", color: "white" },
        };
      case "ghost":
        return {
          bg: "transparent",
          color: "clydeNavy",
          _hover: { bg: "gray.100" },
        };
      default:
        return {};
    }
  };

  const sizeStyles = {
    sm: { px: 3, py: 2, fontSize: "sm" },
    md: { px: 5, py: 3, fontSize: "md" },
    lg: { px: 6, py: 4, fontSize: "lg" },
  };

  return (
    <Button
      asChild
      w={fullWidth ? "100%" : "auto"}
      fontWeight="600"
      fontFamily="var(--font-inter)"
      borderRadius="md"
      transition="all 0.2s"
      {...getStyles()}
      {...sizeStyles[size]}
    >
      <Link
        href={telHref(phoneNumber)}
        aria-label={`Call ${SITE.name} at ${SITE.phoneDisplay}`}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <FiPhone />
        {displayText}
      </Link>
    </Button>
  );
}
