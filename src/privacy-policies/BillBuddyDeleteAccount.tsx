export default function BillBuddyDeleteAccount() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      {/* Header */}
      <header className="text-center mb-10">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">
          <span className="bg-gradient-to-r from-orange-500 to-amber-400 bg-clip-text text-transparent">
            Delete Your Account
          </span>
        </h1>
        <p className="text-muted-foreground mt-4">
          Bill Buddy lets you permanently delete your account and all associated
          data directly from within the app.
        </p>
      </header>

      {/* Body */}
      <main className="rounded-2xl border border-border/60 bg-card/50 backdrop-blur-sm p-6 md:p-8 shadow-sm">
        <section>
          <h2 className="text-xl font-semibold">How to Delete Your Account</h2>
          <ol className="mt-4 space-y-4 text-muted-foreground list-none">
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/15 text-orange-500 text-xs font-bold flex items-center justify-center mt-0.5">
                1
              </span>
              <span>
                Open the <span className="font-medium text-foreground">Bill Buddy</span> app on your device.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/15 text-orange-500 text-xs font-bold flex items-center justify-center mt-0.5">
                2
              </span>
              <span>
                Tap the <span className="font-medium text-foreground">Profile</span> icon to open your profile screen.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/15 text-orange-500 text-xs font-bold flex items-center justify-center mt-0.5">
                3
              </span>
              <span>
                Scroll down to find the{" "}
                <span className="font-medium text-foreground">
                  Delete Account
                </span>{" "}
                option.
              </span>
            </li>
            <li className="flex gap-3">
              <span className="flex-shrink-0 w-6 h-6 rounded-full bg-orange-500/15 text-orange-500 text-xs font-bold flex items-center justify-center mt-0.5">
                4
              </span>
              <span>
                Confirm the deletion when prompted. Your account and all data
                will be permanently removed.
              </span>
            </li>
          </ol>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <h2 className="text-xl font-semibold">What Gets Deleted</h2>
          <ul className="list-disc pl-5 text-muted-foreground mt-2 space-y-1">
            <li>Your account and login credentials</li>
            <li>All bills, budgets, and due records</li>
            <li>Your profile photo</li>
            <li>All data stored in Firebase associated with your account</li>
          </ul>
        </section>

        <div className="my-6 border-t border-border/50" />

        <section>
          <div className="rounded-xl border border-orange-500/30 bg-orange-500/5 p-4">
            <p className="text-sm font-medium text-orange-600 dark:text-orange-400">
              This action is irreversible.
            </p>
            <p className="text-sm text-muted-foreground mt-1">
              Once deleted, your data cannot be recovered. Make sure you want to
              permanently remove your account before proceeding.
            </p>
          </div>
        </section>
      </main>

      {/* Contact */}
      <p className="text-center text-sm text-muted-foreground mt-8">
        Need help?{" "}
        <a href="mailto:info@ohyeahsaas.com" className="underline">
          info@ohyeahsaas.com
        </a>
      </p>
    </div>
  );
}
