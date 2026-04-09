import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, ChevronRight, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/hero-home.jpg";
import aboutImg from "@/assets/about-portrait.jpg";

const Index = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: MapPin,
      title: t("home.service1Title"),
      desc: t("home.service1Desc"),
      link: "/itineraries",
    },
    {
      icon: Briefcase,
      title: t("home.service2Title"),
      desc: t("home.service2Desc"),
      link: "/consulting",
    },
    {
      icon: GraduationCap,
      title: t("home.service3Title"),
      desc: t("home.service3Desc"),
      link: "/consulting",
    },
  ];

  const testimonials = [
    { name: t("home.testimonial1Name"), loc: t("home.testimonial1Loc"), text: t("home.testimonial1Text") },
    { name: t("home.testimonial2Name"), loc: t("home.testimonial2Loc"), text: t("home.testimonial2Text") },
    { name: t("home.testimonial3Name"), loc: t("home.testimonial3Loc"), text: t("home.testimonial3Text") },
  ];

  const blogPosts = [
    { cat: t("home.blogCat1"), title: t("home.blogPost1Title"), excerpt: t("home.blogPost1Excerpt") },
    { cat: t("home.blogCat2"), title: t("home.blogPost2Title"), excerpt: t("home.blogPost2Excerpt") },
    { cat: t("home.blogCat3"), title: t("home.blogPost3Title"), excerpt: t("home.blogPost3Excerpt") },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Albanian Riviera luxury coastline" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="subtitle-text text-background/70 mb-6"
          >
            {t("home.subtitle")}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-display text-5xl sm:text-6xl lg:text-7xl text-background mb-4"
          >
            {t("home.heroTitle")}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-xl sm:text-2xl text-background/80 italic mb-10"
          >
            {t("home.heroTagline")}
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/itineraries">{t("home.exploreBtn")}</Link>
            </Button>
            <Button variant="gold-outline" size="lg" className="border-background/50 text-background hover:bg-background hover:text-foreground" asChild>
              <Link to="/contact">{t("home.bookBtn")}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ChevronRight className="rotate-90 text-background/40" size={24} />
        </motion.div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src={aboutImg}
                  alt="Brunilda Liçaj travel designer"
                  className="rounded-lg shadow-2xl w-full max-w-md mx-auto"
                  loading="lazy"
                  width={800}
                  height={1080}
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 border-2 border-primary rounded-lg" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="subtitle-text mb-4">{t("home.aboutSubtitle")}</p>
              <h2 className="heading-section text-foreground mb-6">
                {t("home.aboutTitle")}
              </h2>
              <div className="luxury-divider !mx-0" />
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                {t("home.aboutDesc")}
              </p>
              <Button variant="gold-outline" asChild>
                <Link to="/about">
                  {t("home.learnMore")} <ArrowRight size={14} />
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="section-padding bg-secondary/50">
        <div className="container-luxury">
          <SectionHeading
            subtitle={t("home.servicesSubtitle")}
            title={t("home.servicesTitle")}
            description={t("home.servicesDesc")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link to={service.link} className="block glass-card rounded-xl p-8 h-full group hover:shadow-xl transition-all duration-300">
                  <service.icon className="text-primary mb-6" size={32} strokeWidth={1.5} />
                  <h3 className="font-heading text-xl mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-body text-sm text-muted-foreground leading-relaxed">
                    {service.desc}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding">
        <div className="container-luxury">
          <SectionHeading subtitle={t("home.testimonialsSubtitle")} title={t("home.testimonialsTitle")} />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-card rounded-xl p-8"
              >
                <div className="flex gap-1 text-primary mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} fill="currentColor" />
                  ))}
                </div>
                <p className="font-body text-sm text-muted-foreground leading-relaxed italic mb-6">
                  "{item.text}"
                </p>
                <p className="font-heading text-lg">{item.name}</p>
                <p className="font-body text-xs text-muted-foreground">{item.loc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-secondary/50">
        <div className="container-luxury">
          <SectionHeading
            subtitle={t("home.blogSubtitle")}
            title={t("home.blogTitle")}
            description={t("home.blogDesc")}
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {blogPosts.map((post, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
              >
                <Link to="/blog" className="block glass-card rounded-xl overflow-hidden group">
                  <div className="h-48 bg-muted" />
                  <div className="p-6">
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-2">
                      {post.cat}
                    </p>
                    <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">{post.excerpt}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Button variant="gold-outline" asChild>
              <Link to="/blog">{t("home.viewAll")} <ArrowRight size={14} /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="" className="w-full h-full object-cover" loading="lazy" width={1920} height={1080} />
          <div className="absolute inset-0 bg-foreground/70" />
        </div>
        <div className="relative z-10 text-center px-4">
          <h2 className="heading-section text-background mb-4">{t("home.ctaTitle")}</h2>
          <div className="luxury-divider bg-primary" />
          <p className="font-body text-background/70 mb-10 max-w-xl mx-auto">
            {t("home.ctaDesc")}
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">{t("home.ctaBtn")}</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
