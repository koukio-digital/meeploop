import React from 'react';
import Link from 'next/link';
import ContactForm from '@/components/ContactForm';
import {
  Mail,
  Phone,
  MessageSquare,
  Clock,
  ShieldCheck,
  HelpCircle,
  MapPin
} from 'lucide-react';

export const metadata = {
  title: 'Contact Us ',
  description: 'Reach out to GrowCell IT Architect for IT consulting, custom ERP software, turnkey office networking, or computer & robotics lab setups.',
};

export default function ContactPage() {
  const faqs = [
    {
      q: 'How long does a custom ERP or business software build typically take?',
      a: 'Most modular ERP and business applications undergo a 2-week architectural discovery phase followed by phased rollouts starting within 6 to 12 weeks, ensuring you receive working software early.',
    },
    {
      q: 'Do you provide hardware procurement and on-site cabling/lab setups?',
      a: 'Yes. We are full-stack IT architects. We handle hardware specification, procurement, structured cabling, server rack installations, and complete computer/robotics lab deployments directly on-site.',
    },
    {
      q: 'Can you modernize our existing legacy software or database without downtime?',
      a: 'Absolutely. We design parallel data pipelines and zero-downtime migration protocols so your existing business operations continue uninterrupted while the new architecture is deployed.',
    },
    {
      q: 'What engagement models do you offer?',
      a: 'We offer Fixed-Scope Project Delivery for specific software/infrastructure implementations, as well as Retainer-based Fractional IT Architect leadership for ongoing tech strategy and oversight.',
    },
  ];

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] py-16 sm:py-24 transition-colors duration-300">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-bold uppercase tracking-widest mb-4">
          Get In Touch
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Let's talk <span className="text-gradient">technology.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Whether you need an architectural review, custom software development, or a turnkey computer/robotics lab, we are here to help.
        </p>
      </div>

      {/* Main Grid: Info + Contact Form */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-3">
                Connect directly with our engineering architects.
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                Share your requirements, budget, and timeline. Our technical consultants will review your brief and schedule an exploratory call.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-4">
              <a
                href="mailto:business@growcell.in"
                className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-cyan/40 flex items-center gap-4 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-xl bg-cyan/10 border border-cyan/30 flex items-center justify-center text-cyan group-hover:scale-110 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider">Email Inquiry</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-cyan transition-colors">
                    business@growcell.in
                  </span>
                </div>
              </a>

              <a
                href="tel:+91 9472146511"
                className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-blue-500/40 flex items-center gap-4 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-500 dark:text-blue-400 group-hover:scale-110 transition-transform">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider">Phone Consultation</span>
                  <span className="text-sm font-bold text-slate-900 dark:text-white group-hover:text-blue-500 dark:group-hover:text-blue-300 transition-colors">
                    +91 94721 46511
                  </span>
                </div>
              </a>

              <a
                href="https://wa.me/919472146511?text=Can%20I%20get%20more%20information%20about%20your%20services%3F%20I%20need%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="glass-panel p-5 rounded-2xl border border-slate-200 dark:border-white/10 hover:border-emerald-500/40 flex items-center gap-4 transition-all group shadow-sm dark:shadow-none"
              >
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-500 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                  <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                  </svg>
                </div>
                <div>
                  <span className="text-xs text-slate-500 dark:text-slate-400 block font-semibold uppercase tracking-wider">WhatsApp Quick Chat</span>
                  <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400 group-hover:text-emerald-500 dark:group-hover:text-emerald-300 transition-colors">
                    Chat with an Architect
                  </span>
                </div>
              </a>
            </div>

            {/* SLA Badge */}
            <div className="p-5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 flex items-center gap-4">
              <Clock className="w-6 h-6 text-cyan shrink-0" />
              <div>
                <h4 className="text-xs font-bold text-slate-900 dark:text-white uppercase tracking-wider">Rapid  Response</h4>
                <p className="text-xs text-slate-600 dark:text-slate-400 mt-0.5">
                  All enterprise briefs are reviewed by a lead engineer within 24 business hours.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

        </div>
      </div>

      {/* Frequently Asked Questions */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-slate-200 dark:border-white/10 pt-20">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3 py-1 rounded-full bg-violet-500/10 text-violet-500 dark:text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">
            Common Questions
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {faqs.map((faq) => (
            <div key={faq.q} className="glass-panel p-6 rounded-2xl border border-slate-200 dark:border-white/5 shadow-sm dark:shadow-none">
              <h3 className="text-base font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-2.5">
                <HelpCircle className="w-5 h-5 text-cyan shrink-0 mt-0.5" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 pl-7 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
