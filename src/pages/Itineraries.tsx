import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Check, FileText, Map, Utensils, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/itineraries-hero.jpg";

const Itineraries = () => {
  const { t } = useTranslation();

  const packages = [
    {
      name: t("itineraries.pkg1Name"),
      duration: t("itineraries.pkg1Duration"),
      focus: t("itineraries.pkg1Focus"),
      includes: [
        t("itineraries.pkg1Item1"),
        t("itineraries.pkg1Item2"),
        t("itineraries.pkg1Item3"),
      ],
      pricing: t("itineraries.fixedFee"),
    },
    {
      name: t("itineraries.pkg2Name"),
      duration: t("itineraries.pkg2Duration"),
      focus: t("itineraries.pkg2Focus"),
      includes: [
        t("itineraries.pkg2Item1"),
        t("itineraries.pkg2Item2"),
        t("itineraries.pkg2Item3"),
        t("itineraries.pkg2Item4"),
      ],
      pricing: t("itineraries.fixedFee"),
      featured: true,
    },
    {
      name: t("itineraries.pkg3Name"),
      duration: t("itineraries.pkg3Duration"),
      focus: t("itineraries.pkg3Focus"),
      includes: [
        t("itineraries.pkg3Item1"),
        t("itineraries.pkg3Item2"),
        t("itineraries.pkg3Item3"),
        t("itineraries.pkg3Item4"),
      ],
      pricing: t("itineraries.fixedFeePercent"),
    },
  ];

  const extras = [
    { icon: FileText, label: t("itineraries.extra1") },
    { icon: Map, label: t("itineraries.extra2") },
    { icon: Utensils, label: t("itineraries.extra3") },
    { icon: Check, label: t("itineraries.extra4") },
    { icon: MessageCircle, label: t("itineraries.extra5") },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Luxury Albanian travel experience" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-foreground/60" />
        </div>
        <div className="relative z-10 text-center px-4" style={{ textShadow: "0 2px 12px rgba(0,0,0,0.5)" }}>
          <p className="subtitle-text text-white mb-4">{t("itineraries.heroSubtitle")}</p>
          <h1 className="heading-display text-white mb-4">{t("itineraries.heroTitle")}</h1>
          <p className="font-heading text-xl text-white/90 italic">
            {t("itineraries.heroTagline")}
          </p>
        </div>
      </section>

      {/* Packages */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading subtitle={t("itineraries.packagesSubtitle")} title={t("itineraries.packagesTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, i) => (
              <motion.div
                key={i}
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
                    {t("itineraries.mostPopular")}
                  </p>
                )}
                <h3 className="font-heading text-2xl mb-1">{pkg.name}</h3>
                <p className="font-body text-xs text-primary tracking-widest uppercase mb-4">
                  {pkg.duration}
                </p>
                <p className="font-body text-sm text-muted-foreground mb-6">{pkg.focus}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {pkg.includes.map((item, j) => (
                    <li key={j} className="flex items-start gap-3">
                      <Check className="text-primary mt-0.5 shrink-0" size={16} />
                      <span className="font-body text-sm text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="border-t border-border pt-4">
                  <p className="font-body text-xs text-muted-foreground mb-4">
                    {t("itineraries.pricing")}: <span className="text-foreground font-medium">{pkg.pricing}</span>
                  </p>
                  <Button variant={pkg.featured ? "gold" : "gold-outline"} className="w-full" asChild>
                    <Link to="/contact">{t("itineraries.requestPackage")}</Link>
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
          <SectionHeading subtitle={t("itineraries.extrasSubtitle")} title={t("itineraries.extrasTitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {extras.map((extra, i) => (
              <motion.div
                key={i}
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
};

export default Itineraries;
