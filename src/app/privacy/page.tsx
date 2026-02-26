import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Privacy Policy for THE OP LLC — how we collect, use, and protect your data for purchases, loyalty programs, and community events.",
};

export default function PrivacyPage() {
  return (
    <section className="bg-espresso px-6 py-20 text-cream/90">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
          Legal
        </p>
        <h1 className="mb-4 text-4xl font-bold text-cream">Privacy Policy</h1>
        <p className="mb-12 text-sm text-cream/50">
          Last updated: February 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-cream/70">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              1. Introduction
            </h2>
            <p>
              THE OP LLC (&ldquo;THE OP,&rdquo; &ldquo;we,&rdquo;
              &ldquo;us,&rdquo; or &ldquo;our&rdquo;) is committed to protecting
              your privacy. This Privacy Policy describes how we collect, use,
              and safeguard personal information when you visit our website,
              make purchases in our store, participate in our loyalty programs,
              or attend our community events. THE OP LLC is an affiliated entity
              of Black Hills Consortium and its affiliated entities.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              2. Information We Collect
            </h2>
            <p className="mb-3">
              We may collect the following types of information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-cream">Customer purchase data:</strong>{" "}
                Transaction history, items purchased, payment method (processed
                through our FlowBot POS system and third-party payment
                processors — we do not store full credit card numbers), purchase
                date and time, and transaction amounts.
              </li>
              <li>
                <strong className="text-cream">Loyalty program data:</strong>{" "}
                Name, email address, phone number, loyalty points balance,
                reward redemption history, visit frequency, and product
                preferences collected when you enroll in our loyalty or campus
                passport programs.
              </li>
              <li>
                <strong className="text-cream">Event booking data:</strong>{" "}
                Name, email, phone number, event type, group size, date
                preferences, and special requirements provided when booking
                community events or reserving space at THE OP.
              </li>
              <li>
                <strong className="text-cream">Employee perks data:</strong> BHC
                employee identification, discount usage, and perks redemption
                data for employees participating in the campus benefits program.
              </li>
              <li>
                <strong className="text-cream">Website usage data:</strong> IP
                address, browser type, device information, pages visited, and
                interaction patterns collected through cookies and analytics
                tools.
              </li>
              <li>
                <strong className="text-cream">Communication data:</strong>{" "}
                Information provided when you contact us, submit feedback, or
                subscribe to our newsletter or event updates.
              </li>
              <li>
                <strong className="text-cream">
                  Charitable round-up data:
                </strong>{" "}
                Aggregated donation amounts from POS round-up prompts benefiting
                Seed Foundation and BHC. Individual donation amounts are not
                linked to personal identifiers unless you request a receipt.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              3. How We Use Your Information
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Processing purchases, managing transactions, and providing
                receipts
              </li>
              <li>
                Administering loyalty programs, tracking points, and delivering
                rewards
              </li>
              <li>
                Managing event bookings and community gathering reservations
              </li>
              <li>
                Personalizing your experience (remembering your favorite order,
                suggesting new items based on preferences)
              </li>
              <li>
                Sending promotional offers, new menu announcements, and event
                invitations (with your consent)
              </li>
              <li>
                Improving our products, services, and customer experience based
                on feedback and purchase patterns
              </li>
              <li>
                Processing charitable donations through our POS round-up program
              </li>
              <li>
                Communicating about offerings from THE OP and affiliated BHC
                entities (with your consent)
              </li>
              <li>
                Complying with legal obligations and protecting our rights
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              4. Information Sharing
            </h2>
            <p className="mb-3">
              We do not sell your personal information. We may share your
              information with:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-cream">BHC affiliated entities:</strong>{" "}
                We may share relevant information with other Black Hills
                Consortium entities (such as FlowBot for POS analytics, or Seed
                Foundation for charitable donation records) when you interact
                with services spanning multiple entities.
              </li>
              <li>
                <strong className="text-cream">Service providers:</strong>{" "}
                Third-party vendors who assist with payment processing, email
                delivery, POS systems, and analytics under contractual data
                protection obligations.
              </li>
              <li>
                <strong className="text-cream">Local partners:</strong> We may
                share aggregated, anonymized data with local coffee roasters,
                craft breweries, and artisan suppliers to improve product
                offerings. No personally identifiable information is shared with
                partners.
              </li>
              <li>
                <strong className="text-cream">Legal requirements:</strong> When
                required by law, court order, or governmental regulation.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              5. Point-of-Sale &amp; Payment Data
            </h2>
            <p>
              THE OP uses the FlowBot POS system for transaction processing.
              Payment card information is processed by PCI-compliant third-party
              payment processors and is not stored on our systems. Transaction
              data (items purchased, amounts, timestamps) is retained for
              business operations, tax compliance, and to improve our product
              offerings. The FlowBot POS may also serve as a live demonstration
              environment for BHC investor tours. Demonstration activities use
              anonymized transaction data only and never expose individual
              customer personal information.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              6. Cookies &amp; Tracking
            </h2>
            <p>
              Our website uses cookies and similar tracking technologies to
              improve your browsing experience, analyze website traffic, and
              understand usage patterns. We use Vercel Analytics and Speed
              Insights for website performance monitoring. These tools collect
              anonymized usage data. You may configure your browser to refuse
              cookies, but some features of our website may not function
              properly without them.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              7. Data Security
            </h2>
            <p>
              We implement reasonable administrative, technical, and physical
              safeguards to protect your personal information from unauthorized
              access, disclosure, alteration, or destruction. Payment processing
              is handled by PCI-compliant third-party providers. However, no
              method of transmission over the internet or electronic storage is
              100% secure, and we cannot guarantee absolute security.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              8. Data Retention
            </h2>
            <p>
              We retain your personal information for as long as necessary to
              fulfill the purposes described in this policy. Purchase
              transaction data is retained for up to 7 years for tax and
              accounting compliance. Loyalty program data is retained for the
              duration of your program membership. Website usage data is
              retained for up to 24 months. You may request deletion of your
              data at any time by contacting us.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              9. Your Rights
            </h2>
            <p className="mb-3">
              Depending on your jurisdiction, you may have the following rights
              regarding your personal information:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>Access and receive a copy of your personal data</li>
              <li>Request correction of inaccurate or incomplete data</li>
              <li>Request deletion of your personal data</li>
              <li>
                Opt out of loyalty program data collection by canceling your
                enrollment
              </li>
              <li>
                Opt out of marketing communications at any time by clicking
                &ldquo;unsubscribe&rdquo; in any email or contacting us directly
              </li>
              <li>
                Object to or restrict certain processing of your personal data
              </li>
            </ul>
            <p className="mt-3">
              To exercise any of these rights, please contact us at the address
              below.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              10. Children&rsquo;s Privacy
            </h2>
            <p>
              Our cafe welcomes families and children. We do not knowingly
              collect personal information from children under the age of 13
              through our website or loyalty programs. Children may make
              purchases in-store with parental supervision. If we become aware
              that we have collected personal information from a child under 13
              through digital channels, we will take steps to delete such
              information promptly.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              11. Changes to This Policy
            </h2>
            <p>
              We may update this Privacy Policy from time to time. Changes will
              be effective immediately upon posting to our website. We encourage
              you to review this policy periodically. Your continued use of our
              services following any changes constitutes acceptance of the
              revised policy.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              12. Governing Law
            </h2>
            <p>
              This Privacy Policy shall be governed by and construed in
              accordance with the laws of the State of South Dakota. Any
              disputes arising under this policy shall be subject to the
              exclusive jurisdiction of the state and federal courts located in
              Custer County, South Dakota.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              13. Contact
            </h2>
            <p>
              If you have questions about this Privacy Policy or wish to
              exercise your data rights, please contact us at{" "}
              <a
                href="mailto:legal@blackhillsconsortium.org"
                className="text-amber underline hover:text-amber/80"
              >
                legal@blackhillsconsortium.org
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
