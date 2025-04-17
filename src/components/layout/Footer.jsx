import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-light-gray pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center mb-4">
              <img
                src={require("../../assets/images/logo.png")}
                alt="SimpliChef Logo"
                className="h-10"
              />
              {/* Logo Text: Heading, Bold */}
              <span className="ml-2 text-xl font-heading font-bold text-deep-teal">
                SimpliChef
              </span>
            </Link>
            {/* Body Text: Body, Regular */}
            <p className="font-body text-charcoal mb-4">
              Empowering you to cook smarter, save money, and build confidence
              in the kitchen.
            </p>
            {/* Social Icons: No text */}
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/company/simplichef/" // <-- Correct LinkedIn URL
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SimpliChef LinkedIn Profile" // Accessibility: Add aria-label
                className="text-fog-gray hover:text-mint-green transition-colors duration-200" // Use brand colors
              >
                {/* LinkedIn SVG Icon */}
                <svg
                  className="h-6 w-6" // Adjust size if needed (matches previous icons)
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
            </div>
          </div>

          <div>
            {/* Heading: Heading, Semi-bold */}
            <h3 className="text-lg font-heading font-semibold text-deep-teal mb-4">Quick Links</h3>
            {/* Wrap Quick Links list in <nav> */}
            <nav aria-label="Quick Links">
              {/* Links: Heading, Medium */}
              <ul className="space-y-2 font-heading font-medium">
                <li>
                  <Link
                    to="/"
                    className="text-charcoal hover:text-mint-green transition-colors"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="text-charcoal hover:text-mint-green transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className="text-charcoal hover:text-mint-green transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="text-charcoal hover:text-mint-green transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            {/* Heading: Heading, Semi-bold */}
            <h3 className="text-lg font-heading font-semibold text-deep-teal mb-4">Resources</h3>
            {/* Links: Heading, Medium */}
            <ul className="space-y-2 font-heading font-medium">
              <li>
                <button
                  type="button"
                  className="text-charcoal hover:text-mint-green transition-colors text-left w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Cooking Basics
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-charcoal hover:text-mint-green transition-colors text-left w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Recipe Ideas
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-charcoal hover:text-mint-green transition-colors text-left w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Kitchen Tips
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-charcoal hover:text-mint-green transition-colors text-left w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Meal Planning
                </button>
              </li>
            </ul>
          </div>

          <div>
            {/* Heading: Heading, Semi-bold */}
            <h3 className="text-lg font-heading font-semibold text-deep-teal mb-4">Legal</h3>
            {/* Links: Heading, Medium */}
            <ul className="space-y-2 font-heading font-medium">
              <li>
                <button
                  type="button"
                  className="text-charcoal hover:text-mint-green transition-colors text-left w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Privacy Policy
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-charcoal hover:text-mint-green transition-colors text-left w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Terms of Service
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="text-charcoal hover:text-mint-green transition-colors text-left w-full disabled:opacity-50 disabled:cursor-not-allowed"
                  disabled
                >
                  Cookie Policy
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-fog-gray pt-8">
          {/* Copyright: Body, Regular */}
          <p className="font-body text-fog-gray text-center text-sm">
            &copy; {currentYear} SimpliChef. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
