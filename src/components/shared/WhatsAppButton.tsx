"use client";

import { Button, Link } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";
import { whatsappHref } from "@/lib/links";
import { SITE } from "@/lib/config";

export interface WhatsAppButtonProps {
  /** Button variant style */
  variant?: "primary" | "outline" | "ghost";
  /** Button size */
  size?: "sm" | "md" | "lg";
  /** Make button full width */
  fullWidth?: boolean;
  /** Custom phone number override */
  phone?: string;
  /** Custom message override */
  message?: string;
  /** Custom label */
  label?: string;
}

/**
 * WhatsApp link button
 */
export function WhatsAppButton({
  variant = "primary",
  size = "md",
  fullWidth = false,
  phone,
  message,
  label = "WhatsApp Us",
}: WhatsAppButtonProps) {
  const getStyles = () => {
    switch (variant) {
      case "primary":
        return {
          bg: "#25D366",
          color: "white",
          _hover: { bg: "#20bd5a" },
        };
      case "outline":
        return {
          bg: "transparent",
          color: "white",
          border: "2px solid",
          borderColor: "white",
          _hover: { bg: "whiteAlpha.200" },
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
        href={whatsappHref(phone, message)}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Message ${SITE.name} on WhatsApp`}
        display="flex"
        alignItems="center"
        gap={2}
      >
        <FaWhatsapp size={variant === "ghost" ? 18 : 20} />
        {label}
      </Link>
    </Button>
  );
}
