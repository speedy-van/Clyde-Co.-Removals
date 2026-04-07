"use client";

import { Box, Flex, Heading, Stack } from "@chakra-ui/react";
import { PhoneButton, WhatsAppButton, Container, MotionSection } from "@/components/shared";

export type CTABandProps = Record<string, never>;

export function CTABand() {
  return (
    <Box as="section" bg="clydeNavy" py={{ base: 12, md: 16 }}>
      <Container>
        <MotionSection>
          <Flex
            direction={{ base: "column", md: "row" }}
            align="center"
            justify="space-between"
            gap={{ base: 6, md: 8 }}
          >
            <Heading
              as="h2"
              fontFamily="var(--font-playfair)"
              fontSize={{ base: "2xl", md: "3xl" }}
              fontWeight="700"
              color="white"
              textAlign={{ base: "center", md: "left" }}
            >
              Ready to move? Call us today.
            </Heading>

            <Stack
              direction={{ base: "column", sm: "row" }}
              gap={4}
              w={{ base: "100%", md: "auto" }}
            >
              <PhoneButton variant="primary" size="lg" />
              <WhatsAppButton
                variant="outline"
                size="lg"
                label="WhatsApp"
              />
            </Stack>
          </Flex>
        </MotionSection>
      </Container>
    </Box>
  );
}
