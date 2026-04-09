import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, Instagram, Facebook, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll respond shortly.");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Contact"
            title="Let's Connect"
            description="Ready to discover Albania? Get in touch and let's create something extraordinary."
          />
        </div>
      </section>

      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.form
              onSubmit={handleSubmit}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {[
                { key: "name", label: "Name", type: "text" },
                { key: "email", label: "Email", type: "email" },
                { key: "subject", label: "Subject", type: "text" },
              ].map((field) => (
                <div key={field.key}>
                  <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                    {field.label}
                  </label>
                  <input
                    type={field.type}
                    required
                    value={form[field.key as keyof typeof form]}
                    onChange={(e) => setForm({ ...form, [field.key]: e.target.value })}
                    className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary"
                  />
                </div>
              ))}
              <div>
                <label className="font-body text-xs tracking-widest uppercase text-muted-foreground mb-2 block">
                  Message
                </label>
                <textarea
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 font-body text-sm text-foreground focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                />
              </div>
              <Button variant="gold" size="lg" className="w-full">
                Send Message
              </Button>
            </motion.form>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h3 className="font-heading text-2xl mb-6">Get in Touch</h3>
                <div className="space-y-6">
                  <a
                    href="mailto:hello@brunildaprive.com"
                    className="flex items-center gap-4 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Mail size={18} className="text-primary" />
                    </div>
                    hello@brunildaprive.com
                  </a>
                  <a
                    href="https://wa.me/355123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 font-body text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <Phone size={18} className="text-primary" />
                    </div>
                    WhatsApp
                  </a>
                  <div className="flex items-center gap-4 font-body text-sm text-muted-foreground">
                    <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                      <MapPin size={18} className="text-primary" />
                    </div>
                    Albania
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-heading text-lg mb-4">Follow</h4>
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary transition-colors" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="rounded-xl overflow-hidden h-64 bg-muted flex items-center justify-center">
                <p className="font-body text-sm text-muted-foreground">Map Placeholder</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
