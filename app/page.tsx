import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Image from "next/image";

const services = [
  {
    name: "Haircut & Beard",
    price: 60,
    duration: "45 min",
    description: "Full haircut with a precision beard shape-up. The complete package.",
  },
  {
    name: "Kids Haircut",
    price: 40,
    duration: "30 min",
    description: "Fresh cuts for the little ones. Clean and stylish, every time.",
  },
  {
    name: "Line Ups",
    price: 30,
    duration: "30 min",
    description: "Crisp edge work and sharp line-ups to keep you looking right.",
  },
  {
    name: "Regular Haircut",
    price: 45,
    duration: "30 min",
    description: "Classic precision cut tailored to your style. Clean, sharp, timeless.",
  },
  {
    name: "Haircut & Design",
    price: 60,
    duration: "45 min",
    description: "Custom haircut with artistic design work. Stand out from the crowd.",
  },
];

export default function Home() {
  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black-light via-background to-background" />

        {/* Decorative radial glows */}
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-[0.03]"
          style={{
            background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-[0.04]"
          style={{
            background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
          }}
        />

        {/* Diagonal lines */}
        <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
          <div className="absolute top-0 left-0 w-full h-full" style={{
            backgroundImage: "repeating-linear-gradient(45deg, var(--gold) 0px, var(--gold) 1px, transparent 1px, transparent 80px)",
          }} />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
          <div className="animate-fade-in opacity-0 delay-100">
            <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
              Premium Barber Services
            </span>
          </div>

          <div className="my-8 animate-scale-in opacity-0 delay-200">
            <Image
              src="/logo.png"
              alt="Gifted Champion"
              width={500}
              height={200}
              className="mx-auto w-[320px] md:w-[450px] lg:w-[500px] h-auto"
              priority
            />
          </div>

          <p className="text-cream-dim text-lg md:text-xl font-light tracking-wide max-w-xl mx-auto animate-fade-in-up opacity-0 delay-400" style={{ fontFamily: "var(--font-display)" }}>
            Where precision meets artistry. Every cut is a masterpiece.
          </p>

          <div className="flex justify-center my-8 animate-fade-in opacity-0 delay-500">
            <div className="gold-line w-20" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0 delay-600">
            <a href="#services" className="btn-gold">
              Book Your Cut
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/giftedchampion/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline"
            >
              Follow the Journey
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-float">
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold to-transparent" />
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="relative py-28 px-6">
        <div className="max-w-7xl mx-auto mb-16 text-center">
          <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
            Services
          </span>
          <h2
            className="mt-4 text-4xl md:text-5xl lg:text-6xl font-light tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Select Your <span className="gold-shimmer italic">Service</span>
          </h2>
          <p className="mt-4 text-cream-dim max-w-md mx-auto">
            Choose your service below and book instantly. Every cut is crafted with precision.
          </p>
          <div className="flex justify-center mt-6">
            <div className="gold-line w-16" />
          </div>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service) => (
            <a
              key={service.name}
              href="https://cal.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-sm p-7 group cursor-pointer flex flex-col"
            >
              {/* Price badge */}
              <div className="flex items-start justify-between mb-4">
                <span
                  className="text-3xl font-light text-gold"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  ${service.price}
                </span>
                <span className="text-cream-dim text-[10px] tracking-[0.2em] uppercase bg-white/5 px-3 py-1 rounded-full">
                  {service.duration}
                </span>
              </div>

              {/* Name */}
              <h3
                className="text-xl font-light text-cream group-hover:text-gold transition-colors duration-300 mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {service.name}
              </h3>

              {/* Description */}
              <p className="text-cream-dim text-sm leading-relaxed mb-6 flex-1">
                {service.description}
              </p>

              {/* Book link */}
              <div className="flex items-center justify-end pt-4 border-t border-white/5">
                <span className="text-xs tracking-[0.2em] uppercase text-cream-dim group-hover:text-gold transition-colors flex items-center gap-2">
                  Book Now
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* WHY GIFTED CHAMPION */}
      <section className="relative py-28 px-6 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle at 50% 50%, var(--gold) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-gold text-xs tracking-[0.4em] uppercase font-medium">
                The Craft
              </span>
              <h2
                className="mt-4 text-4xl md:text-5xl font-light tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                More Than a <span className="italic text-gold">Haircut</span>
              </h2>
              <div className="gold-line w-16 my-6" />
              <p className="text-cream-dim leading-relaxed mb-6">
                Gifted Champion isn&apos;t just about getting a fresh cut — it&apos;s about an experience.
                Every client that sits in the chair gets the same level of precision, attention to detail,
                and artistry that has built this brand from the ground up.
              </p>
              <p className="text-cream-dim leading-relaxed mb-8">
                From fades to designs, beard sculpting to line-ups — the work speaks for itself.
                Follow the journey on Instagram and see the proof in every transformation.
              </p>

              <div className="grid grid-cols-3 gap-6">
                {[
                  { value: "5+", label: "Years" },
                  { value: "1000+", label: "Clients" },
                  { value: "5★", label: "Rated" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-3xl font-light text-gold" style={{ fontFamily: "var(--font-display)" }}>
                      {stat.value}
                    </div>
                    <div className="text-cream-dim text-xs tracking-wider uppercase mt-1">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Instagram card */}
            <div className="relative">
              <div className="glass-card rounded-sm p-8">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-gold to-gold-dim flex items-center justify-center">
                    <svg className="w-6 h-6 text-black" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-cream font-medium">@giftedchampion</h4>
                    <p className="text-cream-dim text-xs">Follow for the latest cuts & content</p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5 mb-6">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="aspect-square rounded-sm overflow-hidden"
                      style={{
                        background: `linear-gradient(${135 + i * 30}deg, rgba(200,164,92,${0.08 + i * 0.02}), rgba(22,22,22,0.9))`,
                      }}
                    >
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-6 h-6 text-gold/20" fill="none" stroke="currentColor" strokeWidth={1} viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>

                <a
                  href="https://www.instagram.com/giftedchampion/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline w-full justify-center text-xs"
                >
                  View on Instagram
                </a>
              </div>

              <div
                className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] opacity-[0.05]"
                style={{
                  background: "radial-gradient(circle, var(--gold) 0%, transparent 70%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(200,164,92,0.05) 0%, rgba(10,10,10,1) 50%, rgba(200,164,92,0.03) 100%)",
        }} />
        <div className="gold-line mb-16" />

        <div className="relative max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl font-light tracking-tight mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ready for the <span className="italic gold-shimmer">Experience</span>?
          </h2>
          <p className="text-cream-dim mb-10 max-w-lg mx-auto">
            Don&apos;t just get a haircut — get a Gifted Champion cut.
            Book your appointment now and see the difference.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#services" className="btn-gold">
              Book Now
            </a>
            <a href="/academy" className="btn-outline">
              Learn the Craft
            </a>
          </div>
        </div>

        <div className="gold-line mt-16" />
      </section>

      <Footer />
    </>
  );
}
