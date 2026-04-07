import { Box, Heading, Text, Flex } from "@chakra-ui/react";
import { Container, PhoneButton, WhatsAppButton } from "@/components/shared";
import Link from "next/link";

export default function NotFound() {
  return (
    <Box
      minH="70vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bg="neutralLight"
    >
      <Container>
        <Flex direction="column" align="center" textAlign="center">
          <Text
            fontSize="8xl"
            fontWeight="700"
            color="clydeNavy"
            opacity={0.2}
            lineHeight={1}
            mb={-4}
          >
            404
          </Text>
          <Heading
            as="h1"
            fontFamily="var(--font-playfair)"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            color="clydeNavy"
            mb={4}
          >
            Page Not Found
          </Heading>
          <Text color="muted" fontSize="lg" maxW="md" mb={8}>
            Sorry, we couldn&apos;t find the page you&apos;re looking for. It may have
            been moved or doesn&apos;t exist.
          </Text>

          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={4}
            mb={6}
          >
            <PhoneButton variant="primary" size="lg" />
            <WhatsAppButton variant="primary" size="lg" />
          </Flex>

          <Link href="/">
            <Text
              color="heatherGold"
              fontWeight="500"
              _hover={{ textDecoration: "underline" }}
            >
              ← Back to Home
            </Text>
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
