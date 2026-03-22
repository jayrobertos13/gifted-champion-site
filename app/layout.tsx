import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gifted Champion | Premium Barber Services",
  description: "Master craftsmanship. Champion style. Book premium barber services, learn the craft through expert courses, and shop curated products.",
  keywords: ["barber", "haircut", "beard", "grooming", "barber courses", "gifted champion", "premium barber"],
  icons: {
    icon: [
      { url: "/icon-16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full">
      <body className="min-h-full flex flex-col grain">
        {children}
      </body>
    </html>
  );
}
