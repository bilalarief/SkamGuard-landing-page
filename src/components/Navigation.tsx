import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion as m, AnimatePresence } from "framer-motion";
import { Languages, ChevronDown } from "lucide-react";
import logo from "../assets/Logo.png";

const backdropFade = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 }
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.95, y: -10 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: -10 }
};

const Navigation = () => {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

  const currentLanguage = i18n.language.startsWith("ms") ? "ms" : "en";

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    setShowLangMenu(false);
  };

  // Scroll Spy Logic
  useEffect(() => {
    if (location.pathname !== "/") {
      setActiveSection("");
      return;
    }

    const options = {
      root: null,
      rootMargin: "-50% 0px",
      threshold: 0,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, options);

    const sections = ["home", "about", "blog"];
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [location.pathname]);

  // Handle cross-page or internal navigation
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.pathname, location.hash]);

  const handleNav = (target: string) => {
    const id = target.replace("#", "");
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      window.history.pushState(null, "", target);
      setActiveSection(id);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: t("nav.home") },
    { id: "about", label: t("nav.about") },
    { id: "blog", label: t("nav.blog") },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "ms", label: "Bahasa Melayu" },
  ];

  const LanguageSwitcher = () => (
    <div className="relative">
      <button
        onClick={() => setShowLangMenu(!showLangMenu)}
        className="flex items-center gap-2 px-3 sm:px-4 py-2 text-xs sm:text-sm font-medium text-gray-700 bg-white border border-gray-200 rounded-xl hover:bg-gray-100 transition-all shadow-sm"
      >
        <Languages className="w-4 h-4 sm:w-5 sm:h-5 text-gray-600" />
        <span className="uppercase font-semibold">{currentLanguage === "ms" ? "BM" : currentLanguage}</span>
        <ChevronDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-400" />
      </button>

      <AnimatePresence>
        {showLangMenu && (
          <>
            <m.div
              className="fixed inset-0 z-40"
              onClick={() => setShowLangMenu(false)}
              variants={backdropFade}
              initial="hidden"
              animate="visible"
              exit="exit"
            />
            <m.div
              className="absolute right-0 top-12 z-50 bg-white rounded-2xl shadow-xl border border-gray-100 min-w-[180px] sm:min-w-[200px] py-2 overflow-hidden"
              variants={scaleIn}
              initial="hidden"
              animate="visible"
              exit="exit"
              style={{ transformOrigin: "top right" }}
            >
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                  className={`w-full flex items-center px-5 py-3 text-sm transition-colors cursor-pointer ${currentLanguage === lang.code
                    ? "text-[#2AABEE] bg-sky-50 font-semibold"
                    : "text-gray-700 hover:bg-gray-50"
                    }`}
                >
                  <span>{lang.label}</span>
                </button>
              ))}
            </m.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button onClick={() => handleNav("#home")} className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="SkamGuard Logo"
              className="h-10 w-auto object-contain"
            />
          </button>

          {/* Desktop & Tablet Actions */}
          <div className="flex items-center gap-4 lg:gap-6">
            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center border border-slate-100 bg-slate-100 rounded-lg px-1 py-1">
              {navItems.map((item) => {
                const isActive = location.pathname === "/" && activeSection === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNav(`#${item.id}`)}
                    className={
                      isActive
                        ? "px-5 py-2 text-sm font-semibold text-[#333333] bg-slate-200 rounded-lg shadow-sm"
                        : "px-5 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
                    }
                  >
                    {item.label}
                  </button>
                );
              })}
            </div>

            {/* Language Switcher (Always visible next to menu button on mobile) */}
            <LanguageSwitcher />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="text-gray-700"
              >
                {isMenuOpen ? (
                  <path
                    d="M6 18L18 6M6 6l12 12"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                ) : (
                  <path
                    d="M3 12h18M3 6h18M3 18h18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <m.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
            >
              <div className="flex flex-col gap-1 pt-2 pb-6">
                {navItems.map((item) => {
                  const isActive = location.pathname === "/" && activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      onClick={() => handleNav(`#${item.id}`)}
                      className={`px-4 py-3 text-sm transition-all duration-200 text-left rounded-lg ${isActive
                        ? "font-semibold text-gray-900 bg-gray-50"
                        : "font-medium text-gray-500 hover:bg-gray-50"
                        }`}
                    >
                      {item.label}
                    </button>
                  );
                })}
              </div>
            </m.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navigation;
