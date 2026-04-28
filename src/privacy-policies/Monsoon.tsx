export default function MonsoonPrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
              Monsoon Dhara Privacy Policy
            </span>
          </h1>
          <p className="text-muted-foreground mt-4">
            Monsoon Dhara (“we”, “our”, “us”) is committed to protecting your
            privacy.
          </p>
        </header>

        {/* Body in a single, clean panel */}
        <main className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
          <section>
            <h2 className="text-xl font-semibold">Data Collection</h2>
            <p className="text-muted-foreground mt-2">
              We do not collect, store, sell, or share any personal information
              from users of the Monsoon Dhara app.
            </p>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">
              Device &amp; Location Data
            </h2>
            <p className="text-muted-foreground mt-2">
              The app may request access to your device’s location solely to
              provide local weather updates. Granting permission is{" "}
              <span className="font-medium text-foreground">optional</span> —
              you can always select a city manually instead. If permission is
              granted, location is used in real time to fetch weather and
              reverse-geocode the area and is{" "}
              <span className="font-medium text-foreground">
                not stored, logged, or shared
              </span>{" "}
              by us.
            </p>
            <p className="text-muted-foreground mt-2">
              Depending on your Android settings, the app may receive either
              approximate or precise location. You can change this choice in
              your device’s Settings at any time.
            </p>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Third-Party Services</h2>
            <p className="text-muted-foreground mt-2">
              To display weather and place names, the app calls third-party APIs
              (e.g., weather providers and reverse geocoding). These services
              process the minimum necessary request data (such as
              latitude/longitude) to return results and have their own privacy
              policies.
            </p>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">
              Permissions &amp; Data Safety
            </h2>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>
                Location (approximate and/or precise): used to provide local
                weather.
              </li>
              <li>
                Location permission is optional and revocable at any time.
              </li>
              <li>No background location usage.</li>
              <li>
                We do not store location on our servers or share it for
                advertising.
              </li>
            </ul>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Children’s Privacy</h2>
            <p className="text-muted-foreground mt-2">
              Our app is suitable for all users and does not knowingly collect
              personal data from children under 13. If you believe a child has
              provided personal information, please contact us so we can delete
              it.
            </p>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Your Choices</h2>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>
                You can deny location permission and use manual city selection
                instead.
              </li>
              <li>
                You can revoke location permission anytime from your device
                Settings.
              </li>
            </ul>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Security &amp; Retention</h2>
            <p className="text-muted-foreground mt-2">
              We minimize data by design. We do not retain location data beyond
              the real-time request needed to provide weather information.
            </p>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Policy Updates</h2>
            <p className="text-muted-foreground mt-2">
              We may update this Privacy Policy from time to time. Changes will
              be posted on this page with a revised date.
            </p>
          </section>

          <div className="mt-8 text-sm text-muted-foreground">
            Last updated: April 27, 2026
          </div>
        </main>

        {/* Contact line under the panel */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Questions?{" "}
          <a href="mailto:info@ohyeahsaas.com" className="underline">
            info@ohyeahsaas.com
          </a>
        </p>
      </div>
  );
}
