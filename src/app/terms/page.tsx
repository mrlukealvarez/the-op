import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "Terms of Service for THE OP LLC — coffee shop, merchandise, and community space on the Grow Campus in Custer, South Dakota.",
};

export default function TermsPage() {
  return (
    <section className="bg-espresso px-6 py-20 text-cream/90">
      <div className="mx-auto max-w-3xl">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-amber">
          Legal
        </p>
        <h1 className="mb-4 text-4xl font-bold text-cream">Terms of Service</h1>
        <p className="mb-12 text-sm text-cream/50">
          Last updated: February 2026
        </p>

        <div className="space-y-10 text-sm leading-relaxed text-cream/70">
          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing or using any services provided by THE OP LLC
              (&ldquo;THE OP,&rdquo; &ldquo;we,&rdquo; &ldquo;us,&rdquo; or
              &ldquo;our&rdquo;), including our website, in-store purchases,
              merchandise sales, event hosting, and loyalty programs, you agree
              to be bound by these Terms of Service. THE OP LLC is an affiliated
              entity of Black Hills Consortium and its affiliated entities. If
              you do not agree to these terms, please do not use our services.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              2. Use License
            </h2>
            <p>
              Permission is granted to temporarily access the materials on THE
              OP&rsquo;s website for personal, non-commercial transitory viewing
              only. This license does not include: modifying or copying
              materials; using materials for any commercial purpose or public
              display; attempting to decompile or reverse-engineer any software
              on the website; removing any copyright or proprietary notations;
              or transferring materials to another person. This license shall
              automatically terminate if you violate any of these restrictions
              and may be terminated by THE OP at any time.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              3. Food &amp; Beverage Service Disclaimer
            </h2>
            <p className="mb-3">
              THE OP provides counter-service food and beverage items including
              coffee, espresso drinks, cold brew, local craft beer and cider on
              tap, baked goods, and light snacks. Please be aware of the
              following:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-cream">Allergen notice:</strong> Our
                products may contain or come into contact with common allergens
                including milk, eggs, wheat, soy, tree nuts, and peanuts. While
                we take precautions, we cannot guarantee that any item is
                completely free of allergens. Customers with severe allergies
                should exercise caution and inform staff before ordering.
              </li>
              <li>
                <strong className="text-cream">Product availability:</strong>{" "}
                Menu items, craft beer and cider selections, and seasonal
                offerings are subject to change without notice. We rotate local
                roasters and craft beverages regularly to showcase Black Hills
                producers.
              </li>
              <li>
                <strong className="text-cream">Alcohol service:</strong>{" "}
                Customers purchasing alcoholic beverages (craft beer and cider)
                must be at least 21 years of age and present valid
                identification upon request.
              </li>
              <li>
                <strong className="text-cream">Food safety:</strong> THE OP
                prepares and serves food in accordance with South Dakota
                Department of Health food safety regulations. Consumption of raw
                or undercooked foods may increase the risk of foodborne illness.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              4. Merchandise Sales &amp; Returns
            </h2>
            <p className="mb-3">
              THE OP sells BHC-branded apparel, local artisan goods, and tourist
              merchandise. The following policies apply:
            </p>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                <strong className="text-cream">Returns:</strong> Merchandise may
                be returned within 14 days of purchase with a valid receipt.
                Items must be in original, unworn/unused condition with tags
                attached. Refunds will be issued to the original payment method.
              </li>
              <li>
                <strong className="text-cream">Exchanges:</strong> Exchanges for
                different sizes or colors are subject to availability and must
                be made within 14 days of purchase.
              </li>
              <li>
                <strong className="text-cream">Final sale items:</strong>{" "}
                Clearance items, seasonal merchandise, and food/beverage
                products are final sale and cannot be returned or exchanged.
              </li>
              <li>
                <strong className="text-cream">Damaged goods:</strong> If you
                receive a defective or damaged item, please contact us within 7
                days for a replacement or refund.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              5. Loyalty &amp; Campus Passport Program
            </h2>
            <p>
              THE OP may offer loyalty programs, campus passport programs, and
              employee perks programs. Participation in these programs is
              subject to the specific terms and conditions provided at
              enrollment. Loyalty rewards, discounts, and perks have no cash
              value and may not be transferred, sold, or combined with other
              offers unless specifically stated. THE OP reserves the right to
              modify, suspend, or terminate any loyalty program at any time with
              reasonable notice to participants. Accumulated rewards may expire
              if not used within the specified timeframe outlined in the program
              terms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              6. Event Hosting
            </h2>
            <p>
              THE OP may host community events, pop-up markets, live music, and
              other gatherings. Event attendance is subject to venue capacity
              limits and applicable safety regulations. THE OP reserves the
              right to refuse entry or remove attendees for disruptive or unsafe
              behavior. Events hosted at THE OP are managed by THE OP staff
              unless specifically designated as THE CULT Events LLC productions.
              Event photography and recordings may be used for promotional
              purposes.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              7. Content &amp; Intellectual Property
            </h2>
            <p>
              All content on this website — including but not limited to text,
              graphics, logos, images, audio, video, and software — is the
              property of THE OP LLC or its content suppliers and is protected
              by United States and international copyright laws. BHC-branded
              merchandise designs are the property of Black Hills Consortium and
              its affiliated entities.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              8. Disclaimer of Warranties
            </h2>
            <p>
              THE OP&rsquo;s services, website, and products are provided on an
              &ldquo;as is&rdquo; and &ldquo;as available&rdquo; basis. THE OP
              makes no warranties, expressed or implied, and hereby disclaims
              all warranties including, without limitation, implied warranties
              of merchantability, fitness for a particular purpose, and
              non-infringement. THE OP does not warrant that products will meet
              your expectations or that services will be uninterrupted or
              error-free.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              9. Limitation of Liability
            </h2>
            <p>
              In no event shall THE OP LLC, Black Hills Consortium, or any of
              their affiliated entities, officers, directors, employees, or
              agents be liable for any direct, indirect, incidental, special,
              consequential, or punitive damages arising out of or relating to
              your use of our services, purchase of our products, or attendance
              at our events. This includes, without limitation, damages for loss
              of profits, data, goodwill, or other intangible losses, even if
              THE OP has been advised of the possibility of such damages.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              10. Governing Law
            </h2>
            <p>
              These Terms of Service shall be governed by and construed in
              accordance with the laws of the State of South Dakota. Any
              disputes arising under these terms shall be subject to the
              exclusive jurisdiction of the state and federal courts located in
              Custer County, South Dakota.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              11. Changes to Terms
            </h2>
            <p>
              THE OP reserves the right to update or modify these Terms of
              Service at any time without prior notice. Changes will be
              effective immediately upon posting to our website. Your continued
              use of our services following any changes constitutes acceptance
              of the revised terms.
            </p>
          </div>

          <div>
            <h2 className="mb-3 text-xl font-semibold text-cream">
              12. Contact
            </h2>
            <p>
              If you have questions about these Terms of Service, please contact
              us at{" "}
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
