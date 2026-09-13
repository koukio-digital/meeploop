import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  Target, 
  Compass, 
  Sparkles, 
  ArrowRight, 
  Check, 
  Cpu, 
  Layers, 
  Server, 
  Award 
} from 'lucide-react';

export const metadata = {
  title: 'About ',
  description: 'Learn about Growcell IT Architect: our engineering philosophy, mission, values, and how we empower enterprises with future-ready digital solutions.',
};

export default function AboutPage() {
  const principles = [
    {
      num: '01',
      title: 'Business First',
      desc: 'Technology is a lever to achieve business goals, not an end in itself. Every architecture blueprint we create begins with your operational KPIs and ROI targets.',
    },
    {
      num: '02',
      title: 'Architect Before Building',
      desc: 'Writing code without system design creates unmaintainable technical debt. We rigorously model data flows, security boundaries, and scaling bottlenecks before implementation.',
    },
    {
      num: '03',
      title: 'Deeply Customized',
      desc: 'Your business has unique competitive advantages. Our custom ERP, CRM, and digital platforms adapt to your strengths rather than forcing generic compromises.',
    },
    {
      num: '04',
      title: 'Engineered to Scale',
      desc: 'We build for where your enterprise will be in 5 years. Our systems handle 10x spikes in transaction volumes, database records, and concurrent users seamlessly.',
    },
    {
      num: '05',
      title: 'Practical & Maintainable',
      desc: 'We favor clean, readable code and industry-standard frameworks over fragile experimental libraries. Your technology remains understandable and cost-effective to maintain.',
    },
    {
      num: '06',
      title: 'Long-Term Partnership',
      desc: 'We don&apos;t just deploy and disappear. We act as your long-term technology architect, monitoring performance, training teams, and rolling out continuous upgrades.',
    },
  ];

  return (
    <div className="bg-[var(--bg-main)] text-[var(--text-main)] py-16 sm:py-24 transition-colors duration-300">
      {/* Header Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
        <span className="inline-block px-3 py-1 rounded-full bg-cyan/10 text-cyan text-xs font-bold uppercase tracking-widest mb-4">
          About GrowCell
        </span>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-6">
          Architecting the future of <span className="text-gradient">enterprise technology.</span>
        </h1>
        <p className="text-slate-600 dark:text-slate-300 text-lg max-w-3xl mx-auto leading-relaxed">
          GrowCell IT Architect bridges the critical gap between executive business strategy and deep technical execution.
        </p>
      </div>

      {/* Story & Mission Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="glass-panel p-8 sm:p-14 rounded-3xl border border-slate-200 dark:border-white/10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center shadow-sm dark:shadow-none">
          <div className="space-y-6">
            <span className="text-xs font-mono font-bold text-cyan uppercase tracking-widest">
              Our Origin & Purpose
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 dark:text-white leading-tight">
              Why GrowCell exists in a world of cookie-cutter software.
            </h2>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              Growing companies routinely face a difficult dilemma: expensive, rigid off-the-shelf software packages that don&apos;t fit their workflows, or fragmented ad-hoc contractors who don&apos;t understand architectural scalability.
            </p>
            <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              GrowCell was established to provide true <strong className="text-slate-900 dark:text-white">IT Architecture as a Service</strong>. We combine high-level advisory with hands-on software development and turnkey hardware infrastructure deployment. Whether setting up a 100-seat school computer lab or engineering an enterprise ERP, we engineer solutions with precision.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200 dark:border-white/10">
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-cyan font-display">100%</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Tailored Architecture</p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-extrabold text-blue-500 dark:text-blue-400 font-display">Full-Stack</span>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">Hardware + Software + Cloud</p>
              </div>
            </div>
          </div>

          <div className="relative h-96 rounded-2xl overflow-hidden border border-slate-200 dark:border-white/10 shadow-md dark:shadow-none">
            <Image
              src="/img/carousel_1.jpg"
              alt="Enterprise IT Architecture Command Center"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-900/80 backdrop-blur-md border border-white/10 text-white">
              <p className="text-xs italic text-slate-200">
                &ldquo;Technology should bend to support the unique strengths of your business—not the other way around.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Core Principles */}
      <div id="principles" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="inline-block px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 dark:text-blue-400 text-xs font-bold uppercase tracking-widest mb-4">
            Architectural Tenets
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Core Engineering Principles That Guide Every Solution
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {principles.map((pr) => (
            <div
              key={pr.num}
              className="glass-panel p-8 rounded-3xl border border-slate-200 dark:border-white/10 hover:border-cyan/40 transition-all flex flex-col justify-between shadow-sm dark:shadow-none"
            >
              <div>
                <span className="text-3xl font-extrabold text-cyan/50 font-mono block mb-4">
                  {pr.num}
                </span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                  {pr.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {pr.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Box */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="glass-panel p-10 sm:p-14 rounded-3xl border border-slate-200 dark:border-cyan/30 text-center shadow-lg dark:shadow-none">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mb-4">
            Partner with an IT Architect Who Cares About Your Growth
          </h2>
          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-xl mx-auto mb-8">
            Tell us about your operational challenges or expansion plans. Let&apos;s create a technology foundation that scales effortlessly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan to-blue-500 text-navy hover:from-slate-900 hover:to-slate-900 hover:text-white dark:hover:from-white dark:hover:to-white dark:hover:text-navy shadow-lg"
          >
            <span>Start a Conversation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
