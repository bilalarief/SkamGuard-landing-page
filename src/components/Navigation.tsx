import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/Logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const location = useLocation();
  const navigate = useNavigate();

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
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "blog", label: "Blog & Media" },
  ];

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

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center border border-slate-100 bg-slate-100 rounded-lg px-1 py-1">
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
          </div>

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

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 overflow-hidden ${isMenuOpen ? "max-h-60 pb-6" : "max-h-0"}`}
        >
          <div className="flex flex-col gap-1 pt-2 border-t border-gray-100">
            {navItems.map((item) => {
              const isActive = location.pathname === "/" && activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNav(`#${item.id}`)}
                  className={`px-4 py-3 text-sm transition-all duration-200 text-left rounded-lg ${
                    isActive
                      ? "font-semibold text-gray-900 bg-gray-50"
                      : "font-medium text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
