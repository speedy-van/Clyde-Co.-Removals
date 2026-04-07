"use client";

import { motion, type MotionProps, type Variants } from "framer-motion";
import { ReactNode } from "react";

export interface MotionSectionProps {
  children: ReactNode;
  /** Delay before animation starts */
  delay?: number;
  /** Custom animation variants */
  variants?: MotionProps["variants"];
  /** Optional className */
  className?: string;
}

const defaultVariants: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

/**
 * Wrapper component that animates children on scroll into viewport
 * Uses subtle fade + slide up animation
 */
export function MotionSection({
  children,
  delay = 0,
  variants = defaultVariants,
  className,
}: MotionSectionProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={variants}
      transition={{
        duration: 0.6,
        delay,
        ease: "easeOut" as const,
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/**
 * Stagger animation for children elements
 */
export interface MotionStaggerProps {
  children: ReactNode;
  staggerDelay?: number;
  className?: string;
}

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const staggerItem: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.1, 0.25, 1], // easeOut cubic bezier
    },
  },
};

export function MotionStagger({
  children,
  className,
}: MotionStaggerProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={staggerContainer}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function MotionStaggerItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div variants={staggerItem} className={className}>
      {children}
    </motion.div>
  );
}
