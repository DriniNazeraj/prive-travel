import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { useTranslation } from "react-i18next";
import heroImg from "@/assets/blog.jpg";
import image1 from "@/assets/image1.jpg";
import image2 from "@/assets/image2.jpg";
import image3 from "@/assets/image3.jpg";
import image5 from "@/assets/image5.jpg";
import image6 from "@/assets/image6.jpg";
import image7 from "@/assets/image7.png";
import image8 from "@/assets/image8.png";
import image9 from "@/assets/image9.png";
import image10 from "@/assets/image10.png";
import image11 from "@/assets/image11.png";
import image12 from "@/assets/image12.png";

const blogImages = [image1, image2, image3, image11, image5, image6, image12, image7, image9, image10];

const Blog = () => {
  const { t } = useTranslation();

  const categories = [
    {
      name: t("blog.cat1"),
      articles: [
        { title: t("blog.cat1Art1Title"), excerpt: t("blog.cat1Art1Excerpt") },
        { title: t("blog.cat1Art2Title"), excerpt: t("blog.cat1Art2Excerpt") },
      ],
    },
    {
      name: t("blog.cat2"),
      articles: [
        { title: t("blog.cat2Art1Title"), excerpt: t("blog.cat2Art1Excerpt") },
        { title: t("blog.cat2Art2Title"), excerpt: t("blog.cat2Art2Excerpt") },
        { title: t("blog.cat2Art3Title"), excerpt: t("blog.cat2Art3Excerpt") },
      ],
    },
    {
      name: t("blog.cat3"),
      articles: [
        { title: t("blog.cat3Art1Title"), excerpt: t("blog.cat3Art1Excerpt") },
        { title: t("blog.cat3Art2Title"), excerpt: t("blog.cat3Art2Excerpt") },
        { title: t("blog.cat3Art3Title"), excerpt: t("blog.cat3Art3Excerpt") },
      ],
    },
    {
      name: t("blog.cat4"),
      articles: [
        { title: t("blog.cat4Art1Title"), excerpt: t("blog.cat4Art1Excerpt") },
        { title: t("blog.cat4Art2Title"), excerpt: t("blog.cat4Art2Excerpt") },
      ],
    },
  ];

  return (
    <main>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Albanian heritage town" className="w-full h-full object-cover" width={1920} height={1080} />
          <div className="absolute inset-0 bg-foreground/50" />
        </div>
        <div className="relative z-10 text-center px-4">
          <p className="subtitle-text text-background/70 mb-4">{t("blog.heroSubtitle")}</p>
          <h1 className="heading-display text-background mb-4">{t("blog.heroTitle")}</h1>
          <p className="font-heading text-xl text-background/80 italic">
            {t("blog.heroAuthor")}
          </p>
          <p className="font-body text-sm text-background/60 mt-4 max-w-lg mx-auto">
            {t("blog.heroDesc")}
          </p>
        </div>
      </section>

      {/* Categories */}
      {categories.map((cat, ci) => {
        const imageOffset = categories.slice(0, ci).reduce((sum, c) => sum + c.articles.length, 0);
        return (
        <section key={ci} className={`section-padding ${ci % 2 === 1 ? "bg-secondary/30" : ""}`}>
          <div className="container-luxury">
            <SectionHeading title={cat.name} />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cat.articles.map((article, i) => (
                <motion.article
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img src={blogImages[imageOffset + i]} alt={article.title} className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <p className="font-body text-[10px] tracking-[0.2em] uppercase text-primary mb-2">
                      {cat.name}
                    </p>
                    <h3 className="font-heading text-lg mb-2 group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground">
                      {article.excerpt}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </div>
        </section>
        );
      })}
    </main>
  );
};

export default Blog;
