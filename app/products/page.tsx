"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";

const categories = ["All", "Hair Care", "Beard", "Tools", "Merch"];

const products = [
  {
    id: 1,
    name: "Premium Pomade",
    category: "Hair Care",
    price: 24.99,
    description: "Strong hold, matte finish. All-day control without the crunch.",
    badge: "Best Seller",
    img: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=500&q=80&auto=format",
  },
  {
    id: 2,
    name: "Beard Oil",
    category: "Beard",
    price: 19.99,
    description: "Hydrating blend of argan and jojoba oils. Softens and conditions.",
    img: "https://images.unsplash.com/photo-1626808642875-0aa545482dfb?w=500&q=80&auto=format",
  },
  {
    id: 3,
    name: "Clay Texture Paste",
    category: "Hair Care",
    price: 22.99,
    description: "Medium hold with a natural, textured finish. Perfect for short styles.",
    img: "https://images.unsplash.com/photo-1585747860019-8e79b4b22a9e?w=500&q=80&auto=format",
  },
  {
    id: 4,
    name: "Beard Balm",
    category: "Beard",
    price: 18.99,
    description: "Tames, shapes, and nourishes. Light hold with a subtle scent.",
    img: "https://images.unsplash.com/photo-1621607512214-68297480165e?w=500&q=80&auto=format",
  },
  {
    id: 5,
    name: "GC Signature Tee",
    category: "Merch",
    price: 34.99,
    description: "Premium cotton tee with the Gifted Champion logo. Black on black.",
    badge: "New",
    img: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80&auto=format",
  },
  {
    id: 6,
    name: "Edge Control Gel",
    category: "Hair Care",
    price: 14.99,
    description: "Sleek edges, zero flaking. Humidity-resistant formula.",
    img: "https://images.unsplash.com/photo-1585747860019-8e79b4b22a9e?w=500&q=80&auto=format",
  },
  {
    id: 7,
    name: "Pro Clipper Guard Set",
    category: "Tools",
    price: 29.99,
    description: "Color-coded premium guards. Precise fading with consistent lengths.",
    img: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=500&q=80&auto=format",
  },
  {
    id: 8,
    name: "GC Barber Cape",
    category: "Tools",
    price: 39.99,
    description: "Water-resistant, snap closure. Professional-grade with the GC logo.",
    img: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=500&q=80&auto=format",
  },
  {
    id: 9,
    name: "GC Hoodie",
    category: "Merch",
    price: 59.99,
    description: "Heavyweight fleece hoodie with embroidered Gifted Champion script.",
    badge: "Limited",
    img: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80&auto=format",
  },
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative pt-40 pb-24 px-8 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860019-8e79b4b22a9e?w=1920&q=80&auto=format"
            alt="Products"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/75" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black" />
        </div>

        {/* Decorative corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-copper/20 hidden lg:block" />
        <div className="absolute top-8 right-8 w-16 h-16 border-t border-r border-copper/20 hidden lg:block" />

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-3 text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
            <span className="w-10 h-[1px] bg-copper" />
            Shop
            <span className="w-10 h-[1px] bg-copper" />
          </span>
          <h1
            className="mt-6 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The <span className="italic copper-shimmer">Collection</span>
          </h1>
          <p className="mt-6 text-cream-dim text-base md:text-lg max-w-xl mx-auto leading-relaxed">
            Premium products and merch curated by Gifted Champion. Quality you can trust.
          </p>
        </div>
      </section>

      {/* FILTER + PRODUCTS */}
      <section className="section-padding relative texture-dark">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 md:mb-20">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-6 py-2.5 sm:py-3 text-[11px] tracking-[0.15em] sm:tracking-[0.2em] uppercase transition-all duration-400 cursor-pointer min-h-[44px] ${
                  activeCategory === cat
                    ? "bg-gradient-to-r from-copper to-copper-light text-black font-semibold"
                    : "bg-transparent text-cream-dim border border-white/10 hover:border-copper/30 hover:text-copper"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Product grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <div
                key={product.id}
                className="glass-card rounded-sm overflow-hidden group"
              >
                {/* Product image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />

                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gradient-to-r from-copper to-copper-light text-black text-[10px] tracking-[0.15em] uppercase font-bold px-4 py-1.5">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/50 transition-all duration-500 flex items-center justify-center">
                    <span className="btn-copper text-[10px] py-2.5 px-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                      View Product
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-8">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <span className="text-[10px] tracking-[0.25em] uppercase text-copper/60">
                        {product.category}
                      </span>
                      <h3
                        className="text-lg font-light text-cream mt-1 group-hover:text-copper transition-colors duration-400"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {product.name}
                      </h3>
                    </div>
                    <span
                      className="text-xl font-light text-copper"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-cream-dim text-sm leading-relaxed mt-3">
                    {product.description}
                  </p>
                  <button className="mt-6 w-full btn-outline-copper text-[11px] cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-cream-dim text-lg" style={{ fontFamily: "var(--font-display)" }}>
                No products in this category yet.
              </p>
              <p className="text-cream-dim/60 text-sm mt-2">Check back soon for new drops.</p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER CTA */}
      <section className="relative py-28 px-8">
        <div className="copper-line mb-20" />
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
            Stay Updated
          </span>
          <h2
            className="mt-5 text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            New Drops <span className="italic copper-shimmer">Coming Soon</span>
          </h2>
          <p className="text-cream-dim mb-12 max-w-lg mx-auto leading-relaxed">
            Follow us on Instagram to be the first to know when new products and merch drop.
          </p>
          <a
            href="https://www.instagram.com/giftedchampion/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-copper"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
            Follow @giftedchampion
          </a>
        </div>
        <div className="copper-line mt-20" />
      </section>

      <Footer />
    </>
  );
}
