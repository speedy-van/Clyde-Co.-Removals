"use client";

import { Icon, IconProps } from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FiPhone,
  FiMail,
  FiMapPin,
  FiClock,
  FiArrowRight,
  FiCheck,
  FiTruck,
  FiHome,
  FiPackage,
  FiBox,
  FiUsers,
  FiShield,
  FiStar,
  FiHeart,
  FiTarget,
  FiMessageSquare,
  FiCalendar,
  FiClipboard,
  FiThumbsUp,
  FiLayers,
  FiBriefcase,
  FiTrash2,
} from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";

// Map of icon names to components
const iconMap: Record<string, IconType> = {
  phone: FiPhone,
  mail: FiMail,
  "map-pin": FiMapPin,
  clock: FiClock,
  "arrow-right": FiArrowRight,
  check: FiCheck,
  truck: FiTruck,
  home: FiHome,
  package: FiPackage,
  box: FiBox,
  users: FiUsers,
  shield: FiShield,
  star: FiStar,
  heart: FiHeart,
  target: FiTarget,
  "message-square": FiMessageSquare,
  calendar: FiCalendar,
  clipboard: FiClipboard,
  "thumbs-up": FiThumbsUp,
  whatsapp: FaWhatsapp,
  layers: FiLayers,
  briefcase: FiBriefcase,
  trash: FiTrash2,
  // Service icon mappings (from config)
  FiHome,
  FiLayers,
  FiPackage,
  FiBriefcase,
  FiBox,
  FiTrash2,
  FiTruck,
};

export interface IconDisplayProps extends Omit<IconProps, "as"> {
  /** Name of the icon to display */
  name: keyof typeof iconMap | string;
}

/**
 * Client-side icon wrapper that allows icons to be used in Server Components
 * by passing a string name instead of a function reference.
 */
export function IconDisplay({ name, ...props }: IconDisplayProps) {
  const IconComponent = iconMap[name];
  if (!IconComponent) return null;
  return <Icon as={IconComponent} {...props} />;
}

export type IconName = keyof typeof iconMap;
