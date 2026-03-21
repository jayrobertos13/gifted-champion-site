"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-500">
      {/* Top gold line */}
      <div className="h-[1px] bg-gradient-to-r from-transparent via-gold to-transparent opacity-40" />

      <div
        className="backdrop-blur-xl"
        style={{ background: "rgba(10, 10, 10, 0.85)" }}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Gifted Champion"
                width={160}
                height={60}
                className="h-12 w-auto brightness-100 group-hover:brightness-125 transition-all duration-300"
                priority
              />
            </Link>

            {/* Desktop nav */}
            <div className="hidden md:flex items-center gap-10">
              <Link
                href="/"
                className="text-cream-dim hover:text-gold text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300"
              >
                Book
              </Link>
              <Link
                href="/academy"
                className="text-cream-dim hover:text-gold text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300"
              >
                Academy
              </Link>
              <Link
                href="/products"
                className="text-cream-dim hover:text-gold text-xs font-medium tracking-[0.2em] uppercase transition-colors duration-300"
              >
                Products
              </Link>
              <a
                href="https://www.instagram.com/giftedchampion/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream-dim hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#services" className="btn-gold text-xs py-3 px-6">
                Book Now
              </a>
            </div>

            {/* Mobile toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-cream p-2"
              aria-label="Toggle menu"
            >
              <div className="w-6 flex flex-col gap-1.5">
                <span
                  className={`block h-[1px] bg-gold transition-all duration-300 ${
                    isOpen ? "rotate-45 translate-y-[7px]" : ""
                  }`}
                />
                <span
                  className={`block h-[1px] bg-gold transition-all duration-300 ${
                    isOpen ? "opacity-0" : ""
                  }`}
                />
                <span
                  className={`block h-[1px] bg-gold transition-all duration-300 ${
                    isOpen ? "-rotate-45 -translate-y-[7px]" : ""
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isOpen ? "max-h-80" : "max-h-0"
          }`}
        >
          <div className="px-6 pb-8 pt-2 flex flex-col gap-6">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="text-cream-dim hover:text-gold text-sm tracking-[0.2em] uppercase transition-colors"
            >
              Book
            </Link>
            <Link
              href="/academy"
              onClick={() => setIsOpen(false)}
              className="text-cream-dim hover:text-gold text-sm tracking-[0.2em] uppercase transition-colors"
            >
              Academy
            </Link>
            <Link
              href="/products"
              onClick={() => setIsOpen(false)}
              className="text-cream-dim hover:text-gold text-sm tracking-[0.2em] uppercase transition-colors"
            >
              Products
            </Link>
            <a
              href="#services"
              onClick={() => setIsOpen(false)}
              className="btn-gold text-xs py-3 px-6 text-center"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
