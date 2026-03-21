import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Gifted Champion | Premium Barber Services",
  description: "Master craftsmanship. Champion style. Book premium barber services, learn the craft through expert courses, and shop curated products.",
  keywords: ["barber", "haircut", "beard", "grooming", "barber courses", "gifted champion", "premium barber"],
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
