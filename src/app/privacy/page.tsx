import { Metadata } from "next";
import { Box, Heading, Text, List } from "@chakra-ui/react";
import { Container, MotionSection } from "@/components/shared";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy policy for ${SITE.name}. How we collect, use, and protect your personal information.`,
};

function SectionTitle({ children }: { children: React.ReactNode }) {
  return (
    <Heading
      as="h2"
      fontFamily="var(--font-playfair)"
      fontSize="xl"
      fontWeight="600"
      color="clydeNavy"
      mt={8}
      mb={4}
    >
      {children}
    </Heading>
  );
}

function Paragraph({ children }: { children: React.ReactNode }) {
  return (
    <Text color="neutralDark" lineHeight="tall" mb={4}>
      {children}
    </Text>
  );
}

export default function PrivacyPage() {
  return (
    <>
      {/* Header Section */}
      <Box bg="clydeNavy" py={{ base: 12, md: 16 }}>
        <Container>
          <MotionSection>
            <Heading
              as="h1"
              fontFamily="var(--font-playfair)"
              fontSize={{ base: "2xl", md: "3xl", lg: "4xl" }}
              fontWeight="700"
              color="white"
              textAlign="center"
            >
              Privacy Policy
            </Heading>
          </MotionSection>
        </Container>
      </Box>

      {/* Content */}
      <Box py={{ base: 12, md: 20 }} bg="white">
        <Container maxW="lg">
          <MotionSection>
            <Box>
              <Text color="muted" fontSize="sm" mb={6}>
                Last updated: April 2024
              </Text>

              <SectionTitle>Introduction</SectionTitle>
              <Paragraph>
                {SITE.legalName} (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) is committed to
                protecting your privacy. This policy explains how we collect,
                use, and safeguard your personal information when you use our
                services or contact us.
              </Paragraph>

              <SectionTitle>Information We Collect</SectionTitle>
              <Paragraph>
                When you contact us for a quote or book our services, we may
                collect:
              </Paragraph>
              <List.Root gap={2} pl={6} mb={4}>
                <List.Item color="neutralDark">Your name and contact details (phone number, email address)</List.Item>
                <List.Item color="neutralDark">Your current and new addresses</List.Item>
                <List.Item color="neutralDark">Details about items to be moved</List.Item>
                <List.Item color="neutralDark">Any access requirements or special instructions</List.Item>
              </List.Root>

              <SectionTitle>How We Use Your Information</SectionTitle>
              <Paragraph>We use your information to:</Paragraph>
              <List.Root gap={2} pl={6} mb={4}>
                <List.Item color="neutralDark">Provide quotes and arrange your removal service</List.Item>
                <List.Item color="neutralDark">Communicate with you about your booking</List.Item>
                <List.Item color="neutralDark">Complete the removal service you&apos;ve requested</List.Item>
                <List.Item color="neutralDark">Handle any queries or complaints</List.Item>
              </List.Root>

              <SectionTitle>Information Sharing</SectionTitle>
              <Paragraph>
                We do not sell, rent, or share your personal information with
                third parties for marketing purposes. We may share information
                with:
              </Paragraph>
              <List.Root gap={2} pl={6} mb={4}>
                <List.Item color="neutralDark">Our team members who need it to provide your service</List.Item>
                <List.Item color="neutralDark">Professional advisers (accountants, lawyers) when necessary</List.Item>
                <List.Item color="neutralDark">Law enforcement if required by law</List.Item>
              </List.Root>

              <SectionTitle>Data Security</SectionTitle>
              <Paragraph>
                We take reasonable precautions to protect your personal
                information. However, no method of transmission over the internet
                or electronic storage is 100% secure.
              </Paragraph>

              <SectionTitle>Your Rights</SectionTitle>
              <Paragraph>You have the right to:</Paragraph>
              <List.Root gap={2} pl={6} mb={4}>
                <List.Item color="neutralDark">Access the personal information we hold about you</List.Item>
                <List.Item color="neutralDark">Request correction of inaccurate information</List.Item>
                <List.Item color="neutralDark">Request deletion of your information</List.Item>
                <List.Item color="neutralDark">Object to processing of your information</List.Item>
              </List.Root>

              <SectionTitle>Cookies</SectionTitle>
              <Paragraph>
                Our website may use essential cookies to ensure proper
                functionality. We do not use tracking or advertising cookies.
              </Paragraph>

              <SectionTitle>Contact Us</SectionTitle>
              <Paragraph>
                If you have questions about this privacy policy or wish to
                exercise your rights, please contact us at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  style={{ color: "#E8A33D", textDecoration: "underline" }}
                >
                  {SITE.email}
                </a>{" "}
                or call {SITE.phoneDisplay}.
              </Paragraph>

              <SectionTitle>Changes to This Policy</SectionTitle>
              <Paragraph>
                We may update this privacy policy from time to time. Any changes
                will be posted on this page with an updated revision date.
              </Paragraph>
            </Box>
          </MotionSection>
        </Container>
      </Box>
    </>
  );
}
