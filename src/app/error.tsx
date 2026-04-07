"use client";

import { useEffect } from "react";
import { Box, Heading, Text, Flex, Button } from "@chakra-ui/react";
import { Container, PhoneButton, WhatsAppButton } from "@/components/shared";

export interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

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
            fontSize="6xl"
            fontWeight="700"
            color="clydeNavy"
            opacity={0.2}
            lineHeight={1}
            mb={-2}
          >
            Oops
          </Text>
          <Heading
            as="h1"
            fontFamily="var(--font-playfair)"
            fontSize={{ base: "2xl", md: "3xl" }}
            fontWeight="700"
            color="clydeNavy"
            mb={4}
          >
            Something Went Wrong
          </Heading>
          <Text color="muted" fontSize="lg" maxW="md" mb={8}>
            We apologise for the inconvenience. Please try again or get in touch
            with us directly.
          </Text>

          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={4}
            mb={6}
          >
            <Button
              onClick={reset}
              bg="clydeNavy"
              color="white"
              fontWeight="600"
              px={6}
              py={3}
              _hover={{ bg: "#0a2540" }}
            >
              Try Again
            </Button>
          </Flex>

          <Flex
            direction={{ base: "column", sm: "row" }}
            gap={4}
          >
            <PhoneButton variant="outline" size="md" />
            <WhatsAppButton variant="outline" size="md" />
          </Flex>
        </Flex>
      </Container>
    </Box>
  );
}
