import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Skyconet" },
      { name: "description", content: "How Skyconet collects, uses and protects your personal information." },
      { property: "og:title", content: "Privacy Policy — Skyconet" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Last updated: January 2026. Your data, handled with the same care we give your connection."
      />
      <LegalContent>
        <h2>1. Information We Collect</h2>
        <p>Skyconet ("we", "us") collects personal information you provide directly — name, address, phone, email, payment details, and ZIP code — as well as technical data such as device identifiers, IP address, and network performance metrics required to deliver your service.</p>

        <h2>2. How We Use Your Information</h2>
        <p>We use your information to provision service, process payments, deliver support, prevent fraud, improve our network, and (with your consent) send you product updates and promotional offers. We never sell your personal information.</p>

        <h2>3. Sharing & Disclosure</h2>
        <p>We share information only with service providers bound by strict confidentiality agreements (payment processors, installation contractors, regulatory bodies) or when required by law.</p>

        <h2>4. Cookies & Tracking</h2>
        <p>Our website uses essential cookies for session management and optional analytics cookies to understand site usage. You may opt out of non-essential cookies at any time from your browser settings.</p>

        <h2>5. Data Security</h2>
        <p>We use AES-256 encryption in transit and at rest, multi-factor authentication on internal systems, and continuous monitoring by an in-house SOC team.</p>

        <h2>6. Your Rights</h2>
        <p>Depending on your state, you may have the right to access, correct, delete, or port your personal data. To exercise these rights, email <a href="mailto:privacy@Skyconet.com">privacy@Skyconet.com</a>.</p>

        <h2>7. Children's Privacy</h2>
        <p>Our services are not directed to children under 13. We do not knowingly collect personal information from minors.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this policy periodically. Material changes will be communicated by email and posted on this page with a new "last updated" date.</p>

        <h2>9. Contact</h2>
        <p>Questions? Call <a href="tel:#">xxx-xxx-xxxx</a> or email <a href="mailto:privacy@Skyconet.com">privacy@Skyconet.com</a>.</p>
      </LegalContent>
    </SiteLayout>
  );
}
