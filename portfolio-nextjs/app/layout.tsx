import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Atmosphere } from "@/components/layout/Atmosphere";
import { ScrollProgress } from "@/components/layout/ScrollProgress";
import { BackToTop } from "@/components/layout/BackToTop";
import { site } from "@/data/site";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const jbmono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-jbmono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${site.name} — AI Engineer & Full-Stack Developer`,
  description:
    "Portfolio of Muhammad Miswan — AI Engineer, Machine Learning practitioner, and Full-Stack Developer building intelligent products.",
  openGraph: {
    title: `${site.name} — AI Engineer & Full-Stack Developer`,
    description: "AI Engineer, Machine Learning practitioner, and Full-Stack Developer.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jbmono.variable}`}>
      <body className="overflow-x-hidden font-sans antialiased">
        <Atmosphere />
        <ScrollProgress />
        <Navbar />
        {children}
        <Footer />
        <BackToTop />
      </body>
    </html>
  );
}
