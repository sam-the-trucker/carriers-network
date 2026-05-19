import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  Fuel,
  CreditCard,
  Truck,
  Megaphone,
  ArrowUpRight,
  Phone,
  CheckCircle2,
  Star,
  Quote,
  ClipboardList,
  TrendingUp,
  Handshake,
  Rocket,
  Award,
  ShieldCheck,
  Users,
  Globe2,
  Train,
  MapPin,
  Mail,
  Clock,
  ChevronRight,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import { Toaster } from "@/components/ui/sonner";
import heroPort from "@/assets/carriers_network_truck.png";
import trucksIllustration from "@/assets/trucks-illustration.jpg";
import dispatcherIllustration from "@/assets/dispatcher-illustration.jpg";
import header_logo from "@/assets/carriers_network_logo_header.png";
import footer_logo from "@/assets/carriers_network_logo_footer1.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Carriers Network — Fuel, Factoring & Dispatching for Trucking Carriers" },
      {
        name: "description",
        content:
          "Carriers Network connects trucking carriers with vetted partners for fuel cards, factoring, dispatching and digital marketing — bigger savings, faster payments, zero cost to you.",
      },
      { property: "og:title", content: "Carriers Network — Carrier Operating System" },
      {
        property: "og:description",
        content:
          "Fuel, factoring and dispatching made simple for trucking carriers.",
      },
    ],
  }),
});

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Our Services", href: "#services" },
  { label: "Blog", href: "#blog" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  {
    icon: TrendingUp,
    title: "Factoring Assistance",
    body:
      "Get paid the same day or next day through top-tier factoring partners. We compare programs and negotiate the best advance rates for your lanes — including premium access through partners like RTS Financial.",
  },
  {
    icon: CreditCard,
    title: "Fuel Card Programs",
    body:
      "Save up to 45¢ per gallon through our exclusive partner network. Fuel cards tailored to your routes with real discounts at 3,500+ stations and flexible credit options.",
  },
  {
    icon: Truck,
    title: "Trailer Rentals",
    body:
      "Access reliable trailer rental solutions tailored to your hauling needs. From dry vans to flatbeds, we help carriers find flexible rental options at competitive rates.",
  },
  {
    icon: Megaphone,
    title: "Truck Dispatching",
    body:
      "Our dispatch team finds profitable loads, handles broker calls, and keep your trucks moving — contract-free and stress-free, so you can focus on driving.",
  },
];

const fuelBenefits = [
  "Average savings of 45¢ per gallon at 3,500+ stations",
  "Tire and maintenance discounts at 290+ service centers",
  "Credit lines up to $3,200 per truck per week",
  "No annual fees and flexible terms",
  "24/7 fraud monitoring and instant alerts",
];

const factoringBenefits = [
  "Same-day funding with no hidden fees",
  "Competitive advance rates",
  "No ACH fees. No invoice upload fees",
  "Web and mobile account access",
  "Dedicated factoring specialist",
];

const extraTools = [
  "Reliable dry van and flatbed trailer options",
  "Flexible short-term and long-term rentals",
  "Competitive weekly and monthly rates",
  "Well-maintained and road-ready equipment",
  "Fast approval and easy onboarding",
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Vetted Partners Only",
    body: "We only work with trusted, top-rated providers in trucking — no gimmicks, no fine print.",
  },
  {
    icon: Handshake,
    title: "Zero Cost to Carriers",
    body: "Our consulting is 100% free. We get paid by the providers when you save.",
  },
  {
    icon: Rocket,
    title: "Fast Onboarding",
    body: "Most carriers are set up with fuel cards, factoring, dispatch, or trailer rentals within 48 hours.",
  },
  {
    icon: Users,
    title: "Carrier-First Support",
    body: "Real humans who understand trucking — one call, one team, one point of contact.",
  },
];

const steps = [
  {
    icon: ClipboardList,
    title: "Tell Us About Your Business",
    body: "Fill out a quick form with the number of trucks, lanes you run, and what you need help with.",
  },
  {
    icon: TrendingUp,
    title: "We Match You With Top Providers",
    body: "We find the best factoring, fuel, dispatching, or trailer rental solutions that fit your business.",
  },
  {
    icon: Handshake,
    title: "Get Setup In Days, Not Weeks",
    body: "We handle onboarding, paperwork and intros so you can get rolling fast.",
  },
  {
    icon: Award,
    title: "Save More, Drive More, Grow",
    body: "Lock in better rates, faster payments, and tools that scale with your fleet.",
  },
];

const stats = [
  { icon: Truck, value: "15k", label: "Successful Carrier Services" },
  { icon: MapPin, value: "47+", label: "States Served" },
  { icon: Globe2, value: "500+", label: "Trusted Fleets" },
  { icon: Train, value: "12+", label: "Years of Experience" },
];

const testimonials = [
  {
    name: "Marcus T.",
    role: "Owner-Operator, TX",
    rating: 5,
    quote:
      "We saved over $600 a month on fuel using their recommended card and quickly got set up with reliable trailer rentals. The team feels like an extension of our business.",
  },
  {
    name: "Diana R.",
    role: "Fleet Manager, OH",
    rating: 5,
    quote:
      "Factoring setup was painless. Same-day pay hit my account on Friday and dispatch had three loads lined up by Monday. Game changer for our 6-truck fleet.",
  },
  {
    name: "Jamal P.",
    role: "Carrier, GA",
    rating: 5,
    quote:
      "I tried doing this alone for two years. One call with Carriers Network replaced about ten of mine. Better rates, better partners, zero pressure.",
  },
];

const faqs = [
  {
    q: "How much does Carriers Network cost?",
    a: "Nothing. Our consulting and matchmaking is 100% free for carriers. We are compensated by our partner providers when you sign up — so our incentives are aligned with finding you the best deal.",
  },
  {
    q: "What information do I need to get started?",
    a: "Just the basics: your MC number, number of trucks, the lanes you typically run, and what you’d like help with — fuel, factoring, dispatching or trailer rentals. We take it from there.",
  },
  {
    q: "Can you help if I’m a new carrier or just got my MC?",
    a: "Absolutely. We work with brand-new authorities every day and have programs specifically built for carriers in their first 12 months on the road.",
  },
  {
    q: "Are your partner companies reliable and vetted?",
    a: "Yes. Every provider in our network is independently reviewed for reputation, financial stability, and customer service. We only recommend companies we’d use ourselves.",
  },
  {
    q: "Do I have to switch providers I already use?",
    a: "No. We’ll run a side-by-side comparison and only recommend a switch when the savings are meaningful. Many carriers keep their current setup for some services and use us for others.",
  },
];

function Index() {
  const [form, setForm] = useState({
    fullName: "",
    company: "",
    phone: "",
    email: "",
    service: "",
  });
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.fullName || !form.phone || !form.email || !form.service) {
      toast.error("Please complete the required fields.");
      return;
    }
    toast.success("Thanks! A Carriers Network specialist will reach out shortly.");
    setForm({ fullName: "", company: "", phone: "", email: "", service: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Toaster richColors position="top-right" />

      {/* ===================== HERO ===================== */}
      <section
        id="home"
        className="relative isolate overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.18 0.07 265 / 0.55), oklch(0.12 0.05 265 / 0.85)), url(${heroPort})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Header */}
        <header className="relative z-20">
          <div className="mx-auto max-w-7xl px-5 md:px-8 py-5 flex items-center justify-between">
            <a href="#home" className="flex items-center gap-2">
              {/* <div className="relative w-11 h-11 rounded-full bg-yellow grid place-items-center shadow-card">
                <span className="block w-0 h-0 border-y-[14px] border-y-transparent border-l-[14px] border-l-navy-deep" />
              </div>
              <div className="leading-none">
                <div className="text-white font-extrabold text-2xl tracking-tight">
                  Carri<span className="text-yellow">OS</span>
                </div>
                <div className="text-[9px] tracking-[0.25em] text-white/70 font-semibold">
                  CARRIER OPERATING SYSTEM
                </div>
              </div> */}
              <img
                src={header_logo}
                alt="Carriers Network"
                className="h-14 w=auto"
              />
            </a>

            <nav className="hidden lg:flex items-center gap-9">
              {navLinks.map((l, i) => (
                <a
                  key={l.label}
                  href={l.href}
                  className={`text-sm font-medium transition-colors ${
                    i === 0 ? "text-yellow" : "text-white/90 hover:text-yellow"
                  }`}
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center gap-2 bg-primary text-primary-foreground px-5 py-3 rounded-full text-sm font-semibold shadow-card hover:translate-y-[-1px] hover:shadow-elegant transition-all"
              >
                Our Newsletter <ArrowUpRight className="w-4 h-4" />
              </a>
              <button
                aria-label="Toggle menu"
                className="lg:hidden text-white p-2"
                onClick={() => setMobileOpen((v) => !v)}
              >
                {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {mobileOpen && (
            <div className="lg:hidden bg-navy-deep/95 backdrop-blur px-6 py-4 space-y-3">
              {navLinks.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  className="block text-white/90 hover:text-yellow text-sm font-medium"
                  onClick={() => setMobileOpen(false)}
                >
                  {l.label}
                </a>
              ))}
            </div>
          )}
        </header>

        {/* Hero content */}
        <div className="relative z-10 mx-auto max-w-7xl px-5 md:px-8 pt-10 pb-24 lg:pt-20 lg:pb-32 grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="text-white animate-fade-in">
            <div className="inline-flex items-center gap-2 text-sm text-white/85">
              <Truck className="w-4 h-4 text-yellow" />
              Welcome to Carrier's Network
            </div>
            <h1 className="mt-4 text-[2.5rem] sm:text-5xl lg:text-[4rem] leading-[1.05] font-extrabold tracking-tight">
              Fuel, Factoring &amp; Trailer Rentals Made Simple for{" "}
              <span className="text-yellow">Trucking Carriers</span>
            </h1>
            <p className="mt-6 max-w-xl text-white/80 text-base sm:text-lg leading-relaxed">
              We connect carriers with top-rated providers and unlock exclusive
              fuel, factoring, &amp; trailer rental discounts you can&apos;t get on your own — at
              no cost to you.
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-7 py-4 rounded-full font-semibold shadow-elegant hover:translate-y-[-1px] transition-all"
              >
                Unlock Savings For My Carrier
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <a href="tel:+16153517718" className="flex items-center gap-3 group">
                <span className="w-12 h-12 rounded-full bg-primary grid place-items-center shadow-card group-hover:scale-105 transition-transform">
                  <Phone className="w-5 h-5 text-white" />
                </span>
                <span className="text-white/90 text-sm leading-tight">
                  Call us any time
                  <br />
                  <span className="text-white font-semibold text-base">
                    (615) 351-7718
                  </span>
                </span>
              </a>
            </div>
          </div>


          {/* <div
            id="contact"
            className="bg-navy-deep/85 backdrop-blur-md rounded-2xl p-7 sm:p-8 shadow-elegant border border-white/10 animate-scale-in" >
            Form on the hero section.
            <h2 className="text-white text-2xl sm:text-[1.7rem] font-bold leading-tight">
              Get Your Free
              <br /> Trucking Quote
            </h2>
            <form onSubmit={handleSubmit} className="mt-6 grid sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <Label className="text-white/85 text-sm">Full Name</Label>
                <Input
                  value={form.fullName}
                  onChange={(e) => setForm({ ...form, fullName: e.target.value })}
                  placeholder="Full Name"
                  className="bg-white/[0.06] border-white/15 text-white placeholder:text-white/40 h-11"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-white/85 text-sm">Company Name</Label>
                <Input
                  value={form.company}
                  onChange={(e) => setForm({ ...form, company: e.target.value })}
                  placeholder="Company Name"
                  className="bg-white/[0.06] border-white/15 text-white placeholder:text-white/40 h-11"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-white/85 text-sm">Phone number</Label>
                <Input
                  type="tel"
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  placeholder="(615) 351-7718"
                  className="bg-white/[0.06] border-white/15 text-white placeholder:text-white/40 h-11"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-white/85 text-sm">Email</Label>
                <Input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="Email"
                  className="bg-white/[0.06] border-white/15 text-white placeholder:text-white/40 h-11"
                />
              </div>
              <div className="space-y-1.5">
                <Label className="text-white/85 text-sm">
                  Services You&apos;re Interested In:
                </Label>
                <Select
                  value={form.service}
                  onValueChange={(v) => setForm({ ...form, service: v })}
                >
                  <SelectTrigger className="bg-white/[0.06] border-white/15 text-white h-11">
                    <SelectValue placeholder="Select your service" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="factoring">Factoring</SelectItem>
                    <SelectItem value="fuel">Fuel Card</SelectItem>
                    <SelectItem value="dispatch">Dispatching</SelectItem>
                    <SelectItem value="marketing">Digital Marketing</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-end">
                <Button
                  type="submit"
                  className="w-full h-11 rounded-md bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div> */}
        </div>
      </section>

      {/* ===================== CORE SERVICES ===================== */}
      <section id="services" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Truck className="w-4 h-4" /> How We Help Carriers Succeed
            </div>
            <h2 className="mt-4 text-4xl sm:text-5xl font-extrabold tracking-tight text-foreground">
              Our Core Services
            </h2>
            <p className="mt-5 text-muted-foreground max-w-md">
              We partner with trusted providers across the trucking industry to
              simplify your operations and save you money.
            </p>

            <div className="mt-10 rounded-2xl overflow-hidden shadow-card hidden lg:block">
              <img
                src={dispatcherIllustration}
                alt="Dispatcher illustration"
                width={1024}
                height={1024}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 relative">
            {services.map((s) => (
              <article
                key={s.title}
                className="group bg-card rounded-2xl p-7 shadow-card border border-border/60 hover:-translate-y-1 hover:shadow-elegant transition-all duration-300"
              >
                <div className="w-1 h-1 mb-5">
                  <div className="w-8 h-[3px] bg-primary rounded-full" />
                </div>
                <div className="w-11 h-11 rounded-lg bg-primary/10 grid place-items-center text-primary mb-5">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {s.body}
                </p>
              </article>
            ))}
            <div className="hidden sm:grid absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/3 w-18 h-18 rounded-full bg-card border border-border shadow-card place-items-center">
              <Award className="w-6 h-6 text-primary" />
            </div>
          </div>
        </div>
      </section>

      {/* ===================== SAVINGS / BENEFITS ===================== */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="flex items-center gap-2 text-sm text-primary font-medium">
            <Truck className="w-4 h-4" /> Exclusive Carriers Network Agent Program
          </div>
          <h2 className="mt-4 max-w-4xl text-4xl sm:text-5xl font-extrabold tracking-tight">
            Exclusive Fuel, Factoring Savings &amp; Trailer Rentals for Carriers Network Carriers
          </h2>
          <p className="mt-5 max-w-3xl text-muted-foreground">
            Through our partnership with RTS Financial, Carriers Network carriers unlock
            bigger fuel discounts and faster payments than standard market offers.
          </p>
          <p className="mt-2 text-muted-foreground">
            This is not a public offer — it&apos;s available because you came through Carriers Network.
          </p>

          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {/* Fuel Card */}
            <div className="rounded-2xl p-8 bg-navy text-white shadow-card hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-lg bg-white grid place-items-center mb-6">
                <Fuel className="w-6 h-6 text-navy" />
              </div>
              <h3 className="text-xl font-bold">Fuel Card Benefits</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/85">
                {fuelBenefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-yellow shrink-0" />
                    <span dangerouslySetInnerHTML={{ __html: b.replace(/(\d+¢ per gallon|\$3,200 per truck per week)/, '<strong class="text-white">$1</strong>') }} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Factoring */}
            <div className="rounded-2xl p-8 bg-cream text-foreground shadow-card hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-lg bg-navy grid place-items-center mb-6">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold">Factoring Benefits</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Get paid same day, no surprises
              </p>
              <ul className="mt-5 space-y-3 text-sm text-foreground/80">
                {factoringBenefits.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-navy shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Extra Tools */}
            <div className="rounded-2xl p-8 bg-yellow text-navy-deep shadow-card hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 rounded-lg bg-white grid place-items-center mb-6">
                <ClipboardList className="w-6 h-6 text-yellow" />
              </div>
              <h3 className="text-xl font-bold">Trailer Rental Benefits</h3>
              <ul className="mt-5 space-y-3 text-sm">
                {extraTools.map((b) => (
                  <li key={b} className="flex gap-3">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-navy-deep shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:translate-y-[-1px] hover:shadow-elegant transition-all"
            >
              Read More <ArrowUpRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 bg-yellow text-navy-deep px-6 py-3.5 rounded-full font-semibold hover:translate-y-[-1px] hover:shadow-elegant transition-all"
            >
              Get The Carriers Network Experience <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== STATS BANNER ===================== */}
      <section
        className="relative py-14"
        style={{
          backgroundImage: `linear-gradient(180deg, oklch(0.22 0.08 265 / 0.7), oklch(0.85 0.17 90 / 0.55)), url(${heroPort})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid grid-cols-2 lg:grid-cols-4 gap-5">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl px-6 py-5 flex items-center gap-4 shadow-card"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 grid place-items-center text-primary shrink-0">
                <s.icon className="w-6 h-6" />
              </div>
              <div>
                <div className="text-2xl font-extrabold text-foreground">{s.value}</div>
                <div className="text-xs text-muted-foreground leading-tight">{s.label}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ===================== HOW IT WORKS ===================== */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-16">
          <div className="flex flex-col justify-center">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              How It Works
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Discover how our simple 4-step process gets your trucking business
              set up with the best partners — in days, not weeks.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {steps.map((s, i) => (
              <article
                key={s.title}
                className="relative bg-card rounded-2xl p-7 shadow-card border border-border/60 hover:-translate-y-1 transition-all"
              >
                <div className="absolute top-5 right-5 text-5xl font-black text-cream">
                  0{i + 1}
                </div>
                <div className="w-1 h-1 mb-5">
                  <div className="w-8 h-[3px] bg-primary rounded-full" />
                </div>
                <div className="w-11 h-11 rounded-lg bg-yellow/30 grid place-items-center text-primary mb-5">
                  <s.icon className="w-5 h-5" />
                </div>
                <h3 className="text-lg font-bold">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {s.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== WHY CARRIERS CHOOSE US ===================== */}
      <section id="about" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-card order-2 lg:order-1">
            <img
              src={trucksIllustration}
              alt="Trucks illustration"
              width={1024}
              height={1024}
              loading="lazy"
              className="w-full h-auto"
            />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Truck className="w-4 h-4" /> Why Carriers Choose Us
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Built by Truckers, for Truckers
            </h2>
            <ul className="mt-6 space-y-3 text-foreground/80">
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                We work with Owner-Operators, Small Fleets and Large Carriers.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Dry Van, Flatbed, and Box Truck Operators.
              </li>
              <li className="flex gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                Whether you are just starting out or already hauling, we help
                streamline your back office and save on your bottom line.
              </li>
            </ul>

            <div className="mt-7 grid sm:grid-cols-2 gap-4">
              {whyUs.map((w) => (
                <div key={w.title} className="bg-card rounded-xl p-5 shadow-card border border-border/60">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 grid place-items-center text-primary">
                      <w.icon className="w-4 h-4" />
                    </div>
                    <h3 className="font-bold">{w.title}</h3>
                  </div>
                  <p className="mt-2 text-xs text-muted-foreground leading-relaxed">{w.body}</p>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="mt-8 inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3.5 rounded-full font-semibold hover:translate-y-[-1px] hover:shadow-elegant transition-all"
            >
              Read More <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* ===================== TESTIMONIALS ===================== */}
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-5xl px-5 md:px-8 text-center">
          <div className="inline-flex items-center gap-2 text-sm text-primary font-medium">
            <Truck className="w-4 h-4" /> Testimonials
          </div>
          <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
            What Carriers Are Saying
          </h2>

          <div className="mt-12 grid md:grid-cols-3 gap-6 text-left">
            {testimonials.map((t) => (
              <article
                key={t.name}
                className="bg-card rounded-2xl p-7 shadow-card border border-border/60 hover:-translate-y-1 transition-transform"
              >
                <Quote className="w-8 h-8 text-primary/30" />
                <p className="mt-3 text-foreground/85 text-sm leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-5 flex items-center gap-1 text-primary">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary" />
                  ))}
                </div>
                <div className="mt-3 pt-3 border-t border-border/60">
                  <div className="font-semibold text-sm">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ===================== FAQ ===================== */}
      <section id="blog" className="bg-cream py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center gap-2 text-sm text-primary font-medium">
              <Truck className="w-4 h-4" /> Frequently Asked Questions
            </div>
            <h2 className="mt-3 text-4xl sm:text-5xl font-extrabold tracking-tight">
              Answers for Carriers, From Carriers
            </h2>
            <p className="mt-4 text-muted-foreground max-w-md">
              Have a question we didn&apos;t cover? Give us a call any time at{" "}
              <a href="tel:+16153517718" className="text-primary font-semibold">
                (615) 351-7718
              </a>
              .
            </p>
            <div className="mt-8 rounded-2xl overflow-hidden shadow-card hidden lg:block">
              <img
                src={heroPort}
                alt="Port at dusk"
                width={1920}
                height={1280}
                loading="lazy"
                className="w-full h-auto"
              />
            </div>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((f, i) => (
              <AccordionItem
                key={f.q}
                value={`item-${i}`}
                className="bg-card rounded-2xl border border-border/60 px-6 shadow-card data-[state=open]:shadow-elegant"
              >
                <AccordionTrigger className="text-left text-base font-semibold hover:no-underline py-5">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {f.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* ===================== FINAL CTA ===================== */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-6xl px-5 md:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-navy text-white p-10 sm:p-14 shadow-elegant">
            <div className="absolute -right-10 -bottom-10 w-56 h-56 rounded-full bg-yellow/20 blur-3xl" />
            <div className="relative grid lg:grid-cols-[2fr_1fr] items-center gap-8">
              <div>
                <h3 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                  Ready to save on fuel, get paid faster, and grow your fleet?
                </h3>
                <p className="mt-3 text-white/80 max-w-2xl">
                  Talk to a Carriers Network specialist today — it&apos;s 100% free, no
                  pressure, and your information is always confidential.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center gap-2 bg-yellow text-navy-deep px-6 py-3.5 rounded-full font-semibold hover:translate-y-[-1px] transition-all"
                >
                  Get My Free Quote <ArrowUpRight className="w-4 h-4" />
                </a>
                <a
                  href="tel:+16153517718"
                  className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-3.5 rounded-full font-semibold hover:bg-white/15 transition-all"
                >
                  <Phone className="w-4 h-4" /> (615) 351-7718
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================== FOOTER ===================== */}
      <footer className="bg-cream pt-16 pb-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8 grid lg:grid-cols-4 md:grid-cols-2 gap-10">
          
          <div>
            <a href="#home" className="flex items-center gap-2">
              {/* <div className="relative w-10 h-10 rounded-full bg-yellow grid place-items-center">
                <span className="block w-0 h-0 border-y-[12px] border-y-transparent border-l-[12px] border-l-navy-deep" />
              </div>
              <div className="leading-none">
                <div className="text-foreground font-extrabold text-2xl tracking-tight">
                  Carri<span className="text-yellow">OS</span>
                </div>
                <div className="text-[9px] tracking-[0.25em] text-muted-foreground font-semibold">
                  CARRIER OPERATING SYSTEM
                </div>
              </div> */}
              <img
                src={footer_logo}
                alt="Carriers Network"
                className="h-14 w-auto"
              />
            </a>
            <p className="mt-5 text-sm text-muted-foreground leading-relaxed">
              We are an independent trucking services company that connects
              carriers with vetted, top-rated partners. We never charge carriers
              any fees for setup or consultation. Your information is 100%
              confidential and secure.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg">Quick Links</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {["Home", "Services", "About us", "Contact us"].map((l) => (
                <li key={l}>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-primary" /> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg">Services</h4>
            <ul className="mt-4 space-y-2 text-sm">
              {[
                "Factoring Assistance",
                "Fuel Card Program",
                "Trailer Rentals",
                "Dispatching Services",
              ].map((l) => (
                <li key={l}>
                  <a href="#" className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors">
                    <ChevronRight className="w-3.5 h-3.5 text-primary" /> {l}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg">Contact Us</h4>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              <li className="flex items-center gap-2"><MapPin className="w-4 h-4 text-primary" /> NASHVILLE, TN 37138</li>
              <li className="flex items-center gap-2"><Phone className="w-4 h-4 text-primary" /> (615) 351-7718</li>
              <li className="flex items-center gap-2"><Mail className="w-4 h-4 text-primary" /> info@carriersnetwork.com</li>
              <li className="flex items-center gap-2"><Clock className="w-4 h-4 text-primary" /> Mon - Sat : 09 am - 06 pm</li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-5 md:px-8 mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
          <div>Copyright © {new Date().getFullYear()} <span className="text-primary font-semibold">Carriers Network</span>. All Rights Reserved. Powered by <span className="text-primary font-semibold">Outtpace</span></div>
          <div className="flex gap-4">
            <a href="#" className="hover:text-primary">Terms &amp; Conditions</a>
            <span>|</span>
            <a href="#" className="hover:text-primary">Privacy Policy</a>
          </div>
        </div>
      </footer>
    </div>
  );
}