import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/blog-hero.jpg";

const categories = [
  {
    name: "Discoveries & Explorations",
    articles: [
      { title: "Beyond the Map: Albania's Privé Destinations", excerpt: "Hidden coastlines, mountain villages, and secret trails that only locals know." },
      { title: "The Albanian Riviera: Untold Beach Stories", excerpt: "Beyond the crowded shores lie pristine coves waiting to be discovered." },
    ],
  },
  {
    name: "Economy & Development",
    articles: [
      { title: "How to Build an Albergo Diffuso", excerpt: "Transforming heritage houses into distributed hospitality experiences." },
      { title: "Grant Guide for Albanian Agritourism", excerpt: "Navigating funding opportunities for sustainable rural tourism." },
      { title: "Why Tourism Mentoring Matters", excerpt: "The impact of professional guidance on Albania's tourism sector." },
    ],
  },
  {
    name: "Heritage & Memory",
    articles: [
      { title: "Peeping Tourist: Tourism During Communism", excerpt: "How Albania's isolation shaped a unique tourism narrative." },
      { title: "Albania's Castles Through Storytelling", excerpt: "Centuries of history told through ancient stone walls." },
      { title: "Forgotten Heritage Routes Reborn", excerpt: "Rediscovering the paths that connected Albanian civilizations." },
    ],
  },
  {
    name: "Expert's Corner",
    articles: [
      { title: "25 Years of Tourism Research", excerpt: "Reflections on a quarter-century of exploring Albanian tourism." },
      { title: "Sustainable Tourism Strategy for Albania", excerpt: "Building a future that preserves while it develops." },
    ],
  },
];

const Blog = () => (
  <main>
    {/* Hero */}
    <section className="relative h-[50vh] min-h-[350px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroImg} alt="Albanian heritage town" className="w-full h-full object-cover" width={1920} height={1080} />
        <div className="absolute inset-0 bg-foreground/50" />
      </div>
      <div className="relative z-10 text-center px-4">
        <p className="subtitle-text text-background/70 mb-4">Journal</p>
        <h1 className="heading-display text-background mb-4">Albania 360°</h1>
        <p className="font-heading text-xl text-background/80 italic">
          by Brunilda Liçaj
        </p>
        <p className="font-body text-sm text-background/60 mt-4 max-w-lg mx-auto">
          Discoveries, Analysis & Stories Behind Every Journey
        </p>
      </div>
    </section>

    {/* Categories */}
    {categories.map((cat, ci) => (
      <section key={cat.name} className={`section-padding ${ci % 2 === 1 ? "bg-secondary/30" : ""}`}>
        <div className="container-luxury">
          <SectionHeading title={cat.name} />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cat.articles.map((article, i) => (
              <motion.article
                key={article.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-card rounded-xl overflow-hidden group cursor-pointer"
              >
                <div className="h-48 bg-muted" />
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
    ))}
  </main>
);

export default Blog;
