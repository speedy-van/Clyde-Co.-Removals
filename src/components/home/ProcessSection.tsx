"use client";

import { Box, SimpleGrid, Text, Flex, Heading, Icon } from "@chakra-ui/react";
import { FiPhone, FiFileText, FiTruck } from "react-icons/fi";
import type { IconType } from "react-icons";
import { Container, SectionHeading, MotionSection, MotionStagger, MotionStaggerItem } from "@/components/shared";

export type ProcessSectionProps = Record<string, never>;

interface Step {
  number: number;
  icon: IconType;
  title: string;
  description: string;
}

const steps: Step[] = [
  {
    number: 1,
    icon: FiPhone,
    title: "Call or WhatsApp",
    description:
      "Get in touch to discuss your move. Tell us what you need, when you need it, and any special requirements.",
  },
  {
    number: 2,
    icon: FiFileText,
    title: "Get a Fixed Quote",
    description:
      "We'll provide a clear, fixed-price quote with no hidden fees. For larger moves, we offer free home visits.",
  },
  {
    number: 3,
    icon: FiTruck,
    title: "We Handle the Rest",
    description:
      "On moving day, we arrive on time, work efficiently, and take care of your belongings as if they were our own.",
  },
];

export function ProcessSection() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="white">
      <Container>
        <MotionSection>
          <SectionHeading
            eyebrow="How It Works"
            title="Moving Made Simple"
            subtitle="Three straightforward steps to a stress-free move."
          />
        </MotionSection>

        <MotionStagger>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={8}>
            {steps.map((step) => (
              <MotionStaggerItem key={step.number}>
                <Flex direction="column" align="center" textAlign="center">
                  {/* Step Number Circle */}
                  <Box position="relative" mb={4}>
                    <Flex
                      w={20}
                      h={20}
                      bg="clydeNavy"
                      borderRadius="full"
                      align="center"
                      justify="center"
                    >
                      <Icon as={step.icon} color="heatherGold" boxSize={8} />
                    </Flex>
                    <Flex
                      position="absolute"
                      top={-2}
                      right={-2}
                      w={8}
                      h={8}
                      bg="heatherGold"
                      borderRadius="full"
                      align="center"
                      justify="center"
                    >
                      <Text
                        color="white"
                        fontWeight="700"
                        fontSize="sm"
                      >
                        {step.number}
                      </Text>
                    </Flex>
                  </Box>

                  <Heading
                    as="h3"
                    fontSize="xl"
                    fontFamily="var(--font-playfair)"
                    fontWeight="600"
                    color="clydeNavy"
                    mb={3}
                  >
                    {step.title}
                  </Heading>
                  <Text color="muted" fontSize="md" maxW="280px">
                    {step.description}
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
