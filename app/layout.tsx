import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "InooBiz - Independent Digital Studio | High-Quality SaaS & Web Products",
  description: "InooBiz is an independent digital studio run by a solo developer, building high-quality, fast, and scalable digital products and SaaS web applications.",
  keywords: ["InooBiz", "Digital Studio", "SaaS", "Web Development", "Software Development", "Indie Maker", "Solo Developer"],
  authors: [{ name: "InooBiz" }],
  openGraph: {
    title: "InooBiz - Independent Digital Studio",
    description: "Crafting high-quality, scalable digital products and SaaS applications.",
    url: "https://inoobiz.com",
    siteName: "InooBiz",
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/inoobiz-icon.svg",
    apple: "/inoobiz-icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.className} bg-slate-50 text-slate-950 antialiased min-h-screen flex flex-col`}
      >
        {children}
      </body>
    </html>
  );
}
