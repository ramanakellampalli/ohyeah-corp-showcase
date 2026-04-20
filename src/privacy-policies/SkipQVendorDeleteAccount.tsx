export default function SkipQVendorDeleteAccount() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Delete Your Vendor Account
          </span>
        </h1>
        <p className="text-muted-foreground mt-4">
          SkipQ Vendor lets you permanently delete your vendor account and all associated
          data directly from within the app.
        </p>
      </header>

      <main className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <section>
          <h2 className="text-xl font-semibold">How to Delete Your Account</h2>
          <ol className="mt-4 space-y-4 text-muted-foreground list-none">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/15 text-blue-600 text-xs font-bold flex items-center justify-center mt-0.5">
                1
              </span>
              <span>
                Open the <span className="font-medium text-foreground">SkipQ Vendor</span> app on your device.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/15 text-blue-600 text-xs font-bold flex items-center justify-center mt-0.5">
                2
              </span>
              <span>
                Tap <span className="font-medium text-foreground">Profile</span> (store icon) in the bottom navigation bar.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/15 text-blue-600 text-xs font-bold flex items-center justify-center mt-0.5">
                3
              </span>
              <span>
                Scroll down past <span className="font-medium text-foreground">Logout</span> to find the{" "}
                <span className="font-medium text-foreground">Delete Account</span> option.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-500/15 text-blue-600 text-xs font-bold flex items-center justify-center mt-0.5">
                4
              </span>
              <span>
                Confirm the deletion when prompted. Your account and all data will be permanently removed immediately.
              </span>
            </li>
          </ol>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">What Gets Deleted</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>Your vendor account and login credentials</li>
            <li>Your store profile (name, campus, business details, GSTIN)</li>
            <li>All menu items and pricing</li>
            <li>All order history associated with your stall</li>
            <li>Saved biometric credentials (fingerprint)</li>
          </ul>
          <p className="text-sm text-muted-foreground mt-3">
            Note: your Razorpay linked account is managed independently by Razorpay and is not affected by this deletion.
          </p>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <div className="rounded-xl border border-blue-500/30 bg-blue-500/5 p-4">
            <p className="text-sm font-medium text-blue-700 dark:text-blue-400">
              This action is irreversible.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Once deleted, your data cannot be recovered. Students will no longer be able to see or order from your stall.
            </p>
          </div>
        </section>
      </main>

      <p className="text-center text-sm text-muted-foreground mt-8">
        Need help?{" "}
        <a href="mailto:info@ohyeahsaas.com" className="underline">
          info@ohyeahsaas.com
        </a>
      </p>
    </div>
  );
}
