import React from "react";
import Link from "next/link";
import { ChevronLeft, FileText, Calendar, Shield, HelpCircle } from "lucide-react";

export default function TermsOfService() {
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
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-bold tracking-tight text-slate-900">
              InooBiz<span className="text-blue-600">.</span>
            </span>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-grow py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          {/* Header Title */}
          <div className="mb-10 text-center sm:text-left">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-wider mb-4">
              <FileText className="h-3.5 w-3.5" />
              Legal Agreement
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-3">
              Terms of Service
            </h1>
            <p className="text-slate-500 text-sm flex items-center justify-center sm:justify-start gap-1">
              <Calendar className="h-4 w-4 text-slate-400" />
              Last updated: {lastUpdated}
            </p>
          </div>

          {/* Terms Content Card */}
          <div className="bg-white rounded-3xl border border-slate-200/80 p-8 sm:p-10 shadow-sm space-y-8 text-slate-600 text-sm sm:text-base leading-relaxed">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">1</span>
                Acceptance of Terms
              </h2>
              <p className="mb-3">
                By accessing or using the services, digital products, software, and websites provided by <strong>InooBiz</strong> ("we", "us", or "our"), including but not limited to <em>Manusiain</em> and <em>InooBiz Wedding SaaS</em> (collectively, the "Services"), you agree to be bound by these Terms of Service ("Terms").
              </p>
              <p>
                If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these Terms. If you do not agree to these Terms, you may not access or use our Services.
              </p>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">2</span>
                Description of Services
              </h2>
              <p>
                InooBiz is an independent software studio that designs, develops, and runs proprietary web services, templates, and SaaS platforms. Services are provided on an "as is" and "as available" basis. We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time without prior notice.
              </p>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">3</span>
                Accounts and Registration
              </h2>
              <p className="mb-3">
                To access certain features of our Services, you may be required to register for an account. You agree to:
              </p>
              <ul className="list-disc pl-5 mb-3 space-y-1">
                <li>Provide accurate, current, and complete information during registration.</li>
                <li>Maintain the security of your password and credentials.</li>
                <li>Promptly update account information to keep it accurate.</li>
                <li>Notify us immediately at <a href="mailto:hello@inoobiz.com" className="text-blue-600 hover:underline">hello@inoobiz.com</a> if you suspect any unauthorized access to your account.</li>
              </ul>
              <p>
                You are solely responsible for all activities that occur under your account, and we are not liable for any loss or damage arising from your failure to comply with this section.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">4</span>
                Fees, Payments, and Billing
              </h2>
              <p className="mb-3">
                Certain Services or digital products may require payment of fees. All fees are quoted and billed in local currency (IDR / USD) as specified on the checkout pages.
              </p>
              <p className="mb-3">
                <strong>Billing Cycles:</strong> Subscription services are billed on a recurring monthly or annual billing cycle. Charges will be automatically processed through our approved third-party Payment Gateways.
              </p>
              <p>
                <strong>Price Changes:</strong> We reserve the right to change our subscription rates or product prices. Any price changes will be communicated to subscription customers at least thirty (30) days in advance.
              </p>
            </section>

            {/* Section 5 (Crucial for PG compliance) */}
            <section className="p-5 rounded-2xl bg-amber-50/50 border border-amber-200/60">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <Shield className="h-5 w-5 text-amber-600" />
                Refund and Cancellation Policy
              </h2>
              <p className="mb-3">
                We want you to be fully satisfied with our digital products.
              </p>
              <p className="mb-3">
                <strong>SaaS Subscriptions:</strong> You can cancel your subscription at any time. Upon cancellation, your service will remain active until the end of your current billing period. Subscription payments are non-refundable, except where required by law.
              </p>
              <p>
                <strong>Digital Downloads / Lifetime Deals:</strong> Due to the nature of downloadable digital products, refunds are evaluated on a case-by-case basis. If you experience technical issues with a digital asset that we are unable to resolve within 7 business days, you may request a refund within 14 days of purchase by emailing us.
              </p>
            </section>

            {/* Section 6 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">5</span>
                Prohibited Conduct
              </h2>
              <p className="mb-3">
                You agree not to engage in any of the following prohibited behaviors while using our Services:
              </p>
              <ul className="list-disc pl-5 space-y-1">
                <li>Violating any local, national, or international laws or regulations.</li>
                <li>Infringing upon our intellectual property rights or the rights of others.</li>
                <li>Attempting to interfere with, disrupt, or compromise the integrity of our systems or servers.</li>
                <li>Engaging in automated scraping, data extraction, or denial-of-service (DoS) operations.</li>
                <li>Using the products to host or transmit malicious software, spam, or defamatory content.</li>
              </ul>
            </section>

            {/* Section 7 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">6</span>
                Limitation of Liability
              </h2>
              <p>
                To the maximum extent permitted by applicable law, InooBiz and its developer shall not be liable for any direct, indirect, incidental, special, consequential, or exemplary damages, including but not limited to damages for loss of profits, goodwill, use, data, or other intangible losses arising out of or in connection with your use or inability to use the Services.
              </p>
            </section>

            {/* Section 8 */}
            <section>
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <span className="h-6 w-6 rounded bg-slate-100 flex items-center justify-center text-xs text-slate-700 font-mono">7</span>
                Governing Law and Dispute Resolution
              </h2>
              <p>
                These Terms and your relationship with InooBiz shall be governed by and construed in accordance with the laws of the <strong>Republic of Indonesia</strong>, without regard to its conflict of law principles. Any dispute arising out of or relating to these Terms shall be resolved through amicable discussions. If a resolution cannot be reached, the dispute shall be submitted to the exclusive jurisdiction of the district courts of <strong>Jakarta Selatan, DKI Jakarta, Indonesia</strong>.
              </p>
            </section>

            {/* Section 9 */}
            <section className="pt-6 border-t border-slate-100">
              <h2 className="text-lg sm:text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-blue-600" />
                Contact Information
              </h2>
              <p className="mb-3">
                If you have any questions, concerns, or requests regarding these Terms of Service, please contact us at:
              </p>
              <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200 text-xs sm:text-sm space-y-2">
                <p><strong>Studio Name:</strong> InooBiz (Independent Digital Studio)</p>
                <p><strong>Registered Address:</strong> Jl. Kemang Raya No. 10, Jakarta Selatan, DKI Jakarta 12730, Indonesia</p>
                <p><strong>Contact Email:</strong> <a href="mailto:hello@inoobiz.com" className="text-blue-600 hover:underline">hello@inoobiz.com</a></p>
                <p><strong>Contact WhatsApp:</strong> <a href="https://wa.me/6281234567890" className="text-blue-600 hover:underline">+62 812 3456 7890</a></p>
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
