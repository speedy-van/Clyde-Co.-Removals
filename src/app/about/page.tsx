import { Metadata } from "next";
import Image from "next/image";
import { Box, Heading, Text, SimpleGrid, Flex } from "@chakra-ui/react";
import {
  Container,
  SectionHeading,
  MotionSection,
  MotionStagger,
  MotionStaggerItem,
  IconDisplay,
  type IconName,
} from "@/components/shared";
import { CTABand } from "@/components/home";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${SITE.name} - a family-run furniture removal company serving South Lanarkshire. ${SITE.tagline}`,
};

interface Value {
  icon: IconName;
  title: string;
  description: string;
}

const values: Value[] = [
  {
    icon: "heart",
    title: "Care",
    description:
      "We treat every item as if it were our own. From a cherished family heirloom to a well-worn sofa, everything gets handled with respect and attention.",
  },
  {
    icon: "shield",
    title: "Reliability",
    description:
      "When we say we'll be there at 8am, we mean it. Our reputation depends on keeping our word, and we've built a business on that foundation.",
  },
  {
    icon: "users",
    title: "Local Knowledge",
    description:
      "We live and work in South Lanarkshire. We know the roads, the parking restrictions, and the communities we serve.",
  },
  {
    icon: "star",
    title: "Honesty",
    description:
      "Fixed quotes mean fixed quotes. No hidden charges, no surprises on moving day. What we say is what you pay.",
  },
];

export default function AboutPage() {
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
              About Clyde & Co. Removals
            </Heading>
            <Text
              color="heatherGold"
              fontSize={{ base: "lg", md: "xl" }}
              textAlign="center"
              fontStyle="italic"
            >
              {SITE.tagline}
            </Text>
          </MotionSection>
        </Container>
      </Box>

      {/* Our Story */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
            <MotionSection>
              <Box>
                <SectionHeading
                  eyebrow="Our Story"
                  title="Rooted in the Clyde"
                  align="left"
                />
                <Text color="neutralDark" fontSize="lg" lineHeight="tall" mb={4}>
                  Clyde & Co. Removals was born from a simple idea: that moving
                  home shouldn&apos;t be a stressful ordeal. Founded by a local
                  family with deep roots in South Lanarkshire, we set out to
                  offer something different—a removal service built on genuine
                  care, honest pricing, and proper local knowledge.
                </Text>
                <Text color="neutralDark" fontSize="lg" lineHeight="tall" mb={4}>
                  The River Clyde has shaped this region for centuries. Its
                  waters powered the industries that built our communities, and
                  its valley connects the towns and villages we now serve. When
                  we chose our name, we wanted to honour that connection—to
                  signal that we&apos;re not a faceless national chain, but a
                  business rooted in this place.
                </Text>
                <Text color="neutralDark" fontSize="lg" lineHeight="tall">
                  From our base in Hamilton, we serve families and businesses
                  across South Lanarkshire. Every move matters to us because our
                  reputation in this community is built one customer at a time.
                  When you trust us with your belongings, you&apos;re not just
                  hiring a removal company—you&apos;re working with neighbours
                  who understand what a move means.
                </Text>
              </Box>
            </MotionSection>

            <MotionSection delay={0.2}>
              <Box
                position="relative"
                borderRadius="xl"
                overflow="hidden"
                h={{ base: "300px", md: "400px" }}
              >
                <Image
                  src="/images/about-team.jpg"
                  alt="The Clyde & Co. Removals team"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </MotionSection>
          </SimpleGrid>
        </Container>
      </Box>

      {/* Our Values */}
      <Box py={{ base: 16, md: 24 }} bg="neutralLight">
        <Container>
          <MotionSection>
            <SectionHeading
              eyebrow="Our Values"
              title="What We Stand For"
              subtitle="These aren't just words on a wall. They guide every decision we make and every move we handle."
            />
          </MotionSection>

          <MotionStagger>
            <SimpleGrid columns={{ base: 1, sm: 2, lg: 4 }} gap={8}>
              {values.map((value) => (
                <MotionStaggerItem key={value.title}>
                  <Box
                    bg="white"
                    p={6}
                    borderRadius="lg"
                    h="100%"
                  >
                    <Flex
                      w={12}
                      h={12}
                      bg="clydeNavy"
                      borderRadius="lg"
                      align="center"
                      justify="center"
                      mb={4}
                    >
                      <IconDisplay name={value.icon} color="heatherGold" boxSize={6} />
                    </Flex>
                    <Heading
                      as="h3"
                      fontSize="lg"
                      fontFamily="var(--font-playfair)"
                      fontWeight="600"
                      color="clydeNavy"
                      mb={3}
                    >
                      {value.title}
                    </Heading>
                    <Text color="muted" fontSize="sm" lineHeight="tall">
                      {value.description}
                    </Text>
                  </Box>
                </MotionStaggerItem>
              ))}
            </SimpleGrid>
          </MotionStagger>
        </Container>
      </Box>

      {/* Why Choose Us */}
      <Box py={{ base: 16, md: 24 }} bg="white">
        <Container>
          <SimpleGrid columns={{ base: 1, lg: 2 }} gap={12} alignItems="center">
            <MotionSection>
              <Box
                bg="neutralLight"
                borderRadius="xl"
                p={8}
                h={{ base: "300px", md: "400px" }}
                display="flex"
                alignItems="center"
                justifyContent="center"
              >
                <Text color="muted" textAlign="center">
                  [Van/equipment photo placeholder]
                </Text>
              </Box>
            </MotionSection>

            <MotionSection delay={0.2}>
              <Box>
                <SectionHeading
                  eyebrow="Why Clyde & Co."
                  title="The Local Difference"
                  align="left"
                />
                <Text color="neutralDark" fontSize="lg" lineHeight="tall" mb={4}>
                  When you book a national removal company, you might get a
                  driver who&apos;s never been to South Lanarkshire before.
                  They&apos;ll rely on sat-nav, struggle with local parking
                  restrictions, and treat your move as just another job in a
                  long day.
                </Text>
                <Text color="neutralDark" fontSize="lg" lineHeight="tall" mb={4}>
                  With Clyde & Co., you get a team that knows these streets. We
                  understand that the best time to move in East Kilbride is
                  different from Hamilton. We know which Rutherglen tenements
                  have tricky staircases and which Bothwell streets require
                  permits.
                </Text>
                <Text color="neutralDark" fontSize="lg" lineHeight="tall">
                  This knowledge isn&apos;t just convenient—it means your move
                  runs smoother, faster, and with fewer unexpected delays. And
                  because we live here too, we have every reason to get it
                  right. Our neighbours are our customers, and our reputation in
                  this community is everything.
                </Text>
              </Box>
            </MotionSection>
          </SimpleGrid>
        </Container>
      </Box>

      <CTABand />
    </>
  );
}
