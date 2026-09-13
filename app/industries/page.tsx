import React from 'react';
import Link from 'next/link';
import { 
  GraduationCap, 
  ShoppingCart, 
  UtensilsCrossed, 
  Briefcase, 
  Rocket, 
  Building2, 
  Landmark, 
  ArrowRight, 
  Check, 
  Sparkles 
} from 'lucide-react';

export const metadata = {
  title: 'Industry Solutions ',
  description: 'Tailored technology architectures for Education, Retail, Restaurants, Professional Services, Startups, SMEs, and Large Enterprises.',
};

export default function IndustriesPage() {
  const industries = [
    {
      id: 'education',
      icon: <GraduationCap className="w-8 h-8 text-cyan" />,
      name: 'Education & Institutional Academies',
      subtitle: 'Modernize administration while equipping campuses with modern tech laboratories.',
      challenge: 'Educational institutions frequently juggle disconnected paper processes, fragmented student records, delayed fee collection, and outdated computer hardware.',
      solution: 'GrowCell delivers a 360-degree edtech ecosystem: integrated School ERP (admissions, attendance, grading, fees), RFID library cataloging, turnkey computer laboratories, and STEM robotics learning centers with structured curricula.',
      deliverables: ['School Management ERP', 'Automated Fee Gateway', 'Turnkey 40-Seat Computer Labs', 'Robotics & STEM Lab Setup', 'Digital Notice Boards'],
    },
    {
      id: 'retail',
      icon: <ShoppingCart className="w-8 h-8 text-blue-400" />,
      name: 'Retail & Multi-Location Outlets',
      subtitle: 'High-speed checkout counters, centralized stock sync, and loyalty CRM.',
      challenge: 'Slow counter billing queues, stock discrepancies between warehouses and stores, and lack of real-time multi-branch profit visibility.',
      solution: 'Our retail billing POS combines barcode scanning, multi-tender payments, automatic GST tax filing, real-time inventory reorder triggers, and omnichannel CRM integration.',
      deliverables: ['Sub-Second POS Counter Checkout', 'Centralized Multi-Store Stock Sync', 'Customer Loyalty & WhatsApp Receipts', 'Barcode Label Printing Integration', 'Daily Cash Drawer Audits'],
    },
    {
      id: 'restaurants',
      icon: <UtensilsCrossed className="w-8 h-8 text-violet-400" />,
      name: 'Restaurants, Cafes & Food Services',
      subtitle: 'Streamline dining room orders, kitchen communication, and food costing.',
      challenge: 'Miscommunication between waiters and kitchen, table turnover delays, food wastage, and chaotic peak-hour order processing.',
      solution: 'GrowCell deploys intuitive Restaurant Billing Systems equipped with tablet-based table ordering, real-time Kitchen Display Systems (KDS), recipe ingredient consumption tracking, and integrated bill splitting.',
      deliverables: ['Touchscreen & Tablet Billing', 'Kitchen Display System (KDS)', 'Recipe-Level Ingredient Tracking', 'Captain / Waiter Ordering App', 'Aggregator Order Management'],
    },
    {
      id: 'professional-services',
      icon: <Briefcase className="w-8 h-8 text-emerald-400" />,
      name: 'Professional & Corporate Firms',
      subtitle: 'Secure client portals, automated billable hours, and corporate web presence.',
      challenge: 'Lost billable hours, insecure document transfers with clients, and outdated websites that fail to establish institutional credibility.',
      solution: 'We develop custom client CRMs, time tracking engines, automated invoicing, encrypted document vaults, and sleek Next.js corporate websites that project prestige and win high-ticket contracts.',
      deliverables: ['Custom CRM & Deal Pipeline', 'Encrypted Document Vault', 'Next.js Corporate Web Presence', 'Automated Retainer Invoicing', 'Client Consultation Booking'],
    },
    {
      id: 'startups',
      icon: <Rocket className="w-8 h-8 text-cyan" />,
      name: 'Startups & Emerging Tech Ventures',
      subtitle: 'Ship production-ready MVPs that validate product-market fit at breakneck speed.',
      challenge: 'High cost of internal engineering hires, slow development velocity, and fragile codebases that fail when traffic scales.',
      solution: 'GrowCell acts as your fractional CTO and engineering team, building scalable cloud architectures, high-converting Next.js web applications, and iOS/Android mobile platforms built on robust PostgreSQL/Node.js backends.',
      deliverables: ['Rapid 6-Week MVP Build', 'Scalable Cloud Infrastructure', 'Next.js Web Applications', 'Cross-Platform Mobile Apps', 'Analytics & Event Tracking'],
    },
    {
      id: 'smes',
      icon: <Building2 className="w-8 h-8 text-blue-400" />,
      name: 'Small & Medium Enterprises (SMEs)',
      subtitle: 'Eliminate manual operational chaos with custom business automation.',
      challenge: 'SMEs outgrow basic spreadsheets and WhatsApp communications but cannot afford massive multi-million dollar corporate software licenses.',
      solution: 'We build pragmatic, modular software and office IT infrastructure tailored precisely to your team’s headcount, budget, and daily operational reality.',
      deliverables: ['Custom Operations ERP', 'Employee HRMS & Biometrics', 'Office Network & Server Deployment', 'Automated WhatsApp Notifications', 'Vendor Purchase Workflows'],
    },
    {
      id: 'enterprises',
      icon: <Landmark className="w-8 h-8 text-violet-400" />,
      name: 'Large Enterprises & Public Institutions',
      subtitle: 'Modernize legacy core systems with enterprise security and high availability.',
      challenge: 'Fragile legacy code, security compliance vulnerabilities, and siloed data architectures across disparate regional departments.',
      solution: 'GrowCell engineers decoupled microservice architectures, enterprise data lakes, hybrid cloud networks, and role-based management portals adhering to stringent data governance.',
      deliverables: ['Legacy Architecture Modernization', 'Enterprise Data Integration & Lakes', 'High-Availability Server Clusters', 'Role-Based Access Control (RBAC)', 'Disaster Recovery & Redundancy'],
    },
  ];

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] py-16 sm:py-24 transition-colors duration-300">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-bold uppercase tracking-widest mb-4">
          Industry Verticals
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Architectures tailored to <span className="text-gradient">your industry reality.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          Technology isn't one-size-fits-all. Discover how GrowCell designs domain-specific solutions that resolve the unique challenges of your industry.
        </p>
      </div>

      {/* Industries Stack */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        {industries.map((ind, idx) => (
          <div
            key={ind.id}
            id={ind.id}
            className="glass-panel p-8 sm:p-12 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-cyan/40 transition-all duration-300"
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-4">
                <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                  {ind.icon}
                </div>
                <div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {ind.name}
                  </h2>
                  <p className="text-xs sm:text-sm font-semibold text-cyan mt-1">
                    {ind.subtitle}
                  </p>
                </div>
              </div>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold bg-slate-100 dark:bg-white/5 hover:bg-cyan hover:text-navy text-slate-800 dark:text-white border border-slate-200 dark:border-white/15 transition-all self-start lg:self-auto shadow-sm"
              >
                <span>Consult on {ind.name.split(' ')[0]}</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8 items-start">
              <div className="space-y-4">
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-red-500 dark:text-red-400 mb-1">
                    The Industry Bottleneck
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ind.challenge}
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-emerald-600 dark:text-emerald-400 mb-1">
                    GrowCell Architecture Solution
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {ind.solution}
                  </p>
                </div>
              </div>

              <div className="bg-slate-100/90 dark:bg-[#0A0F1D]/80 p-6 rounded-2xl border border-slate-200 dark:border-white/5">
                <h3 className="text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-400 mb-4">
                  Standard Implementation Modules
                </h3>
                <ul className="space-y-2.5">
                  {ind.deliverables.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-200">
                      <Check className="w-4 h-4 text-cyan shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
