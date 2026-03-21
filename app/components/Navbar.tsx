"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${
        scrolled ? "shadow-2xl" : ""
      }`}
    >
      <div
        className="transition-all duration-700"
        style={{
          background: scrolled
            ? "rgba(10, 10, 10, 0.95)"
            : "rgba(10, 10, 10, 0.3)",
          backdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
          WebkitBackdropFilter: scrolled ? "blur(20px)" : "blur(8px)",
        }}
      >
        {/* Thin copper accent line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-copper to-transparent opacity-30" />

        <div className="max-w-7xl mx-auto px-8 lg:px-12">
          <div className="flex items-center justify-between h-22 py-4">
            <Link href="/" className="flex items-center group relative">
              <img
                src="/logo.png"
                alt="Gifted Champion"
                style={{ height: "44px", width: "auto" }}
                className="logo-img group-hover:brightness-125 transition-all duration-500"
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden lg:flex items-center gap-12">
              <Link
                href="/#services"
                className="text-cream-dim hover:text-copper text-[11px] font-medium tracking-[0.25em] uppercase transition-all duration-400 relative group"
              >
                Services
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-copper transition-all duration-400 group-hover:w-full" />
              </Link>
              <Link
                href="/#gallery"
                className="text-cream-dim hover:text-copper text-[11px] font-medium tracking-[0.25em] uppercase transition-all duration-400 relative group"
              >
                Gallery
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-copper transition-all duration-400 group-hover:w-full" />
              </Link>
              <Link
                href="/academy"
                className="text-cream-dim hover:text-copper text-[11px] font-medium tracking-[0.25em] uppercase transition-all duration-400 relative group"
              >
                Academy
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-copper transition-all duration-400 group-hover:w-full" />
              </Link>
              <Link
                href="/products"
                className="text-cream-dim hover:text-copper text-[11px] font-medium tracking-[0.25em] uppercase transition-all duration-400 relative group"
              >
                Products
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-copper transition-all duration-400 group-hover:w-full" />
              </Link>
              <Link
                href="/#contact"
                className="text-cream-dim hover:text-copper text-[11px] font-medium tracking-[0.25em] uppercase transition-all duration-400 relative group"
              >
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-copper transition-all duration-400 group-hover:w-full" />
              </Link>

              {/* Book Now CTA */}
              <a href="#services" className="btn-copper text-[11px] py-3 px-7">
                Book Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-cream p-2"
              aria-label="Toggle menu"
            >
              <div className="w-7 flex flex-col gap-[6px]">
                <span
                  className={`block h-[1px] bg-copper transition-all duration-400 ${
                    isOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1px] bg-copper transition-all duration-400 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1px] bg-copper transition-all duration-400 ${
                    isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-600 ${
            isOpen ? "max-h-[420px]" : "max-h-0"
          }`}
          style={{ background: "rgba(10, 10, 10, 0.98)" }}
        >
          <div className="px-8 pb-10 pt-4 flex flex-col gap-7">
            {[
              { href: "/#services", label: "Services" },
              { href: "/#gallery", label: "Gallery" },
              { href: "/academy", label: "Academy" },
              { href: "/products", label: "Products" },
              { href: "/#contact", label: "Contact" },
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-cream-dim hover:text-copper text-sm tracking-[0.25em] uppercase transition-all duration-300"
              >
                {item.label}
              </Link>
            ))}
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="btn-copper text-xs py-3.5 px-6 text-center mt-2"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
