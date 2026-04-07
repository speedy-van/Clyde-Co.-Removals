"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Box,
  Flex,
  IconButton,
  Button,
  Drawer,
  Portal,
  Stack,
  CloseButton,
} from "@chakra-ui/react";
import { FiMenu, FiPhone } from "react-icons/fi";
import { Logo } from "@/components/brand/Logo";
import { SITE } from "@/lib/config";
import { telHref } from "@/lib/links";

export interface NavbarProps {
  /** Make navbar transparent (for hero overlays) */
  transparent?: boolean;
}

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Areas", href: "/areas" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function Navbar({ transparent = false }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const onOpen = () => setIsOpen(true);
  const onClose = () => setIsOpen(false);

  return (
    <Box
      as="header"
      position="sticky"
      top={0}
      zIndex={1000}
      bg={transparent ? "transparent" : "white"}
      boxShadow={transparent ? "none" : "sm"}
      transition="all 0.2s"
    >
      <Flex
        maxW="1200px"
        mx="auto"
        px={{ base: 4, md: 8 }}
        h={{ base: "64px", md: "72px" }}
        align="center"
        justify="space-between"
      >
        {/* Logo */}
        <Link href="/" aria-label="Clyde & Co. Removals - Home">
          <Logo height={40} />
        </Link>

        {/* Desktop Navigation */}
        <Flex
          as="nav"
          display={{ base: "none", md: "flex" }}
          gap={8}
          align="center"
          role="navigation"
          aria-label="Main navigation"
        >
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              <Box
                fontSize="sm"
                fontWeight="500"
                color="clydeNavy"
                _hover={{ color: "heatherGold" }}
                transition="color 0.2s"
              >
                {link.label}
              </Box>
            </Link>
          ))}
        </Flex>

        {/* Desktop CTA */}
        <Flex display={{ base: "none", md: "flex" }} align="center" gap={3}>
          <Button
            asChild
            bg="heatherGold"
            color="white"
            fontWeight="600"
            px={5}
            _hover={{ bg: "#d4922f" }}
          >
            <a href={telHref()} aria-label={`Call ${SITE.phoneDisplay}`}>
              <FiPhone style={{ marginRight: "8px" }} />
              {SITE.phoneDisplay}
            </a>
          </Button>
        </Flex>

        {/* Mobile: Phone Icon + Hamburger */}
        <Flex display={{ base: "flex", md: "none" }} align="center" gap={2}>
          <IconButton
            asChild
            aria-label={`Call ${SITE.phoneDisplay}`}
            variant="ghost"
            color="clydeNavy"
            size="lg"
          >
            <a href={telHref()}>
              <FiPhone size={20} />
            </a>
          </IconButton>
          <IconButton
            aria-label="Open menu"
            variant="ghost"
            color="clydeNavy"
            size="lg"
            onClick={onOpen}
          >
            <FiMenu size={24} />
          </IconButton>
        </Flex>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer.Root open={isOpen} onOpenChange={(e) => setIsOpen(e.open)} placement="end">
        <Portal>
          <Drawer.Backdrop bg="blackAlpha.600" />
          <Drawer.Positioner>
            <Drawer.Content bg="white" maxW="280px">
              <Drawer.Header borderBottomWidth="1px" p={4}>
                <Flex justify="space-between" align="center">
                  <Logo height={32} />
                  <Drawer.CloseTrigger asChild>
                    <CloseButton size="lg" />
                  </Drawer.CloseTrigger>
                </Flex>
              </Drawer.Header>
              <Drawer.Body p={4}>
                <Stack as="nav" gap={0} role="navigation" aria-label="Mobile navigation">
                  {navLinks.map((link) => (
                    <Link key={link.href} href={link.href} onClick={onClose}>
                      <Box
                        py={3}
                        px={4}
                        fontSize="lg"
                        fontWeight="500"
                        color="clydeNavy"
                        borderRadius="md"
                        _hover={{ bg: "gray.100" }}
                        transition="background 0.2s"
                      >
                        {link.label}
                      </Box>
                    </Link>
                  ))}
                </Stack>
              </Drawer.Body>
              <Drawer.Footer borderTopWidth="1px" p={4}>
                <Button
                  asChild
                  w="100%"
                  bg="heatherGold"
                  color="white"
                  fontWeight="600"
                  size="lg"
                  _hover={{ bg: "#d4922f" }}
                >
                  <a href={telHref()} aria-label={`Call ${SITE.phoneDisplay}`}>
                    <FiPhone style={{ marginRight: "8px" }} />
                    {SITE.phoneDisplay}
                  </a>
                </Button>
              </Drawer.Footer>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Box>
  );
}
