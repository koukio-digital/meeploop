'use client';

import React from 'react';
import Link from 'next/link';
import { Spotlight } from '@/components/ui/Spotlight';
import { CardSpotlight } from '@/components/ui/CardSpotlight';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { ShimmerButton } from '@/components/ui/ShimmerButton';
import { 
  Layers, 
  Users, 
  Receipt, 
  GraduationCap, 
  Globe, 
  Smartphone, 
  ArrowRight, 
  CheckCircle2, 
  Cpu,
  Sparkles
} from 'lucide-react';

export default function SolutionsPage() {
  const solutions = [
    {
      id: 'erp',
      icon: <Layers className="w-8 h-8 text-cyan" />,
      title: 'Custom Enterprise ERP Systems',
      tagline: 'Unify inventory, finance, procurement, and operations into one single source of truth.',
      description: 'Generic ERP software is often bloated, expensive, and rigid. GrowCell builds tailored ERP platforms mapped exactly to your company workflows, approval chains, and multi-location logistics.',
      features: [
        'Multi-warehouse real-time inventory management',
        'Automated accounts payable & receivable reporting',
        'Procurement workflows with multi-tiered approvals',
        'GST & tax compliant invoicing and ledger generation',
        'Executive business intelligence and cashflow analytics',
      ],
      idealFor: 'Manufacturing, Distributors, Wholesale Enterprises, Multi-Branch Retailers',
      spotlight: 'rgba(6, 182, 212, 0.2)',
    },
    {
      id: 'crm',
      icon: <Users className="w-8 h-8 text-blue-400" />,
      title: 'Tailored CRM & Sales Pipelines',
      tagline: 'Turn customer interactions into predictable revenue pipelines.',
      description: 'Track leads from initial inquiry through qualification, quotation, closing, and post-sale account management. Includes automated WhatsApp and email notifications for timely follow-ups.',
      features: [
        'Visual kanban sales pipelines with drag-and-drop stages',
        'Integrated WhatsApp, SMS, and email communication triggers',
        'Lead source attribution and conversion performance analytics',
        'Quotation generator with digital customer approval',
        'Client SLA tracking and ticketing resolution support',
      ],
      idealFor: 'B2B Companies, Professional Firms, Real Estate, Service Providers',
      spotlight: 'rgba(37, 99, 235, 0.2)',
    },
    {
      id: 'hrms',
      icon: <Cpu className="w-8 h-8 text-violet-400" />,
      title: 'Intelligent HRMS & Payroll Automation',
      tagline: 'Modernize employee onboarding, shift scheduling, and error-free payroll.',
      description: 'Streamline the entire employee lifecycle with self-service portals, biometric attendance integration, statutory tax compliance, and automated payroll slip delivery.',
      features: [
        'Biometric & geofenced mobile attendance logging',
        'Comprehensive leave policy management & approvals',
        'Automated payroll engine with tax, PF, and bonus rules',
        'Employee self-service portal for payslips and tax docs',
        'Performance appraisal milestones and objective tracking',
      ],
      idealFor: 'Mid-sized Companies, Educational Institutions, Multi-Shift Workforces',
      spotlight: 'rgba(139, 92, 246, 0.2)',
    },
    {
      id: 'billing',
      icon: <Receipt className="w-8 h-8 text-emerald-400" />,
      title: 'High-Speed Billing & POS Platforms',
      tagline: 'Lightning-fast counter checkout with offline sync resilience.',
      description: 'Whether managing a high-volume retail counter or a busy restaurant dining room, our POS and billing engines provide instant barcode scanning, receipt printing, and daily reconciliation.',
      features: [
        'Sub-second billing with keyboard shortcuts & barcode scanner',
        'Thermal printer integration and digital WhatsApp receipts',
        'Split billing, multiple payment tenders, and store credit',
        'Real-time low-stock alerts and automatic purchase triggers',
        'End-of-day cash drawer audit and cashier performance logs',
      ],
      idealFor: 'Retail Stores, Supermarkets, Restaurants, Boutiques, Hardware Shops',
      spotlight: 'rgba(16, 185, 129, 0.2)',
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-8 h-8 text-cyan" />,
      title: 'Complete School & Campus Management',
      tagline: 'Holistic digital administration for forward-thinking educational institutions.',
      description: 'Connect administrators, teachers, students, and parents into a single intuitive ecosystem handling admissions, fees, daily attendance, grade reports, and library books.',
      features: [
        'Student admission and digitized permanent records',
        'Online fee collection gateway with automated receipting',
        'Exam scheduling, report card generation, and grading curves',
        'RFID/Barcode library cataloging and fine management',
        'Parent communication portal with notification feeds',
      ],
      idealFor: 'K-12 Schools, Colleges, Universities, Training Institutes',
      spotlight: 'rgba(6, 182, 212, 0.2)',
    },
    {
      id: 'web',
      icon: <Globe className="w-8 h-8 text-blue-400" />,
      title: 'Enterprise Corporate Websites & Portals',
      tagline: 'Immersive digital presence engineered with Next.js 15 and Tailwind CSS.',
      description: 'We architect websites that don’t just look breathtaking—they load instantly, rank at the top of Google, and turn casual visitors into high-value qualified sales leads.',
      features: [
        'Built with cutting-edge Next.js for sub-second page loads',
        '100/100 Core Web Vitals score optimization for SEO supremacy',
        'Interactive forms, dynamic content management, and security',
        'Immersive animations with Framer Motion and modern UI design',
        'Full mobile, tablet, and ultra-wide display responsiveness',
      ],
      idealFor: 'Corporate Brands, Tech Companies, Professional Consultancies, Institutions',
      spotlight: 'rgba(37, 99, 235, 0.2)',
    },
    {
      id: 'mobile',
      icon: <Smartphone className="w-8 h-8 text-violet-400" />,
      title: 'Native & Cross-Platform Mobile Apps',
      tagline: 'Seamless iOS and Android applications built for user engagement.',
      description: 'Deliver rich, offline-first mobile applications that leverage device hardware, push notifications, and biometric authentication for internal staff or consumer customers.',
      features: [
        'High-performance React Native / Flutter cross-platform architecture',
        'Push notifications with personalized event triggers',
        'Offline data synchronization with local SQLite / WatermelonDB',
        'Biometric authentication (FaceID / Fingerprint login)',
        'App Store and Google Play deployment management',
      ],
      idealFor: 'Field Staff Operations, Customer Loyalty, On-demand Service Apps',
      spotlight: 'rgba(139, 92, 246, 0.2)',
    },
  ];

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Aceternity Spotlight Glowing Beam */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#06B6D4" />

      {/* Header Banner */}
      <BackgroundGrid variant="dots" className="pt-20 pb-16 relative z-10 border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5 text-cyan" />
            <span>Software Solutions Catalog</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Technology solutions for the <span className="text-gradient">way you work.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            Say goodbye to fragmented tools and manual spreadsheets. GrowCell develops integrated, tailor-made software solutions that run your core business with automated precision.
          </p>
        </div>
      </BackgroundGrid>

      {/* Solutions Grid with CardSpotlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-12 relative z-10">
        {solutions.map((sol) => (
          <CardSpotlight
            key={sol.id}
            id={sol.id}
            spotlightColor={sol.spotlight}
            className="p-8 sm:p-12 border border-slate-200 dark:border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    {sol.icon}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
                    {sol.title}
                  </h2>
                </div>
                <p className="text-sm font-semibold text-cyan">
                  {sol.tagline}
                </p>
                <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed">
                  {sol.description}
                </p>
                <div className="pt-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-1">
                    Ideal For:
                  </span>
                  <span className="text-xs font-semibold text-blue-600 dark:text-blue-300">
                    {sol.idealFor}
                  </span>
                </div>
                <div className="pt-4">
                  <ShimmerButton href="/contact" shimmerColor="#06B6D4">
                    <span>Request Demo & Pricing</span>
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </ShimmerButton>
                </div>
              </div>

              <div className="lg:col-span-6 bg-slate-100/90 dark:bg-[#0A0F1D]/80 p-6 sm:p-8 rounded-2xl border border-slate-200 dark:border-white/10 shadow-inner">
                <h3 className="text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-400 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan" />
                  <span>Key Module Highlights</span>
                </h3>
                <ul className="space-y-3.5">
                  {sol.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-3 text-sm text-slate-700 dark:text-slate-200">
                      <span className="w-1.5 h-1.5 rounded-full bg-cyan mt-2 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </CardSpotlight>
        ))}
      </div>

      {/* MEANINGFUL SECTION: Off-the-Shelf vs GrowCell Architecture Matrix */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-3.5 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-500 dark:text-violet-400 text-xs font-bold uppercase tracking-widest mb-3">
            Strategic Evaluation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-[var(--text-main)]">
            Off-the-Shelf Packages vs. Custom Architecture
          </h2>
          <p className="text-slate-600 dark:text-[var(--text-muted)] text-sm sm:text-base mt-2">
            Why high-growth enterprises transition away from generic commercial software.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse glass-panel rounded-2xl overflow-hidden">
            <thead>
              <tr className="border-b border-slate-200 dark:border-white/10 bg-slate-100 dark:bg-white/5 text-xs font-bold uppercase tracking-wider text-slate-700 dark:text-slate-400">
                <th className="p-5">Dimension</th>
                <th className="p-5 text-red-500 dark:text-red-400">Commercial Off-the-Shelf (COTS)</th>
                <th className="p-5 text-cyan">GrowCell Custom Architecture</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 dark:divide-white/5 text-xs sm:text-sm">
              {[
                {
                  dim: 'Software Ownership & IP',
                  cots: 'Rented indefinitely with recurring monthly per-user licenses',
                  growcell: '100% Owned by your enterprise with zero recurring seat taxes',
                },
                {
                  dim: 'Workflow Flexibility',
                  cots: 'Forces your operational teams to adapt to rigid vendor screens',
                  growcell: 'Engineered specifically around your exact operational & approval chains',
                },
                {
                  dim: 'Data Sovereignty & Storage',
                  cots: 'Stored on vendor multi-tenant cloud with limited direct SQL access',
                  growcell: 'Hosted on your private cloud or on-premise servers with total control',
                },
                {
                  dim: 'Scalability & Features',
                  cots: 'Pay steep tier upgrades for every new module or custom report',
                  growcell: 'Modular architecture allows free unlimited feature additions anytime',
                },
                {
                  dim: 'Hardware Integration',
                  cots: 'Often incompatible with custom factory scanners or campus hardware',
                  growcell: 'Direct integration with barcode printers, biometrics, and IoT sensors',
                },
              ].map((row) => (
                <tr key={row.dim} className="hover:bg-slate-50 dark:hover:bg-white/5 transition-colors">
                  <td className="p-5 font-bold text-slate-900 dark:text-[var(--text-main)]">{row.dim}</td>
                  <td className="p-5 text-slate-600 dark:text-slate-400">{row.cots}</td>
                  <td className="p-5 text-cyan font-semibold">{row.growcell}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* MEANINGFUL SECTION: Enterprise Security & Compliance Standards */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 dark:text-emerald-400 text-xs font-bold uppercase tracking-widest mb-3">
            Zero-Compromise Security
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 dark:text-[var(--text-main)]">
            Built for Regulatory & Data Compliance
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            {
              title: 'AES-256 Encryption',
              desc: 'End-to-end data encryption in transit via TLS 1.3 and at rest with encrypted volumes.',
            },
            {
              title: 'Role-Based Access (RBAC)',
              desc: 'Granular permissions restricting sensitive financial and employee data by user rank.',
            },
            {
              title: 'Hourly Point-in-Time Backups',
              desc: 'Automated snapshots with multi-region replication guaranteeing sub-15-minute RPO.',
            },
            {
              title: 'Complete Audit Trails',
              desc: 'Immutable logging of every user transaction, edit, and deletion for financial audits.',
            },
          ].map((sec) => (
            <CardSpotlight key={sec.title} className="p-6 border border-slate-200 dark:border-white/10" spotlightColor="rgba(16, 185, 129, 0.2)">
              <h4 className="text-base font-bold text-slate-900 dark:text-[var(--text-main)] mb-2">{sec.title}</h4>
              <p className="text-xs text-slate-600 dark:text-[var(--text-muted)] leading-relaxed">{sec.desc}</p>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </div>
  );
}
