import { Metadata } from "next";
import Link from "next/link";
import { Box, SimpleGrid, Heading, Text, Flex } from "@chakra-ui/react";
import {
  Container,
  SectionHeading,
  MotionSection,
  MotionStagger,
  MotionStaggerItem,
  IconDisplay,
} from "@/components/shared";
import { CTABand } from "@/components/home";
import { SITE } from "@/lib/config";
import { areaToSlug } from "@/lib/links";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description: `Professional furniture removals across South Lanarkshire. Serving ${SITE.areas.join(", ")} and surrounding areas. Local knowledge, reliable service.`,
};

export default function AreasPage() {
  return (
    <>
      {/* Header Section */}
      <Box bg="clydeNavy" py={{ base: 16, md: 24 }}>
        <Container>
          <MotionSection>
            <Heading
              as="h1"
              fontFamily="var(--font-playfair)"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="700"
              color="white"
              textAlign="center"
              mb={4}
            >
              Areas We Serve
            </Heading>
            <Text
              color="whiteAlpha.800"
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              maxW="2xl"
              mx="auto"
            >
              Professional furniture removal services across South Lanarkshire.
              Our local knowledge means your move runs smoothly, wherever you
              are in the region.
            </Text>
          </MotionSection>
        </Container>
      </Box>

      {/* Areas Grid */}
      <Box py={{ base: 16, md: 24 }} bg="neutralLight">
        <Container>
          <MotionSection>
            <SectionHeading
              title="South Lanarkshire Coverage"
              subtitle="Click on any area to learn more about our services in your town."
            />
          </MotionSection>

          <MotionStagger>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} gap={6}>
              {SITE.areas.map((area) => (
                <MotionStaggerItem key={area}>
                  <Link href={`/areas/${areaToSlug(area)}`}>
                    <Flex
                      bg="white"
                      p={6}
                      borderRadius="lg"
                      align="center"
                      gap={4}
                      transition="all 0.2s"
                      _hover={{
                        transform: "translateY(-4px)",
                        boxShadow: "lg",
                      }}
                    >
                      <Flex
                        w={12}
                        h={12}
                        bg="clydeNavy"
                        borderRadius="lg"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <IconDisplay name="map-pin" color="heatherGold" boxSize={6} />
                      </Flex>
                      <Box flex={1}>
                        <Heading
                          as="h2"
                          fontSize="lg"
                          fontFamily="var(--font-playfair)"
                          fontWeight="600"
                          color="clydeNavy"
                        >
                          {area}
                        </Heading>
                        <Text color="muted" fontSize="sm">
                          Removals in {area}
                        </Text>
                      </Box>
                      <IconDisplay name="arrow-right" color="heatherGold" boxSize={5} />
                    </Flex>
                  </Link>
                </MotionStaggerItem>
              ))}
            </SimpleGrid>
          </MotionStagger>

          <MotionSection delay={0.4}>
            <Box
              mt={12}
              p={8}
              bg="white"
              borderRadius="lg"
              textAlign="center"
            >
              <Heading
                as="h3"
                fontSize="xl"
                fontFamily="var(--font-playfair)"
                fontWeight="600"
                color="clydeNavy"
                mb={3}
              >
                Don&apos;t See Your Area?
              </Heading>
              <Text color="muted" maxW="lg" mx="auto">
                We serve the whole of South Lanarkshire and can often
                accommodate moves to and from neighbouring areas including
                Glasgow, North Lanarkshire, and East Renfrewshire. Get in touch
                to discuss your requirements.
              </Text>
            </Box>
          </MotionSection>
        </Container>
      </Box>

      <CTABand />
    </>
  );
}
