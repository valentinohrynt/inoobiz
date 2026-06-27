"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  ExternalLink,
  Layers,
  Mail,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  ShieldCheck,
  Code,
  Sparkles,
  Menu,
  X,
  Globe,
  Zap,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Products Data
  const products = [
    {
      title: "Manusiain",
      status: "Live",
      description: "A comprehensive digital platform and web service designed to streamline human-centric data processing and workflow automation.",
      link: "https://manusiain.web.id",
      tech: ["Next.js", "Tailwind CSS", "TypeScript", "Node.js"],
      features: ["Real-time synchronization", "Intuitive user dashboard", "Secure data privacy controls"],
    },
    {
      title: "InooBiz Wedding SaaS",
      status: "Coming Soon",
      description: "A modern, edge-powered digital wedding invitation platform featuring auto-generated subdomains, premium responsive templates, and RSVP management.",
      link: null,
      tech: ["Next.js", "Vercel Edge", "PostgreSQL", "Tailwind CSS"],
      features: ["Instant subdomain provisioning", "Interactive guest RSVP", "Custom template builder"],
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-slate-50/50 text-slate-900 font-sans selection:bg-blue-500/10 selection:text-blue-700">
      
      {/* Dynamic Grid Background Accent */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-60" />

      {/* Header / Navigation Bar */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <img
              src="/inoobiz-logo-horizontal.svg"
              alt="InooBiz Logo"
              className="h-8 w-auto block"
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#hero" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Home
            </a>
            <a href="#products" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Products
            </a>
            <a href="#about" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#contact" className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors">
              Contact
            </a>
          </nav>

          {/* Contact CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-all duration-200 shadow-sm"
            >
              Get in Touch
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-slate-600 hover:text-slate-900 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation Panel */}
        {mobileMenuOpen && (
          <div className="md:hidden border-b border-slate-200 bg-white px-4 py-4 space-y-3 animate-in fade-in slide-in-from-top-5 duration-200">
            <a
              href="#hero"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Home
            </a>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Products
            </a>
            <a
              href="#about"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
            >
              Contact
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="block w-full text-center px-4 py-2.5 text-base font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow-sm"
            >
              Get in Touch
            </a>
          </div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="hero" className="relative pt-24 pb-20 md:pt-32 md:pb-28 overflow-hidden">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
            {/* Trust Badge */}
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-blue-700 text-xs font-semibold tracking-wide uppercase mb-6">
              <Sparkles className="h-3.5 w-3.5" />
              Independent Digital Studio
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-slate-900 tracking-tight leading-[1.1] mb-6">
              Crafting High-Quality <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">
                Digital Products & SaaS.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
              InooBiz is an independent software studio dedicated to building fast, scalable, and user-centric web applications and digital solutions.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="#products"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl transition-all duration-200 shadow-md shadow-blue-500/10 hover:shadow-lg hover:-translate-y-0.5"
              >
                Explore Our Products
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-3.5 text-base font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-200 rounded-xl transition-all duration-200 shadow-sm"
              >
                Talk to the Developer
              </a>
            </div>

            {/* Core Values / Features bar */}
            <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-200/60 max-w-3xl mx-auto">
              <div className="flex flex-col items-center p-2">
                <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3 text-blue-600">
                  <Zap className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-slate-900">Performance First</span>
                <span className="text-xs text-slate-500 text-center mt-1">Edge computing & sub-second loads</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center mb-3 text-indigo-600">
                  <ShieldCheck className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-slate-900">Highly Trustworthy</span>
                <span className="text-xs text-slate-500 text-center mt-1">Secure and PG-compliant architecture</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <div className="h-10 w-10 rounded-lg bg-sky-50 flex items-center justify-center mb-3 text-sky-600">
                  <Code className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-slate-900">Clean Code</span>
                <span className="text-xs text-slate-500 text-center mt-1">Built with modern TypeScript frameworks</span>
              </div>
              <div className="flex flex-col items-center p-2">
                <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-3 text-emerald-600">
                  <CheckCircle className="h-5 w-5" />
                </div>
                <span className="text-sm font-bold text-slate-900">User Centric</span>
                <span className="text-xs text-slate-500 text-center mt-1">Intuitive, smooth UX for everyone</span>
              </div>
            </div>
          </div>
        </section>

        {/* Products / Portfolio Section */}
        <section id="products" className="py-20 bg-white border-y border-slate-200/60 relative">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl mb-4">
                Our Digital Studio Products
              </h2>
              <p className="text-slate-600 text-lg">
                Explore the applications designed and actively developed by InooBiz. We build specialized, value-packed tools for businesses and individuals.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {products.map((product, idx) => (
                <div
                  key={idx}
                  className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 hover:shadow-md hover:border-slate-300/80 transition-all duration-300 group"
                >
                  <div>
                    {/* Card Header */}
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
                        {product.title}
                      </h3>
                      <span
                        className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold ${
                          product.status === "Live"
                            ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                            : "bg-amber-50 text-amber-700 border border-amber-200"
                        }`}
                      >
                        {product.status}
                      </span>
                    </div>

                    <p className="text-slate-600 mb-6 text-sm sm:text-base leading-relaxed">
                      {product.description}
                    </p>

                    {/* Features list */}
                    <div className="mb-6">
                      <h4 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">Key Highlights</h4>
                      <ul className="space-y-1.5">
                        {product.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-center text-xs sm:text-sm text-slate-600">
                            <CheckCircle className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Badges */}
                    <div className="flex flex-wrap gap-1.5 mb-8">
                      {product.tech.map((tech, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-2 py-0.5 rounded bg-slate-200/60 text-slate-700 text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* CTA link */}
                  <div>
                    {product.link ? (
                      <a
                        href={product.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm font-bold text-blue-600 hover:text-blue-700 group-hover:underline"
                      >
                        Visit Live Project
                        <ExternalLink className="ml-1 h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <div className="flex items-center text-sm font-medium text-slate-400">
                        <Globe className="mr-1.5 h-4 w-4 text-slate-300" />
                        Awaiting Launch
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-slate-50/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-12 shadow-sm relative overflow-hidden">
              <div className="absolute right-0 top-0 translate-x-12 -translate-y-12 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl -z-10" />
              
              <div className="flex flex-col md:flex-row gap-8 items-start">
                <div className="flex-1">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2.5 py-1 rounded">
                    About The Studio
                  </span>
                  <h2 className="text-3xl font-bold text-slate-900 tracking-tight mt-4 mb-6">
                    A Solo Developer Studio with Big Standards
                  </h2>
                  <p className="text-slate-600 mb-4 leading-relaxed">
                    InooBiz was established on the values of craft, focus, and transparency. As a solo indie software development studio, I don't build generic solutions. I dedicate my skills to creating elegant digital products that load instantaneously, perform robustly, and offer a simple, beautiful user experience.
                  </p>
                  <p className="text-slate-600 leading-relaxed">
                    By operating as an independent, bootstrapped studio, InooBiz focuses entirely on product quality and customer support directly, ensuring high trustworthiness and customer-aligned practices.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact & Company Information Section */}
        <section id="contact" className="py-20 bg-white border-t border-slate-200/60">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight sm:text-4xl mb-4">
                Company & Contact Information
              </h2>
              <p className="text-slate-600">
                InooBiz is committed to transparency and direct communication. Feel free to contact us with any inquiries, support requests, or product suggestions.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Card 1: Main Contact */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
                    <Mail className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Email Address</h3>
                  <p className="text-sm text-slate-500 mb-4">For general inquires, support, and business proposals.</p>
                </div>
                <a
                  href="mailto:hello@inoobiz.com"
                  className="text-sm font-bold text-blue-600 hover:text-blue-700 break-all"
                >
                  hello@inoobiz.com
                </a>
              </div>

              {/* Card 2: WhatsApp Chat */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4">
                    <Phone className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">WhatsApp Support</h3>
                  <p className="text-sm text-slate-500 mb-4">Get direct assistance or chat with our studio developer.</p>
                </div>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-bold text-emerald-600 hover:text-emerald-700"
                >
                  +62 812 3456 7890
                </a>
              </div>

              {/* Card 3: Operating Hours */}
              <div className="p-6 rounded-2xl border border-slate-200 bg-slate-50/50 flex flex-col justify-between">
                <div>
                  <div className="h-10 w-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mb-4">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Operating Hours</h3>
                  <p className="text-sm text-slate-500 mb-4">We are available during these times for support.</p>
                </div>
                <div className="text-sm font-medium text-slate-700">
                  Mon - Fri: 09:00 - 17:00 WIB
                  <span className="block text-xs text-slate-400 mt-1">Closed on Weekends & Public Holidays</span>
                </div>
              </div>
            </div>

            {/* Address / Registered office detail */}
            <div className="mt-12 p-6 sm:p-8 rounded-3xl border border-slate-200 bg-slate-50/50 flex flex-col sm:flex-row gap-6 items-start sm:items-center justify-between">
              <div className="flex gap-4 items-start sm:items-center">
                <div className="h-10 w-10 rounded-lg bg-rose-50 flex items-center justify-center text-rose-600 flex-shrink-0">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900">Registered Business Office</h4>
                  <p className="text-sm text-slate-600 mt-0.5">
                    Jl. Kemang Raya No. 10, Jakarta Selatan, DKI Jakarta 12730, Indonesia
                  </p>
                </div>
              </div>
              <div className="text-xs text-slate-400 bg-white border border-slate-200/80 px-3 py-1.5 rounded-lg flex items-center gap-1.5 self-stretch sm:self-auto justify-center">
                <ShieldCheck className="h-4 w-4 text-slate-400" />
                PG Verified Legitimacy
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
            <Link href="/" className="flex items-center bg-white px-3 py-1.5 rounded-xl shadow-sm border border-slate-800 hover:bg-slate-50 transition-colors">
              <img
                src="/inoobiz-logo-horizontal.svg"
                alt="InooBiz Logo"
                className="h-6 w-auto block"
              />
            </Link>

            {/* Footer Navigation */}
            <nav className="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium">
              <a href="#hero" className="hover:text-white transition-colors">Home</a>
              <a href="#products" className="hover:text-white transition-colors">Products</a>
              <a href="#about" className="hover:text-white transition-colors">About</a>
              <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-8 text-xs">
            <div className="text-center md:text-left">
              <p>&copy; {new Date().getFullYear()} InooBiz. All rights reserved.</p>
              <p className="mt-1 text-slate-500">
                Designed & built in Jakarta, Indonesia by InooBiz.
              </p>
            </div>

            <div className="flex items-center gap-6">
              <Link href="/terms" className="hover:text-white transition-colors font-medium">
                Terms of Service
              </Link>
              <Link href="/privacy" className="hover:text-white transition-colors font-medium">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
