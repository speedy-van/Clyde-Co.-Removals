"use client";

import Link from "next/link";
import { Box, Flex, Text, SimpleGrid, Stack, Icon } from "@chakra-ui/react";
import { FiPhone, FiMail, FiMapPin, FiClock } from "react-icons/fi";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { Logo } from "@/components/brand/Logo";
import { Container } from "@/components/shared/Container";
import { SITE } from "@/lib/config";
import { telHref, emailHref, areaToSlug } from "@/lib/links";

export type FooterProps = Record<string, never>;

export function Footer() {
  const currentYear = new Date().getFullYear();

  const footerServices = SITE.services.slice(0, 5);
  const footerAreas = SITE.areas.slice(0, 6);

  return (
    <Box as="footer" bg="clydeNavy" color="white" pt={16} pb={8}>
      <Container>
        {/* Main Footer Grid */}
        <SimpleGrid
          columns={{ base: 1, sm: 2, lg: 4 }}
          gap={{ base: 8, lg: 10 }}
          mb={12}
        >
          {/* Brand Column */}
          <Box>
            <Logo variant="mono" height={40} />
            <Text mt={4} color="whiteAlpha.800" fontSize="sm" lineHeight="tall">
              {SITE.tagline}
            </Text>
            <Text mt={4} color="whiteAlpha.700" fontSize="sm">
              Professional furniture removals serving all of South Lanarkshire
              with care and reliability.
            </Text>
            {/* Social Links */}
            {(SITE.social.facebook || SITE.social.instagram) && (
              <Flex mt={4} gap={3}>
                {SITE.social.facebook && (
                  <Link
                    href={SITE.social.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Facebook"
                  >
                    <Icon
                      as={FaFacebook}
                      boxSize={5}
                      color="whiteAlpha.700"
                      _hover={{ color: "heatherGold" }}
                      transition="color 0.2s"
                    />
                  </Link>
                )}
                {SITE.social.instagram && (
                  <Link
                    href={SITE.social.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Follow us on Instagram"
                  >
                    <Icon
                      as={FaInstagram}
                      boxSize={5}
                      color="whiteAlpha.700"
                      _hover={{ color: "heatherGold" }}
                      transition="color 0.2s"
                    />
                  </Link>
                )}
              </Flex>
            )}
          </Box>

          {/* Services Column */}
          <Box>
            <Text
              fontWeight="600"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
              color="heatherGold"
            >
              Services
            </Text>
            <Stack gap={2}>
              {footerServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                >
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.800"
                    _hover={{ color: "heatherGold" }}
                    transition="color 0.2s"
                  >
                    {service.title}
                  </Text>
                </Link>
              ))}
              <Link href="/services">
                <Text
                  fontSize="sm"
                  color="heatherGold"
                  fontWeight="500"
                  _hover={{ textDecoration: "underline" }}
                >
                  View all services →
                </Text>
              </Link>
            </Stack>
          </Box>

          {/* Areas Column */}
          <Box>
            <Text
              fontWeight="600"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
              color="heatherGold"
            >
              Areas We Serve
            </Text>
            <Stack gap={2}>
              {footerAreas.map((area) => (
                <Link
                  key={area}
                  href={`/areas/${areaToSlug(area)}`}
                >
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.800"
                    _hover={{ color: "heatherGold" }}
                    transition="color 0.2s"
                  >
                    {area}
                  </Text>
                </Link>
              ))}
              <Link href="/areas">
                <Text
                  fontSize="sm"
                  color="heatherGold"
                  fontWeight="500"
                  _hover={{ textDecoration: "underline" }}
                >
                  View all areas →
                </Text>
              </Link>
            </Stack>
          </Box>

          {/* Contact Column */}
          <Box>
            <Text
              fontWeight="600"
              fontSize="sm"
              textTransform="uppercase"
              letterSpacing="wider"
              mb={4}
              color="heatherGold"
            >
              Contact
            </Text>
            <Stack gap={3}>
              <Flex align="flex-start" gap={3}>
                <Icon as={FiPhone} color="heatherGold" mt={1} />
                <Box>
                  <a href={telHref()}>
                    <Text
                      fontSize="sm"
                      fontWeight="500"
                      color="white"
                      _hover={{ color: "heatherGold" }}
                      transition="color 0.2s"
                    >
                      {SITE.phoneDisplay}
                    </Text>
                  </a>
                </Box>
              </Flex>
              <Flex align="flex-start" gap={3}>
                <Icon as={FiMail} color="heatherGold" mt={1} />
                <a href={emailHref()}>
                  <Text
                    fontSize="sm"
                    color="whiteAlpha.800"
                    _hover={{ color: "heatherGold" }}
                    transition="color 0.2s"
                    wordBreak="break-all"
                  >
                    {SITE.email}
                  </Text>
                </a>
              </Flex>
              <Flex align="flex-start" gap={3}>
                <Icon as={FiMapPin} color="heatherGold" mt={1} />
                <Text fontSize="sm" color="whiteAlpha.800">
                  {SITE.address.city}, {SITE.address.region}
                </Text>
              </Flex>
              <Flex align="flex-start" gap={3}>
                <Icon as={FiClock} color="heatherGold" mt={1} />
                <Text fontSize="sm" color="whiteAlpha.800">
                  {SITE.hours}
                </Text>
              </Flex>
            </Stack>
          </Box>
        </SimpleGrid>

        {/* Bottom Bar */}
        <Box
          borderTopWidth="1px"
          borderColor="whiteAlpha.200"
          pt={6}
        >
          <Flex
            direction={{ base: "column", md: "row" }}
            justify="space-between"
            align={{ base: "center", md: "center" }}
            gap={4}
          >
            <Text fontSize="xs" color="whiteAlpha.600">
              © {currentYear} {SITE.legalName}. All rights reserved.
            </Text>
            <Flex gap={6}>
              <Link href="/privacy">
                <Text
                  fontSize="xs"
                  color="whiteAlpha.600"
                  _hover={{ color: "whiteAlpha.900" }}
                  transition="color 0.2s"
                >
                  Privacy Policy
                </Text>
              </Link>
              <Link href="/terms">
                <Text
                  fontSize="xs"
                  color="whiteAlpha.600"
                  _hover={{ color: "whiteAlpha.900" }}
                  transition="color 0.2s"
                >
                  Terms of Service
                </Text>
              </Link>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </Box>
  );
}
