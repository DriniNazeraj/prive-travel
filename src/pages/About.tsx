import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";
import aboutImg from "@/assets/about-portrait.jpg";
import { MapPin, BookOpen, Users, Mountain, Award } from "lucide-react";

const milestoneIcons = [MapPin, BookOpen, Users, Mountain, Award];
const milestoneKeys = [
  "about.milestone1",
  "about.milestone2",
  "about.milestone3",
  "about.milestone4",
  "about.milestone5",
];

const About = () => {
  const { t } = useTranslation();

  return (
    <main>
      {/* Hero */}
      <section className="relative pt-32 pb-20 section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading
            subtitle={t("about.subtitle")}
            title={t("about.title")}
            description={t("about.description")}
          />
        </div>
      </section>

      {/* Story */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="sticky top-28"
            >
              <img
                src={aboutImg}
                alt="Brunilda Liçaj"
                className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
                loading="lazy"
                width={800}
                height={1080}
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <p className="font-body text-muted-foreground leading-relaxed">
                {t("about.story1")}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                {t("about.story2")}
              </p>
              <p className="font-body text-muted-foreground leading-relaxed">
                {t("about.story3")}
              </p>

              <div className="luxury-divider !mx-0" />

              <blockquote className="font-heading text-2xl italic text-foreground border-l-2 border-primary pl-6">
                "{t("about.quote")}"
              </blockquote>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="section-padding bg-secondary/30">
        <div className="container-luxury">
          <SectionHeading subtitle={t("about.milestonesSubtitle")} title={t("about.milestonesTitle")} />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {milestoneKeys.map((key, i) => {
              const Icon = milestoneIcons[i];
              return (
                <motion.div
                  key={key}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-xl p-6 text-center"
                >
                  <Icon className="mx-auto text-primary mb-4" size={28} strokeWidth={1.5} />
                  <p className="font-body text-sm text-muted-foreground">{t(key)}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
};

export default About;
