import React from "react";
import Link from "next/link";
import { ChevronLeft, Shield, Calendar, Lock, HelpCircle } from "lucide-react";

export default function PrivacyPolicy() {
  const lastUpdated = "June 27, 2026";

  return (
    <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Dynamic Grid Background Accent */}
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-40" />

      {/* Simplified Header */}
      <header className="sticky top-0 z-40 w-full border-b border-slate-200 bg-white/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <ChevronLeft className="h-4 w-4 text-slate-500 group-hover:text-blue-600 transition-colors" />
            <span className="text-sm font-semibold text-slate-600 group-hover:text-blue-600 transition-colors">
              Back to Home
            </span>
          </Link>
          <Link href="/" className="flex items-center">
            <img
              src="/inoobiz-logo-horizontal.svg"
              alt="InooBiz Logo"
              className="h-11 w-auto block"
            />
          </Link>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-grow py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Header Title */}
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <Shield className="h-3.5 w-3.5" />
              Privacy Safeguard
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Privacy Policy
            </h1>
            <p className="text-slate-500 text-sm flex items-center justify-center sm:justify-start gap-1">
              <Calendar className="h-4 w-4 text-slate-400" />
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Privacy Content Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed">
            
            {/* Introduction */}
            <section>
              <p className="mb-4">
                At <strong>InooBiz</strong> ("we", "us", or "our"), we value your trust and are committed to protecting your personal data. This Privacy Policy describes how we collect, use, store, and share your personal information when you visit our website, use our software, or purchase our digital services (collectively, the "Services").
              </p>
              <p>
                By using our Services, you consent to the data collection and usage practices described in this policy. If you do not agree with this policy, please do not use our Services.
              </p>
            </section>

            {/* Section 1: Information We Collect */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">1</span>
                Information We Collect
              </h2>
              <p className="mb-3">
                We collect information directly from you, automatically through your use of our Services, and from third-party sources:
              </p>
              <ul className="list-disc pl-5 space-y-2">
                <li>
                  <strong>Account & Registration Details:</strong> When you register for our Services (such as <em>InooBiz Wedding SaaS</em>), we collect your name, email address, company name (if applicable), and contact preferences.
                </li>
                <li>
                  <strong>Payment & Billing Data:</strong> To process payments for digital products, our payment gateway partner collects payment details, credit card numbers, billing addresses, and transactional information. <em>Note: InooBiz does not store credit card credentials directly on our servers; payments are processed securely by compliant third-party payment gateways.</em>
                </li>
                <li>
                  <strong>Device & Usage Data:</strong> When you use our applications, we automatically log information like your IP address, browser type, operating system, page views, clickstream data, and interaction timestamps to help optimize performance.
                </li>
              </ul>
            </section>

            {/* Section 2: How We Use Information */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">2</span>
                How We Use Information
              </h2>
              <p className="mb-3">
                We use the information we collect for the following business and operations purposes:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li>To provide, manage, maintain, and optimize our digital products and SaaS platforms.</li>
                <li>To process transactions, manage subscriptions, and send billing confirmations.</li>
                <li>To respond to customer support inquiries and provide direct assistance.</li>
                <li>To prevent fraud, abuse, and secure our system infrastructure.</li>
                <li>To comply with regulatory obligations and legal requirements.</li>
              </ul>
            </section>

            {/* Section 3: Data Sharing and Third-Party Processors */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">3</span>
                Sharing of Information
              </h2>
              <p className="mb-3">
                We do not sell, rent, or lease your personal information. We only share information with trusted third-party service providers that help us run our business:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Payment Processors:</strong> Necessary payment gateways to facilitate secure transactions.</li>
                <li><strong>Infrastructure Providers:</strong> Standard hosting and database platforms (e.g. Vercel, cloud service databases).</li>
                <li><strong>Legal Compliance:</strong> If required by law, court order, or governmental authorities to protect our rights, users, or the general public.</li>
              </ul>
            </section>

            {/* Section 4: Cookies and Tracking Technologies */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">4</span>
                Cookies and Tracking
              </h2>
              <p className="mb-3">
                We use cookies and similar technologies to enhance user experiences, analyze navigation trends, and store operational settings.
              </p>
              <p>
                You can configure your browser to refuse all or some cookies. However, disabling cookies may prevent some features of our websites or SaaS applications from functioning correctly.
              </p>
            </section>

            {/* Section 5: Data Security (Crucial for PG compliance) */}
            <section className="p-5 rounded-2xl bg-blue-50/50 border border-blue-150/60">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Lock className="h-5 w-5 text-blue-600" />
                Data Security Standards
              </h2>
              <p className="mb-3">
                We employ standard administrative, technical, and physical security measures to protect your personal data from loss, unauthorized access, disclosure, alteration, or destruction.
              </p>
              <p>
                While we strive to use commercially acceptable means to protect your personal data, no method of transmission over the Internet or electronic storage is 100% secure. Therefore, we cannot guarantee absolute security.
              </p>
            </section>

            {/* Section 6: User Rights & Local Compliance */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">5</span>
                Your Rights (PDP & GDPR)
              </h2>
              <p className="mb-3">
                Under Indonesian Personal Data Protection (UU PDP) regulations and similar global privacy frameworks, you have rights regarding your personal information:
              </p>
              <ul className="list-disc pl-5 space-y-1.5">
                <li><strong>Access:</strong> The right to request copies of the personal data we hold about you.</li>
                <li><strong>Correction:</strong> The right to request that we correct inaccurate or incomplete information.</li>
                <li><strong>Deletion:</strong> The right to request that we delete or erase your account data (subject to tax or legal storage mandates).</li>
                <li><strong>Opt-Out:</strong> The right to unsubscribe from promotional emails or updates.</li>
              </ul>
              <p>
                To exercise any of these rights, please email us at <a href="mailto:hello@inoobiz.com" className="text-blue-600 hover:underline">hello@inoobiz.com</a>.
              </p>
            </section>

            {/* Section 7 */}
            <section className="pt-6 border-t border-slate-100">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                Inquiries and Contact Details
              </h2>
              <p className="mb-3">
                For questions, concerns, or requests regarding this Privacy Policy or your data, please contact our data supervisor at:
              </p>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs sm:text-sm space-y-2">
                <p><strong>Studio Name:</strong> InooBiz (Independent Digital Studio)</p>
                <p><strong>Contact Email:</strong> <a href="mailto:hello@inoobiz.com" className="text-blue-600 hover:underline">hello@inoobiz.com</a></p>
                <p><strong>Contact WhatsApp:</strong> <a href="https://wa.me/628567878149" className="text-blue-600 hover:underline">+62 856-7878-149</a></p>
              </div>
            </section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-slate-900 text-slate-400 border-t border-slate-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center text-xs">
          <p>&copy; {new Date().getFullYear()} InooBiz. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
