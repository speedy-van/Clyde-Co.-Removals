"use client";

import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import Image from "next/image";
import { PhoneButton, WhatsAppButton, TrustBadges } from "@/components/shared";
import { SITE } from "@/lib/config";

export type HeroProps = Record<string, never>;

export function Hero() {
  return (
    <Box as="section" position="relative" minH="85vh" overflow="hidden">
      {/* Background Image with Overlay */}
      <Box position="absolute" inset={0} zIndex={0}>
        <Image
          src="/images/hero-bg.jpg"
          alt="Professional furniture removal van in South Lanarkshire"
          fill
          style={{ objectFit: "cover" }}
          priority
          placeholder="blur"
          blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAgDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAABQQH/8QAIhAAAgIBAwQDAAAAAAAAAAAAAQIDBAUAESEGEhMxQVFh/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAZEQEBAQEBAQAAAAAAAAAAAAABAgMAETH/2gAMAwEAAhEDEEA/ALVLqTL4+GPHxWIq9mOFOYJ0DqoAAG6nYfHznmtuprVueWzLI8s8zl5HY7lmJJJP3roaNSjZEFm2c+mP/9k="
        />
        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-b, blackAlpha.700, blackAlpha.600)"
        />
      </Box>

      {/* Content */}
      <Flex
        position="relative"
        zIndex={1}
        minH="85vh"
        align="center"
        justify="center"
        px={{ base: 4, md: 8 }}
        py={{ base: 20, md: 24 }}
      >
        <Box maxW="800px" textAlign="center">
          {/* Small Tagline */}
          <Text
            color="heatherGold"
            fontSize={{ base: "sm", md: "md" }}
            fontWeight="600"
            textTransform="uppercase"
            letterSpacing="wider"
            mb={4}
          >
            {SITE.tagline}
          </Text>

          {/* Main Headline */}
          <Heading
            as="h1"
            fontFamily="var(--font-playfair)"
            fontSize={{ base: "3xl", sm: "4xl", md: "5xl", lg: "6xl" }}
            fontWeight="700"
            color="white"
            lineHeight="1.1"
            mb={6}
          >
            South Lanarkshire&apos;s Trusted Furniture Removals
          </Heading>

          {/* Subheadline */}
          <Text
            color="whiteAlpha.900"
            fontSize={{ base: "lg", md: "xl" }}
            maxW="600px"
            mx="auto"
            mb={8}
          >
            Professional house and office removals across Hamilton, East
            Kilbride, and all of South Lanarkshire. Fully insured with
            transparent, fixed-price quotes.
          </Text>

          {/* CTA Buttons */}
          <Stack
            direction={{ base: "column", sm: "row" }}
            gap={4}
            justify="center"
            mb={10}
          >
            <PhoneButton variant="primary" size="lg" />
            <WhatsAppButton variant="outline" size="lg" />
          </Stack>

          {/* Trust Strip */}
          <Box
            bg="blackAlpha.400"
            backdropFilter="blur(8px)"
            borderRadius="full"
            py={3}
            px={6}
            display="inline-block"
          >
            <TrustBadges variant="dark" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
