import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DynamicBackground from "@/components/DynamicBackground";

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
      className="dark h-full antialiased">
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
