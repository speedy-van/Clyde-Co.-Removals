"use client";

import Link from "next/link";
import { Box, Text, Wrap, Tag } from "@chakra-ui/react";
import { Container, SectionHeading, MotionSection } from "@/components/shared";
import { SITE } from "@/lib/config";
import { areaToSlug } from "@/lib/links";

export type CoverageSectionProps = Record<string, never>;

export function CoverageSection() {
  return (
    <Box as="section" position="relative" py={{ base: 16, md: 24 }} overflow="hidden">
      {/* Background - replace with actual image when available */}
      <Box position="absolute" inset={0} zIndex={0} bg="neutralLight" />

      <Box position="relative" zIndex={1}>
        <Container>
        <MotionSection>
          <SectionHeading
            eyebrow="Service Area"
            title="Serving All of South Lanarkshire"
            subtitle="From Hamilton to East Kilbride, Rutherglen to Strathaven — we know these roads and communities like the back of our hand."
          />
        </MotionSection>

        <MotionSection delay={0.2}>
          <Wrap gap={3} justify="center" mb={8}>
            {SITE.areas.map((area) => (
              <Link key={area} href={`/areas/${areaToSlug(area)}`}>
                <Tag.Root
                  size="lg"
                  bg="white"
                  borderWidth="1px"
                  borderColor="gray.200"
                  color="clydeNavy"
                  fontWeight="500"
                  px={4}
                  py={2}
                  borderRadius="full"
                  cursor="pointer"
                  transition="all 0.2s"
                  _hover={{
                    bg: "clydeNavy",
                    color: "white",
                    borderColor: "clydeNavy",
                  }}
                >
                  <Tag.Label>{area}</Tag.Label>
                </Tag.Root>
              </Link>
            ))}
          </Wrap>
        </MotionSection>

        <MotionSection delay={0.3}>
          <Box maxW="2xl" mx="auto" textAlign="center">
            <Text color="muted" fontSize="md" lineHeight="tall">
              Our drivers live and work in South Lanarkshire. We understand the
              narrow lanes of the old towns, the parking restrictions in the
              centres, and the best routes to avoid the school run traffic.
              This local knowledge means your move goes smoothly, on time, and
              without unnecessary stress. If your area isn&apos;t listed, get in
              touch — we likely cover it too.
            </Text>
          </Box>
        </MotionSection>
        </Container>
      </Box>
    </Box>
  );
}
