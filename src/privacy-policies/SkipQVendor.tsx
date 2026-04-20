export default function SkipQVendorPrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            SkipQ Vendor Privacy Policy
          </span>
        </h1>
        <p className="text-muted-foreground mt-4">
          SkipQ Vendor ("we", "our", "us") is committed to protecting your
          privacy. This policy explains what data we collect, how we use it,
          and the choices you have as a vendor on the SkipQ platform.
        </p>
      </header>

      <main className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">

        <section>
          <h2 className="text-xl font-semibold">Data We Collect</h2>
          <p className="text-muted-foreground mt-2">
            To operate the vendor portal, we collect and store the following:
          </p>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>
              <span className="font-medium text-foreground">Account data:</span>{" "}
              Email address and password used to authenticate your vendor account.
            </li>
            <li>
              <span className="font-medium text-foreground">Business details:</span>{" "}
              Business name, GST registration number, Razorpay linked account ID,
              and onboarding status.
            </li>
            <li>
              <span className="font-medium text-foreground">Menu data:</span>{" "}
              Items you create including names, descriptions, prices, and availability flags.
            </li>
            <li>
              <span className="font-medium text-foreground">Order data:</span>{" "}
              Orders received, item breakdowns, pricing, GST amounts, platform fees,
              and order status history.
            </li>
            <li>
              <span className="font-medium text-foreground">Store settings:</span>{" "}
              Open/closed status and default preparation time.
            </li>
            <li>
              <span className="font-medium text-foreground">Biometric credentials:</span>{" "}
              If you enable biometric login, your email and password are stored
              securely in the device keychain using Android Keystore. This data
              never leaves your device.
            </li>
          </ul>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">How We Use Your Data</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>To authenticate and secure your vendor account.</li>
            <li>To display and manage your menu items and store availability.</li>
            <li>To receive, process, and track customer orders in real time.</li>
            <li>To calculate and display order earnings, GST, and platform fees.</li>
            <li>To facilitate payouts via Razorpay to your linked bank account.</li>
          </ul>
          <p className="text-muted-foreground mt-2">
            We do <span className="font-medium text-foreground">not</span> use
            your data for advertising, profiling, or any purpose beyond
            operating the SkipQ vendor platform.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">Third-Party Services</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>
              <span className="font-medium text-foreground">Ably:</span>{" "}
              Used for real-time order push notifications to your device. Order
              events are transmitted over Ably's secure WebSocket infrastructure.
              See{" "}
              <a href="https://ably.com/privacy" className="underline" target="_blank" rel="noopener noreferrer">
                Ably's privacy policy
              </a>.
            </li>
            <li>
              <span className="font-medium text-foreground">Razorpay:</span>{" "}
              Used to process vendor payouts. Your linked account ID is shared
              with Razorpay solely for payout purposes. See{" "}
              <a href="https://razorpay.com/privacy/" className="underline" target="_blank" rel="noopener noreferrer">
                Razorpay's privacy policy
              </a>.
            </li>
          </ul>
          <p className="text-muted-foreground mt-2">
            We do not integrate advertising SDKs, analytics trackers, or data brokers.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">Permissions</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>
              <span className="font-medium text-foreground">Biometrics (Fingerprint):</span>{" "}
              Used optionally to enable fast re-login via fingerprint. You can
              deny or disable this at any time in your device Settings without
              affecting any other functionality.
            </li>
            <li>
              <span className="font-medium text-foreground">Internet:</span>{" "}
              Required to receive orders, sync menu data, and communicate with
              the SkipQ backend.
            </li>
          </ul>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">Data Retention &amp; Deletion</h2>
          <p className="text-muted-foreground mt-2">
            Your account and associated data are retained for as long as your
            vendor account is active. To request account deletion and removal
            of all associated data, contact us at{" "}
            <a href="mailto:info@ohyeahsaas.com" className="underline">
              info@ohyeahsaas.com
            </a>
            . Order records may be retained for a limited period as required
            for financial and tax compliance.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">Security</h2>
          <p className="text-muted-foreground mt-2">
            All data is transmitted over HTTPS. Biometric credentials are
            stored exclusively in the Android Keystore on your device and are
            never sent to our servers. Passwords are stored as secure hashes
            and never in plain text.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">Policy Updates</h2>
          <p className="text-muted-foreground mt-2">
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with a revised date. Continued use of
            the app after changes constitutes acceptance of the updated policy.
          </p>
        </section>

        <div className="mt-8 text-sm text-muted-foreground">
          Last updated: April 19, 2026
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
