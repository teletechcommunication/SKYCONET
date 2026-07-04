import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { PageHero } from "@/components/site/PageHero";
import { LegalContent } from "@/components/site/LegalContent";

export const Route = createFileRoute("/disclaimer")({
  head: () => ({
    meta: [
      { title: "Disclaimer | Skyconet" },
      { name: "description", content: "Important information about how Skyconet presents connectivity comparisons, plan availability and provider relationships." },
      { property: "og:title", content: "Disclaimer — Skyconet" },
      { property: "og:url", content: "/disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/disclaimer" }],
  }),
  component: DisclaimerPage,
});

function DisclaimerPage() {
  return (
    <SiteLayout>
      <PageHero
        eyebrow="Policies"
        title="Disclaimer"
        subtitle="A clear, plain-English summary of how Skyconet presents information — and the limits of what we provide."
      />
      <LegalContent>
        <h2>1. Informational Platform</h2>
        <p>Skyconet is a consumer-focused comparison and information platform for internet, TV, streaming, wireless and home connectivity options. The content on this website is provided for educational and informational purposes only and should not be treated as professional, legal, financial or technical advice.</p>

        <h2>2. Plan Availability & Pricing</h2>
        <p>Plan availability, speeds, channel lineups, device compatibility, pricing, promotions and contract terms are determined by the participating providers that offer the underlying services. These details can change at any time without notice. Always confirm the most current details directly with the provider before subscribing.</p>

        <h2>3. No Ownership of Networks or Services</h2>
        <p>Skyconet does not own or operate internet, cable, satellite, streaming or wireless networks. We do not sell internet, TV or wireless subscriptions, and we are not the provider of record for any plan you may ultimately choose. When you subscribe to a service, billing, installation and customer support are handled by the provider you select.</p>

        <h2>4. Trademarks & Provider References</h2>
        <p>Brand names, logos, product names and service marks referenced on this website are the property of their respective owners. Any references to specific providers, plans or technologies are made for informational and comparative purposes only and do not imply any partnership, sponsorship or endorsement unless explicitly stated.</p>

        <h2>5. Accuracy of Information</h2>
        <p>We work to keep the information presented on Skyconet accurate and up to date, but we make no warranty — express or implied — regarding completeness, accuracy, reliability or suitability for any particular purpose. The website is provided on an "as is" and "as available" basis.</p>

        <h2>6. No Guarantee of Results</h2>
        <p>Using Skyconet does not guarantee a specific outcome, plan price, service speed or quality of experience with any provider. Real-world performance depends on factors including (but not limited to) your address, equipment, in-home wiring, network conditions and the provider's own infrastructure.</p>

        <h2>7. Third-Party Links</h2>
        <p>Our website may contain links to third-party websites operated by providers or other organizations. We are not responsible for the content, policies or practices of any third-party site. Following an external link is at your own discretion and risk.</p>

        <h2>8. Limitation of Liability</h2>
        <p>To the fullest extent permitted by law, Skyconet, its operators, employees, contractors and affiliates shall not be liable for any direct, indirect, incidental, consequential or special damages arising from the use of — or inability to use — this website or any information presented on it.</p>

        <h2>9. Updates to This Disclaimer</h2>
        <p>We may update this Disclaimer from time to time. The most recent version will always be posted on this page. Continued use of the website following any update constitutes acceptance of the revised terms.</p>

        <h2>10. Contact</h2>
        <p>If you have any questions about this Disclaimer, please contact us at support@Skyconet.com or xxx-xxx-xxxx.</p>
      </LegalContent>
    </SiteLayout>
  );
}
