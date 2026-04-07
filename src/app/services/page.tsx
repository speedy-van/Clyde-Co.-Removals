import { Metadata } from "next";
import Link from "next/link";
import { Box, SimpleGrid, Heading, Text, Flex } from "@chakra-ui/react";
import { Container, MotionSection, MotionStagger, MotionStaggerItem, IconDisplay } from "@/components/shared";
import { CTABand } from "@/components/home";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Our Services",
  description: `Professional removal services in South Lanarkshire. ${SITE.services.map((s) => s.title).join(", ")}. Fully insured with fixed quotes.`,
};

const serviceDescriptions: Record<string, string> = {
  "house-removals":
    "Complete house moves handled with care. From packing to placement, we manage every aspect of your home relocation across South Lanarkshire.",
  "flat-removals":
    "Specialists in navigating stairs, lifts, and tight spaces. Our experienced team handles tenement and high-rise moves with precision.",
  "single-item":
    "Need just one piece moved? From a single sofa to a precious antique, we deliver individual items with the same care as a full move.",
  "office-removals":
    "Minimise business disruption with professional office relocations. We work around your schedule, including evenings and weekends.",
  "packing-service":
    "Let us handle the packing stress. Quality materials, careful hands, and clear labelling for organised unpacking.",
  "furniture-disposal":
    "Responsible removal and recycling of unwanted furniture. We ensure items are disposed of ethically and sustainably.",
  "man-and-van":
    "Flexible help for smaller moves, collections, and deliveries. Our man and van service offers affordable, reliable assistance.",
};

export default function ServicesPage() {
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
              Our Removal Services
            </Heading>
            <Text
              color="whiteAlpha.800"
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              maxW="2xl"
              mx="auto"
            >
              From full house moves to single item deliveries, we offer a
              complete range of professional removal services across South
              Lanarkshire.
            </Text>
          </MotionSection>
        </Container>
      </Box>

      {/* Services Grid */}
      <Box py={{ base: 16, md: 24 }} bg="neutralLight">
        <Container>
          <MotionStagger>
            <SimpleGrid columns={{ base: 1, md: 2 }} gap={6}>
              {SITE.services.map((service) => (
                <MotionStaggerItem key={service.slug}>
                  <Link href={`/services/${service.slug}`}>
                    <Flex
                      bg="white"
                      p={6}
                      borderRadius="lg"
                      gap={5}
                      transition="all 0.2s"
                      _hover={{
                        transform: "translateY(-4px)",
                        boxShadow: "lg",
                      }}
                      h="100%"
                    >
                      <Flex
                        w={14}
                        h={14}
                        bg="clydeNavy"
                        borderRadius="lg"
                        align="center"
                        justify="center"
                        flexShrink={0}
                      >
                        <IconDisplay
                          name={service.icon}
                          color="heatherGold"
                          boxSize={7}
                        />
                      </Flex>
                      <Box flex={1}>
                        <Heading
                          as="h2"
                          fontSize="xl"
                          fontFamily="var(--font-playfair)"
                          fontWeight="600"
                          color="clydeNavy"
                          mb={2}
                        >
                          {service.title}
                        </Heading>
                        <Text color="muted" fontSize="sm" mb={3}>
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
                          <IconDisplay name="arrow-right" boxSize={4} />
                        </Flex>
                      </Box>
                    </Flex>
                  </Link>
                </MotionStaggerItem>
              ))}
            </SimpleGrid>
          </MotionStagger>
        </Container>
      </Box>

      <CTABand />
    </>
  );
}
