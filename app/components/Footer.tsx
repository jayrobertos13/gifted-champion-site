import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative" style={{ background: "#080808" }}>
      <div className="copper-line" />

      <div className="max-w-7xl mx-auto px-8 lg:px-12 py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-2 flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="Gifted Champion"
              width={180}
              height={70}
              className="h-14 w-auto logo-transparent"
            />
            <p className="text-cream-dim text-sm leading-relaxed max-w-sm">
              Premium barber services, expert education, and curated products.
              Where master craftsmanship meets champion style.
            </p>
            <a
              href="https://www.instagram.com/giftedchampion/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 text-cream-dim hover:text-copper transition-all duration-300 text-sm group mt-2"
            >
              <svg className="w-5 h-5 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
              </svg>
              @giftedchampion
            </a>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-copper text-[11px] tracking-[0.3em] uppercase font-semibold">
              Quick Links
            </h4>
            <div className="flex flex-col gap-3">
              <Link href="/#services" className="text-cream-dim hover:text-cream text-sm transition-colors">Services</Link>
              <Link href="/#gallery" className="text-cream-dim hover:text-cream text-sm transition-colors">Gallery</Link>
              <Link href="/academy" className="text-cream-dim hover:text-cream text-sm transition-colors">Academy</Link>
              <Link href="/products" className="text-cream-dim hover:text-cream text-sm transition-colors">Products</Link>
            </div>
          </div>

          {/* Hours */}
          <div className="flex flex-col gap-4">
            <h4 className="text-copper text-[11px] tracking-[0.3em] uppercase font-semibold">
              Hours
            </h4>
            <div className="flex flex-col gap-2 text-cream-dim text-sm">
              <p>Mon – Fri: 9am – 7pm</p>
              <p>Saturday: 8am – 6pm</p>
              <p>Sunday: By Appointment</p>
            </div>
          </div>
        </div>

        <div className="copper-line mt-16 mb-8 opacity-20" />

        <p className="text-cream-dim/30 text-xs tracking-[0.15em] text-center">
          &copy; {new Date().getFullYear()} Gifted Champion. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
