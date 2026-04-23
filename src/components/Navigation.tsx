import { useState } from "react";
import logo from "../assets/Logo.png";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5">
            <img
              src={logo}
              alt="SkamGuard Logo"
              className="h-10 w-auto object-contain"
            />
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden lg:flex items-center">
            <div className="flex items-center border border-gray-200 rounded-lg px-1 py-1">
              <a
                href="#home"
                className="px-5 py-2 text-sm font-semibold text-gray-900 bg-white rounded-lg shadow-sm"
              >
                Home
              </a>
              <a
                href="#about"
                className="px-5 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                About Us
              </a>
              <a
                href="#blog"
                className="px-5 py-2 text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors"
              >
                Blog & Media
              </a>
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
            <a
              href="#home"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-sm font-semibold text-gray-900 rounded-lg bg-gray-50"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-lg"
            >
              About Us
            </a>
            <a
              href="#blog"
              onClick={() => setIsMenuOpen(false)}
              className="px-4 py-3 text-sm font-medium text-gray-500 hover:bg-gray-50 rounded-lg"
            >
              Blog & Media
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
