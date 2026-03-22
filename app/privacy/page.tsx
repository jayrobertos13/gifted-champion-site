import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <section className="relative" style={{ paddingTop: "clamp(140px, 20vw, 200px)", paddingBottom: "80px", paddingLeft: "24px", paddingRight: "24px" }}>
        <div style={{ maxWidth: "768px", margin: "0 auto" }}>
          <span className="text-copper text-[11px] tracking-[0.4em] uppercase font-medium">
            Legal
          </span>
          <h1
            className="text-3xl md:text-4xl lg:text-5xl font-light tracking-tight"
            style={{ fontFamily: "var(--font-display)", marginTop: "16px", marginBottom: "48px" }}
          >
            Privacy <span className="italic copper-shimmer">Policy</span>
          </h1>

          <p className="text-cream-dim text-sm" style={{ marginBottom: "48px" }}>
            Last updated: March 22, 2026
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: "40px" }}>
            <div>
              <h2 className="text-xl font-normal text-cream" style={{ fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                Information We Collect
              </h2>
              <p className="text-cream-dim text-sm leading-relaxed">
                When you book an appointment through our third-party booking platform (Square), we may collect your name, phone number, email address, and appointment preferences. We do not store payment information directly — all payments are processed securely through Square.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-cream" style={{ fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                How We Use Your Information
              </h2>
              <ul className="text-cream-dim text-sm leading-relaxed" style={{ display: "flex", flexDirection: "column", gap: "8px", paddingLeft: "20px", listStyleType: "disc" }}>
                <li>To schedule and manage your appointments</li>
                <li>To communicate with you about your bookings</li>
                <li>To improve our services and customer experience</li>
                <li>To send occasional updates about promotions or new services (with your consent)</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-normal text-cream" style={{ fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                Third-Party Services
              </h2>
              <p className="text-cream-dim text-sm leading-relaxed">
                Our website uses third-party services including Square for appointment booking and payment processing, Google Maps for location display, and Instagram for social media content. Each of these services has its own privacy policy governing how they handle your data.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-cream" style={{ fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                Cookies &amp; Analytics
              </h2>
              <p className="text-cream-dim text-sm leading-relaxed">
                This website may use basic cookies and analytics to understand site traffic and improve user experience. We do not sell or share your personal data with third parties for marketing purposes.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-cream" style={{ fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                Data Security
              </h2>
              <p className="text-cream-dim text-sm leading-relaxed">
                We take reasonable measures to protect your personal information. However, no method of transmission over the internet is 100% secure. We encourage you to take steps to protect your personal information as well.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-cream" style={{ fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                Your Rights
              </h2>
              <p className="text-cream-dim text-sm leading-relaxed">
                You may request access to, correction of, or deletion of your personal information at any time by contacting us through our Instagram page or in person at the shop.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-cream" style={{ fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                Contact
              </h2>
              <p className="text-cream-dim text-sm leading-relaxed">
                If you have questions about this privacy policy, please reach out to us via Instagram at{" "}
                <a href="https://www.instagram.com/giftedchampion/" target="_blank" rel="noopener noreferrer" className="text-copper hover:text-copper-light transition-colors">
                  @giftedchampion
                </a>{" "}
                or visit us at Fadez &amp; Bladez Barbershop, 28087 Bradley Rd, Menifee, CA 92586.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-normal text-cream" style={{ fontFamily: "var(--font-display)", marginBottom: "16px" }}>
                Changes to This Policy
              </h2>
              <p className="text-cream-dim text-sm leading-relaxed">
                We may update this privacy policy from time to time. Any changes will be reflected on this page with an updated date.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
