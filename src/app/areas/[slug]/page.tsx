import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  List,
  Flex,
} from "@chakra-ui/react";
import {
  Container,
  SectionHeading,
  MotionSection,
  PhoneButton,
  WhatsAppButton,
  TrustBadges,
  IconDisplay,
} from "@/components/shared";
import { CTABand } from "@/components/home";
import { SITE } from "@/lib/config";
import { areaToSlug, slugToArea } from "@/lib/links";
import { getAreaContent } from "@/lib/area-content";
import { generateAreaMetadata, generateAreaBusinessSchema } from "@/lib/seo";

interface AreaPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE.areas.map((area) => ({
    slug: areaToSlug(area),
  }));
}

export async function generateMetadata({
  params,
}: AreaPageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = slugToArea(slug);
  if (!area) return {};
  return generateAreaMetadata(area, slug);
}

export default async function AreaPage({ params }: AreaPageProps) {
  const { slug } = await params;
  const area = slugToArea(slug);

  if (!area) {
    notFound();
  }

  const content = getAreaContent(slug);
  const schema = generateAreaBusinessSchema(area);

  // Get nearby areas (excluding current)
  const nearbyAreas = SITE.areas
    .filter((a) => a !== area)
    .slice(0, 4);

  return (
    <>
      <Script
        id={`area-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <Box bg="clydeNavy" py={{ base: 16, md: 24 }}>
        <Container>
          <MotionSection>
            <Flex align="center" justify="center" gap={3} mb={4}>
              <IconDisplay name="map-pin" color="heatherGold" boxSize={6} />
              <Text
                color="heatherGold"
                fontSize="sm"
                fontWeight="600"
                textTransform="uppercase"
                letterSpacing="wider"
              >
                South Lanarkshire
              </Text>
            </Flex>
            <Heading
              as="h1"
              fontFamily="var(--font-playfair)"
              fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
              fontWeight="700"
              color="white"
              textAlign="center"
              mb={4}
            >
              Furniture Removals in {area}
            </Heading>
            <Text
              color="whiteAlpha.800"
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              maxW="2xl"
              mx="auto"
              mb={8}
            >
              Professional house and office removals across {area} and
              surrounding areas. Fully insured local service with fixed quotes.
            </Text>
            <Flex
              gap={4}
              direction={{ base: "column", sm: "row" }}
              justify="center"
            >
              <PhoneButton variant="primary" size="lg" />
              <WhatsAppButton variant="outline" size="lg" />
            </Flex>
          </MotionSection>
        </Container>
      </Box>

      {/* Trust Strip */}
      <Box bg="neutralLight" py={4} borderBottomWidth="1px" borderColor="gray.200">
        <Container>
          <TrustBadges variant="light" />
        </Container>
      </Box>

      {/* Main Content */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container>
          <SimpleGrid columns={{ base: 1, lg: 3 }} gap={12}>
            {/* Main Content */}
            <Box gridColumn={{ lg: "span 2" }}>
              {content && (
                <>
                  <MotionSection>
                    <Box mb={10}>
                      <SectionHeading
                        title={`Removals in ${area}`}
                        align="left"
                      />
                      <Text
                        color="neutralDark"
                        fontSize="lg"
                        lineHeight="tall"
                      >
                        {content.intro}
                      </Text>
                    </Box>
                  </MotionSection>

                  <MotionSection delay={0.1}>
                    <Box mb={10}>
                      <SectionHeading
                        title={`Why Choose Us for ${area} Removals`}
                        align="left"
                      />
                      <List.Root gap={3}>
                        {content.highlights.map((highlight, index) => (
                          <List.Item
                            key={index}
                            display="flex"
                            alignItems="flex-start"
                            gap={3}
                          >
                            <IconDisplay
                              name="check"
                              color="success"
                              boxSize={5}
                              mt={1}
                              flexShrink={0}
                            />
                            <Text color="neutralDark">{highlight}</Text>
                          </List.Item>
                        ))}
                      </List.Root>
                    </Box>
                  </MotionSection>
                </>
              )}

              <MotionSection delay={0.2}>
                <Box mb={10}>
                  <SectionHeading
                    title="Our Services"
                    align="left"
                  />
                  <Text color="neutralDark" lineHeight="tall" mb={6}>
                    We offer a full range of removal services to {area}{" "}
                    residents and businesses:
                  </Text>
                  <SimpleGrid columns={{ base: 1, sm: 2 }} gap={4}>
                    {SITE.services.map((service) => (
                      <Link
                        key={service.slug}
                        href={`/services/${service.slug}`}
                      >
                        <Flex
                          align="center"
                          gap={2}
                          p={3}
                          bg="neutralLight"
                          borderRadius="md"
                          _hover={{ bg: "gray.100" }}
                          transition="background 0.2s"
                        >
                          <IconDisplay
                            name="arrow-right"
                            color="heatherGold"
                            boxSize={4}
                          />
                          <Text color="clydeNavy" fontWeight="500">
                            {service.title}
                          </Text>
                        </Flex>
                      </Link>
                    ))}
                  </SimpleGrid>
                </Box>
              </MotionSection>
            </Box>

            {/* Sidebar */}
            <Box>
              <MotionSection delay={0.2}>
                <Box
                  bg="neutralLight"
                  p={6}
                  borderRadius="lg"
                  position="sticky"
                  top="100px"
                >
                  <Heading
                    as="h3"
                    fontSize="lg"
                    fontFamily="var(--font-playfair)"
                    fontWeight="600"
                    color="clydeNavy"
                    mb={4}
                  >
                    Get a Free Quote
                  </Heading>
                  <Text color="muted" fontSize="sm" mb={6}>
                    Moving in {area}? Call or message us for a free,
                    no-obligation quote. We respond quickly with fixed prices.
                  </Text>
                  <Flex direction="column" gap={3}>
                    <PhoneButton variant="primary" fullWidth />
                    <WhatsAppButton variant="primary" fullWidth />
                  </Flex>

                  <Box
                    mt={6}
                    pt={6}
                    borderTopWidth="1px"
                    borderColor="gray.200"
                  >
                    <Heading
                      as="h4"
                      fontSize="sm"
                      fontWeight="600"
                      color="clydeNavy"
                      mb={3}
                      textTransform="uppercase"
                      letterSpacing="wide"
                    >
                      Nearby Areas
                    </Heading>
                    <Flex direction="column" gap={2}>
                      {nearbyAreas.map((nearbyArea) => (
                        <Link
                          key={nearbyArea}
                          href={`/areas/${areaToSlug(nearbyArea)}`}
                        >
                          <Flex
                            align="center"
                            gap={2}
                            color="muted"
                            fontSize="sm"
                            _hover={{ color: "heatherGold" }}
                            transition="color 0.2s"
                          >
                            <IconDisplay name="map-pin" boxSize={3} />
                            {nearbyArea}
                          </Flex>
                        </Link>
                      ))}
                      <Link href="/areas">
                        <Text
                          color="heatherGold"
                          fontSize="sm"
                          fontWeight="500"
                          mt={2}
                          _hover={{ textDecoration: "underline" }}
                        >
                          View all areas →
                        </Text>
                      </Link>
                    </Flex>
                  </Box>
                </Box>
              </MotionSection>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>

      <CTABand />
    </>
  );
}
