import { Metadata } from "next";
import { Box, Heading, Text, SimpleGrid, Flex, Stack } from "@chakra-ui/react";
import {
  Container,
  SectionHeading,
  MotionSection,
  PhoneButton,
  WhatsAppButton,
  IconDisplay,
} from "@/components/shared";
import { SITE } from "@/lib/config";
import { telHref, emailHref } from "@/lib/links";

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${SITE.name}. Call ${SITE.phoneDisplay} or WhatsApp us for a free quote. Professional furniture removals across South Lanarkshire.`,
};

export default function ContactPage() {
  return (
    <>
      {/* Hero Section */}
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
              Get In Touch
            </Heading>
            <Text
              color="whiteAlpha.800"
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              maxW="2xl"
              mx="auto"
            >
              Ready to book your move? Have questions about our services? We&apos;re
              here to help. Call or WhatsApp us for a quick, friendly response.
            </Text>
          </MotionSection>
        </Container>
      </Box>

      {/* Contact Info & Map */}
      <Box py={{ base: 16, md: 24 }} bg="neutralLight">
        <Container>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12}>
            {/* Contact Details */}
            <MotionSection>
              <Box>
                <SectionHeading
                  title="Contact Details"
                  align="left"
                />

                {/* CTA Buttons */}
                <Stack direction={{ base: "column", sm: "row" }} gap={4} mb={10}>
                  <PhoneButton variant="primary" size="lg" />
                  <WhatsAppButton variant="primary" size="lg" />
                </Stack>

                {/* Contact Info Cards */}
                <Stack gap={4}>
                  {/* Phone */}
                  <Flex
                    bg="white"
                    p={5}
                    borderRadius="lg"
                    gap={4}
                    align="flex-start"
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
                      <IconDisplay name="phone" color="heatherGold" boxSize={5} />
                    </Flex>
                    <Box>
                      <Text fontWeight="600" color="clydeNavy" mb={1}>
                        Phone
                      </Text>
                      <a href={telHref()}>
                        <Text
                          color="muted"
                          fontSize="lg"
                          _hover={{ color: "heatherGold" }}
                          transition="color 0.2s"
                        >
                          {SITE.phoneDisplay}
                        </Text>
                      </a>
                      <Text color="muted" fontSize="sm" mt={1}>
                        Tap to call directly
                      </Text>
                    </Box>
                  </Flex>

                  {/* WhatsApp */}
                  <Flex
                    bg="white"
                    p={5}
                    borderRadius="lg"
                    gap={4}
                    align="flex-start"
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
                      <IconDisplay name="whatsapp" color="heatherGold" boxSize={5} />
                    </Flex>
                    <Box>
                      <Text fontWeight="600" color="clydeNavy" mb={1}>
                        WhatsApp
                      </Text>
                      <Text color="muted" fontSize="lg">
                        {SITE.phoneDisplay}
                      </Text>
                      <Text color="muted" fontSize="sm" mt={1}>
                        Message us for a quick quote
                      </Text>
                    </Box>
                  </Flex>

                  {/* Email */}
                  <Flex
                    bg="white"
                    p={5}
                    borderRadius="lg"
                    gap={4}
                    align="flex-start"
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
                      <IconDisplay name="mail" color="heatherGold" boxSize={5} />
                    </Flex>
                    <Box>
                      <Text fontWeight="600" color="clydeNavy" mb={1}>
                        Email
                      </Text>
                      <a href={emailHref()}>
                        <Text
                          color="muted"
                          fontSize="md"
                          _hover={{ color: "heatherGold" }}
                          transition="color 0.2s"
                          wordBreak="break-all"
                        >
                          {SITE.email}
                        </Text>
                      </a>
                      <Text color="muted" fontSize="sm" mt={1}>
                        For general enquiries
                      </Text>
                    </Box>
                  </Flex>

                  {/* Hours */}
                  <Flex
                    bg="white"
                    p={5}
                    borderRadius="lg"
                    gap={4}
                    align="flex-start"
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
                      <IconDisplay name="clock" color="heatherGold" boxSize={5} />
                    </Flex>
                    <Box>
                      <Text fontWeight="600" color="clydeNavy" mb={1}>
                        Opening Hours
                      </Text>
                      <Text color="muted" fontSize="lg">
                        {SITE.hours}
                      </Text>
                      <Text color="muted" fontSize="sm" mt={1}>
                        Including weekends and bank holidays
                      </Text>
                    </Box>
                  </Flex>

                  {/* Location */}
                  <Flex
                    bg="white"
                    p={5}
                    borderRadius="lg"
                    gap={4}
                    align="flex-start"
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
                      <IconDisplay name="map-pin" color="heatherGold" boxSize={5} />
                    </Flex>
                    <Box>
                      <Text fontWeight="600" color="clydeNavy" mb={1}>
                        Location
                      </Text>
                      <Text color="muted" fontSize="lg">
                        {SITE.address.city}, {SITE.address.region}
                      </Text>
                      <Text color="muted" fontSize="sm" mt={1}>
                        Serving all of South Lanarkshire
                      </Text>
                    </Box>
                  </Flex>
                </Stack>
              </Box>
            </MotionSection>

            {/* Map */}
            <MotionSection delay={0.2}>
              <Box>
                <SectionHeading
                  title="Find Us"
                  align="left"
                />
                <Box
                  borderRadius="lg"
                  overflow="hidden"
                  h={{ base: "300px", md: "500px" }}
                  bg="gray.100"
                >
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d71494.61936461878!2d-4.0931!3d55.7775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4888457d73d8e219%3A0x5c5d1c42d5edb35c!2sHamilton%2C%20UK!5e0!3m2!1sen!2s!4v1696000000000!5m2!1sen!2s"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Clyde & Co. Removals service area - Hamilton, South Lanarkshire"
                  />
                </Box>
                <Text color="muted" fontSize="sm" mt={3}>
                  Based in Hamilton, we serve all of South Lanarkshire including
                  East Kilbride, Rutherglen, Cambuslang, Blantyre, and beyond.
                </Text>
              </Box>
            </MotionSection>
          </SimpleGrid>
        </Container>
      </Box>

      {/* FAQ Section */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container>
          <MotionSection>
            <SectionHeading
              eyebrow="Questions?"
              title="How Booking Works"
              subtitle="Getting a quote and booking your move is simple."
            />
          </MotionSection>

          <MotionSection delay={0.2}>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap={8} maxW="4xl" mx="auto">
              <Box textAlign="center">
                <Text
                  fontSize="3xl"
                  fontWeight="700"
                  color="heatherGold"
                  mb={2}
                >
                  1
                </Text>
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontFamily="var(--font-playfair)"
                  color="clydeNavy"
                  mb={2}
                >
                  Get in Touch
                </Heading>
                <Text color="muted" fontSize="sm">
                  Call or WhatsApp us with details of your move—what you need
                  moved, from where, and to where.
                </Text>
              </Box>

              <Box textAlign="center">
                <Text
                  fontSize="3xl"
                  fontWeight="700"
                  color="heatherGold"
                  mb={2}
                >
                  2
                </Text>
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontFamily="var(--font-playfair)"
                  color="clydeNavy"
                  mb={2}
                >
                  Receive Your Quote
                </Heading>
                <Text color="muted" fontSize="sm">
                  We&apos;ll provide a fixed price quote, usually within hours.
                  For larger moves, we may arrange a free home visit.
                </Text>
              </Box>

              <Box textAlign="center">
                <Text
                  fontSize="3xl"
                  fontWeight="700"
                  color="heatherGold"
                  mb={2}
                >
                  3
                </Text>
                <Heading
                  as="h3"
                  fontSize="lg"
                  fontFamily="var(--font-playfair)"
                  color="clydeNavy"
                  mb={2}
                >
                  Confirm & Relax
                </Heading>
                <Text color="muted" fontSize="sm">
                  Once you&apos;re happy, we&apos;ll lock in your date. On moving
                  day, we handle everything while you focus on settling in.
                </Text>
              </Box>
            </SimpleGrid>
          </MotionSection>
        </Container>
      </Box>
    </>
  );
}
