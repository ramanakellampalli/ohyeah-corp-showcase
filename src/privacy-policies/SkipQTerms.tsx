export default function SkipQTerms() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            SkipQ Terms &amp; Conditions
          </span>
        </h1>
        <p className="text-muted-foreground mt-4">
          These Terms &amp; Conditions govern your use of the SkipQ platform,
          including the student app, vendor app, and associated services operated
          by OhYeah SaaS ("we", "our", "us").
        </p>
      </header>

      <main className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">

        <section>
          <h2 className="text-xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-muted-foreground mt-2">
            By registering for or using the SkipQ platform, you agree to be bound
            by these Terms &amp; Conditions. If you do not agree, you must not use
            the platform.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">2. Eligibility</h2>
          <p className="text-muted-foreground mt-2">
            SkipQ is intended for users aged 18 and above. By creating an account
            you confirm that you meet this requirement. Campus-specific access
            requires a valid university email address; your campus is automatically
            assigned from your email domain and cannot be changed after registration.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">3. Platform Description</h2>
          <p className="text-muted-foreground mt-2">
            SkipQ is a food ordering platform that connects students and general
            users with food vendors. We facilitate order placement, payment
            processing, and real-time order tracking. We are not the seller of the
            food items — vendors are independent businesses responsible for the
            preparation and fulfilment of orders.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">4. Account Responsibilities</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>You are responsible for maintaining the confidentiality of your login credentials.</li>
            <li>You must not share your account with others or use another person's account.</li>
            <li>You must notify us immediately at{" "}
              <a href="mailto:info@ohyeahsaas.com" className="underline">info@ohyeahsaas.com</a>
              {" "}if you suspect unauthorised access to your account.
            </li>
            <li>We reserve the right to suspend or terminate accounts that violate these terms.</li>
          </ul>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">5. Orders and Payment</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>
              <span className="font-medium text-foreground">Order placement:</span>{" "}
              Placing an order creates a binding request to purchase from the selected vendor.
              Orders are confirmed only after successful payment capture.
            </li>
            <li>
              <span className="font-medium text-foreground">Payment:</span>{" "}
              Payments are processed via Razorpay. Currently only UPI payments are accepted.
              We do not store your UPI or payment credentials.
            </li>
            <li>
              <span className="font-medium text-foreground">Pricing:</span>{" "}
              All prices displayed include applicable GST (CGST + SGST at 5%).
              A platform service fee of 3% is added at checkout and is non-refundable
              once payment is captured.
            </li>
            <li>
              <span className="font-medium text-foreground">Scheduled orders:</span>{" "}
              You may schedule orders for future pickup within the permitted window
              (10 AM – 5 PM, minimum 30 minutes in advance). Scheduled orders
              are dispatched to the vendor automatically 15 minutes before pickup time.
            </li>
          </ul>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">6. Cancellations and Refunds</h2>
          <p className="text-muted-foreground mt-2">
            Please refer to our{" "}
            <a href="/privacy/skipq/refund" className="underline">
              Refund &amp; Cancellation Policy
            </a>
            {" "}for full details on cancellations, refund eligibility, and timelines.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">7. Vendor Obligations</h2>
          <p className="text-muted-foreground mt-2">
            Vendors are responsible for the accuracy of their menu, pricing, and
            availability. Vendors must fulfil accepted orders in a timely manner.
            Repeated rejection of orders or failure to fulfil accepted orders may
            result in account suspension.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">8. Prohibited Conduct</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>Placing fraudulent or test orders on the live platform.</li>
            <li>Attempting to circumvent payment or exploit refund policies.</li>
            <li>Using the platform to harass vendors or other users.</li>
            <li>Reverse-engineering, scraping, or interfering with platform APIs.</li>
          </ul>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">9. Intellectual Property</h2>
          <p className="text-muted-foreground mt-2">
            All content, branding, and code on the SkipQ platform are the property
            of OhYeah SaaS. You may not copy, reproduce, or distribute any part of
            the platform without written permission.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">10. Limitation of Liability</h2>
          <p className="text-muted-foreground mt-2">
            SkipQ acts as an intermediary between students and food vendors. We are
            not liable for the quality, safety, or delivery of food items prepared
            by vendors. Our liability in any event is limited to the value of the
            order placed. We are not liable for indirect or consequential losses.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">11. Governing Law</h2>
          <p className="text-muted-foreground mt-2">
            These Terms &amp; Conditions are governed by the laws of India.
            Any disputes arising from the use of the SkipQ platform shall be
            subject to the exclusive jurisdiction of courts in India.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">12. Changes to These Terms</h2>
          <p className="text-muted-foreground mt-2">
            We may update these Terms &amp; Conditions from time to time. Changes
            will be posted on this page with a revised date. Continued use of the
            platform after changes constitutes acceptance of the updated terms.
          </p>
        </section>

        <div className="mt-8 text-sm text-muted-foreground">
          Last updated: June 17, 2026
        </div>
      </main>

      <p className="text-center text-sm text-muted-foreground mt-8">
        Questions?{" "}
        <a href="mailto:info@ohyeahsaas.com" className="underline">
          info@ohyeahsaas.com
        </a>
      </p>
    </div>
  );
}
