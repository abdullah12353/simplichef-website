import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import Button from "../ui/Button"; // Assuming Button component is here
import Container from "./Container";
import logo from "../../assets/images/logo.png"; // Adjust path as needed

const tallyWaitlistUrl = "https://tally.so/r/wdRVgo?tally-source=navbar"; // Source specific to navbar

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-base-white shadow-md py-2"
          : "bg-transparent py-4 md:py-6"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <img src={logo} alt="Logo" className="h-10 md:h-12" />
            <span className="ml-2 text-xl font-heading font-bold text-deep-teal">
              SimpliChef
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `font-heading font-medium transition-colors hover:text-mint-green ${
                  isActive ? "text-mint-green" : "text-charcoal"
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                `font-heading font-medium transition-colors hover:text-mint-green ${
                  isActive ? "text-mint-green" : "text-charcoal"
                }`
              }
            >
              Blog
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `font-heading font-medium transition-colors hover:text-mint-green ${
                  isActive ? "text-mint-green" : "text-charcoal"
                }`
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `font-heading font-medium transition-colors hover:text-mint-green ${
                  isActive ? "text-mint-green" : "text-charcoal"
                }`
              }
            >
              Contact
            </NavLink>
          </nav>

          {/* Desktop Waitlist Button */}
          <div className="hidden md:block">
            <Button
              href={tallyWaitlistUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="primary" // Use Mint Green button
            >
              Join the Waitlist
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu (Dropdown) */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-base-white shadow-lg py-4 z-40">
            <Container>
              <nav className="flex flex-col space-y-4 mb-4">
                <NavLink
                  to="/"
                  end
                  className={({ isActive }) =>
                    `font-heading font-medium transition-colors hover:text-mint-green ${
                      isActive ? "text-mint-green" : "text-charcoal"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Home
                </NavLink>
                <NavLink
                  to="/blog"
                  className={({ isActive }) =>
                    `font-heading font-medium transition-colors hover:text-mint-green ${
                      isActive ? "text-mint-green" : "text-charcoal"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Blog
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }) =>
                    `font-heading font-medium transition-colors hover:text-mint-green ${
                      isActive ? "text-mint-green" : "text-charcoal"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  About
                </NavLink>
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `font-heading font-medium transition-colors hover:text-mint-green ${
                      isActive ? "text-mint-green" : "text-charcoal"
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  Contact
                </NavLink>
              </nav>
              <Button
                href={tallyWaitlistUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="primary" // Use Mint Green button
                onClick={() => setIsMenuOpen(false)}
                className="w-full" // Ensure button takes full width in mobile menu
              >
                Join the Waitlist
              </Button>
            </Container>
          </div>
        )}
      </Container>
    </header>
  );
};

export default Navbar;
