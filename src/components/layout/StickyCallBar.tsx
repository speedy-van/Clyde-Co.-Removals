"use client";

import { Box, Flex, Text, Icon, Link } from "@chakra-ui/react";
import { FiPhone } from "react-icons/fi";
import { FaWhatsapp } from "react-icons/fa";
import { SITE } from "@/lib/config";
import { telHref, whatsappHref } from "@/lib/links";

export type StickyCallBarProps = Record<string, never>;

/**
 * Fixed bottom bar with Call and WhatsApp buttons
 * Visible only on mobile devices
 */
export function StickyCallBar() {
  return (
    <Box
      display={{ base: "block", md: "none" }}
      position="fixed"
      bottom={0}
      left={0}
      right={0}
      zIndex={1100}
      bg="white"
      boxShadow="0 -2px 10px rgba(0, 0, 0, 0.1)"
      borderTopWidth="1px"
      borderColor="gray.200"
      pb="env(safe-area-inset-bottom)"
    >
      <Flex h="56px">
        {/* Call Button - Navy */}
        <Link
          href={telHref()}
          aria-label={`Call ${SITE.name}`}
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          bg="clydeNavy"
          color="white"
          fontWeight="600"
          fontSize="sm"
          transition="background 0.2s"
          _hover={{ bg: "#0a2540", textDecoration: "none" }}
          _active={{ bg: "#081d30" }}
        >
          <Icon as={FiPhone} boxSize={5} />
          <Text>Call</Text>
        </Link>

        {/* WhatsApp Button - Gold */}
        <Link
          href={whatsappHref()}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Message ${SITE.name} on WhatsApp`}
          flex={1}
          display="flex"
          alignItems="center"
          justifyContent="center"
          gap={2}
          bg="heatherGold"
          color="white"
          fontWeight="600"
          fontSize="sm"
          transition="background 0.2s"
          _hover={{ bg: "#d4922f", textDecoration: "none" }}
          _active={{ bg: "#c08529" }}
        >
          <Icon as={FaWhatsapp} boxSize={5} />
          <Text>WhatsApp</Text>
        </Link>
      </Flex>
    </Box>
  );
}
