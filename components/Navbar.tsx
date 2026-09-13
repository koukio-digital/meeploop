'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  ChevronDown, 
  Menu, 
  X, 
  Server, 
  Code, 
  Globe, 
  Cpu, 
  ArrowRight,
  Shield,
  Layers,
  Sparkles,
  PhoneCall
} from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaOpen(false);
    setMobileMenuOpen(false);
  }, [pathname]);

  // Lock body scroll when mobile menu is open to prevent sticking/glitches
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.touchAction = 'none';
    } else {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.touchAction = '';
    };
  }, [mobileMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'What We Do', href: '/what-we-do', hasMega: true },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Industries', href: '/industries' },
    { name: 'Infrastructure', href: '/infrastructure' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#0A0F1D]/90 backdrop-blur-xl border-b border-white/10 py-3 shadow-2xl' 
          : 'bg-gradient-to-b from-[#0A0F1D]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative h-10 w-36 sm:w-44 flex items-center">
              <Image 
                src="/img/logo.png" 
                alt="Growcell IT Architect" 
                width={176} 
                height={40} 
                className="object-contain filter brightness-110 drop-shadow"
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;

              if (link.hasMega) {
                return (
                  <div 
                    key={link.name} 
                    className="relative"
                    onMouseEnter={() => setMegaOpen(true)}
                    onMouseLeave={() => setMegaOpen(false)}
                  >
                    <Link
                      href={link.href}
                      className={`flex items-center gap-1.5 px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                        isActive 
                          ? 'text-cyan bg-cyan/10 font-semibold' 
                          : 'text-[var(--text-muted)] hover:text-[var(--text-main)] hover:bg-black/5 dark:hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180 text-cyan' : ''}`} />
                    </Link>

                    {/* Mega Menu Dropdown */}
                    {megaOpen && (
                      <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[850px] bg-[#0D1527] border border-cyan/20 rounded-2xl shadow-[0_25px_60px_-15px_rgba(0,0,0,0.95)] ring-1 ring-white/10 p-6 grid grid-cols-4 gap-6 animate-in fade-in slide-in-from-top-2 duration-200 text-white z-50 before:content-[''] before:absolute before:-top-2 before:left-0 before:right-0 before:h-2">
                        {/* Col 1 */}
                        <div>
                          <div className="flex items-center gap-2 text-cyan font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                            <Shield className="w-4 h-4 text-cyan" />
                            Consulting
                          </div>
                          <ul className="space-y-2.5">
                            <li><Link href="/what-we-do#consulting" className="text-sm text-slate-300 hover:text-cyan transition-colors block">IT Consulting</Link></li>
                            <li><Link href="/what-we-do#strategy" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Technology Strategy</Link></li>
                            <li><Link href="/what-we-do#transformation" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Digital Transformation</Link></li>
                            <li><Link href="/what-we-do#architecture" className="text-sm text-slate-300 hover:text-cyan transition-colors block">System Architecture</Link></li>
                          </ul>
                        </div>

                        {/* Col 2 */}
                        <div>
                          <div className="flex items-center gap-2 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                            <Code className="w-4 h-4 text-blue-400" />
                            Software
                          </div>
                          <ul className="space-y-2.5">
                            <li><Link href="/solutions#erp" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Enterprise ERP</Link></li>
                            <li><Link href="/solutions#crm" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Custom CRM</Link></li>
                            <li><Link href="/solutions#hrms" className="text-sm text-slate-300 hover:text-cyan transition-colors block">HRMS Solutions</Link></li>
                            <li><Link href="/solutions#billing" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Smart Billing Tech</Link></li>
                            <li><Link href="/solutions#custom" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Custom Business Apps</Link></li>
                          </ul>
                        </div>

                        {/* Col 3 */}
                        <div>
                          <div className="flex items-center gap-2 text-violet-400 font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                            <Globe className="w-4 h-4 text-violet-400" />
                            Digital
                          </div>
                          <ul className="space-y-2.5">
                            <li><Link href="/solutions#web" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Corporate Websites</Link></li>
                            <li><Link href="/solutions#mobile" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Mobile Apps (iOS/Android)</Link></li>
                            <li><Link href="/what-we-do#growth" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Search Engine Growth</Link></li>
                            <li><Link href="/what-we-do#growth" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Digital Presence Strategy</Link></li>
                          </ul>
                        </div>

                        {/* Col 4 */}
                        <div>
                          <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-4 pb-2 border-b border-white/10">
                            <Server className="w-4 h-4 text-emerald-400" />
                            Infrastructure
                          </div>
                          <ul className="space-y-2.5">
                            <li><Link href="/infrastructure#turnkey" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Turnkey Office IT</Link></li>
                            <li><Link href="/infrastructure#labs" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Computer Labs</Link></li>
                            <li><Link href="/infrastructure#robotics" className="text-sm text-slate-300 hover:text-cyan transition-colors block">STEM Robotics Labs</Link></li>
                            <li><Link href="/infrastructure#networking" className="text-sm text-slate-300 hover:text-cyan transition-colors block">Enterprise Networking</Link></li>
                          </ul>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  className={`px-3.5 py-2 text-sm font-medium rounded-lg transition-all ${
                    isActive 
                      ? 'text-cyan bg-cyan/10 font-semibold' 
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Action CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              href="/contact"
              prefetch={true}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl text-sm font-bold bg-gradient-to-r from-cyan to-blue-500 hover:from-white hover:to-white hover:text-navy text-navy shadow-lg shadow-cyan/25 transition-all duration-150 hover:scale-[1.02] active:scale-[0.98]"
            >
              <span>Let's Talk</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/5 active:bg-white/15 text-slate-200 hover:text-white border border-white/10 touch-manipulation cursor-pointer transition-all active:scale-95 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Navigation Menu' : 'Open Navigation Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-6 h-6 text-cyan" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Full-Screen Overlay Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-0 z-[100] bg-[#0A0F1D] flex flex-col justify-between animate-in fade-in duration-100 h-[100dvh]">
          {/* Drawer Top Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10 bg-[#0A0F1D]/90 backdrop-blur-md shrink-0">
            <Link 
              href="/" 
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center gap-3"
            >
              <div className="relative h-9 w-36">
                <Image 
                  src="/img/logo.png" 
                  alt="Growcell IT Architect" 
                  width={144} 
                  height={36} 
                  className="object-contain filter brightness-110" 
                  priority 
                />
              </div>
            </Link>

            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="w-11 h-11 flex items-center justify-center rounded-xl bg-white/10 active:bg-cyan/20 text-slate-200 active:text-cyan border border-white/10 touch-manipulation cursor-pointer transition-all active:scale-95 focus:outline-none"
              aria-label="Close Navigation Menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links Container */}
          <div className="flex-1 overflow-y-auto px-5 py-6 space-y-2 overscroll-contain">
            <div className="text-xs uppercase tracking-widest text-cyan font-bold mb-4 pb-2 border-b border-white/10">
              Navigation Menu
            </div>
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  prefetch={true}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between py-3.5 px-4 rounded-xl text-base font-semibold transition-all touch-manipulation active:scale-[0.98] ${
                    isActive 
                      ? 'bg-cyan/15 text-cyan border border-cyan/30 font-bold' 
                      : 'text-slate-200 hover:text-white active:bg-white/10 border border-transparent'
                  }`}
                >
                  <span>{link.name}</span>
                  <ArrowRight className={`w-4 h-4 ${isActive ? 'text-cyan' : 'opacity-40'}`} />
                </Link>
              );
            })}
          </div>

          {/* Drawer Footer CTA */}
          <div className="p-5 border-t border-white/10 bg-[#0D1527] shrink-0 space-y-3">
            <Link
              href="/contact"
              prefetch={true}
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-gradient-to-r from-cyan to-blue-500 text-navy font-bold text-base shadow-lg shadow-cyan/25 touch-manipulation active:scale-95 transition-transform"
            >
              <PhoneCall className="w-5 h-5" />
              <span>Let&apos;s Talk</span>
            </Link>
            <p className="text-center text-xs text-slate-400">
              Future-Ready IT Solutions for Growing Enterprises
            </p>
          </div>
        </div>
      )}
    </header>
  );
}
