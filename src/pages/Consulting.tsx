import { useState } from "react";
import { motion } from "framer-motion";
import { Lightbulb, Package, Building2, Award, Megaphone, Gamepad2, FileCheck, FileText, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/consulting-hero.jpg";

const sectionIcons = [
  [Lightbulb, Package, Building2],
  [Award, Megaphone, Gamepad2],
  [FileCheck, FileText, BarChart3],
];

const sectionKeys = [
  {
    titleKey: "consulting.section1Title",
    items: [
      { labelKey: "consulting.s1Item1Label", descKey: "consulting.s1Item1Desc" },
      { labelKey: "consulting.s1Item2Label", descKey: "consulting.s1Item2Desc" },
      { labelKey: "consulting.s1Item3Label", descKey: "consulting.s1Item3Desc" },
    ],
  },
  {
    titleKey: "consulting.section2Title",
    items: [
      { labelKey: "consulting.s2Item1Label", descKey: "consulting.s2Item1Desc" },
      { labelKey: "consulting.s2Item2Label", descKey: "consulting.s2Item2Desc" },
      { labelKey: "consulting.s2Item3Label", descKey: "consulting.s2Item3Desc" },
    ],
  },
  {
    titleKey: "consulting.section3Title",
    items: [
      { labelKey: "consulting.s3Item1Label", descKey: "consulting.s3Item1Desc" },
      { labelKey: "consulting.s3Item2Label", descKey: "consulting.s3Item2Desc" },
      { labelKey: "consulting.s3Item3Label", descKey: "consulting.s3Item3Desc" },
    ],
  },
];

const partners = ["GIZ", "BERZH", "Swiss Contact", "UNDP", "EU Programs", "World Bank"];

const Consulting = () => {
  const { t } = useTranslation();
  const [form, setForm] = useState({ name: "", email: "", business: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(t("consulting.formSuccess"));
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
          <p className="subtitle-text text-background/70 mb-4">{t("consulting.heroSubtitle")}</p>
          <h1 className="heading-display text-background mb-4">{t("consulting.heroTitle")}</h1>
          <p className="font-heading text-xl text-background/80 italic">
            {t("consulting.heroTagline")}
          </p>
        </div>
      </section>

      {/* Services */}
      {sectionKeys.map((section, si) => (
        <section key={si} className={`section-padding ${si % 2 === 1 ? "bg-secondary/30" : ""}`}>
          <div className="container-luxury">
            <SectionHeading title={t(section.titleKey)} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {section.items.map((item, i) => {
                const Icon = sectionIcons[si][i];
                return (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: i * 0.1 }}
                    className="glass-card rounded-xl p-8"
                  >
                    <Icon className="text-primary mb-4" size={28} strokeWidth={1.5} />
                    <h3 className="font-heading text-xl mb-2">{t(item.labelKey)}</h3>
                    <p className="font-body text-sm text-muted-foreground">{t(item.descKey)}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Contact Form */}
      <section className="section-padding bg-foreground">
        <div className="container-luxury max-w-2xl">
          <SectionHeading
            light
            subtitle={t("consulting.formSubtitle")}
            title={t("consulting.formTitle")}
            description={t("consulting.formDesc")}
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
              { key: "name", label: t("consulting.formName"), type: "text" },
              { key: "email", label: t("consulting.formEmail"), type: "email" },
              { key: "business", label: t("consulting.formBusiness"), type: "text" },
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
                {t("consulting.formMessage")}
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
              {t("consulting.formSubmit")}
            </Button>
          </motion.form>
        </div>
      </section>

      {/* Partners */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading subtitle={t("consulting.partnersSubtitle")} title={t("consulting.partnersTitle")} />
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
