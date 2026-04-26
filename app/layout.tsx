import type { Metadata } from "next";
import { Poppins, JetBrains_Mono } from "next/font/google"; // JetBrains is the gold standard for 'Mono'
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";

const fontSans = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  // Loading explicit weights prevents the browser from "guessing" the thickness
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// 2. Configure the Mono font (Perfect for your terminal-style cards)
const fontMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  ),
  title: "Vivek Sahu | Full-Stack Cloud Engineer",
  description:
    "Portfolio of Vivek Sahu - Scalable systems and cloud-native architecture.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`dark ${fontSans.variable} ${fontMono.variable} h-full antialiased`}>
      <head>
        <link rel="preload" href="/bg.webp" as="image" type="image/webp" />
      </head>
      <body className="min-h-full flex flex-col font-sans selection:bg-emerald-500/30">
        <Providers>
          <DynamicBackground />
          <Navbar />
          <main className="flex-1">{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
