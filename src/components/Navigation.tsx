"use client";

import Link from "next/link";
import { useState } from "react";
import LogoAnimation from "@/components/LogoAnimation";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { label: "Creations", href: "#motion" },
    { label: "Process", href: "#process" },
    { label: "About", href: "#about" },
  ];

  return (
    <nav className="absolute top-0 w-full bg-transparent z-50 pt-4 md:pt-8">
      <div className="container mx-auto px-3 sm:px-4">
        <div className="flex items-center justify-between h-16 sm:h-20 md:h-24">
          {/* Logo */}
          <Link href="/" className="flex items-center py-2">
            <LogoAnimation />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[20px] hover:text-deep-blue transition-colors font-medium"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="bg-black text-white px-6 py-2 rounded-[12px] hover:bg-gray-800 transition-colors text-[20px]"
            >
              Contact Me
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg
              className="w-7 h-7 md:w-9 md:h-9"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 bg-white/90 backdrop-blur-sm rounded-lg mt-2">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block py-3 px-4 text-[20px] hover:text-deep-blue font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="#contact"
              className="block py-3 px-4 text-[20px] hover:text-deep-blue font-medium"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact Me
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
