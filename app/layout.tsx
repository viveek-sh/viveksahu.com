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
      suppressHydrationWarning
      className={`dark ${fontSans.variable} ${fontMono.variable} h-full antialiased`}>
      <head>
        <link rel="preload" as="image" href="/bg.webp" />
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
