export default function SkipQRefundPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            SkipQ Refund &amp; Cancellation Policy
          </span>
        </h1>
        <p className="text-muted-foreground mt-4">
          This policy explains when you can cancel an order, when a refund is
          issued, and how long refunds take to reach you.
        </p>
      </header>

      <main className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">

        <section>
          <h2 className="text-xl font-semibold">1. Order Cancellation by Customer</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>
              <span className="font-medium text-foreground">Before vendor accepts:</span>{" "}
              You may cancel your order at any time before the vendor accepts it.
              A full refund of the order amount will be initiated automatically.
            </li>
            <li>
              <span className="font-medium text-foreground">After vendor accepts:</span>{" "}
              Cancellation is not permitted once the vendor has accepted the order,
              as food preparation may have already begun. No refund will be issued
              in this case.
            </li>
          </ul>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">2. Order Rejection by Vendor</h2>
          <p className="text-muted-foreground mt-2">
            If the vendor rejects your order (for example, due to unavailability
            of items), a full refund of the total amount paid will be initiated
            automatically. You will be notified in the app.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">3. Platform Service Fee</h2>
          <p className="text-muted-foreground mt-2">
            A platform service fee of 3% is charged on every order. This fee is
            non-refundable once payment has been captured, except in cases where
            the vendor rejects the order (in which case the full amount including
            platform fee is refunded).
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">4. Failed Payments</h2>
          <p className="text-muted-foreground mt-2">
            If a payment fails during checkout, no amount is deducted from your
            account. The order will not be placed. If an amount was temporarily
            held by your bank, it will be released automatically within 2–5
            business days depending on your bank.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">5. Refund Timeline</h2>
          <p className="text-muted-foreground mt-2">
            All refunds are processed via Razorpay back to the original payment
            method used at checkout.
          </p>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>
              <span className="font-medium text-foreground">UPI:</span>{" "}
              Refunds are typically credited within 5–7 business days.
            </li>
            <li>
              <span className="font-medium text-foreground">Bank account (if applicable):</span>{" "}
              Refunds may take up to 7–10 business days depending on your bank.
            </li>
          </ul>
          <p className="text-muted-foreground mt-2">
            Refund timelines are subject to Razorpay's processing schedule and
            your bank's clearing cycle, which are outside our control.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">6. How to Request a Refund</h2>
          <p className="text-muted-foreground mt-2">
            Eligible refunds (pre-accept cancellation, vendor rejection) are
            processed automatically — you do not need to contact us. If you
            believe a refund was not processed correctly, contact us within
            7 days of the order at{" "}
            <a href="mailto:info@ohyeahsaas.com" className="underline">
              info@ohyeahsaas.com
            </a>
            {" "}with your order details.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">7. No Refunds For</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>Orders cancelled after vendor acceptance.</li>
            <li>Complaints about food quality — these are the vendor's responsibility.</li>
            <li>Platform service fee on successfully fulfilled orders.</li>
          </ul>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">8. Policy Updates</h2>
          <p className="text-muted-foreground mt-2">
            We may update this policy from time to time. Any changes will be
            posted on this page with a revised date.
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
