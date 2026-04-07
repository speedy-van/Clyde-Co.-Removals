"use client";

import Link from "next/link";
import { Box, SimpleGrid, Heading, Text, Icon, Flex } from "@chakra-ui/react";
import {
  FiHome,
  FiLayers,
  FiPackage,
  FiBriefcase,
  FiBox,
  FiTrash2,
  FiTruck,
  FiArrowRight,
} from "react-icons/fi";
import type { IconType } from "react-icons";
import { Container, SectionHeading, MotionSection, MotionStagger, MotionStaggerItem } from "@/components/shared";
import { SITE } from "@/lib/config";

export type ServicesGridProps = Record<string, never>;

const iconMap: Record<string, IconType> = {
  FiHome,
  FiLayers,
  FiPackage,
  FiBriefcase,
  FiBox,
  FiTrash2,
  FiTruck,
};

const serviceDescriptions: Record<string, string> = {
  "house-removals": "Complete house moves handled with care, from packing to placement.",
  "flat-removals": "Expert navigation of stairs, lifts, and tight spaces.",
  "single-item": "One sofa, one delivery — careful handling guaranteed.",
  "office-removals": "Minimise downtime with our professional business relocations.",
  "packing-service": "Quality materials and careful hands for your belongings.",
  "furniture-disposal": "Responsible removal and recycling of unwanted items.",
  "man-and-van": "Flexible help for smaller moves and collections.",
};

export function ServicesGrid() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="white">
      <Container>
        <MotionSection>
          <SectionHeading
            eyebrow="Our Services"
            title="How Can We Help?"
            subtitle="From full house moves to single item deliveries, we've got South Lanarkshire covered."
          />
        </MotionSection>

        <MotionStagger>
          <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
            {SITE.services.map((service) => {
              const IconComponent = iconMap[service.icon] || FiBox;
              return (
                <MotionStaggerItem key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <Box
                      bg="neutralLight"
                      p={6}
                      borderRadius="lg"
                      transition="all 0.2s"
                      _hover={{
                        transform: "translateY(-4px)",
                        boxShadow: "lg",
                      }}
                      h="100%"
                    >
                      <Flex
                        w={12}
                        h={12}
                        bg="clydeNavy"
                        borderRadius="lg"
                        align="center"
                        justify="center"
                        mb={4}
                      >
                        <Icon as={IconComponent} color="heatherGold" boxSize={6} />
                      </Flex>
                      <Heading
                        as="h3"
                        fontSize="lg"
                        fontFamily="var(--font-playfair)"
                        fontWeight="600"
                        color="clydeNavy"
                        mb={2}
                      >
                        {service.title}
                      </Heading>
                      <Text color="muted" fontSize="sm" mb={4}>
                        {serviceDescriptions[service.slug]}
                      </Text>
                      <Flex
                        align="center"
                        gap={1}
                        color="heatherGold"
                        fontWeight="500"
                        fontSize="sm"
                      >
                        Learn more
                        <Icon as={FiArrowRight} boxSize={4} />
                      </Flex>
                    </Box>
                  </Link>
                </MotionStaggerItem>
              );
            })}
          </SimpleGrid>
        </MotionStagger>
      </Container>
    </Box>
  );
}
