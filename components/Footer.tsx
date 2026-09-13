'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Instagram,
  Github,
  ArrowUp,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[var(--bg-secondary)] text-[var(--text-muted)] border-t border-[var(--border-main)] relative overflow-hidden transition-colors duration-300">
      {/* Subtle background glow */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-3/4 h-64 bg-gradient-to-b from-cyan/10 to-transparent blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">

          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link href="/" className="inline-block">
              <div className="h-10 w-44 relative">
                <Image
                  src="/img/logo.png"
                  alt="Growcell IT Architect"
                  width={176}
                  height={40}
                  className="object-contain filter brightness-110"
                />
              </div>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-400 max-w-sm leading-relaxed">
              Growcell IT Architect empowers growing enterprises with future-ready technology architecture, custom software platforms, cloud infrastructure, and intelligent automation.
            </p>

            {/* Direct Contact Badges */}
            <div className="space-y-2 pt-2">
              <a
                href="mailto:business@Growcell.in"
                className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 hover:text-cyan transition-colors"
              >
                <Mail className="w-4 h-4 text-cyan" />
                <span>business@Growcell.in</span>
              </a>
              <a
                href="tel:+919472146511"
                className="flex items-center gap-2.5 text-xs text-slate-600 dark:text-slate-300 hover:text-cyan transition-colors"
              >
                <Phone className="w-4 h-4 text-cyan" />
                <span>+91 94721 46511</span>
              </a>
              <a
                href="https://wa.me/919472146511?text=Can%20I%20get%20more%20information%20about%20your%20services%3F%20I%20need%20for%20my%20business."
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2.5 text-xs text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 transition-colors group"
              >
                <svg className="w-4 h-4 fill-current text-emerald-500 group-hover:scale-110 transition-transform" viewBox="0 0 24 24">
                  <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                </svg>
                <span>Chat on WhatsApp</span>
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.linkedin.com/company/Growcell/"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-[#0A66C2]/20 hover:text-[#0A66C2] text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all border border-slate-200 dark:border-white/10 hover:border-[#0A66C2]/40"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://github.com/Growcell-IT-Architect"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-white/20 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all border border-slate-200 dark:border-white/10 hover:border-white/40"
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://x.com/Growcelldigital"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-white/20 hover:text-white text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all border border-slate-200 dark:border-white/10 hover:border-white/40"
                aria-label="X (formerly Twitter)"
              >
                <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/Growcell.in"
                target="_blank"
                rel="noreferrer"
                className="w-8 h-8 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-pink-500/20 hover:text-pink-500 text-slate-600 dark:text-slate-300 flex items-center justify-center transition-all border border-slate-200 dark:border-white/10 hover:border-pink-500/40"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* What We Do */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-cyan">
              What We Do
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/what-we-do" className="hover:text-cyan transition-colors">IT Consulting</Link></li>
              <li><Link href="/what-we-do" className="hover:text-cyan transition-colors">Software Engineering</Link></li>
              <li><Link href="/infrastructure" className="hover:text-cyan transition-colors">IT Infrastructure</Link></li>
              <li><Link href="/what-we-do" className="hover:text-cyan transition-colors">Digital Solutions</Link></li>
              <li><Link href="/infrastructure" className="hover:text-cyan transition-colors">Computer & Robotics Labs</Link></li>
              <li><Link href="/what-we-do" className="hover:text-cyan transition-colors">Digital Growth & SEO</Link></li>
            </ul>
          </div>

          {/* Solutions & Industries */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-blue-500 dark:text-blue-400">
              Solutions
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-600 dark:text-slate-400">
              <li><Link href="/solutions#erp" className="hover:text-cyan transition-colors">Enterprise ERP</Link></li>
              <li><Link href="/solutions#crm" className="hover:text-cyan transition-colors">Custom CRM</Link></li>
              <li><Link href="/solutions#hrms" className="hover:text-cyan transition-colors">HRMS Platform</Link></li>
              <li><Link href="/solutions#billing" className="hover:text-cyan transition-colors">Billing & POS</Link></li>
              <li><Link href="/solutions#education" className="hover:text-cyan transition-colors">School Management</Link></li>
              <li><Link href="/industries" className="hover:text-cyan transition-colors">Industry Solutions</Link></li>
            </ul>
          </div>

          {/* Company & Legal */}
          <div>
            <h4 className="font-bold text-sm tracking-wider uppercase mb-4 text-violet-500 dark:text-violet-400">
              Company
            </h4>
            <ul className="space-y-2.5 text-sm text-slate-400">
              <li><Link href="/about" className="hover:text-cyan transition-colors">About Growcell</Link></li>
              <li><Link href="/about#principles" className="hover:text-cyan transition-colors">Core Philosophy</Link></li>
              <li><Link href="/contact" className="hover:text-cyan transition-colors">Consultation</Link></li>
              <li><Link href="/contact" className="hover:text-cyan transition-colors">Support & Inquiries</Link></li>
            </ul>
          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-14 pt-8 border-t border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {new Date().getFullYear()} Growcell IT Architect. All rights reserved.</p>
          <div className="flex items-center gap-6">
            <span>Technology Partner for Growing Enterprises</span>
            <button
              onClick={scrollToTop}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-cyan hover:text-navy text-slate-700 dark:text-slate-300 font-semibold transition-all border border-slate-200 dark:border-white/10 cursor-pointer"
              aria-label="Scroll to top"
            >
              <span>Back to top</span>
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
