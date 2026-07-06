import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/refund-policy")({
  head: () => ({
    meta: [
      { title: "Refund Policy | Skyconet" },
      { name: "description", content: "Skyconet refund policy for independent third-party service assistance. Eligibility, timelines and how to request a refund." },
      { property: "og:title", content: "Refund Policy — Skyconet" },
      { property: "og:url", content: "/refund-policy" },
    ],
    links: [{ rel: "canonical", href: "/refund-policy" }],
  }),
  component: RefundPolicyPage,
});

function RefundPolicyPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Policies"
        title="Refund Policy"
        subtitle="Clear, fair and written in plain English. Here's exactly how refunds work for our independent assistance services."
      />
      <LegalContent>
        <h2>1. Overview</h2>
        <p>Skyconet is an independent third-party assistance platform. We charge a service/assistance fee for informational guidance. This Refund Policy explains when and how you may request a refund of that fee.</p>

        <h2>2. General Refund Window</h2>
        <p>Refund requests may be submitted within 7 to 15 days of your service purchase, depending on the type of assistance provided and whether the guidance has already been delivered. The specific eligibility window will be confirmed at the time of purchase.</p>

        <h2>3. Eligible Refund Scenarios</h2>
        <p>Refunds are generally considered when:</p>
        <ul>
          <li>The assistance session was not completed or was significantly delayed through no fault of yours.</li>
          <li>The guidance provided was materially inaccurate or incomplete due to an error on our part.</li>
          <li>You cancel the request before the advisor begins the assistance session.</li>
          <li>There was a duplicate or accidental charge.</li>
        </ul>

        <h2>4. Non-Refundable Scenarios</h2>
        <p>Refunds are not available when:</p>
        <ul>
          <li>The assistance session has been fully completed and guidance delivered.</li>
          <li>The refund request is submitted outside the stated eligibility window.</li>
          <li>The issue stems from provider-side decisions, equipment failure, or coverage limitations beyond our control.</li>
          <li>Fees for third-party tools, reports, or expedited research that were already procured on your behalf.</li>
        </ul>

        <h2>5. How to Request a Refund</h2>
        <p>To request a refund, email us at <a href="mailto:support@Skyconet.com">support@Skyconet.com</a> or call <a href="tel:+18888719115">(888) 871-9115</a> with your name, date of purchase, and reason for the request. We aim to respond within 2 business days.</p>

        <h2>6. Processing Time</h2>
        <p>Approved refunds are processed to the original payment method within 5 to 10 business days. Depending on your bank or card issuer, it may take an additional 3 to 5 business days for the funds to appear in your account.</p>

        <h2>7. Partial Refunds</h2>
        <p>In some cases, a partial refund may be issued if only a portion of the purchased assistance was unused or if the session was partially completed. The amount will be calculated based on the proportion of service not rendered.</p>

        <h2>8. Changes to This Policy</h2>
        <p>We may update this Refund Policy from time to time. Changes take effect immediately upon posting to this page with an updated date. We encourage you to review this page periodically.</p>

        <h2>9. Contact</h2>
        <p>For questions about this Refund Policy, reach us at <a href="mailto:support@Skyconet.com">support@Skyconet.com</a> or call <a href="tel:+18888719115">(888) 871-9115</a>.</p>
      </LegalContent>
    </SiteLayout>
  );
}
