import { useTranslation } from "react-i18next";

const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith("sq") ? "sq" : "en";

  const toggle = () => {
    i18n.changeLanguage(currentLang === "en" ? "sq" : "en");
  };

  return (
    <button
      onClick={toggle}
      className="font-body text-xs tracking-[0.15em] uppercase transition-colors hover:text-primary text-foreground/70 border border-border rounded-full px-3 py-1"
      aria-label="Switch language"
    >
      {currentLang === "en" ? "SQ" : "EN"}
    </button>
  );
};

export default LanguageSwitcher;
