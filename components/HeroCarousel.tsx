'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ArrowRight, ShieldCheck, Cpu, Server, GraduationCap, Sparkles } from 'lucide-react';

export interface SlideData {
  id: number;
  badgeIcon: React.ReactNode;
  badge: string;
  titlePrefix: string;
  titleAccent: string;
  description: string;
  image: string;
  primaryCtaText: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaLink: string;
}

const slides: SlideData[] = [
  {
    id: 1,
    badgeIcon: <ShieldCheck className="w-4 h-4 text-cyan" />,
    badge: 'Future-Ready IT Architecture',
    titlePrefix: 'Enterprise Cloud & Scalable ',
    titleAccent: 'Digital Infrastructure.',
    description: 'Empowering organizations with resilient cloud architecture, cybersecurity, and future-proof enterprise systems designed for relentless performance and growth.',
    image: '/img/carousel_1.jpg',
    primaryCtaText: 'Explore What We Do',
    primaryCtaLink: '/what-we-do',
    secondaryCtaText: 'Schedule Consult',
    secondaryCtaLink: '/contact',
  },
  {
    id: 2,
    badgeIcon: <Cpu className="w-4 h-4 text-cyan" />,
    badge: 'Custom Business Engineering',
    titlePrefix: 'Intelligent ERP, CRM & ',
    titleAccent: 'Automated Workflows.',
    description: 'Customized business platforms engineered around your specific operational rhythms, automated financial compliance, and real-time enterprise metrics.',
    image: '/img/carousel_2.jpg',
    primaryCtaText: 'Discover Solutions',
    primaryCtaLink: '/solutions',
    secondaryCtaText: 'Request Demo',
    secondaryCtaLink: '/contact',
  },
  {
    id: 3,
    badgeIcon: <Server className="w-4 h-4 text-cyan" />,
    badge: 'Mission-Critical Infrastructure',
    titlePrefix: 'Turnkey Networks, Servers & ',
    titleAccent: 'IT Deployment.',
    description: 'Full-cycle enterprise IT infrastructure design, optical networking, high-availability server racks, and turnkey workplace system installations.',
    image: '/img/carousel_3.jpg',
    primaryCtaText: 'View Infrastructure',
    primaryCtaLink: '/infrastructure',
    secondaryCtaText: 'Site Assessment',
    secondaryCtaLink: '/contact',
  },
  {
    id: 4,
    badgeIcon: <GraduationCap className="w-4 h-4 text-cyan" />,
    badge: 'Next-Gen Education Technology',
    titlePrefix: 'Modern Computer Labs & ',
    titleAccent: 'Robotics Ecosystems.',
    description: 'Transforming schools and universities with unified administration platforms, state-of-the-art computer labs, and hands-on STEM robotics laboratory setups.',
    image: '/img/carousel_4.jpg',
    primaryCtaText: 'Explore EdTech',
    primaryCtaLink: '/infrastructure#labs',
    secondaryCtaText: 'Lab Consultation',
    secondaryCtaLink: '/contact',
  },
  {
    id: 5,
    badgeIcon: <Sparkles className="w-4 h-4 text-cyan" />,
    badge: 'Strategic Digital Transformation',
    titlePrefix: 'Accelerate Enterprise Growth with ',
    titleAccent: 'Intelligent Strategy.',
    description: 'Guiding mid-market and enterprise organizations through seamless digital modernization, high-impact web and mobile engineering, and measurable growth.',
    image: '/img/carousel_5.jpg',
    primaryCtaText: 'Start Transformation',
    primaryCtaLink: '/what-we-do',
    secondaryCtaText: 'Get in Touch',
    secondaryCtaLink: '/contact',
  },
];

const AUTOPLAY_DURATION = 6500;

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
    setProgress(0);
  }, []);

  const goToSlide = (index: number) => {
    setCurrent(index);
    setProgress(0);
  };

  useEffect(() => {
    if (isPaused) return;

    const intervalTime = 50;
    const increment = (intervalTime / AUTOPLAY_DURATION) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          nextSlide();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPaused, nextSlide]);

  const activeSlide = slides[current];

  return (
    <section 
      className="relative min-h-[92vh] sm:min-h-screen bg-navy flex items-center overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-label="Growcell Hero Carousel"
    >
      {/* Background Image Carousel with Zoom Transition */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSlide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={activeSlide.image}
              alt={activeSlide.titlePrefix + activeSlide.titleAccent}
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Cinematic Gradient Overlays */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#0A0F1D]/95 via-[#0A0F1D]/80 to-[#0A0F1D]/60" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0F1D] via-transparent to-[#0A0F1D]/70" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cyber Grid & Ambient Glowing Orbs */}
      <div className="absolute inset-0 tech-grid-overlay z-[1] pointer-events-none opacity-40" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-cyan/15 rounded-full blur-3xl pointer-events-none animate-pulse" />
      <div className="absolute bottom-1/3 left-1/3 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Slide Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-28 sm:py-36 w-full">
        <div className="max-w-3xl">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            >
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan/10 border border-cyan/30 text-cyan text-xs font-bold uppercase tracking-wider mb-6 backdrop-blur-md">
                {activeSlide.badgeIcon}
                <span>{activeSlide.badge}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-cyan animate-ping" />
              </div>

              {/* Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1] mb-6">
                {activeSlide.titlePrefix}
                <span className="text-gradient">
                  {activeSlide.titleAccent}
                </span>
              </h1>

              {/* Description */}
              <p className="text-base sm:text-lg lg:text-xl text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
                {activeSlide.description}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <Link
                  href={activeSlide.primaryCtaLink}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-sm bg-gradient-to-r from-cyan to-blue-500 hover:from-white hover:to-white hover:text-navy text-navy shadow-lg shadow-cyan/25 transition-all duration-300 hover:scale-[1.03] active:scale-[0.98]"
                >
                  <span>{activeSlide.primaryCtaText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href={activeSlide.secondaryCtaLink}
                  className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-sm text-white bg-white/5 hover:bg-white/10 border border-white/20 hover:border-cyan transition-all duration-300 hover:scale-[1.03]"
                >
                  <span>{activeSlide.secondaryCtaText}</span>
                </Link>
              </div>
            </motion.div>
          </AnimatePresence>

        </div>
      </div>

      {/* Manual Arrow Controls */}
      <div className="absolute bottom-10 right-6 sm:right-12 z-20 flex items-center gap-3">
        <button
          onClick={prevSlide}
          className="w-11 h-11 rounded-full bg-[#0A0F1D]/80 backdrop-blur-md border border-white/20 text-white hover:bg-cyan hover:text-navy hover:border-cyan flex items-center justify-center transition-all duration-200 shadow-xl"
          aria-label="Previous Slide"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={nextSlide}
          className="w-11 h-11 rounded-full bg-[#0A0F1D]/80 backdrop-blur-md border border-white/20 text-white hover:bg-cyan hover:text-navy hover:border-cyan flex items-center justify-center transition-all duration-200 shadow-xl"
          aria-label="Next Slide"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>

      {/* Indicators / Progress Bar */}
      <div className="absolute bottom-10 left-6 sm:left-12 z-20 flex items-center gap-2.5">
        {slides.map((s, index) => (
          <button
            key={s.id}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full h-1.5 relative overflow-hidden ${
              index === current ? 'w-12 bg-white/20' : 'w-4 bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          >
            {index === current && (
              <div 
                className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan to-blue-400" 
                style={{ width: `${progress}%`, transition: 'width 50ms linear' }} 
              />
            )}
          </button>
        ))}
      </div>

      {/* Subtle Bottom Page Progress Line */}
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-white/5 z-20">
        <div 
          className="h-full bg-gradient-to-r from-cyan via-blue-500 to-violet-500"
          style={{ width: `${((current + 1) / slides.length) * 100}%`, transition: 'width 0.4s ease' }}
        />
      </div>
    </section>
  );
}
