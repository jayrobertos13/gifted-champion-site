"use client";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Image from "next/image";
import { useState } from "react";

const courses = [
  {
    id: 1,
    title: "The Foundation",
    subtitle: "Beginner Course",
    description:
      "Master the fundamentals of barbering. Learn proper clipper technique, guard selection, sectioning, and how to execute clean fades from scratch.",
    lessons: 12,
    hours: 6,
    level: "Beginner",
    price: 99,
    features: [
      "Clipper fundamentals & maintenance",
      "Guard selection & blending",
      "Basic fade techniques",
      "Sectioning & parting",
      "Client consultation basics",
      "Tool setup & hygiene",
    ],
  },
  {
    id: 2,
    title: "The Craft",
    subtitle: "Intermediate Course",
    description:
      "Take your skills to the next level. Advanced fading, skin fades, beard sculpting, and line work that separates good barbers from great ones.",
    lessons: 18,
    hours: 10,
    level: "Intermediate",
    price: 199,
    popular: true,
    features: [
      "Advanced skin fades",
      "Beard sculpting & shaping",
      "Razor line work",
      "Texture & styling techniques",
      "Building your signature style",
      "Social media content for barbers",
    ],
  },
  {
    id: 3,
    title: "The Masterclass",
    subtitle: "Advanced Course",
    description:
      "For barbers ready to dominate. Hair design artistry, complex patterns, color work, and building a brand that attracts premium clients.",
    lessons: 24,
    hours: 15,
    level: "Advanced",
    price: 349,
    features: [
      "Hair design & artistic patterns",
      "Advanced design techniques",
      "Color work fundamentals",
      "Premium client experience",
      "Brand building & marketing",
      "Pricing strategy & business growth",
    ],
  },
];

const testimonials = [
  {
    name: "Marcus J.",
    text: "This course changed my career. Went from a home barber to fully booked in 3 months.",
    rating: 5,
  },
  {
    name: "Dion R.",
    text: "The skin fade module alone was worth the price. My blending improved overnight.",
    rating: 5,
  },
  {
    name: "Tyler K.",
    text: "Finally someone teaching the business side too. The branding advice is gold.",
    rating: 5,
  },
];

export default function AcademyPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    {
      q: "How long do I have access to the courses?",
      a: "Once you purchase a course, you have lifetime access. Watch at your own pace, rewatch anytime.",
    },
    {
      q: "Do I need any prior experience?",
      a: "The Foundation course is designed for complete beginners. If you have experience, start with The Craft or The Masterclass.",
    },
    {
      q: "Can I watch on my phone?",
      a: "Yes — all courses are fully responsive and optimized for mobile, tablet, and desktop viewing.",
    },
    {
      q: "Do you offer refunds?",
      a: "We offer a 7-day money-back guarantee if you're not satisfied with the course content.",
    },
  ];

  return (
    <>
      <Navbar />

      {/* HERO */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1585747860019-8e79b4b22a9e?w=1920&q=80&auto=format"
            alt="Barber academy"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent" />
        </div>

        {/* Decorative corners */}
        <div className="absolute top-8 left-8 w-16 h-16 border-t border-l border-copper/20 hidden lg:block" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-b border-r border-copper/20 hidden lg:block" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-12 py-32 w-full">
          <div className="max-w-3xl">
            <div className="animate-fade-in opacity-0 delay-100">
              <span className="inline-flex items-center gap-3 text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
                <span className="w-10 h-[1px] bg-copper" />
                Gifted Champion Academy
              </span>
            </div>

            <h1
              className="mt-8 text-5xl md:text-6xl lg:text-7xl font-light leading-[1.05] tracking-tight animate-fade-in-up opacity-0 delay-200"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Learn to Cut
              <br />
              Like a <span className="italic copper-shimmer">Champion</span>
            </h1>

            <p className="mt-8 text-cream-dim text-base md:text-lg max-w-xl leading-relaxed animate-fade-in-up opacity-0 delay-400">
              Master the art of barbering with step-by-step video courses taught by
              Gifted Champion. From beginner to advanced — level up your craft.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-5 animate-fade-in-up opacity-0 delay-500">
              <a href="#courses" className="btn-copper">
                View Courses
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3" />
                </svg>
              </a>
              <a href="#testimonials" className="btn-outline-copper">
                Student Reviews
              </a>
            </div>

            {/* Stats */}
            <div className="mt-20 flex gap-14 animate-fade-in opacity-0 delay-700">
              {[
                { value: "500+", label: "Students" },
                { value: "50+", label: "Lessons" },
                { value: "4.9", label: "Avg Rating" },
              ].map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl md:text-3xl font-light text-copper" style={{ fontFamily: "var(--font-display)" }}>
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
      </section>

      {/* WHY LEARN WITH US */}
      <section className="section-padding relative texture-dark">
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              Why Learn With Us
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl font-light tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Makes This <span className="italic copper-shimmer">Different</span>
            </h2>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { num: "01", title: "Real Techniques", desc: "No theory-only fluff. Watch real clients get real cuts in real time with detailed breakdowns." },
              { num: "02", title: "Step by Step", desc: "Every technique broken down into clear, repeatable steps you can practice immediately." },
              { num: "03", title: "Lifetime Access", desc: "Buy once, learn forever. Go at your own pace and rewatch whenever you need a refresher." },
              { num: "04", title: "Business Growth", desc: "It's not just about cutting hair — learn how to build a brand and attract premium clients." },
              { num: "05", title: "Mobile Friendly", desc: "Watch anywhere. All courses are optimized for phone, tablet, and desktop viewing." },
              { num: "06", title: "Community Access", desc: "Join a community of motivated barbers. Share work, get feedback, and grow together." },
            ].map((item) => (
              <div key={item.num} className="glass-card rounded-sm p-10 group">
                <span className="text-copper/20 text-5xl font-light" style={{ fontFamily: "var(--font-display)" }}>
                  {item.num}
                </span>
                <h3 className="mt-5 text-xl text-cream group-hover:text-copper transition-colors duration-400" style={{ fontFamily: "var(--font-display)" }}>
                  {item.title}
                </h3>
                <p className="mt-4 text-cream-dim text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section id="courses" className="section-padding relative texture-leather">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(180deg, transparent 0%, rgba(184,115,51,0.02) 50%, transparent 100%)",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              Courses
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl font-light tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Choose Your <span className="italic copper-shimmer">Path</span>
            </h2>
            <p className="mt-5 text-cream-dim max-w-md mx-auto leading-relaxed">
              Three levels of mastery. Start wherever you are and level up your game.
            </p>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.id}
                className={`glass-card rounded-sm p-10 flex flex-col relative ${
                  course.popular ? "ring-1 ring-copper/30" : ""
                }`}
              >
                {course.popular && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-copper to-copper-light text-black text-[10px] tracking-[0.2em] uppercase font-bold px-5 py-1.5">
                      Most Popular
                    </span>
                  </div>
                )}

                <span className="text-[10px] tracking-[0.25em] uppercase text-cream-dim bg-white/5 px-4 py-1.5 rounded-full w-fit">
                  {course.level}
                </span>

                <h3
                  className="mt-6 text-2xl font-light text-cream"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {course.title}
                </h3>
                <p className="text-copper text-sm mt-2">{course.subtitle}</p>

                <p className="mt-5 text-cream-dim text-sm leading-relaxed flex-1">
                  {course.description}
                </p>

                <div className="flex gap-8 mt-8 mb-8">
                  <div className="flex items-center gap-2 text-cream-dim text-xs">
                    <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.348a1.125 1.125 0 010 1.971l-11.54 6.347a1.125 1.125 0 01-1.667-.985V5.653z" />
                    </svg>
                    {course.lessons} lessons
                  </div>
                  <div className="flex items-center gap-2 text-cream-dim text-xs">
                    <svg className="w-4 h-4 text-copper" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    {course.hours}+ hours
                  </div>
                </div>

                <ul className="space-y-4 mb-10">
                  {course.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm text-cream-dim">
                      <svg className="w-4 h-4 text-copper mt-0.5 shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>

                <div className="pt-8 border-t border-white/5 mt-auto">
                  <div className="flex items-baseline gap-2 mb-6">
                    <span
                      className="text-4xl font-light text-copper"
                      style={{ fontFamily: "var(--font-display)" }}
                    >
                      ${course.price}
                    </span>
                    <span className="text-cream-dim text-xs">one-time</span>
                  </div>
                  <button
                    className={`w-full py-4 text-[11px] tracking-[0.2em] uppercase font-semibold transition-all duration-400 cursor-pointer ${
                      course.popular
                        ? "btn-copper justify-center w-full"
                        : "btn-outline-copper justify-center w-full"
                    }`}
                  >
                    Enroll Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section id="testimonials" className="section-padding relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              Reviews
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl font-light tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              What Students <span className="italic copper-shimmer">Say</span>
            </h2>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((t) => (
              <div key={t.name} className="glass-card rounded-sm p-10">
                <div className="flex gap-1 mb-6">
                  {[...Array(t.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-copper" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-cream/80 leading-relaxed mb-8 italic text-lg" style={{ fontFamily: "var(--font-display)" }}>
                  &ldquo;{t.text}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-copper/25 to-copper/5 flex items-center justify-center">
                    <span className="text-copper text-sm font-medium">{t.name[0]}</span>
                  </div>
                  <span className="text-cream text-sm font-medium">{t.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* INSTRUCTOR */}
      <section className="section-padding relative overflow-hidden texture-dark">
        <div className="absolute inset-0" style={{
          background: "linear-gradient(135deg, rgba(184,115,51,0.03) 0%, transparent 50%)",
        }} />

        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div className="relative">
              <div className="aspect-[4/5] rounded-sm overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?w=800&q=80&auto=format"
                  alt="Gifted Champion instructor"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              <div className="absolute -bottom-5 -right-5 w-full h-full border border-copper/15 rounded-sm -z-10 hidden lg:block" />
            </div>

            <div>
              <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
                Your Instructor
              </span>
              <h2
                className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-tight"
                style={{ fontFamily: "var(--font-display)" }}
              >
                Gifted <span className="italic copper-shimmer">Champion</span>
              </h2>
              <div className="copper-line-left w-20 my-8" />

              <div className="relative pl-8 border-l-2 border-copper/30 mb-10">
                <p
                  className="text-xl md:text-2xl font-light italic leading-snug text-cream/80"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  &ldquo;What good is a gift if you can&apos;t share it with others?&rdquo;
                </p>
              </div>

              <p className="text-cream-dim leading-relaxed mb-5">
                With years of experience behind the chair and a reputation built on precision and artistry,
                Gifted Champion has transformed hundreds of clients and is now sharing the knowledge
                that built the brand.
              </p>
              <p className="text-cream-dim leading-relaxed mb-10">
                These courses aren&apos;t just tutorials — they&apos;re the exact techniques, mindset, and
                business strategies used to build a premium barber brand from the ground up.
              </p>
              <a
                href="https://www.instagram.com/giftedchampion/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-copper"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
                Follow on Instagram
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-20">
            <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
              FAQ
            </span>
            <h2
              className="mt-5 text-4xl md:text-5xl font-light tracking-tight"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Common <span className="italic copper-shimmer">Questions</span>
            </h2>
            <div className="flex justify-center mt-8">
              <div className="copper-line w-16" />
            </div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="glass-card rounded-sm overflow-hidden">
                <button
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                  className="w-full px-8 py-6 flex items-center justify-between text-left cursor-pointer"
                >
                  <span className="text-cream font-light text-lg" style={{ fontFamily: "var(--font-display)" }}>
                    {faq.q}
                  </span>
                  <svg
                    className={`w-5 h-5 text-copper transition-transform duration-400 shrink-0 ml-6 ${
                      activeFaq === i ? "rotate-180" : ""
                    }`}
                    fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </button>
                <div className={`overflow-hidden transition-all duration-400 ${activeFaq === i ? "max-h-40" : "max-h-0"}`}>
                  <p className="px-8 pb-6 text-cream-dim text-sm leading-relaxed">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="relative py-28 px-8">
        <div className="copper-line mb-20" />
        <div className="max-w-3xl mx-auto text-center">
          <h2
            className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Start Your <span className="italic copper-shimmer">Journey</span> Today
          </h2>
          <p className="text-cream-dim mb-12 max-w-lg mx-auto leading-relaxed">
            The game waits for no one. Invest in your craft and become the barber you were meant to be.
          </p>
          <a href="#courses" className="btn-copper">
            View Courses
          </a>
        </div>
        <div className="copper-line mt-20" />
      </section>

      <Footer />
    </>
  );
}
