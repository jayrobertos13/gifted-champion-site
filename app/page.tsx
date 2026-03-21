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
    description: "Crisp edges and razor-sharp line work to keep you looking right.",
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

export default function Home() {
  return (
    <>
      <Navbar />

      {/* ══════════ HERO ══════════ */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* BG image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=1920&q=80&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-black/40" />
        </div>

        {/* Corner accents */}
        <div className="absolute top-10 left-10 w-24 h-24 border-t border-l border-copper/20 hidden lg:block" />
        <div className="absolute top-10 right-10 w-24 h-24 border-t border-r border-copper/20 hidden lg:block" />
        <div className="absolute bottom-10 left-10 w-24 h-24 border-b border-l border-copper/20 hidden lg:block" />
        <div className="absolute bottom-10 right-10 w-24 h-24 border-b border-r border-copper/20 hidden lg:block" />

        <div className="relative z-10 text-center px-8 max-w-4xl mx-auto flex flex-col items-center">
          {/* Logo — centered, proportional, transparent bg */}
          <div className="animate-scale-in opacity-0 delay-200 flex justify-center">
            <Image
              src="/logo.png"
              alt="Gifted Champion"
              width={425}
              height={402}
              className="logo-img w-[220px] md:w-[300px] lg:w-[360px]"
              priority
            />
          </div>

          {/* Divider */}
          <div className="flex justify-center mt-10 mb-8 animate-fade-in opacity-0 delay-400">
            <div className="copper-line w-20" />
          </div>

          {/* Headline */}
          <h1
            className="text-xl md:text-2xl lg:text-3xl font-normal tracking-[0.15em] uppercase animate-fade-in-up opacity-0 delay-500"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Master Craftsmanship. <span className="copper-shimmer">Champion Style.</span>
          </h1>

          <p className="mt-5 text-cream-dim text-sm md:text-base max-w-md mx-auto tracking-wide animate-fade-in opacity-0 delay-700">
            Premium cuts, precision fades, and artistry that speaks for itself.
          </p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-800">
            <a href="#services" className="btn-copper">
              Book Your Appointment
            </a>
            <a
              href="https://www.instagram.com/giftedchampion/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-copper"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              Follow the Journey
            </a>
          </div>
        </div>

        {/* Scroll */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-float">
          <div className="flex flex-col items-center gap-2">
            <span className="text-copper/40 text-[9px] tracking-[0.3em] uppercase">Scroll</span>
            <div className="w-[1px] h-8 bg-gradient-to-b from-copper/40 to-transparent" />
          </div>
        </div>
      </section>

      {/* ══════════ SERVICES ══════════ */}
      <section id="services" className="section-padding relative texture-dark">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              Our Services
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              The <span className="italic copper-shimmer">Menu</span>
            </h2>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          {/* Service list */}
          <div className="max-w-3xl mx-auto">
            {services.map((service, i) => (
              <a
                key={service.name}
                href="https://cal.com"
                target="_blank"
                rel="noopener noreferrer"
                className="group block"
              >
                <div className="flex items-center gap-6 md:gap-8 py-9 border-b border-white/[0.06] hover:border-copper/20 transition-all duration-500 px-2 md:px-6">
                  <span
                    className="text-copper/15 text-3xl md:text-4xl font-normal w-12 shrink-0 hidden sm:block"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  <div className="flex-1 min-w-0">
                    <div className="flex items-baseline gap-3 flex-wrap">
                      <h3
                        className="text-xl md:text-2xl font-normal text-cream group-hover:text-copper transition-colors duration-400"
                        style={{ fontFamily: "var(--font-display)" }}
                      >
                        {service.name}
                      </h3>
                      <span className="text-cream-dim/30 text-[11px] tracking-[0.15em]">
                        {service.duration}
                      </span>
                    </div>
                    <p className="text-cream-dim text-sm mt-1.5 max-w-sm">
                      {service.description}
                    </p>
                  </div>

                  <div className="flex items-center gap-5 shrink-0">
                    <span
                      className="text-2xl md:text-3xl font-normal text-copper"
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

          <div className="text-center mt-14">
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="btn-copper">
              Book Any Service
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ PHILOSOPHY ══════════ */}
      <section className="section-padding relative overflow-hidden texture-leather">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(184,115,51,0.03) 0%, transparent 40%, rgba(184,115,51,0.02) 100%)",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
            {/* Portrait */}
            <div className="relative order-2 lg:order-1">
              <div className="overflow-hidden rounded-sm">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80&auto=format&fit=crop"
                  alt="Barber at work"
                  className="w-full aspect-[4/5] object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border border-copper/10 rounded-sm -z-10 hidden lg:block" />
            </div>

            {/* Copy */}
            <div className="order-1 lg:order-2">
              <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
                The Champion Guarantee
              </span>

              <div className="mt-8 mb-10 relative pl-7 border-l-2 border-copper/30">
                <p
                  className="text-2xl md:text-3xl font-normal italic leading-snug text-cream/90"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;Every chair is a stage. Every cut is a performance.
                  We don&apos;t do average — we do exceptional.&rdquo;
                </p>
              </div>

              <div className="copper-line-left w-16 mb-8" />

              <p className="text-cream-dim leading-relaxed mb-5">
                At Gifted Champion, respect for the craft is everything. A haircut
                should make you feel like the best version of yourself — confident,
                sharp, and ready for anything.
              </p>
              <p className="text-cream-dim leading-relaxed mb-10">
                Built on classic barbering standards and elevated with modern artistry,
                every service delivers precision, consistency,
                and an experience that keeps you coming back.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "5+", label: "Years" },
                  { value: "1,000+", label: "Clients" },
                  { value: "5.0", label: "Rating" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-3xl font-normal text-copper" style={{ fontFamily: "var(--font-display)" }}>
                      {stat.value}
                    </div>
                    <div className="text-cream-dim text-[10px] tracking-[0.2em] uppercase mt-1.5">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════ GALLERY ══════════ */}
      <section id="gallery" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              The Work
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Precision in Every <span className="italic copper-shimmer">Detail</span>
            </h2>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          {/* Masonry grid — all Unsplash barber images with reliable IDs */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px] md:auto-rows-[260px]">
            {[
              { src: "https://images.unsplash.com/photo-1599351431202-1e0f0137899a?w=600&q=80&auto=format&fit=crop", alt: "Precision fade", tall: true },
              { src: "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=600&q=80&auto=format&fit=crop", alt: "Classic cut", tall: false },
              { src: "https://images.unsplash.com/photo-1521490683712-35a1cb235d1c?w=600&q=80&auto=format&fit=crop", alt: "Beard work", tall: false },
              { src: "https://images.unsplash.com/photo-1622286342621-4bd786c2447c?w=600&q=80&auto=format&fit=crop", alt: "Detail work", tall: true },
              { src: "https://images.unsplash.com/photo-1596728325488-58c87691e9af?w=600&q=80&auto=format&fit=crop", alt: "Transformation", tall: false },
              { src: "https://images.unsplash.com/photo-1582095133179-bfd08e2fc6b3?w=600&q=80&auto=format&fit=crop", alt: "Clean lineup", tall: false },
            ].map((img, i) => (
              <div
                key={i}
                className={`relative overflow-hidden rounded-sm group cursor-pointer ${img.tall ? "row-span-2" : ""}`}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-end">
                  <div className="p-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-cream text-sm tracking-wider">{img.alt}</p>
                    <div className="w-6 h-[1px] bg-copper mt-2" />
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14">
            <a
              href="https://www.instagram.com/giftedchampion/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-copper"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              See More on Instagram
            </a>
          </div>
        </div>
      </section>

      {/* ══════════ CONTACT ══════════ */}
      <section id="contact" className="section-padding relative texture-dark">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              Get in Touch
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Visit the <span className="italic copper-shimmer">Shop</span>
            </h2>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Contact info */}
            <div className="glass-card rounded-sm p-10 md:p-12">
              <h3
                className="text-2xl font-normal text-cream mb-10"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Book your next visit
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full border border-copper/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-copper" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                  </div>
                  <div>
                    <p className="text-cream-dim text-[10px] tracking-[0.2em] uppercase mb-1">Instagram</p>
                    <a href="https://www.instagram.com/giftedchampion/" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-light transition-colors">
                      @giftedchampion
                    </a>
                  </div>
                </div>

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

                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 rounded-full border border-copper/20 flex items-center justify-center shrink-0">
                    <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-cream-dim text-[10px] tracking-[0.2em] uppercase mb-1">Phone</p>
                    <p className="text-cream text-sm">DM on Instagram to book</p>
                  </div>
                </div>
              </div>

              <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="btn-copper mt-10 w-full sm:w-auto">
                Book Appointment
              </a>
            </div>

            {/* Map / location placeholder */}
            <div className="glass-card rounded-sm overflow-hidden relative min-h-[420px]">
              <div className="absolute inset-0 flex items-center justify-center" style={{
                background: "linear-gradient(145deg, #1a1a1a, #111)"
              }}>
                <div className="absolute inset-0 opacity-15" style={{
                  backgroundImage: "linear-gradient(rgba(184,115,51,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(184,115,51,0.08) 1px, transparent 1px)",
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

      {/* ══════════ FINAL CTA ══════════ */}
      <section className="relative py-28 px-8 overflow-hidden">
        <div className="copper-line mb-20" />
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-normal tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready for the <span className="italic copper-shimmer">Experience</span>?
          </h2>
          <p className="text-cream-dim mb-10 max-w-lg mx-auto">
            Don&apos;t just get a haircut — get a Gifted Champion cut.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="btn-copper">Book Now</a>
            <a href="/academy" className="btn-outline-copper">Learn the Craft</a>
          </div>
        </div>
        <div className="copper-line mt-20" />
      </section>

      <Footer />
    </>
  );
}
