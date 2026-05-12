import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { SITE } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Garden Rooms | Garden Buildings | Garden Buildings Scotland",
    template: "%s | Garden Buildings Scotland"
  },
  description:
    "Garden sheds, garden rooms, summerhouses, greenhouses and playhouses supplied and installed across Scotland. Save up to 50%. Free quote in under a minute.",
  openGraph: {
    type: "website",
    siteName: SITE.brand,
    url: SITE.url
  },
  robots: { index: true, follow: true }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB">
      <body className="min-h-screen flex flex-col bg-white text-ink-900 antialiased">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
