import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

const services = [
  {
    name: "Haircut & Beard",
    price: 60,
    duration: "45 min",
    description: "Full precision haircut paired with an expert beard sculpt and shape-up.",
  },
  {
    name: "Kids Haircut",
    price: 40,
    duration: "30 min",
    description: "Clean, stylish cuts for the younger generation. Patient and precise.",
  },
  {
    name: "Line Ups",
    price: 30,
    duration: "30 min",
    description: "Crisp edges and razor-sharp line work to keep you looking right between cuts.",
  },
  {
    name: "Regular Haircut",
    price: 45,
    duration: "30 min",
    description: "A classic precision cut tailored to your face shape and personal style.",
  },
  {
    name: "Haircut & Design",
    price: 60,
    duration: "45 min",
    description: "Custom haircut with artistic design work. True craftsmanship on display.",
  },
];

const galleryImages = [
  { alt: "Precision fade", aspect: "aspect-[3/4]", span: "row-span-2" },
  { alt: "Beard sculpt", aspect: "aspect-square", span: "" },
  { alt: "Line up detail", aspect: "aspect-square", span: "" },
  { alt: "Hair design", aspect: "aspect-[3/4]", span: "row-span-2" },
  { alt: "Classic cut", aspect: "aspect-square", span: "" },
  { alt: "Transformation", aspect: "aspect-square", span: "" },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ═══════════════════════════════════════════
          HERO — Full-width background image
      ═══════════════════════════════════════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image (Unsplash — luxury barber chair) */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860019-8e79b4b22a9e?w=1920&q=85&auto=format"
            alt="Luxury barber chair"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text legibility */}
          <div className="absolute inset-0 bg-black/65" />
          {/* Bottom gradient fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        {/* Decorative copper corners */}
        <div className="absolute top-8 left-8 w-20 h-20 border-t border-l border-copper/20 hidden lg:block" />
        <div className="absolute top-8 right-8 w-20 h-20 border-t border-r border-copper/20 hidden lg:block" />
        <div className="absolute bottom-8 left-8 w-20 h-20 border-b border-l border-copper/20 hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-copper/20 hidden lg:block" />

        <div className="relative z-10 text-center px-8 max-w-5xl mx-auto">
          {/* Logo floating over hero */}
          <div className="animate-scale-in opacity-0 delay-200">
            <Image
              src="/logo.png"
              alt="Gifted Champion"
              width={550}
              height={220}
              className="mx-auto w-[280px] md:w-[420px] lg:w-[520px] h-auto logo-transparent"
              priority
            />
          </div>

          {/* Copper divider */}
          <div className="flex justify-center my-8 animate-fade-in opacity-0 delay-400">
            <div className="copper-line w-24" />
          </div>

          {/* Headline */}
          <h1
            className="text-cream text-2xl md:text-3xl lg:text-4xl font-light tracking-[0.12em] uppercase animate-fade-in-up opacity-0 delay-500"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Master Craftsmanship. <span className="copper-shimmer">Champion Style.</span>
          </h1>

          {/* Sub copy */}
          <p className="mt-6 text-cream-dim text-sm md:text-base max-w-lg mx-auto tracking-wide leading-relaxed animate-fade-in opacity-0 delay-700">
            Premium cuts, precision fades, and artistry that speaks for itself.
          </p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-5 animate-fade-in-up opacity-0 delay-800">
            <a href="#services" className="btn-copper">
              Book Your Appointment
            </a>
            <a
              href="https://www.instagram.com/giftedchampion/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-copper"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              Follow the Journey
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-3">
            <span className="text-copper/40 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-[1px] h-10 bg-gradient-to-b from-copper/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          SERVICES — Visual menu grid
      ═══════════════════════════════════════════ */}
      <section id="services" className="section-padding relative texture-dark">
        <div className="relative z-10 max-w-7xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              Our Services
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The <span className="italic copper-shimmer">Menu</span>
            </h2>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          {/* Service cards — menu style */}
          <div className="max-w-4xl mx-auto space-y-0">
            {services.map((service, i) => (
              <a
                key={service.name}
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center gap-6 md:gap-10 py-8 md:py-10 border-b border-white/[0.06] hover:border-copper/20 transition-all duration-500 px-4 md:px-8 hover:bg-white/[0.01] rounded-sm">
                  {/* Number */}
                  <span className="text-copper/20 text-4xl md:text-5xl font-light hidden md:block" style={{ fontFamily: "var(--font-display)" }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Info */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-4 mb-2">
                      <h3
                        className="text-xl md:text-2xl font-light text-cream group-hover:text-copper transition-colors duration-400"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {service.name}
                      </h3>
                      <span className="text-cream-dim/40 text-xs tracking-wider hidden sm:inline">
                        {service.duration}
                      </span>
                    </div>
                    <p className="text-cream-dim text-sm leading-relaxed max-w-md">
                      {service.description}
                    </p>
                  </div>

                  {/* Price + arrow */}
                  <div className="flex items-center gap-6">
                    <span
                      className="text-2xl md:text-3xl font-light text-copper"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ${service.price}
                    </span>
                    <div className="w-10 h-10 rounded-full border border-copper/20 flex items-center justify-center group-hover:bg-copper group-hover:border-copper transition-all duration-400">
                      <svg className="w-4 h-4 text-copper group-hover:text-black transition-colors" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </a>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <p className="text-cream-dim text-sm mb-6">All services include consultation and premium products.</p>
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="btn-copper">
              Book Any Service
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          PHILOSOPHY — Pull quote + portrait
      ═══════════════════════════════════════════ */}
      <section className="section-padding relative overflow-hidden texture-leather">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(184,115,51,0.03) 0%, transparent 40%, rgba(184,115,51,0.02) 100%)",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            {/* Portrait / image */}
            <div className="relative order-2 lg:order-1">
              <div className="relative overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80&auto=format"
                  alt="Barber at work"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </div>
              {/* Decorative offset frame */}
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-copper/15 rounded-sm -z-10 hidden lg:block" />
              {/* Floating accent */}
              <div className="absolute -top-4 -left-4 w-16 h-16 border-t border-l border-copper/30 hidden lg:block" />
            </div>

            {/* Content */}
            <div className="order-1 lg:order-2">
              <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
                The Champion Guarantee
              </span>

              {/* Pull quote */}
              <div className="mt-8 mb-10 relative pl-8 border-l-2 border-copper/30">
                <p
                  className="text-2xl md:text-3xl font-light italic leading-snug text-cream/90"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;Every chair is a stage. Every cut is a performance.
                  We don&apos;t do average — we do exceptional.&rdquo;
                </p>
              </div>

              <div className="copper-line-left w-20 mb-8" />

              <p className="text-cream-dim leading-relaxed mb-6">
                At Gifted Champion, respect for the craft is everything. We believe
                a haircut should make you feel like the best version of yourself — confident,
                sharp, and ready for anything.
              </p>
              <p className="text-cream-dim leading-relaxed mb-10">
                Built on classic barbering standards and elevated with modern artistry,
                every service delivers the same promise: precision, consistency,
                and an experience that keeps you coming back.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8">
                {[
                  { value: "5+", label: "Years of Craft" },
                  { value: "1,000+", label: "Clients Served" },
                  { value: "5.0", label: "Star Rating" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div
                      className="text-3xl md:text-4xl font-light text-copper"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      {stat.value}
                    </div>
                    <div className="text-cream-dim text-[10px] tracking-[0.2em] uppercase mt-2">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          GALLERY — Interactive photo grid
      ═══════════════════════════════════════════ */}
      <section id="gallery" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              The Work
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Precision in Every <span className="italic copper-shimmer">Detail</span>
            </h2>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          {/* Masonry grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
            {[
              { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80&auto=format", alt: "Precision fade", tall: true },
              { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80&auto=format", alt: "Classic cut", tall: false },
              { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80&auto=format", alt: "Beard sculpt", tall: false },
              { src: "https://images.unsplash.com/photo-1635273051137-4e17eba76288?w=600&q=80&auto=format", alt: "Line work", tall: true },
              { src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80&auto=format", alt: "Transformation", tall: false },
              { src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=600&q=80&auto=format", alt: "Styling finish", tall: false },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${
                  img.tall ? "row-span-2" : ""
                }`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-105 ${
                    img.tall ? "h-full" : "aspect-square"
                  }`}
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                  <div className="p-5 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-cream text-sm tracking-wider">{img.alt}</p>
                    <div className="w-8 h-[1px] bg-copper mt-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Instagram CTA */}
          <div className="text-center mt-16">
            <p className="text-cream-dim text-sm mb-5">See more work on Instagram</p>
            <a
              href="https://www.instagram.com/giftedchampion/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-copper"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @giftedchampion
            </a>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTACT — Map + details
      ═══════════════════════════════════════════ */}
      <section id="contact" className="section-padding relative texture-dark">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              Get in Touch
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Visit the <span className="italic copper-shimmer">Shop</span>
            </h2>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact info */}
            <div className="glass-card rounded-sm p-10 md:p-14 flex flex-col justify-between">
              <div>
                <h3
                  className="text-2xl font-light text-cream mb-8"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  Book your next visit
                </h3>

                <div className="space-y-7">
                  {/* Phone */}
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full border border-copper/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream-dim text-[10px] tracking-[0.2em] uppercase mb-1">Phone</p>
                      <p className="text-cream">Contact via Instagram DM</p>
                    </div>
                  </div>

                  {/* Social */}
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full border border-copper/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-copper" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream-dim text-[10px] tracking-[0.2em] uppercase mb-1">Instagram</p>
                      <a
                        href="https://www.instagram.com/giftedchampion/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-copper hover:text-copper-light transition-colors"
                      >
                        @giftedchampion
                      </a>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="flex items-start gap-5">
                    <div className="w-10 h-10 rounded-full border border-copper/20 flex items-center justify-center shrink-0">
                      <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-cream-dim text-[10px] tracking-[0.2em] uppercase mb-1">Hours</p>
                      <p className="text-cream text-sm">Mon–Fri: 9am – 7pm</p>
                      <p className="text-cream text-sm">Sat: 8am – 6pm</p>
                      <p className="text-cream text-sm">Sun: By Appointment</p>
                    </div>
                  </div>
                </div>
              </div>

              <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="btn-copper mt-10 w-full sm:w-auto">
                Book Appointment
              </a>
            </div>

            {/* Map placeholder */}
            <div className="glass-card rounded-sm overflow-hidden relative min-h-[400px]">
              <div className="absolute inset-0 flex items-center justify-center" style={{
                background: "linear-gradient(145deg, #1a1a1a, #111)"
              }}>
                {/* Dark map placeholder */}
                <div className="absolute inset-0 opacity-20" style={{
                  backgroundImage: `
                    linear-gradient(rgba(184,115,51,0.1) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(184,115,51,0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "30px 30px",
                }} />
                <div className="text-center relative z-10">
                  <div className="w-14 h-14 rounded-full border border-copper/30 flex items-center justify-center mx-auto mb-4">
                    <svg className="w-6 h-6 text-copper" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <p className="text-cream text-lg" style={{ fontFamily: "var(--font-display)" }}>Location Coming Soon</p>
                  <p className="text-cream-dim text-sm mt-2">DM on Instagram for directions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          FINAL CTA
      ═══════════════════════════════════════════ */}
      <section className="relative py-28 px-8 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(184,115,51,0.04) 0%, rgba(10,10,10,1) 50%, rgba(184,115,51,0.02) 100%)",
        }} />
        <div className="copper-line mb-20" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready for the <span className="italic copper-shimmer">Experience</span>?
          </h2>
          <p className="text-cream-dim mb-12 max-w-lg mx-auto leading-relaxed">
            Don&apos;t just get a haircut — get a Gifted Champion cut.
            Book your appointment now and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-5">
            <a href="#services" className="btn-copper">
              Book Now
            </a>
            <a href="/academy" className="btn-outline-copper">
              Learn the Craft
            </a>
          </div>
        </div>

        <div className="copper-line mt-20" />
      </section>

      <Footer />
    </>
  );
}
