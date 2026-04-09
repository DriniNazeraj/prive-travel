import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Package, Building2, Award, Megaphone, Gamepad2, FileCheck, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/consulting-hero.jpg";

const sections = [
  {
    title: "Startup & Tourism Business Mentoring",
    items: [
      { icon: Lightbulb, label: "Potential Discovery", desc: "Identify your strengths and market positioning." },
      { icon: Package, label: "Offer Structuring", desc: "Create tourism packages that combine tradition with modern demand." },
      { icon: Building2, label: "Albergo Diffuso Consulting", desc: "Transform heritage houses into distributed hospitality experiences." },
    ],
  },
  {
    title: "Professional Training Academy",
    items: [
      { icon: Award, label: "Hospitality & Service", desc: "Standards training for hotels and restaurants — Made in Albania." },
      { icon: Megaphone, label: "Marketing & Communication", desc: "Digital presence and storytelling for tourism businesses." },
      { icon: Gamepad2, label: "Gamification & Innovation", desc: "Creative engagement strategies for memorable guest experiences." },
    ],
  },
  {
    title: "Technical / Grant Assistance",
    items: [
      { icon: FileCheck, label: "Standardization Procedures", desc: "Quality standards and certification guidance." },
      { icon: FileText, label: "Grant Application Consulting", desc: "Navigate donor programs and secure funding." },
      { icon: BarChart3, label: "Business Plans & Strategy", desc: "Comprehensive business planning for tourism ventures." },
    ],
  },
];

const partners = ["GIZ", "BERZH", "Swiss Contact", "UNDP", "EU Programs", "World Bank"];

const Consulting = () => {
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch soon.");
    setForm({ name: "", email: "", business: "", message: "" });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Business consulting" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="subtitle-text text-background/70 mb-4">Mentoring & Grants</p>
          <h1 className="heading-display text-background mb-4">From Idea to Destination</h1>
          <p className="font-heading text-xl text-background/80 italic">
            Professional support for tourism growth in Albania.
          </p>
        </div>
      </section>

      {/* Services */}
      {sections.map((section, si) => (
        <section key={section.title} className={`section-padding ${si % 2 === 1 ? "bg-secondary/30" : ""}`}>
          <div className="container-luxury">
            <SectionHeading title={section.title} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.items.map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-8"
                >
                  <item.icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
                  <h3 className="font-heading text-xl mb-2">{item.label}</h3>
                  <p className="font-body text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Form */}
      <section className="section-padding bg-foreground">
        <div className="container-luxury max-w-2xl">
          <SectionHeading
            light
            subtitle="Let's Connect"
            title="Have a Tourism Project?"
            description="Let's Build It Together."
          />
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {[
              { key: "name", label: "Name", type: "text" },
              { key: "email", label: "Email", type: "email" },
              { key: "business", label: "Business / Project Name", type: "text" },
            ].map((field) => (
              <div key={field.key}>
                <label className="font-body text-xs tracking-widest uppercase text-background/60 mb-2 block">
                  {field.label}
                </label>
                <input
                  type={field.type}
                  required
                  value={form[field.key as keyof typeof form]}
                  onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                  className="w-full bg-background/5 border border-background/20 rounded-lg px-4 py-3 font-body text-sm text-background placeholder:text-background/30 focus:outline-none focus:ring-1 focus:ring-primary"
                />
              </div>
            ))}
            <div>
              <label className="font-body text-xs tracking-widest uppercase text-background/60 mb-2 block">
                Message / Project Idea
              </label>
              <textarea
                required
                rows={4}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background/5 border border-background/20 rounded-lg px-4 py-3 font-body text-sm text-background placeholder:text-background/30 focus:outline-none focus:ring-1 focus:ring-primary resize-none"
              />
            </div>
            <Button variant="gold" size="lg" className="w-full">
              Submit Project Inquiry
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading subtitle="Trusted By" title="Success Partners" />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
            {partners.map((p, i) => (
              <motion.div
                key={p}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="glass-card rounded-xl p-6 flex items-center justify-center h-24"
              >
                <span className="font-body text-sm text-muted-foreground font-medium tracking-wide">
                  {p}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Consulting;
