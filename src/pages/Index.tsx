import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { MapPin, Briefcase, GraduationCap, ChevronRight, Star, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import heroImg from "@/assets/hero-home.jpg";
import aboutImg from "@/assets/about-portrait.jpg";

const Index = () => {
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
            Privé Travel Design
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="heading-display text-5xl sm:text-6xl lg:text-7xl text-background mb-4"
          >
            Brunilda
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="font-heading text-xl sm:text-2xl text-background/80 italic mb-10"
          >
            Your Private Gateway to Albania
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Button variant="gold" size="lg" asChild>
              <Link to="/itineraries">Explore Private Itineraries</Link>
            </Button>
            <Button variant="gold-outline" size="lg" className="border-background/50 text-background hover:bg-background hover:text-foreground" asChild>
              <Link to="/contact">Book Consultation</Link>
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
              <p className="subtitle-text mb-4">About Brunilda</p>
              <h2 className="heading-section text-foreground mb-6">
                25 Years Exploring the Soul of Albania
              </h2>
              <div className="luxury-divider !mx-0" />
              <p className="font-body text-muted-foreground leading-relaxed mb-8">
                A tourism PhD, travel designer, mentor, and Albania's foremost
                expert with over 25 years of experience uncovering the country's
                hidden treasures. From the Albanian Riviera to the remote mountain
                villages, every journey is crafted with intimate local knowledge.
              </p>
              <Button variant="gold-outline" asChild>
                <Link to="/about">
                  Learn More About Me <ArrowRight size={14} />
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
            subtitle="Services"
            title="Crafted Experiences"
            description="From bespoke itineraries to business mentoring, every service is designed with precision and passion."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: MapPin,
                title: "Private Itinerary Design",
                desc: "Bespoke travel plans crafted around your passions, with hidden gems only a local expert knows.",
                link: "/itineraries",
              },
              {
                icon: Briefcase,
                title: "Business & Tourism Consulting",
                desc: "Strategic guidance for tourism startups, hospitality businesses, and grant applications.",
                link: "/consulting",
              },
              {
                icon: GraduationCap,
                title: "Mentoring & Grants",
                desc: "Professional training, academy programs, and technical assistance for tourism growth.",
                link: "/consulting",
              },
            ].map((service, i) => (
              <motion.div
                key={service.title}
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
          <SectionHeading subtitle="Testimonials" title="What Travelers Say" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: "Sarah M.", loc: "London, UK", text: "Brunilda transformed our Albania trip into something magical. Every detail was perfect." },
              { name: "Marco R.", loc: "Milan, Italy", text: "The hidden gems she revealed were beyond anything we could find online. Truly private experiences." },
              { name: "Anna K.", loc: "Berlin, Germany", text: "Professional, knowledgeable, and passionate. The best travel consultant we've ever worked with." },
            ].map((t, i) => (
              <motion.div
                key={t.name}
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
                  "{t.text}"
                </p>
                <p className="font-heading text-lg">{t.name}</p>
                <p className="font-body text-xs text-muted-foreground">{t.loc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding bg-secondary/50">
        <div className="container-luxury">
          <SectionHeading
            subtitle="Journal"
            title="Latest Stories"
            description="Discoveries, analysis, and stories from 25 years exploring Albania."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { cat: "Discoveries", title: "Beyond the Map: Albania's Privé Destinations", excerpt: "Hidden coastlines, mountain villages, and secret trails revealed." },
              { cat: "Economy", title: "How to Build an Albergo Diffuso", excerpt: "Transforming heritage houses into distributed hospitality experiences." },
              { cat: "Heritage", title: "Albania's Castles Through Storytelling", excerpt: "A journey through centuries of history, told through stone walls." },
            ].map((post, i) => (
              <motion.div
                key={post.title}
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
              <Link to="/blog">View All Articles <ArrowRight size={14} /></Link>
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
          <h2 className="heading-section text-background mb-4">Begin Your Albanian Journey</h2>
          <div className="luxury-divider bg-primary" />
          <p className="font-body text-background/70 mb-10 max-w-xl mx-auto">
            Let Brunilda design your perfect Albanian experience — from the first idea to the last sunset.
          </p>
          <Button variant="gold" size="lg" asChild>
            <Link to="/contact">Book Your Consultation</Link>
          </Button>
        </div>
      </section>
    </main>
  );
};

export default Index;
