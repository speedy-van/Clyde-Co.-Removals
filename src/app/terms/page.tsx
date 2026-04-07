import { Metadata } from "next";
import { Box, Heading, Text, List } from "@chakra-ui/react";
import { Container, MotionSection } from "@/components/shared";
import { SITE } from "@/lib/config";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms and conditions for ${SITE.name}. Understanding our service agreement and your rights.`,
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

export default function TermsPage() {
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
              Terms of Service
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

              <SectionTitle>Agreement to Terms</SectionTitle>
              <Paragraph>
                By engaging {SITE.legalName} for removal services, you agree to
                these terms and conditions. Please read them carefully before
                confirming your booking.
              </Paragraph>

              <SectionTitle>Our Services</SectionTitle>
              <Paragraph>
                We provide furniture and household removal services across South
                Lanarkshire and surrounding areas. Services include house
                removals, flat removals, office relocations, single item
                delivery, packing services, and furniture disposal.
              </Paragraph>

              <SectionTitle>Quotations & Pricing</SectionTitle>
              <Paragraph>
                All quotes provided are fixed prices based on the information you
                supply. If circumstances change significantly (e.g., substantially
                more items than described, access issues not disclosed), we may
                need to adjust the quote.
              </Paragraph>
              <Paragraph>
                Payment terms will be confirmed at the time of booking. We accept
                cash, bank transfer, and major payment cards.
              </Paragraph>

              <SectionTitle>Booking & Cancellation</SectionTitle>
              <Paragraph>
                Bookings are confirmed once you accept our quote and we agree a
                date. We recommend booking as early as possible, especially for
                weekend moves and peak periods.
              </Paragraph>
              <Paragraph>
                Cancellations made with less than 48 hours notice may be subject
                to a cancellation fee. Please contact us as soon as possible if
                your plans change.
              </Paragraph>

              <SectionTitle>Insurance & Liability</SectionTitle>
              <Paragraph>
                We carry goods-in-transit insurance and public liability insurance.
                While we take the utmost care with your belongings, we recommend:
              </Paragraph>
              <List.Root gap={2} pl={6} mb={4}>
                <List.Item color="neutralDark">Informing us of any particularly valuable or fragile items</List.Item>
                <List.Item color="neutralDark">Checking your contents insurance covers removals</List.Item>
                <List.Item color="neutralDark">Packing small valuables and documents yourself if preferred</List.Item>
              </List.Root>
              <Paragraph>
                Our liability is limited to the market value of items proven to
                be damaged by our negligence. We are not liable for damage caused
                by inadequate packing by the customer or pre-existing damage.
              </Paragraph>

              <SectionTitle>Your Responsibilities</SectionTitle>
              <Paragraph>You agree to:</Paragraph>
              <List.Root gap={2} pl={6} mb={4}>
                <List.Item color="neutralDark">Provide accurate information about items to be moved</List.Item>
                <List.Item color="neutralDark">Disclose any access difficulties (stairs, narrow doorways, parking)</List.Item>
                <List.Item color="neutralDark">Ensure items are adequately prepared for the move</List.Item>
                <List.Item color="neutralDark">Be present or have a representative present during the move</List.Item>
                <List.Item color="neutralDark">Ensure safe working conditions for our team</List.Item>
              </List.Root>

              <SectionTitle>Prohibited Items</SectionTitle>
              <Paragraph>
                We cannot transport hazardous materials, illegal items, cash,
                jewellery, important documents, or perishable goods. Please make
                alternative arrangements for these items.
              </Paragraph>

              <SectionTitle>Complaints</SectionTitle>
              <Paragraph>
                If you&apos;re not satisfied with our service, please contact us
                immediately. We take complaints seriously and will work to
                resolve any issues promptly. Complaints should be made in writing
                within 7 days of the move.
              </Paragraph>

              <SectionTitle>Changes to Terms</SectionTitle>
              <Paragraph>
                We may update these terms from time to time. The terms in effect
                at the time of your booking will apply to your service.
              </Paragraph>

              <SectionTitle>Contact</SectionTitle>
              <Paragraph>
                For questions about these terms, please contact us at{" "}
                <a
                  href={`mailto:${SITE.email}`}
                  style={{ color: "#E8A33D", textDecoration: "underline" }}
                >
                  {SITE.email}
                </a>{" "}
                or call {SITE.phoneDisplay}.
              </Paragraph>
            </Box>
          </MotionSection>
        </Container>
      </Box>
    </>
  );
}
