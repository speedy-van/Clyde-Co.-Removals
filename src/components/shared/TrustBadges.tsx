"use client";

import { Box, Flex, Text, Icon } from "@chakra-ui/react";
import { FiShield, FiClock, FiTag, FiStar } from "react-icons/fi";
import type { IconType } from "react-icons";

export interface TrustBadgesProps {
  /** Visual variant */
  variant?: "dark" | "light" | "subtle";
  /** Show icons */
  showIcons?: boolean;
}

interface TrustItem {
  icon: IconType;
  text: string;
}

const trustItems: TrustItem[] = [
  { icon: FiShield, text: "Fully Insured" },
  { icon: FiClock, text: "Same-Day Available" },
  { icon: FiTag, text: "Fixed Quotes" },
  { icon: FiStar, text: "5★ Rated" },
];

/**
 * Row of trust indicators used across the site
 */
export function TrustBadges({
  variant = "dark",
  showIcons = true,
}: TrustBadgesProps) {
  const getColors = () => {
    switch (variant) {
      case "dark":
        return { text: "white", icon: "heatherGold", separator: "whiteAlpha.400" };
      case "light":
        return { text: "neutralDark", icon: "heatherGold", separator: "gray.300" };
      case "subtle":
        return { text: "muted", icon: "muted", separator: "gray.200" };
      default:
        return { text: "white", icon: "heatherGold", separator: "whiteAlpha.400" };
    }
  };

  const colors = getColors();

  return (
    <Flex
      flexWrap="wrap"
      gap={{ base: 3, md: 4 }}
      justify="center"
      align="center"
    >
      {trustItems.map((item, index) => (
        <Flex key={item.text} align="center" gap={{ base: 3, md: 4 }}>
          <Flex align="center" gap={2}>
            {showIcons && (
              <Icon
                as={item.icon}
                color={colors.icon}
                boxSize={{ base: 4, md: 5 }}
              />
            )}
            <Text
              fontSize={{ base: "xs", md: "sm" }}
              fontWeight="500"
              color={colors.text}
              whiteSpace="nowrap"
            >
              {item.text}
            </Text>
          </Flex>
          {index < trustItems.length - 1 && (
            <Box
              display={{ base: "none", sm: "block" }}
              w="1px"
              h="4"
              bg={colors.separator}
            />
          )}
        </Flex>
      ))}
    </Flex>
  );
}
