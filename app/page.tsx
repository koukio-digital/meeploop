'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import HeroCarousel from '@/components/HeroCarousel';
import { CardSpotlight } from '@/components/ui/CardSpotlight';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { ShimmerButton } from '@/components/ui/ShimmerButton';
import { 
  ArrowRight, 
  CheckCircle2, 
  ChevronRight, 
  Clock,
  Star,
  Calculator
} from 'lucide-react';

export default function HomePage() {
  const [activeIndustry, setActiveIndustry] = useState(0);
  
  // Interactive Project Estimator State
  const [estService, setEstService] = useState<'erp' | 'lab' | 'web' | 'infra'>('erp');
  const [estScale, setEstScale] = useState<'sm' | 'md' | 'lg'>('md');

  const industries = [
    { 
      name: 'Education', 
      icon: '🎓', 
      desc: 'School ERP, student management, library systems, digital classrooms, computer labs, and robotics labs — end-to-end technology infrastructure for institutions.', 
      tags: ['School ERP', 'Student Records', 'Library Systems', 'Web Portals', 'Computer Labs', 'Robotics Labs'] 
    },
    { 
      name: 'Retail', 
      icon: '🛒', 
      desc: 'High-speed POS billing, multi-store inventory sync, customer CRM, and business workflow automation designed to accelerate retail throughput.', 
      tags: ['Billing & POS', 'Inventory Management', 'Loyalty CRM', 'Financial Reporting', 'Barcode Integration'] 
    },
    { 
      name: 'Restaurants', 
      icon: '🍽️', 
      desc: 'Smart restaurant billing, kitchen display systems (KDS), table management, inventory consumption, and multi-location analytics.', 
      tags: ['Table Ordering', 'Kitchen Display', 'Recipe Costing', 'Multi-Outlet Sync', 'Staff Tracking'] 
    },
    { 
      name: 'Professional Services', 
      icon: '💼', 
      desc: 'Client CRM, billing automation, document workflows, and corporate web platforms tailored for legal, accounting, and consulting firms.', 
      tags: ['Client CRM', 'Time Tracking', 'Invoicing Automation', 'Secure Storage', 'Client Portal'] 
    },
    { 
      name: 'Startups', 
      icon: '🚀', 
      desc: 'MVP product engineering, scalable cloud architecture, modern Next.js websites, and mobile apps built to impress investors and acquire customers.', 
      tags: ['Rapid MVP', 'Next.js & React', 'Cloud Native', 'API Integration', 'Growth Analytics'] 
    },
    { 
      name: 'SMEs', 
      icon: '🏢', 
      desc: 'Custom ERP, HRMS, office networking, and digital operations engineered to streamline fragmented small-to-medium enterprise workflows.', 
      tags: ['Operations ERP', 'HRMS & Payroll', 'Office Networking', 'Custom Automations', 'Vendor Management'] 
    },
    { 
      name: 'Enterprises', 
      icon: '🏛️', 
      desc: 'Enterprise software modernization, high-availability data infrastructure, security compliance, and comprehensive technology roadmapping.', 
      tags: ['Legacy Modernization', 'Data Lakes', 'Enterprise Security', 'Multi-Cloud', 'Bespoke Platforms'] 
    }
  ];

  const currentInd = industries[activeIndustry];

  // Estimator Calculations
  const estimates = {
    erp: {
      sm: { time: '4–6 Weeks', phase: 'Core Modules (Finance + Inventory + Billing)', deliverable: 'Custom ERP + Training + 1 Year SLA' },
      md: { time: '8–12 Weeks', phase: 'Full ERP (Finance, CRM, HRMS, Multi-Store, Procurement)', deliverable: 'Custom ERP + Cloud Cluster + Mobile App' },
      lg: { time: '14–20 Weeks', phase: 'Enterprise Suite (Multi-Company, Data Lake, Custom APIs)', deliverable: 'Enterprise Custom ERP + On-premise Failover + 24/7 SLA' },
    },
    lab: {
      sm: { time: '2–3 Weeks', phase: '20-Seat Computer Lab + Networking', deliverable: '20 Workstations + Gigabit Cabling + Teacher Control' },
      md: { time: '3–5 Weeks', phase: '40-Seat Computer Lab + STEM Robotics Suite', deliverable: '40 Workstations + 15 Robotics Kits + 3D Printer' },
      lg: { time: '6–8 Weeks', phase: '100-Seat Campus Lab + Dedicated Innovation Center', deliverable: '100 Workstations + Dual Server Setup + Advanced Robotics' },
    },
    web: {
      sm: { time: '2–3 Weeks', phase: 'Next.js Corporate Platform + SEO', deliverable: 'Ultra-fast Next.js Site + CMS + 100/100 Lighthouse' },
      md: { time: '4–6 Weeks', phase: 'Full Digital Platform + Client Portal', deliverable: 'Corporate Web + Authenticated Customer Portal + APIs' },
      lg: { time: '8–10 Weeks', phase: 'Web Platform + Native iOS & Android Apps', deliverable: 'Next.js Enterprise Portal + React Native Mobile Apps' },
    },
    infra: {
      sm: { time: '1–2 Weeks', phase: 'Turnkey Office Network (Up to 30 Desks)', deliverable: 'Cat6 Cabling + Wi-Fi 6 + Firewall + Rack' },
      md: { time: '3–4 Weeks', phase: 'Multi-Floor Office Setup (Up to 100 Desks)', deliverable: 'Fiber Uplinks + Server Rack + CCTV + Biometrics' },
      lg: { time: '5–7 Weeks', phase: 'Campus IT Infrastructure & Data Room', deliverable: 'Redundant Server Clusters + 10Gbps Core + Site-to-Site VPN' },
    },
  };

  const currentEst = estimates[estService][estScale];

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] transition-colors duration-300">
      {/* 1. HERO CAROUSEL */}
      <HeroCarousel />

      {/* 2. KEY IMPACT METRICS BAR (NEW MEANINGFUL SECTION) */}
      <section className="relative z-20 -mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="glass-panel rounded-2xl p-6 sm:p-8 grid grid-cols-2 md:grid-cols-4 gap-6 text-center border border-white/10 shadow-2xl">
          <div className="space-y-1">
            <div className="text-3xl sm:text-4xl font-extrabold text-gradient font-display">99.99%</div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-muted)]">Enterprise System Uptime</div>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-4 sm:pl-6">
            <div className="text-3xl sm:text-4xl font-extrabold text-cyan font-display">65+</div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-muted)]">Educational Labs Deployed</div>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-4 sm:pl-6">
            <div className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-display">~1.7k+</div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-muted)]">Daily Website Visitors</div>
          </div>
          <div className="space-y-1 border-l border-white/10 pl-4 sm:pl-6">
            <div className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-display">3.8x</div>
            <div className="text-xs sm:text-sm font-semibold text-[var(--text-muted)]">Client Operational Throughput</div>
          </div>
        </div>
      </section>

      {/* 3. WHO WE ARE & FLOW */}
      <BackgroundGrid variant="dots" className="py-20 lg:py-28 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-widest mb-4">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              We solve technology challenges with business in mind.
            </h2>
            <p className="text-[var(--text-muted)] text-base sm:text-lg mt-4 leading-relaxed">
              Growcell IT Architect works with forward-thinking organizations to translate operational friction into scalable, elegant, and future-ready technology architectures.
            </p>
          </div>

          {/* Workflow Sequence */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { step: '01', title: 'Consulting', desc: 'Strategy & Analysis' },
              { step: '02', title: 'Architecture', desc: 'System Blueprints' },
              { step: '03', title: 'Development', desc: 'Custom Software' },
              { step: '04', title: 'Infrastructure', desc: 'Servers & Networks' },
              { step: '05', title: 'Deployment', desc: 'Testing & Rollout' },
              { step: '06', title: 'Support', desc: 'Scale & Optimization' },
            ].map((item) => (
              <CardSpotlight 
                key={item.step}
                className="p-5 border border-white/10 hover:border-cyan/40 group"
              >
                <span className="text-xs font-mono text-cyan font-bold block mb-2">{item.step}</span>
                <h4 className="text-base font-bold group-hover:text-cyan transition-colors">{item.title}</h4>
                <p className="text-xs text-[var(--text-muted)] mt-1">{item.desc}</p>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </BackgroundGrid>

      {/* 4. WHAT WE DO */}
      <BackgroundGrid variant="grid" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="inline-block px-3.5 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-widest mb-4">
                What We Do
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
                What We Do for Growing Enterprises
              </h2>
              <p className="text-[var(--text-muted)] mt-2 max-w-xl text-sm sm:text-base">
                Engineered to help organizations plan, build, and deploy high-performance solutions.
              </p>
            </div>
            <Link
              href="/what-we-do"
              className="inline-flex items-center gap-2 text-cyan hover:underline font-semibold text-sm transition-colors self-start md:self-auto"
            >
              <span>Explore What We Do</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                num: '01',
                title: 'IT Consulting & Architecture',
                desc: 'High-level technology roadmap design, digital transformation advisory, cloud evaluation, and enterprise system architecture.',
                link: '/what-we-do#consulting',
              },
              {
                num: '02',
                title: 'Software Engineering',
                desc: 'Tailor-made ERP, CRM, HRMS, billing, and automated business software engineered specifically around your organizational workflows.',
                link: '/solutions',
              },
              {
                num: '03',
                title: 'Digital Engineering',
                desc: 'Ultra-fast corporate websites, client portals, and iOS/Android applications that reinforce brand authority and capture demand.',
                link: '/solutions#web',
              },
              {
                num: '04',
                title: 'IT Infrastructure & Setup',
                desc: 'Comprehensive workplace IT planning, high-bandwidth structured cabling, enterprise server racks, and device deployment.',
                link: '/infrastructure',
              },
              {
                num: '05',
                title: 'Education Technology & Labs',
                desc: 'School ERP ecosystems, student information systems, and turnkey STEM robotics and computer lab setups for institutions.',
                link: '/infrastructure#labs',
              },
              {
                num: '06',
                title: 'Digital Growth & Search',
                desc: 'Technical SEO optimization, content architecture, and digital presence strategies that generate measurable qualified leads.',
                link: '/what-we-do#growth',
              },
            ].map((item) => (
              <Link key={item.num} href={item.link}>
                <CardSpotlight className="p-8 h-full flex flex-col justify-between group border border-white/10 hover:border-cyan/50">
                  <div>
                    <span className="text-4xl font-extrabold text-cyan/20 group-hover:text-cyan/40 transition-colors font-display block mb-4">
                      {item.num}
                    </span>
                    <h3 className="text-xl font-bold group-hover:text-cyan transition-colors mb-3">
                      {item.title}
                    </h3>
                    <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-bold text-cyan group-hover:translate-x-1 transition-transform">
                    <span>Learn more</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </CardSpotlight>
              </Link>
            ))}
          </div>
        </div>
      </BackgroundGrid>

      {/* 5. INTERACTIVE PROJECT ESTIMATOR (NEW MEANINGFUL SECTION) */}
      <section className="py-24 bg-[var(--bg-secondary)] border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <span className="inline-block px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
              <Calculator className="w-3.5 h-3.5 inline mr-1" />
              Scope & Timeline Estimator
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Plan Your Technology Architecture
            </h2>
            <p className="text-[var(--text-muted)] text-sm sm:text-base mt-3">
              Select your required domain and operational scale to view typical delivery timelines and key architectural milestones.
            </p>
          </div>

          <CardSpotlight className="p-8 sm:p-12 max-w-4xl mx-auto border border-white/10" spotlightColor="rgba(37, 99, 235, 0.2)">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              {/* Service Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[var(--text-muted)] mb-3">
                  1. Select Solution Domain
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'erp', label: 'Custom ERP / CRM' },
                    { id: 'lab', label: 'Computer / Robotics Lab' },
                    { id: 'web', label: 'Web Platform & App' },
                    { id: 'infra', label: 'Office IT & Server Rack' },
                  ].map((s) => (
                    <button
                      key={s.id}
                      onClick={() => setEstService(s.id as any)}
                      className={`p-3 rounded-xl text-xs font-bold transition-all text-left ${
                        estService === s.id
                          ? 'bg-cyan text-navy shadow-md'
                          : 'bg-white/5 text-[var(--text-muted)] hover:bg-white/10'
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Scale Selection */}
              <div>
                <label className="block text-xs uppercase tracking-wider font-bold text-[var(--text-muted)] mb-3">
                  2. Operational Scale
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { id: 'sm', label: 'Core / Startup', sub: 'Essential setup' },
                    { id: 'md', label: 'Growing SME', sub: 'Standard suite' },
                    { id: 'lg', label: 'Enterprise', sub: 'Multi-branch' },
                  ].map((sc) => (
                    <button
                      key={sc.id}
                      onClick={() => setEstScale(sc.id as any)}
                      className={`p-3 rounded-xl text-xs font-bold transition-all text-center ${
                        estScale === sc.id
                          ? 'bg-blue-600 text-white shadow-md'
                          : 'bg-white/5 text-[var(--text-muted)] hover:bg-white/10'
                      }`}
                    >
                      <div>{sc.label}</div>
                      <div className="text-[10px] opacity-75 font-normal">{sc.sub}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Estimated Output Result */}
            <div className="p-6 rounded-2xl bg-slate-100 dark:bg-[#0A0F1D] border border-slate-200 dark:border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
              <div>
                <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 block mb-1">Estimated Timeline</span>
                <div className="text-2xl font-extrabold text-cyan font-display flex items-center gap-1.5">
                  <Clock className="w-5 h-5" />
                  <span>{currentEst.time}</span>
                </div>
              </div>
              <div className="sm:col-span-2">
                <span className="text-xs uppercase font-bold text-slate-500 dark:text-slate-400 block mb-1">Primary Scope & Architecture</span>
                <p className="text-sm font-semibold text-slate-900 dark:text-white mb-1">{currentEst.phase}</p>
                <p className="text-xs text-slate-600 dark:text-slate-400">Included: {currentEst.deliverable}</p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <ShimmerButton href="/contact" shimmerColor="#06B6D4">
                <span>Request Formal Proposal for This Scope</span>
                <ArrowRight className="w-4 h-4 ml-1" />
              </ShimmerButton>
            </div>
          </CardSpotlight>
        </div>
      </section>

      {/* 8. CLIENT TESTIMONIALS (NEW MEANINGFUL SECTION) */}
      <BackgroundGrid variant="grid" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="inline-block px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-500 dark:text-amber-400 text-xs font-bold uppercase tracking-widest mb-4">
              Client Feedback
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              Trusted by Managing Directors & Educators
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Growcell built an ERP that fits our wholesale operations like a glove. We stopped bleeding inventory and our accountants finally have real-time reconciliation.",
                name: "Rajveer Singh",
                role: "Managing Director, Apex Supplies Pvt ltd ",
                rating: 5,
              },
              {
                quote: "The 50-seat robotics lab setup was delivered ahead of schedule. Growcell trained our teachers and the student engagement has been extraordinary.",
                name: "Dr. Ananya Sharma",
                role: "Academic Director, Shreeji International School ,HR",
                rating: 5,
              },
              {
                quote: "Their full-stack infrastructure team wired our entire 3-story headquarters with Cat6A and enterprise servers without disrupting a single work hour.",
                name: "Vikram ",
                role: "VP of Operations, webocore Solutions pvt ltd",
                rating: 5,
              },
            ].map((t) => (
              <CardSpotlight key={t.name} className="p-8 border border-slate-200 dark:border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-amber-400 mb-4">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-sm italic text-slate-600 dark:text-[var(--text-muted)] leading-relaxed mb-6">
                    "{t.quote}"
                  </p>
                </div>
                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <div className="font-bold text-sm text-slate-900 dark:text-[var(--text-main)]">{t.name}</div>
                  <div className="text-xs text-cyan">{t.role}</div>
                </div>
              </CardSpotlight>
            ))}
          </div>
        </div>
      </BackgroundGrid>

      {/* 9. CALL TO ACTION SECTION */}
      <section className="py-24 bg-gradient-to-b from-slate-100 to-slate-200 dark:from-[#0A0F1D] dark:to-[#0D1527] border-t border-slate-200 dark:border-white/10 relative overflow-hidden text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-4">
            Have a technology challenge to solve?
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-2xl mx-auto mb-8">
            Let’s discuss what you want to automate, modernize, build, or deploy. Our team of software and infrastructure architects is ready to assist.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <ShimmerButton href="/contact" shimmerColor="#06B6D4">
              <span>Start a Conversation</span>
              <ArrowRight className="w-4 h-4 ml-1" />
            </ShimmerButton>

            <Link
              href="/what-we-do"
              className="px-8 py-3.5 rounded-xl font-semibold text-sm text-slate-800 dark:text-white bg-white dark:bg-white/5 hover:bg-slate-50 dark:hover:bg-white/10 border border-slate-300 dark:border-white/20 hover:border-cyan transition-all shadow-sm"
            >
              Explore What We Do
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
