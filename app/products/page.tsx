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
  },
  {
    id: 2,
    name: "Beard Oil",
    category: "Beard",
    price: 19.99,
    description: "Hydrating blend of argan and jojoba oils. Softens and conditions.",
  },
  {
    id: 3,
    name: "Clay Texture Paste",
    category: "Hair Care",
    price: 22.99,
    description: "Medium hold with a natural, textured finish. Perfect for short styles.",
  },
  {
    id: 4,
    name: "Beard Balm",
    category: "Beard",
    price: 18.99,
    description: "Tames, shapes, and nourishes. Light hold with a subtle scent.",
  },
  {
    id: 5,
    name: "GC Signature Tee",
    category: "Merch",
    price: 34.99,
    description: "Premium cotton tee with the Gifted Champion logo. Black on black.",
    badge: "New",
  },
  {
    id: 6,
    name: "Edge Control Gel",
    category: "Hair Care",
    price: 14.99,
    description: "Sleek edges, zero flaking. Humidity-resistant formula.",
  },
  {
    id: 7,
    name: "Pro Clipper Guard Set",
    category: "Tools",
    price: 29.99,
    description: "Color-coded premium guards. Precise fading with consistent lengths.",
  },
  {
    id: 8,
    name: "GC Barber Cape",
    category: "Tools",
    price: 39.99,
    description: "Water-resistant, snap closure. Professional-grade with the GC logo.",
  },
  {
    id: 9,
    name: "GC Hoodie",
    category: "Merch",
    price: 59.99,
    description: "Heavyweight fleece hoodie with embroidered Gifted Champion script.",
    badge: "Limited",
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
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, rgba(10,10,10,1) 0%, rgba(200,164,92,0.02) 100%)",
        }} />

        <div className="relative max-w-7xl mx-auto text-center">
          <span className="inline-flex items-center gap-2 text-gold text-xs tracking-[0.4em] uppercase font-medium">
            <span className="w-8 h-[1px] bg-gold" />
            Shop
            <span className="w-8 h-[1px] bg-gold" />
          </span>
          <h1
            className="mt-6 text-5xl md:text-6xl lg:text-7xl font-light tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            The <span className="italic gold-shimmer">Collection</span>
          </h1>
          <p className="mt-6 text-cream-dim text-lg max-w-xl mx-auto">
            Premium products and merch curated by Gifted Champion. Quality you can trust.
          </p>
        </div>
      </section>

      {/* FILTER + PRODUCTS */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Category filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2.5 text-xs tracking-[0.2em] uppercase transition-all duration-300 cursor-pointer ${
                  activeCategory === cat
                    ? "bg-gold text-black font-semibold"
                    : "bg-transparent text-cream-dim border border-white/10 hover:border-gold/30 hover:text-gold"
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
                {/* Product image placeholder */}
                <div className="relative aspect-square overflow-hidden" style={{
                  background: "linear-gradient(135deg, rgba(200,164,92,0.06), rgba(22,22,22,0.95))",
                }}>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg className="w-16 h-16 text-gold/10 group-hover:text-gold/20 transition-colors duration-500" fill="none" stroke="currentColor" strokeWidth={0.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                  </div>

                  {/* Badge */}
                  {product.badge && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-gold text-black text-[10px] tracking-[0.15em] uppercase font-semibold px-3 py-1">
                        {product.badge}
                      </span>
                    </div>
                  )}

                  {/* Quick view overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="btn-gold text-xs py-2.5 px-5">
                      View Product
                    </span>
                  </div>
                </div>

                {/* Info */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-2">
                    <div>
                      <span className="text-[10px] tracking-[0.2em] uppercase text-gold-dim">
                        {product.category}
                      </span>
                      <h3
                        className="text-lg font-light text-cream mt-1 group-hover:text-gold transition-colors"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {product.name}
                      </h3>
                    </div>
                    <span
                      className="text-xl font-light text-gold"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ${product.price}
                    </span>
                  </div>
                  <p className="text-cream-dim text-sm leading-relaxed mt-2">
                    {product.description}
                  </p>
                  <button className="mt-5 w-full btn-outline justify-center text-xs py-3 cursor-pointer">
                    Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-cream-dim">No products in this category yet. Check back soon.</p>
            </div>
          )}
        </div>
      </section>

      {/* NEWSLETTER / CTA */}
      <section className="py-24 px-6">
        <div className="gold-line mb-16" />
        <div className="max-w-3xl mx-auto text-center">
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
            Stay Updated
          </span>
          <h2
            className="mt-4 text-3xl md:text-5xl font-light tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            New Drops <span className="italic gold-shimmer">Coming Soon</span>
          </h2>
          <p className="text-cream-dim mb-10 max-w-lg mx-auto">
            Follow us on Instagram to be the first to know when new products drop.
          </p>
          <a
            href="https://www.instagram.com/giftedchampion/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold"
          >
            Follow @giftedchampion
          </a>
        </div>
        <div className="gold-line mt-16" />
      </section>

      <Footer />
    </>
  );
}
