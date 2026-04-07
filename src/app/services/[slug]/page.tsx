import { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
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
import { getServiceContent } from "@/lib/service-content";
import { generateServiceMetadata, generateServiceSchema } from "@/lib/seo";

interface ServicePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SITE.services.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({
  params,
}: ServicePageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = SITE.services.find((s) => s.slug === slug);
  if (!service) return {};
  return generateServiceMetadata(slug, service.title);
}

export default async function ServicePage({ params }: ServicePageProps) {
  const { slug } = await params;
  const service = SITE.services.find((s) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const content = getServiceContent(slug);
  const schema = generateServiceSchema(slug, service.title);

  // Get related services (excluding current)
  const relatedServices = SITE.services
    .filter((s) => s.slug !== slug)
    .slice(0, 3);

  return (
    <>
      <Script
        id={`service-schema-${slug}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      {/* Hero Section */}
      <Box position="relative" overflow="hidden">
        {/* Background Image */}
        <Box position="absolute" inset={0} zIndex={0}>
          <Image
            src={service.image}
            alt={`${service.title} - Clyde & Co. Removals`}
            fill
            style={{ objectFit: "cover" }}
            priority
          />
          <Box
            position="absolute"
            inset={0}
            bgGradient="linear(to-r, blackAlpha.800, blackAlpha.600)"
          />
        </Box>

        <Box position="relative" zIndex={1} py={{ base: 16, md: 24 }}>
          <Container>
            <MotionSection>
              <Flex
                direction={{ base: "column", md: "row" }}
                align="center"
                gap={{ base: 6, md: 12 }}
              >
                <Flex
                  w={{ base: 20, md: 24 }}
                  h={{ base: 20, md: 24 }}
                  bg="whiteAlpha.200"
                  borderRadius="xl"
                  align="center"
                  justify="center"
                  flexShrink={0}
                  backdropFilter="blur(8px)"
                >
                  <IconDisplay
                    name={service.icon}
                    color="heatherGold"
                    boxSize={{ base: 10, md: 12 }}
                  />
                </Flex>
                <Box textAlign={{ base: "center", md: "left" }}>
                  <Heading
                    as="h1"
                    fontFamily="var(--font-playfair)"
                    fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                    fontWeight="700"
                    color="white"
                    mb={4}
                  >
                    {service.title}
                  </Heading>
                  <Text
                    color="whiteAlpha.800"
                    fontSize={{ base: "lg", md: "xl" }}
                    maxW="2xl"
                    mb={6}
                  >
                    Professional {service.title.toLowerCase()} across South
                    Lanarkshire. Fully insured with transparent, fixed-price
                    quotes.
                  </Text>
                  <Flex
                    gap={4}
                    direction={{ base: "column", sm: "row" }}
                    justify={{ base: "center", md: "flex-start" }}
                  >
                    <PhoneButton variant="primary" size="lg" />
                    <WhatsAppButton variant="outline" size="lg" />
                  </Flex>
                </Box>
              </Flex>
            </MotionSection>
          </Container>
        </Box>
      </Box>

      {/* Trust Strip */}
      <Box bg="neutralLight" py={4} borderBottomWidth="1px" borderColor="gray.200">
        <Container>
          <TrustBadges variant="light" />
        </Container>
      </Box>

      {/* Main Content */}
      {content && (
        <Box py={{ base: 12, md: 20 }} bg="white">
          <Container>
            <SimpleGrid columns={{ base: 1, lg: 3 }} gap={12}>
              {/* Main Content */}
              <Box gridColumn={{ lg: "span 2" }}>
                <MotionSection>
                  <Box mb={10}>
                    <SectionHeading
                      title="Overview"
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
                      title="What's Included"
                      align="left"
                    />
                    <List.Root gap={3}>
                      {content.features.map((feature, index) => (
                        <List.Item key={index} display="flex" alignItems="flex-start" gap={3}>
                          <IconDisplay
                            name="check"
                            color="success"
                            boxSize={5}
                            mt={1}
                            flexShrink={0}
                          />
                          <Text color="neutralDark">{feature}</Text>
                        </List.Item>
                      ))}
                    </List.Root>
                  </Box>
                </MotionSection>

                <MotionSection delay={0.2}>
                  <Box mb={10}>
                    <SectionHeading
                      title="Our Process"
                      align="left"
                    />
                    <Text color="neutralDark" lineHeight="tall">
                      {content.process}
                    </Text>
                  </Box>
                </MotionSection>

                <MotionSection delay={0.3}>
                  <Box>
                    <SectionHeading
                      title="Pricing"
                      align="left"
                    />
                    <Text color="neutralDark" lineHeight="tall">
                      {content.pricing}
                    </Text>
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
                      Call or message us today for a no-obligation quote. We
                      respond quickly and provide fixed prices with no hidden
                      fees.
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
                        Other Services
                      </Heading>
                      <Flex direction="column" gap={2}>
                        {relatedServices.map((related) => (
                          <Link
                            key={related.slug}
                            href={`/services/${related.slug}`}
                          >
                            <Flex
                              align="center"
                              gap={2}
                              color="muted"
                              fontSize="sm"
                              _hover={{ color: "heatherGold" }}
                              transition="color 0.2s"
                            >
                              <IconDisplay name="arrow-right" boxSize={3} />
                              {related.title}
                            </Flex>
                          </Link>
                        ))}
                        <Link href="/services">
                          <Text
                            color="heatherGold"
                            fontSize="sm"
                            fontWeight="500"
                            mt={2}
                            _hover={{ textDecoration: "underline" }}
                          >
                            View all services →
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
      )}

      <CTABand />
    </>
  );
}
