import { Link } from "react-router-dom";

const policies = [
  {
    label: "Monsoon Dhara",
    description:
      "Privacy policy for the Monsoon Dhara weather app. No personal data collected.",
    path: "/privacy/monsoon/policy",
    gradient: "from-blue-600 to-cyan-500",
  },
  {
    label: "Bill Buddy",
    description:
      "Privacy policy for the Bill Buddy expense tracking app. Data stored securely via Firebase.",
    path: "/privacy/bill-buddy/policy",
    gradient: "from-orange-500 to-amber-400",
  },
  {
    label: "SkipQ Vendor",
    description:
      "Privacy policy for the SkipQ Vendor app. Covers order data, business details, and real-time order delivery via Ably.",
    path: "/privacy/skipq-vendor/policy",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    label: "SkipQ",
    description:
      "Privacy policy for the SkipQ student app. Covers campus email, order history, payments, and biometric login.",
    path: "/privacy/skipq/policy",
    gradient: "from-green-500 to-emerald-400",
  },
];

export default function PrivacyLanding() {
  return (
    <div className="max-w-2xl mx-auto px-6 py-16">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold tracking-tight">
          Privacy Policies
        </h1>
        <p className="text-muted-foreground mt-4">
          Select an app to view its privacy policy.
        </p>
      </header>

      <div className="grid gap-4">
        {policies.map((p) => (
          <Link
            key={p.path}
            to={p.path}
            className="rounded-2xl border border-border/60 bg-card/50 p-6 hover:bg-card transition-colors group"
          >
            <h2
              className={`text-xl font-semibold bg-gradient-to-r ${p.gradient} bg-clip-text text-transparent`}
            >
              {p.label}
            </h2>
            <p className="text-muted-foreground mt-2 text-sm">
              {p.description}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
