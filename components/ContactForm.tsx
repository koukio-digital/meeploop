'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Send, Check, CheckCircle2, AlertCircle, Loader2, RotateCcw } from 'lucide-react';

export default function ContactForm() {
  const isSubmittingRef = useRef(false);

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    consent: false,
  });

  const [submittedData, setSubmittedData] = useState<{
    name: string;
    email: string;
    service: string;
    timestamp: string;
  } | null>(null);

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [countdown, setCountdown] = useState(5);

  // Auto-reset form 5 seconds after successful submission
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;

    if (status === 'success') {
      setCountdown(5);

      interval = setInterval(() => {
        setCountdown((prev) => (prev > 1 ? prev - 1 : 1));
      }, 1000);

      timer = setTimeout(() => {
        handleReset();
      }, 5000);
    }

    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [status]);

  const services = [
    'IT Consulting & Architecture',
    'Custom ERP Development',
    'CRM & Business Automation',
    'HRMS Platform',
    'Billing & POS Software',
    'Enterprise Website Development',
    'Mobile Application (iOS / Android)',
    'School & Education Management System',
    'Turnkey IT Infrastructure Setup',
    'Computer Lab Setup',
    'Robotics & STEM Lab Setup',
    'Search Engine & Digital Growth',
    'Other Custom Solution',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData((prev) => ({ ...prev, [name]: checked }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleReset = () => {
    isSubmittingRef.current = false;
    setFormData({
      name: '',
      company: '',
      phone: '',
      email: '',
      service: '',
      message: '',
      consent: false,
    });
    setSubmittedData(null);
    setStatus('idle');
    setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmittingRef.current || status === 'loading') {
      return;
    }

    if (!formData.name || !formData.email || !formData.phone || !formData.service || !formData.message) {
      setStatus('error');
      setErrorMessage('Please fill in all mandatory fields.');
      return;
    }

    if (!formData.consent) {
      setStatus('error');
      setErrorMessage('Please accept the consent agreement before submitting.');
      return;
    }

    isSubmittingRef.current = true;
    setErrorMessage('');

    const timestamp = new Date().toLocaleString();

    // Instant zero-delay confirmation response
    setSubmittedData({
      name: formData.name,
      email: formData.email,
      service: formData.service,
      timestamp,
    });
    setStatus('success');

    try {
      const googleSheetUrl =
        process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL ||
        'https://script.google.com/macros/s/AKfycby5uy7wmS0pqFU4Z_5bqnvbA3D2TsORMXbi9hZhiRaU0j-6XfxWCN9Q3uGsOC1N107C/exec';

      const sheetBody = new URLSearchParams();
      sheetBody.append('Timestamp', timestamp);
      sheetBody.append('Name', formData.name);
      sheetBody.append('Company', formData.company || 'N/A');
      sheetBody.append('Phone', formData.phone);
      sheetBody.append('Email', formData.email);
      sheetBody.append('Service', formData.service);
      sheetBody.append('Message', formData.message);

      // Dispatch to Google Sheets Web App immediately in background
      fetch(googleSheetUrl, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: sheetBody.toString(),
      }).catch((err) => {
        console.error('Google Sheets background sync error:', err);
      }).finally(() => {
        isSubmittingRef.current = false;
      });
    } catch (error) {
      console.error('Submission dispatch error:', error);
      isSubmittingRef.current = false;
    }
  };

  return (
    <div className="glass-panel p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-300">
      {/* Background glow */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-cyan/10 rounded-full blur-3xl pointer-events-none" />

      {status === 'success' ? (
        /* SUCCESS CONFIRMATION STATE WITH ANIMATED TICK */
        <div className="py-10 px-2 sm:px-4 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
          {/* Animated Tick Div */}
          <div className="relative mb-6">
            <div className="absolute inset-0 rounded-full bg-emerald-500/25 animate-ping opacity-60 pointer-events-none" />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-tr from-emerald-500 via-teal-400 to-cyan p-0.5 shadow-2xl shadow-emerald-500/30 flex items-center justify-center">
              <div className="w-full h-full rounded-full bg-[#0A0F1D] flex items-center justify-center">
                <Check className="w-10 h-10 text-emerald-400 stroke-[3] animate-in zoom-in duration-300" />
              </div>
            </div>
          </div>

          <span className="inline-block px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono font-bold uppercase tracking-widest mb-3">
            Request Submitted
          </span>

          <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight mb-3">
            Thank You, {submittedData?.name || 'Partner'}!
          </h3>

          <p className="text-slate-600 dark:text-slate-300 text-sm sm:text-base max-w-md mx-auto leading-relaxed mb-6">
            Your inquiry has been successfully transmitted and logged into our database. Our technical architecture team will review your requirements and respond within 24 hours.
          </p>

          {/* Submission Details Summary Box */}
          <div className="w-full max-w-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl p-4 text-left mb-6 space-y-2.5 text-xs">
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 pb-1.5 border-b border-slate-200 dark:border-white/5">
              <span>Service Requested:</span>
              <span className="text-cyan font-bold truncate max-w-[200px]">{submittedData?.service}</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-400 pb-1.5 border-b border-slate-200 dark:border-white/5">
              <span>Contact Email:</span>
              <span className="text-slate-900 dark:text-white font-mono">{submittedData?.email}</span>
            </div>
            <div className="flex justify-between items-center text-slate-600 dark:text-slate-400">
              <span>Status:</span>
              <span className="text-emerald-500 dark:text-emerald-400 font-semibold flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5" /> 
              </span>
            </div>
          </div>

          {/* Countdown Indicator */}
          <div className="flex items-center gap-2 text-xs text-slate-500 dark:text-slate-400 mb-6 bg-slate-100 dark:bg-white/5 px-4 py-2 rounded-full border border-slate-200 dark:border-white/10">
            <span className="w-2 h-2 rounded-full bg-cyan animate-ping" />
            <span>Form will reset automatically in <strong className="text-cyan font-mono font-bold text-sm">{countdown}s</strong></span>
          </div>

          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl font-bold text-xs sm:text-sm bg-slate-100 dark:bg-white/10 hover:bg-slate-200 dark:hover:bg-white/20 text-slate-800 dark:text-white border border-slate-300 dark:border-white/15 transition-all cursor-pointer active:scale-95"
          >
            <RotateCcw className="w-4 h-4 text-cyan" />
            <span>Reset Now ({countdown}s)</span>
          </button>
        </div>
      ) : (
        /* INTERACTIVE FORM STATE */
        <>
          <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-2">
            Send Us a Message
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
            Fill out the details below and our architecture team will respond within 24 hours.
          </p>

          {status === 'error' && (
            <div className="mb-6 p-4 rounded-xl bg-red-500/15 border border-red-500/30 flex items-start gap-3 animate-in fade-in">
              <AlertCircle className="w-5 h-5 text-red-400 mt-0.5 shrink-0" />
              <div>
                <h4 className="font-semibold text-red-400 text-sm">Action Required</h4>
                <p className="text-xs text-red-300/80 mt-0.5">{errorMessage}</p>
              </div>
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Full Name <span className="text-cyan">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. enter your name"
                  className="w-full bg-slate-50 dark:bg-[#0A0F1D]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none focus:border-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Company / Institution Name
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="e.g. enter your organization/institute name"
                  className="w-full bg-slate-50 dark:bg-[#0A0F1D]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none focus:border-cyan transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Phone Number <span className="text-cyan">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. +91 xxxxx - xxxxx"
                  className="w-full bg-slate-50 dark:bg-[#0A0F1D]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none focus:border-cyan transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                  Corporate Email <span className="text-cyan">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="e.g. enter your  email"
                  className="w-full bg-slate-50 dark:bg-[#0A0F1D]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none focus:border-cyan transition-colors"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Service Domain of Interest <span className="text-cyan">*</span>
              </label>
              <select
                name="service"
                required
                value={formData.service}
                onChange={handleChange}
                className="w-full bg-slate-50 dark:bg-[#0A0F1D]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none focus:border-cyan transition-colors cursor-pointer"
              >
                <option value="" disabled className="dark:bg-[#0D1527] text-slate-500">
                  Select a domain or solution...
                </option>
                {services.map((s) => (
                  <option key={s} value={s} className="dark:bg-[#0D1527] dark:text-white text-slate-900">
                    {s}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 uppercase tracking-wider mb-1.5">
                Project Requirements <span className="text-cyan">*</span>
              </label>
              <textarea
                name="message"
                required
                rows={4}
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell us about your timeline, current stack, and core goals..."
                className="w-full bg-slate-50 dark:bg-[#0A0F1D]/80 border border-slate-300 dark:border-white/10 rounded-xl px-4 py-3 text-sm text-slate-900 dark:text-white placeholder-slate-400 dark:placeholder-slate-500 focus:bg-white dark:focus:bg-[#0A0F1D] focus:outline-none focus:border-cyan transition-colors resize-none"
              />
            </div>

            <div className="flex items-start gap-3 pt-1">
              <input
                type="checkbox"
                name="consent"
                id="formConsent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1 h-4 w-4 rounded border-slate-300 dark:border-white/20 bg-slate-50 dark:bg-navy text-cyan focus:ring-cyan cursor-pointer"
              />
              <label
                htmlFor="formConsent"
                className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed cursor-pointer select-none"
              >
                I agree to share my information with Growcell IT Architect for project consultation. My data is handled confidentially and never sold.
              </label>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full mt-4 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan to-blue-500 hover:from-white hover:to-white hover:text-navy text-navy shadow-lg shadow-cyan/25 transition-all duration-300 disabled:opacity-50 cursor-pointer active:scale-95"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>Submitting to Database...</span>
                </>
              ) : (
                <>
                  <span>Send Project Inquiry</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        </>
      )}
    </div>
  );
}
