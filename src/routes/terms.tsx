import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Skyconet" },
      { name: "description", content: "Terms of service governing the use of Skyconet internet, cable, and related services." },
      { property: "og:title", content: "Terms & Conditions — Skyconet" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Terms & Conditions"
        subtitle="Last updated: January 2026. The rules that keep our service fair, fast and dependable for everyone."
      />
      <LegalContent>
        <h2>1. Acceptance of Terms</h2>
        <p>By ordering, installing or using Skyconet services, you agree to these Terms & Conditions and our Privacy Policy.</p>

        <h2>2. Service Description</h2>
        <p>Skyconet provides residential and business internet, cable TV, home WiFi, and bundled streaming services across the contiguous United States.</p>

        <h2>3. Account Responsibilities</h2>
        <p>You are responsible for maintaining the confidentiality of your account credentials and for all activity that occurs under your account.</p>

        <h2>4. Billing & Payment</h2>
        <p>Service fees are billed monthly in advance. Failure to pay may result in service suspension after 15 days. Promotional rates are valid for the period stated on your order; standard rates apply thereafter.</p>

        <h2>5. Acceptable Use</h2>
        <p>You agree not to use our network for unlawful activities, to distribute malware, to send unsolicited bulk communications, or to resell service without written authorization.</p>

        <h2>6. Equipment</h2>
        <p>Equipment provided by Skyconet remains our property and must be returned in working condition within 30 days of service cancellation to avoid replacement charges.</p>

        <h2>7. Service Availability</h2>
        <p>While we target 99.99% uptime, we do not guarantee uninterrupted service. We are not liable for outages caused by force majeure, third-party infrastructure, or customer-side equipment.</p>

        <h2>8. Cancellation</h2>
        <p>Month-to-month customers may cancel at any time without penalty. Annual-term customers cancelling early may be subject to a prorated early termination fee as disclosed at sign-up.</p>

        <h2>9. Limitation of Liability</h2>
        <p>To the maximum extent permitted by law, our liability for any claim arising out of these terms is limited to the fees paid by you in the 12 months preceding the claim.</p>

        <h2>10. Governing Law</h2>
        <p>These terms are governed by the laws of the State of Colorado, without regard to its conflict-of-laws principles.</p>

        <h2>11. Contact</h2>
        <p>For questions about these terms, call <a href="tel:+18888719115">(888) 871-9115</a> or email <a href="mailto:legal@Skyconet.com">legal@Skyconet.com</a>.</p>
      </LegalContent>
    </SiteLayout>
  );
}
