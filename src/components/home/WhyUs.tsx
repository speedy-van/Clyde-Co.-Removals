"use client";

import { Box, SimpleGrid, Text, Icon, Flex, Heading } from "@chakra-ui/react";
import { FiShield, FiClock, FiTag, FiHeart } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Container, SectionHeading, MotionSection, MotionStagger, MotionStaggerItem } from "@/components/shared";

export type WhyUsProps = Record<string, never>;

interface Pillar {
  icon: IconType;
  title: string;
  description: string;
}

const pillars: Pillar[] = [
  {
    icon: FiShield,
    title: "Fully Insured",
    description:
      "Complete peace of mind with comprehensive goods-in-transit and public liability insurance on every move.",
  },
  {
    icon: FiClock,
    title: "Same-Day Service",
    description:
      "Need to move urgently? We offer same-day availability when possible, because life doesn't always follow a schedule.",
  },
  {
    icon: FiTag,
    title: "Fixed Transparent Quotes",
    description:
      "No hidden fees, no hourly surprises. We quote a price and stick to it, so you know exactly what you're paying.",
  },
  {
    icon: FiHeart,
    title: "Local Family-Run",
    description:
      "We're not a faceless national chain. We're a family business rooted in South Lanarkshire, with a reputation to protect.",
  },
];

export function WhyUs() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="white">
      <Container>
        <MotionSection>
          <SectionHeading
            eyebrow="Why Choose Us"
            title="The Clyde & Co. Difference"
            subtitle="What sets us apart from the rest? It's simple: we care about your move as much as you do."
          />
        </MotionSection>

        <MotionStagger>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8}>
            {pillars.map((pillar) => (
              <MotionStaggerItem key={pillar.title}>
                <Flex
                  direction="column"
                  align="center"
                  textAlign="center"
                  p={6}
                >
                  <Flex
                    w={16}
                    h={16}
                    bg="neutralLight"
                    borderRadius="full"
                    align="center"
                    justify="center"
                    mb={4}
                  >
                    <Icon as={pillar.icon} color="heatherGold" boxSize={7} />
                  </Flex>
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontFamily="var(--font-playfair)"
                    fontWeight="600"
                    color="clydeNavy"
                    mb={3}
                  >
                    {pillar.title}
                  </Heading>
                  <Text color="muted" fontSize="sm" lineHeight="tall">
                    {pillar.description}
                  </Text>
                </Flex>
              </MotionStaggerItem>
            ))}
          </SimpleGrid>
        </MotionStagger>
      </Container>
    </Box>
  );
}
