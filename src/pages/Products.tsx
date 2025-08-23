import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Rocket,
  Sparkles,
  Clock,
  Mail,
  ExternalLink,
  CheckCircle2,
  Apple,
  GraduationCap,
  ShoppingCart,
} from "lucide-react";
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

// Helper: subtle gradient border wrapper
function GradientBorder({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative rounded-3xl p-[1px] bg-gradient-to-r from-blue-500/40 via-cyan-500/40 to-emerald-500/40">
      <div className="rounded-3xl bg-background/70 backdrop-blur-sm h-full w-full">
        {children}
      </div>
    </div>
  );
}

// Progress bar (0-100)
function Progress({ value }: { value: number }) {
  return (
    <div className="w-full h-2 rounded-full bg-foreground/10 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-blue-500 via-cyan-500 to-emerald-500"
        style={{ width: `${Math.min(Math.max(value, 0), 100)}%` }}
      />
    </div>
  );
}

// Waitlist dialog (local-only; replace with your backend later)
function WaitlistDialog({ product }: { product: string }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="rounded-2xl" disabled>
          Notify me
        </Button>
      </DialogTrigger>
      <DialogContent className="rounded-2xl">
        <DialogHeader>
          <DialogTitle>Join the waitlist</DialogTitle>
          <DialogDescription>
            Get an email when {product} is ready.
          </DialogDescription>
        </DialogHeader>
        {submitted ? (
          <div className="flex items-center gap-3 py-4">
            <CheckCircle2 className="h-5 w-5 text-emerald-500" />
            <p className="text-sm">
              All set! We'll notify <span className="font-medium">{email}</span>{" "}
              when we launch.
            </p>
          </div>
        ) : (
          <form
            onSubmit={(e) => {
              e.preventDefault();
              // TODO: hook up to your API; for now just simulate success
              setSubmitted(true);
              console.log("Waitlist:", { product, email });
            }}
            className="space-y-3"
          >
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                required
                placeholder="you@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <DialogFooter>
              <Button type="submit" className="rounded-2xl">
                Join
              </Button>
              <a
                href={`mailto:hello@ohyeahsoftware.com?subject=Waitlist%20-%20${encodeURIComponent(
                  product
                )}`}
                className="text-sm opacity-70 hover:opacity-100"
              >
                or email us
              </a>
            </DialogFooter>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Single product card
function ComingSoonCard({
  name,
  tagline,
  bullets,
  eta,
  progress,
  href,
  badge,
  icon: IconComponent,
}: {
  name: string;
  tagline: string;
  bullets: string[];
  eta: string;
  progress: number;
  href?: string;
  badge?: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
      className="h-full"
    >
      <GradientBorder>
        <Card className="rounded-3xl border-transparent bg-background/60">
          <CardHeader className="space-y-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="grid place-items-center h-11 w-11 rounded-2xl bg-gradient-to-br from-blue-500/20 to-emerald-500/20">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-xl md:text-2xl font-semibold tracking-tight">
                    {name}
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    {tagline}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="uppercase tracking-wide">
                  Coming soon
                </Badge>
                {badge ? (
                  <Badge className="hidden sm:inline-flex">{badge}</Badge>
                ) : null}
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <ul className="grid gap-2">
              {bullets.map((b, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-sm text-foreground/85"
                >
                  <Sparkles className="h-4 w-4 mt-0.5" /> {b}
                </li>
              ))}
            </ul>

            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" /> ETA: {eta}
              </div>
              <span className="opacity-70">{progress}%</span>
            </div>
            <Progress value={progress} />
          </CardContent>
          <CardFooter className="flex items-center justify-between">
            <WaitlistDialog product={name} />
            {href ? (
              <a
                href={href}
                className="inline-flex items-center gap-1 text-sm opacity-80 hover:opacity-100"
              >
                Preview <ExternalLink className="h-4 w-4" />
              </a>
            ) : (
              <span className="text-sm opacity-60">Private preview</span>
            )}
          </CardFooter>
        </Card>
      </GradientBorder>
    </motion.div>
  );
}

// Page component
const ProductsPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <section className="relative pt-8 pb-8 overflow-hidden">
        {/* background accents */}
        <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-gradient-to-br from-blue-500/20 to-teal-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-32 -right-24 h-80 w-80 rounded-full bg-gradient-to-tr from-indigo-500/15 to-cyan-400/15 blur-3xl" />

        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl tracking-tight leading-tight text-foreground drop-shadow-sm"
            >
              Our <span className="bg-gradient-primary bg-clip-text text-transparent">Products</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-6 text-lg md:text-xl text-muted-foreground/90 leading-relaxed md:leading-8 max-w-3xl mx-auto [text-wrap:balance]"
            >
              A peek at what we’re building. Join the waitlist to get early
              access, shape the roadmap, and hear when each product ships.
            </motion.p>
          </div>

          {/* grid */}
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <ComingSoonCard
              name="Fresh Saver"
              tagline="Save Food, Save Money"
              bullets={[
                "Discover surplus food from local restaurants and stores at discounted prices.",
                "Help reduce food waste while enjoying delicious meals for less.",
                "Dashboards & weekly insights, Order History, Rewards."
              ]}
              eta="Q4 2025"
              progress={65}
              icon={Apple}
            />

            <ComingSoonCard
              name="Edu Manage"
              tagline="School Management System"
              bullets={[
                "School Manager, Mark Attendence & Announcements",
                "Fee Management, Timetable, Admissions",
                "Dashboards & weekly insights",
              ]}
              eta="Q1 2026"
              progress={40}
              icon={GraduationCap}
            />

            <ComingSoonCard
              name="Mana Bazaar"
              tagline="India's Marketplace"
              bullets={[
                "A modern local marketplace to buy, sell, and discover items nearby.",
                "Post your products in minutes and connect with trusted buyers and sellers in your city.",
                "A simple, fast, and community-driven way to trade."
              ]}
              eta="Q2 2026"
              progress={25}
              icon={ShoppingCart}
            />
          </div>

          {/* mini-roadmap */}
          <div className="mt-14 max-w-4xl mx-auto text-center">
            <p className="text-sm text-muted-foreground">
              Roadmap next up:{" "}
              <span className="font-medium text-foreground">Beta invites</span>{" "}
              → Public Docs → Launch.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ProductsPage;
