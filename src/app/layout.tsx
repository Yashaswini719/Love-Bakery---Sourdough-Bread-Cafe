import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://love-bakery.vercel.app"),
  title: {
    default: "Love Bakery - Sourdough Bread Cafe",
    template: "%s | Love Bakery",
  },
  description:
    "A premium artisan sourdough bread cafe experience with reservations, menu, gallery, and handcrafted European bakery storytelling.",
  keywords: [
    "sourdough bakery",
    "artisan cafe",
    "bread cafe",
    "premium bakery",
    "Love Bakery",
  ],
  openGraph: {
    title: "Love Bakery - Sourdough Bread Cafe",
    description:
      "Slow-fermented sourdough, warm European cafe energy, and cinematic handcrafted bakery storytelling.",
    type: "website",
    url: "https://love-bakery.vercel.app",
    siteName: "Love Bakery",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full scroll-smooth antialiased">
      <body className="min-h-full bg-cream text-charcoal selection:bg-gold/30 selection:text-charcoal">
        {children}
      </body>
    </html>
  );
}
