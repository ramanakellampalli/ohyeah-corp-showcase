export default function BillBuddyPrivacyPolicy() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
            <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
              Bill Buddy Privacy Policy
            </span>
          </h1>
          <p className="text-muted-foreground mt-4">
            Bill Buddy ("we", "our", "us") is committed to protecting your
            privacy. This policy explains what data we collect, how we use it,
            and the choices you have.
          </p>
        </header>

        {/* Body */}
        <main className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">

          <section>
            <h2 className="text-xl font-semibold">Data We Collect</h2>
            <p className="text-muted-foreground mt-2">
              To provide core app functionality, we collect and store the
              following information:
            </p>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>
                <span className="font-medium text-foreground">Account data:</span>{" "}
                Email address and display name used to create and identify your
                account.
              </li>
              <li>
                <span className="font-medium text-foreground">Financial data:</span>{" "}
                Bills (names, amounts, due dates, categories), budget limits,
                and dues (amounts lent or borrowed along with associated person
                names). This data is stored solely for your personal use and
                is never shared or sold.
              </li>
              <li>
                <span className="font-medium text-foreground">Profile photo:</span>{" "}
                Optionally uploaded by you. Stored securely and only used to
                display your avatar within the app.
              </li>
              <li>
                <span className="font-medium text-foreground">Device preferences:</span>{" "}
                Currency selection and timezone stored locally on your device
                via SharedPreferences.
              </li>
            </ul>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">How We Use Your Data</h2>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>To authenticate and secure your account.</li>
              <li>
                To sync your bills, budgets, and dues across sessions so your
                data is never lost.
              </li>
              <li>
                To send local push notifications reminding you of upcoming or
                overdue bills — only if you grant notification permission.
              </li>
              <li>
                To display spending insights and summaries within the app.
              </li>
            </ul>
            <p className="text-muted-foreground mt-2">
              We do{" "}
              <span className="font-medium text-foreground">not</span> use your
              data for advertising, profiling, or any purpose beyond operating
              the app for you.
            </p>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Third-Party Services</h2>
            <p className="text-muted-foreground mt-2">
              Bill Buddy uses{" "}
              <span className="font-medium text-foreground">
                Google Firebase
              </span>{" "}
              (Firebase Authentication, Cloud Firestore, and Firebase Storage)
              to store and sync your data securely. Firebase is operated by
              Google LLC and governed by{" "}
              <a
                href="https://firebase.google.com/support/privacy"
                className="underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Google's privacy policy
              </a>
              . Your data is stored in Google's cloud infrastructure and
              protected by industry-standard encryption in transit and at rest.
            </p>
            <p className="text-muted-foreground mt-2">
              We do not integrate any advertising SDKs, analytics trackers, or
              data brokers.
            </p>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Permissions</h2>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>
                <span className="font-medium text-foreground">
                  Notifications:
                </span>{" "}
                Used to deliver bill reminders on Android 13+ and iOS. You can
                deny or revoke this at any time in your device Settings without
                affecting any other functionality.
              </li>
              <li>
                <span className="font-medium text-foreground">
                  Camera &amp; Photo Library:
                </span>{" "}
                Requested only if you choose to upload a profile photo.
                Granting this permission is entirely optional.
              </li>
            </ul>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Data Retention &amp; Deletion</h2>
            <p className="text-muted-foreground mt-2">
              Your data is retained for as long as your account is active. You
              can{" "}
              <span className="font-medium text-foreground">
                permanently delete your account and all associated data
              </span>{" "}
              at any time from the Profile screen within the app. Deletion is
              irreversible and removes all your bills, budgets, dues, and
              profile information from our systems.
            </p>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Children's Privacy</h2>
            <p className="text-muted-foreground mt-2">
              Bill Buddy is not directed at children under 13. We do not
              knowingly collect personal data from children. If you believe a
              child has created an account, please contact us and we will
              promptly delete the account and its data.
            </p>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Your Choices</h2>
            <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
              <li>Update or remove your profile photo at any time.</li>
              <li>Disable push notifications from your device Settings.</li>
              <li>
                Edit or delete individual bills, dues, and budgets at any time.
              </li>
              <li>
                Delete your entire account and data permanently from the Profile
                screen.
              </li>
            </ul>
          </section>

          <div className="my-6 border-t border-border/50" />

          <section>
            <h2 className="text-xl font-semibold">Security</h2>
            <p className="text-muted-foreground mt-2">
              All data is transmitted over HTTPS and stored with Firebase's
              built-in security rules, ensuring only you can access your
              account's data. We follow security best practices and do not store
              passwords in plain text.
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
            Last updated: February 20, 2026
          </div>
        </main>

        {/* Contact */}
        <p className="text-center text-sm text-muted-foreground mt-8">
          Questions?{" "}
          <a href="mailto:info@ohyeahsaas.com" className="underline">
            info@ohyeahsaas.com
          </a>
        </p>
      </div>
  );
}
