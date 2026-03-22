"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      setScrolled(currentY > 40);

      if (window.innerWidth < 1024) {
        // Always show at very top of page
        if (currentY < 50) {
          setHidden(false);
          lastScrollY.current = currentY;
          return;
        }

        const diff = currentY - lastScrollY.current;
        // Hide quickly on scroll down (small threshold)
        if (diff > 5 && currentY > 80) {
          setHidden(true);
          setIsOpen(false);
          lastScrollY.current = currentY;
        // Only show on significant scroll up (50px+)
        } else if (diff < -50) {
          setHidden(false);
          lastScrollY.current = currentY;
        }
      } else {
        setHidden(false);
        lastScrollY.current = currentY;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "shadow-2xl" : ""
      } ${hidden ? "-translate-y-full" : "translate-y-0"}`}
    >
      <div
        className="transition-all duration-700"
        style={{
          background: scrolled
            ? "rgba(10, 10, 10, 0.97)"
            : "rgba(10, 10, 10, 0.3)",
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        {/* Thin copper accent line */}
        <div className="h-[1px] bg-gradient-to-r from-transparent via-copper to-transparent opacity-30" />

        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between h-22 py-4">
            <Link href="/" className="flex items-center group relative">
              <img
                src="/logo.png"
                alt="Gifted Champion"
                className="logo-img group-hover:brightness-125 transition-all duration-500 h-9 md:h-11 w-auto"
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
              <a href="https://book.squareup.com/appointments/isujdqua3pu4bu/location/LK23P00R429AN/services" target="_blank" rel="noopener noreferrer" className="btn-copper text-[11px] py-3 px-7">
                Book Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden text-cream p-3 -mr-2 min-w-[44px] min-h-[44px] flex items-center justify-center"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-[5px]">
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
              href="https://book.squareup.com/appointments/isujdqua3pu4bu/location/LK23P00R429AN/services"
              target="_blank"
              rel="noopener noreferrer"
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
