'use client';

import React from 'react';
import Link from 'next/link';
import { Spotlight } from '@/components/ui/Spotlight';
import { CardSpotlight } from '@/components/ui/CardSpotlight';
import { BackgroundGrid } from '@/components/ui/BackgroundGrid';
import { ShimmerButton } from '@/components/ui/ShimmerButton';
import { 
  ShieldCheck, 
  Code2, 
  Globe, 
  Server, 
  GraduationCap, 
  TrendingUp, 
  ArrowRight, 
  Check, 
  Sparkles 
} from 'lucide-react';

export default function WhatWeDoPage() {
  const domains = [
    {
      id: 'consulting',
      icon: <ShieldCheck className="w-8 h-8 text-cyan" />,
      title: 'IT Consulting & Technology Strategy',
      subtitle: 'Strategic alignment between organizational vision and technical infrastructure.',
      description: 'We help leadership teams audit legacy systems, eliminate architectural bottlenecks, plan cloud migrations, and establish scalable technology roadmaps that de-risk long-term operational expansion.',
      deliverables: [
        'Comprehensive IT Infrastructure & Software Audits',
        'Digital Transformation Roadmapping',
        'Cloud & Enterprise Architecture Planning',
        'Cybersecurity & Regulatory Compliance Review',
        'Vendor Evaluation & Technology Procurement Advisory',
      ],
      tech: ['Cloud Architecture', 'AWS / Azure / GCP', 'Microservices', 'API Strategy'],
      spotlight: 'rgba(6, 182, 212, 0.2)',
    },
    {
      id: 'software',
      icon: <Code2 className="w-8 h-8 text-blue-400" />,
      title: 'Custom Software & Enterprise Systems',
      subtitle: 'Bespoke platforms engineered around your company’s unique workflows.',
      description: 'Off-the-shelf software rarely fits intricate business processes. We engineer custom ERP, CRM, HRMS, billing platforms, and automated workflow engines that consolidate fragmented data into intuitive control dashboards.',
      deliverables: [
        'Enterprise Resource Planning (ERP) Modules',
        'Custom CRM & Lead Pipeline Systems',
        'Human Resource Management (HRMS & Payroll)',
        'Automated Invoicing & POS Billing Engines',
        'Role-Based Secure Business Portals',
      ],
      tech: ['Next.js', 'React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Docker'],
      spotlight: 'rgba(37, 99, 235, 0.2)',
    },
    {
      id: 'digital',
      icon: <Globe className="w-8 h-8 text-violet-400" />,
      title: 'Digital Engineering & Mobile Platforms',
      subtitle: 'High-performance digital presence and cross-platform native experiences.',
      description: 'We design and build ultra-responsive corporate websites, interactive customer portals, and native iOS & Android applications that captivate users and automate customer onboarding.',
      deliverables: [
        'Corporate Websites with CMS Architecture',
        'Progressive Web Applications (PWA)',
        'Cross-Platform iOS & Android Mobile Apps',
        'Customer Portals with Secure Authentication',
        'Third-Party Payment & Communication APIs',
      ],
      tech: ['Next.js 15', 'Tailwind CSS', 'React Native', 'Flutter', 'REST & GraphQL'],
      spotlight: 'rgba(139, 92, 246, 0.2)',
    },
    {
      id: 'infrastructure',
      icon: <Server className="w-8 h-8 text-emerald-400" />,
      title: 'IT Infrastructure & Network Engineering',
      subtitle: 'Mission-critical hardware deployment and enterprise networking.',
      description: 'From clean-slate office fit-outs to enterprise server clusters, we design, deploy, and maintain the physical and network infrastructure required for zero-downtime day-to-day operations.',
      deliverables: [
        'Structured Cabling, LAN, WAN & Fiber Optic Backbones',
        'High-Density Commercial Wi-Fi Deployment',
        'On-Premise & Hybrid Server Rack Installations',
        'Workstation & Device Provisioning at Scale',
        'Network Firewalls, VPNs & Endpoint Security',
      ],
      tech: ['Cisco', 'Ubiquiti', 'Dell Enterprise', 'PFSense', 'Synology NAS'],
      spotlight: 'rgba(16, 185, 129, 0.2)',
    },
    {
      id: 'education',
      icon: <GraduationCap className="w-8 h-8 text-cyan" />,
      title: 'Education Technology & STEM Robotics Labs',
      subtitle: 'Modern digital ecosystems and state-of-the-art laboratory facilities.',
      description: 'We partner with schools, universities, and training academies to modernize educational administration while equipping campuses with turnkey computer labs and robotics learning centers.',
      deliverables: [
        'School & College ERP Management Platforms',
        'Automated Student Attendance & Fee Portals',
        'Turnkey Computer Laboratory Setup & Networking',
        'STEM & Robotics Lab Installations with Kits',
        'Library Management & RFID Cataloging Systems',
      ],
      tech: ['EdTech ERP', 'Robotics STEM Kits', 'IoT Microcontrollers', 'Thin Client Labs'],
      spotlight: 'rgba(6, 182, 212, 0.2)',
    },
    {
      id: 'growth',
      icon: <TrendingUp className="w-8 h-8 text-blue-400" />,
      title: 'Digital Solutions & Enterprise Search Growth',
      subtitle: 'Engineered search visibility and high-converting funnel infrastructure.',
      description: 'Technical SEO, Core Web Vitals optimization, and enterprise search visibility built into the foundation of your digital applications rather than treated as a marketing afterthought.',
      deliverables: [
        '100/100 Google Lighthouse Technical Architecture',
        'Semantic Schema & Structured Data Engineering',
        'Conversion Funnel Instrumentation & Analytics',
        'Server-Side Rendering (SSR) & Dynamic OpenGraph',
        'Enterprise Security & DDoS Mitigation',
      ],
      tech: ['Technical SEO', 'Schema.org', 'Cloudflare', 'Google Analytics 4', 'Lighthouse'],
      spotlight: 'rgba(37, 99, 235, 0.2)',
    },
  ];

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen relative overflow-hidden transition-colors duration-300">
      {/* Aceternity Spotlight Glowing Beam */}
      <Spotlight className="-top-40 left-0 md:left-60 md:-top-20" fill="#3B82F6" />

      {/* Header Banner */}
      <BackgroundGrid variant="dots" className="pt-20 pb-16 relative z-10 border-b border-slate-200 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan/10 border border-cyan/20 text-cyan text-xs font-bold uppercase tracking-widest mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>What We Do</span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
            Architectural depth for <span className="text-gradient">growing enterprises.</span>
          </h1>
          <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
            From strategic IT roadmaps and custom enterprise software to turnkey data centers and STEM robotics laboratories, discover our complete engineering suite.
          </p>
        </div>
      </BackgroundGrid>

      {/* Domains List with CardSpotlight */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 space-y-16 relative z-10">
        {domains.map((domain, index) => (
          <CardSpotlight
            key={domain.id}
            id={domain.id}
            spotlightColor={domain.spotlight}
            className="p-8 sm:p-12 border border-slate-200 dark:border-white/10"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              {/* Left Column */}
              <div className="lg:col-span-5 space-y-5">
                <div className="flex items-center gap-3">
                  <div className="p-3.5 rounded-2xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                    {domain.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-cyan uppercase tracking-wider">
                    Engineering Domain 0{index + 1}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight">
                  {domain.title}
                </h2>

                <p className="text-sm font-semibold text-cyan">
                  {domain.subtitle}
                </p>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {domain.description}
                </p>

                <div className="pt-2">
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan hover:underline group"
                  >
                    <span>Consult on this domain</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Right Column */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-400 mb-4">
                    Key Deliverables & Architectural Modules
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {domain.deliverables.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-xs text-slate-700 dark:text-slate-300"
                      >
                        <Check className="w-4 h-4 text-cyan shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200 dark:border-white/10">
                  <h3 className="text-xs uppercase tracking-wider font-bold text-slate-700 dark:text-slate-400 mb-3">
                    Core Technologies & Standards
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {domain.tech.map((t) => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-cyan shadow-sm dark:shadow-none">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </CardSpotlight>
        ))}
      </div>

      {/* Bottom CTA with Aceternity CardSpotlight */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-24 text-center relative z-10">
        <CardSpotlight className="p-10 sm:p-14 border border-slate-200 dark:border-cyan/30 text-center" spotlightColor="rgba(6, 182, 212, 0.25)">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3">
            Need a customized technology architecture?
          </h2>
          <p className="text-sm text-slate-600 dark:text-slate-400 max-w-xl mx-auto mb-8">
            We frequently assemble hybrid teams that handle software development, network infrastructure, and ongoing consulting simultaneously.
          </p>
          <ShimmerButton href="/contact" shimmerColor="#3B82F6">
            <span>Book Architectural Consultation</span>
            <ArrowRight className="w-4 h-4 ml-1" />
          </ShimmerButton>
        </CardSpotlight>
      </div>
    </div>
  );
}
