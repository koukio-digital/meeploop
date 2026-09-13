import React from 'react';
import Link from 'next/link';
import { ArrowLeft, Home } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="inline-block px-4 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-mono font-bold tracking-widest uppercase">
          Error 404
        </div>
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white">
          Page Not Found
        </h1>
        <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">
          The architectural blueprint or page you are requesting could not be located. It may have moved or been decommissioned.
        </p>
        <div className="pt-4 flex items-center justify-center gap-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold bg-cyan text-navy hover:bg-slate-900 hover:text-white dark:hover:bg-white dark:hover:text-navy transition-all shadow-lg"
          >
            <Home className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-slate-300 dark:border-white/10 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-white/5 transition-all"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Contact Support</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
