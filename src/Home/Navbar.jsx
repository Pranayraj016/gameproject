import React, { useState, useEffect } from "react";
import { Search, Menu, X, ChevronDown } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [searchOpen, setSearchOpen] = useState(false);

  // Handle scroll effect with improved performance
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const isScrolled = window.scrollY > 20;
          setScrolled(isScrolled);

          // Update active section based on scroll position
          const sections = navLinks.map((link) => link.href.slice(1));
          const current = sections.find((section) => {
            const element = document.getElementById(section);
            if (element) {
              const rect = element.getBoundingClientRect();
              return rect.top <= 100 && rect.bottom >= 100;
            }
            return false;
          });
          setActiveSection(current || "");

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu and search
  const closeMobileMenu = () => {
    setIsOpen(false);
  };

  const closeSearch = () => {
    setSearchOpen(false);
  };

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen || searchOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen, searchOpen]);

  const navLinks = [
    { href: "#home", label: "HOME", description: "Back to the start" },
    { href: "#about", label: "ABOUT US", description: "Learn about our story" },
    { href: "#games", label: "GAMES", description: "Explore our game library" },
    { href: "#blog", label: "BLOG", description: "Latest news and updates" },
  ];

  return (
    <>
      <nav
        className={`fixed w-full top-0 z-50 transition-all duration-500 ease-out ${
          scrolled
            ? " backdrop-blur-xl shadow-2xl border-b border-gray-100/50 "
            : ""
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <div className="flex justify-between h-16 items-center">
            {/* Enhanced Logo */}
            <div className="flex items-center cursor-pointer group">
              <div className="transform transition-all duration-300 group-hover:scale-110 group-hover:rotate-3">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg blur-sm opacity-0 group-hover:opacity-30 transition-opacity duration-300"></div>
                  <div className="relative p-1 rounded-lg ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-8 h-8 text-white shadow-2xl"
                      viewBox="0 0 192.756 192.756"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        fill="#fff"
                        d="M0 0h192.756v192.756H0V0z"
                      />
                      <path
                        d="M165.801 56.422l-55.316 31.837-14.107-8.119-69.423 39.958V56.422l69.422-39.956 69.424 39.956zM26.956 136.334l55.317-31.838 14.105 8.119L165.8 72.658v63.675l-69.423 39.955-69.421-39.954zm118.917-35.598v24.127L96.378 153.35l-35.066-20.182 20.96-12.062 14.106 8.117 49.495-28.487zm-98.989-8.717V67.892l49.494-28.485 35.065 20.182-20.959 12.063-14.106-8.119-49.494 28.486z"
                        fill="none"
                        stroke="#000"
                        strokeWidth="3.356"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeMiterlimit="2.613"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <span className="ml-3 text-xl font-bold bg-gradient-to-r from-amber-50 to-amber-100 bg-clip-text text-transparent">
                SPIN AND WIN
              </span>
            </div>

            {/* Enhanced Desktop Menu */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link, index) => (
                <div key={index} className="relative group">
                  <a
                    href={link.href}
                    className={`px-4 py-2 text-sm font-medium transition-all duration-300 rounded-lg relative overflow-hidden ${
                      activeSection === link.href.slice(1)
                        ? "text-blue-600 hover:underline"
                        : "text-white"
                    }`}
                  >
                    <span className="relative z-10">{link.label}</span>
                    <div
                      className={`absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left ${
                        activeSection === link.href.slice(1)
                          ? "scale-x-100"
                          : ""
                      }`}
                    ></div>
                  </a>

                  {/* Tooltip on hover */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                    <div className="bg-gray-900 text-white text-xs px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                      {link.description}
                      <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Enhanced Right Side Items */}

            {/* Enhanced Mobile Menu Button */}
            <div className="lg:hidden flex items-center space-x-2">
              {/* <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-gray-600 hover:text-blue-600 transition-colors duration-200"
              >
                <Search className="w-5 h-5" />
              </button> */}

              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg text-gray-600 hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500/50 transition-all duration-200 hover:bg-blue-50"
                aria-label="Toggle navigation menu"
                aria-expanded={isOpen}
              >
                <div className="relative w-6 h-6">
                  <Menu
                    className={`text-white absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isOpen
                        ? "opacity-0 rotate-180 scale-75"
                        : "opacity-100 rotate-0 scale-100"
                    }`}
                  />
                  <X
                    className={`text-white absolute inset-0 w-6 h-6 transition-all duration-300 ${
                      isOpen
                        ? "opacity-100 rotate-0 scale-100"
                        : "opacity-0 -rotate-180 scale-75"
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-500 ease-out ${
            isOpen
              ? "max-h-screen opacity-100 translate-y-0"
              : "max-h-0 opacity-0 -translate-y-4 overflow-hidden"
          }`}
        >
          <div className="bg-white/95 backdrop-blur-xl border-t border-gray-100 shadow-2xl">
            <div className="px-4 py-6 space-y-2">
              {navLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className={`block px-4 py-3 text-base font-medium rounded-xl transition-all duration-200 ${
                    activeSection === link.href.slice(1)
                      ? "text-blue-600 bg-blue-50 border-l-4 border-blue-500"
                      : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                  }`}
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-medium">{link.label}</div>
                      <div className="text-sm text-gray-500 mt-0.5">
                        {link.description}
                      </div>
                    </div>
                    <ChevronDown className="w-4 h-4 text-gray-400 transform -rotate-90" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Enhanced Search Modal */}
      {searchOpen && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-start justify-center pt-20">
          <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl mx-4 overflow-hidden transform transition-all duration-300">
            <div className="p-6">
              <div className="flex items-center space-x-4 mb-6">
                <Search className="w-6 h-6 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search games, articles, and more..."
                  className="flex-1 text-lg font-medium bg-transparent border-none outline-none placeholder-gray-400"
                  autoFocus
                />
                <button
                  onClick={closeSearch}
                  className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                >
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                    Popular Searches
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      "Battle Royale",
                      "Puzzle Games",
                      "Tournaments",
                      "Leaderboard",
                    ].map((term, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 bg-gray-100 text-gray-700 rounded-full text-sm hover:bg-blue-50 hover:text-blue-600 cursor-pointer transition-colors"
                      >
                        {term}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Enhanced Mobile Menu Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40 lg:hidden transition-all duration-300"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}

      {/* Spacer */}
      <div className="h-16"></div>
    </>
  );
}

export default Navbar;
