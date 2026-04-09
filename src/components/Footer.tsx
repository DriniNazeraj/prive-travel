import { Link } from "react-router-dom";
import { Mail, Phone, Instagram, Facebook } from "lucide-react";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  const links = [
    { label: t("nav.about"), path: "/about" },
    { label: t("nav.itineraries"), path: "/itineraries" },
    { label: t("nav.consulting"), path: "/consulting" },
    { label: t("nav.blog"), path: "/blog" },
    { label: t("nav.contact"), path: "/contact" },
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container-luxury section-padding">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {/* Brand */}
          <div>
            <h3 className="font-heading text-2xl font-semibold mb-2">Brunilda</h3>
            <p className="text-[10px] tracking-[0.3em] uppercase font-body text-primary mb-6">
              Privé Travel Design
            </p>
            <p className="font-body text-sm text-background/60 leading-relaxed">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading text-lg mb-6">{t("footer.explore")}</h4>
            <div className="flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="font-body text-xs tracking-widest uppercase text-background/50 hover:text-primary transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading text-lg mb-6">{t("footer.getInTouch")}</h4>
            <div className="flex flex-col gap-4">
              <a
                href="mailto:hello@brunildaprive.com"
                className="flex items-center gap-3 font-body text-sm text-background/60 hover:text-primary transition-colors"
              >
                <Mail size={16} />
                hello@brunildaprive.com
              </a>
              <a
                href="https://wa.me/355123456789"
                className="flex items-center gap-3 font-body text-sm text-background/60 hover:text-primary transition-colors"
              >
                <Phone size={16} />
                WhatsApp
              </a>
              <div className="flex gap-4 mt-2">
                <a href="#" className="text-background/40 hover:text-primary transition-colors" aria-label="Instagram">
                  <Instagram size={20} />
                </a>
                <a href="#" className="text-background/40 hover:text-primary transition-colors" aria-label="Facebook">
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-16 pt-8 text-center">
          <p className="font-body text-xs text-background/40 tracking-widest">
            © {new Date().getFullYear()} Brunilda: Privé Travel Design. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
