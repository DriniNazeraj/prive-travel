import { motion } from "framer-motion";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  light?: boolean;
}

const SectionHeading = ({ subtitle, title, description, light }: SectionHeadingProps) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8 }}
    className="text-center mb-12 lg:mb-16"
  >
    {subtitle && (
      <p className={`subtitle-text mb-4 ${light ? "text-background/60" : ""}`}>{subtitle}</p>
    )}
    <h2 className={`heading-section ${light ? "text-background" : "text-foreground"}`}>{title}</h2>
    <div className={`luxury-divider ${light ? "bg-primary" : ""}`} />
    {description && (
      <p className={`font-body text-base max-w-2xl mx-auto mt-4 leading-relaxed ${light ? "text-background/70" : "text-muted-foreground"}`}>
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
