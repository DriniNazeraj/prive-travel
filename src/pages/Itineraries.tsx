import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, FileText, Map, Utensils, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/itineraries-hero.jpg";

const packages = [
  {
    name: "Quick Explorer",
    duration: "1–3 Days",
    focus: "Main highlights & time optimization",
    includes: [
      "Daily step-by-step plan",
      "Authentic restaurant recommendations",
      "Transportation guidance",
    ],
    pricing: "Fixed Fee",
  },
  {
    name: "Regional Deep Dive",
    duration: "4–5 Days",
    focus: "Full regional exploration",
    includes: [
      "Detailed itinerary",
      "Interactive Google Maps",
      "Transport options",
      "Booking links",
    ],
    pricing: "Fixed Fee",
    featured: true,
  },
  {
    name: "The Albanian Masterpiece",
    duration: "6+ Days",
    focus: "Full Albania Experience",
    includes: [
      "A-Z custom itinerary",
      "Coordination with guesthouses & adventure points",
      "Custom maps",
      "Live WhatsApp support during travel",
    ],
    pricing: "Fixed Fee / % of Budget",
  },
];

const extras = [
  { icon: FileText, label: "Personalized PDF Travel Guide" },
  { icon: Map, label: "Private Interactive Maps" },
  { icon: Utensils, label: "Tailored Niche Experiences" },
  { icon: Check, label: "Transparent Booking Links" },
  { icon: MessageCircle, label: "Real-Time Assistance During Travel" },
];

const Itineraries = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Luxury Albanian travel experience" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 text-center px-4">
        <p className="subtitle-text text-background/70 mb-4">Private Itineraries</p>
        <h1 className="heading-display text-background mb-4">Bespoke Travel Itineraries</h1>
        <p className="font-heading text-xl text-background/80 italic">
          I design the journey — you enjoy the experience.
        </p>
      </div>
    </section>

    {/* Packages */}
    <section className="section-padding">
      <div className="container-luxury">
        <SectionHeading subtitle="Packages" title="Choose Your Experience" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className={`rounded-xl p-8 flex flex-col ${
                pkg.featured
                  ? "glass-card ring-2 ring-primary shadow-xl"
                  : "glass-card"
              }`}
            >
              {pkg.featured && (
                <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-2">
                  Most Popular
                </p>
              )}
              <h3 className="font-heading text-2xl mb-1">{pkg.name}</h3>
              <p className="font-body text-xs text-primary tracking-widest uppercase mb-4">
                {pkg.duration}
              </p>
              <p className="font-body text-sm text-muted-foreground mb-6">{pkg.focus}</p>
              <ul className="space-y-3 mb-8 flex-1">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="text-primary mt-0.5 shrink-0" size={16} />
                    <span className="font-body text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="border-t border-border pt-4">
                <p className="font-body text-xs text-muted-foreground mb-4">
                  Pricing: <span className="text-foreground font-medium">{pkg.pricing}</span>
                </p>
                <Button variant={pkg.featured ? "gold" : "gold-outline"} className="w-full" asChild>
                  <Link to="/contact">Request This Package</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Extras */}
    <section className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <SectionHeading subtitle="Included" title="Every Privé Itinerary Includes" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {extras.map((extra, i) => (
            <motion.div
              key={extra.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <extra.icon className="mx-auto text-primary mb-4" size={28} strokeWidth={1.5} />
              <p className="font-body text-sm text-muted-foreground">{extra.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default Itineraries;
