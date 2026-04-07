"use client";

import { Box, SimpleGrid, Text, Flex, Icon } from "@chakra-ui/react";
import { FiStar } from "react-icons/fi";
import { Container, SectionHeading, MotionStagger, MotionStaggerItem } from "@/components/shared";

export type TestimonialsProps = Record<string, never>;

interface Testimonial {
  quote: string;
  name: string;
  location: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "Absolutely fantastic service from start to finish. The lads were careful with our furniture, quick to work, and nothing was too much trouble. Would recommend Clyde & Co. to anyone moving in Hamilton.",
    name: "Sarah M.",
    location: "Hamilton",
  },
  {
    quote:
      "We had a stressful last-minute move and they squeezed us in the same day. Professional, friendly, and the quote was exactly what we paid. No hidden surprises. Five stars from us.",
    name: "David & Karen T.",
    location: "East Kilbride",
  },
  {
    quote:
      "Used them for a single wardrobe delivery from Rutherglen to Bothwell. Arrived on time, handled it with care, and the price was very fair. Will definitely use again for our house move next year.",
    name: "Mark L.",
    location: "Rutherglen",
  },
];

function StarRating() {
  return (
    <Flex gap={1} mb={3}>
      {[...Array(5)].map((_, i) => (
        <Icon key={i} as={FiStar} color="heatherGold" fill="heatherGold" boxSize={4} />
      ))}
    </Flex>
  );
}

export function Testimonials() {
  return (
    <Box as="section" py={{ base: 16, md: 24 }} bg="neutralLight">
      <Container>
        <SectionHeading
          eyebrow="Testimonials"
          title="What Our Customers Say"
          subtitle="Don't just take our word for it — hear from families and businesses we've helped across South Lanarkshire."
        />

        <MotionStagger>
          <SimpleGrid columns={{ base: 1, md: 3 }} gap={6}>
            {testimonials.map((testimonial, index) => (
              <MotionStaggerItem key={index}>
                <Box
                  bg="white"
                  p={6}
                  borderRadius="lg"
                  boxShadow="sm"
                  h="100%"
                >
                  <StarRating />
                  <Text
                    color="neutralDark"
                    fontSize="md"
                    lineHeight="tall"
                    mb={4}
                    fontStyle="italic"
                  >
                    &ldquo;{testimonial.quote}&rdquo;
                  </Text>
                  <Box>
                    <Text
                      fontWeight="600"
                      color="clydeNavy"
                      fontSize="sm"
                    >
                      {testimonial.name}
                    </Text>
                    <Text color="muted" fontSize="sm">
                      {testimonial.location}
                    </Text>
                  </Box>
                </Box>
              </MotionStaggerItem>
            ))}
          </SimpleGrid>
        </MotionStagger>
      </Container>
    </Box>
  );
}
