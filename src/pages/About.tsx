import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import aboutImg from "@/assets/about-portrait.jpg";
import { MapPin, BookOpen, Users, Mountain, Award } from "lucide-react";

const milestones = [
  { icon: MapPin, label: "Born in Southern Albania" },
  { icon: BookOpen, label: "Studied at Aleksandër Moisiu University" },
  { icon: Users, label: "Worked with international donor programs" },
  { icon: Mountain, label: "Expeditions across every corner of Albania" },
  { icon: Award, label: "PhD in Tourism" },
];

const About = () => (
  <main>
    {/* Hero */}
    <section className="relative pt-32 pb-20 section-padding bg-secondary/30">
      <div className="container-luxury">
        <SectionHeading
          subtitle="Who I Am"
          title="Brunilda Liçaj"
          description="A Quarter Century Journey Through the Soul of Albania"
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
              For me, Albania is not just a map — it is a passion spanning 25 years. Born in
              the south and having lived across multiple Albanian cities, I carry within me every
              dialect and landscape of this extraordinary country.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              This journey began in the lecture halls of Aleksandër Moisiu University and grew
              through international donor programs, business training, and mentoring of new
              startups. For two decades, through student expeditions and projects in every
              corner of the country, I have explored destinations and territorial fragments
              rarely found in any tourist guide.
            </p>
            <p className="font-body text-muted-foreground leading-relaxed">
              As a PhD in Tourism and a discoverer of hidden treasures, I now offer this deep
              knowledge of people and traditions through carefully woven itineraries. I will be
              there as a protective shadow, assisting you at every step of this authentic
              discovery.
            </p>

            <div className="luxury-divider !mx-0" />

            <blockquote className="font-heading text-2xl italic text-foreground border-l-2 border-primary pl-6">
              "Albania is no longer only mine — now it is yours."
            </blockquote>
          </motion.div>
        </div>
      </div>
    </section>

    {/* Milestones */}
    <section className="section-padding bg-secondary/30">
      <div className="container-luxury">
        <SectionHeading subtitle="Journey" title="Milestones" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {milestones.map((m, i) => (
            <motion.div
              key={m.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="glass-card rounded-xl p-6 text-center"
            >
              <m.icon className="mx-auto text-primary mb-4" size={28} strokeWidth={1.5} />
              <p className="font-body text-sm text-muted-foreground">{m.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </main>
);

export default About;
