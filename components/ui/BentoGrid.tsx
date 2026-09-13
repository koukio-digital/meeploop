'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';

export const BentoGrid = ({
  className,
  children,
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn(
        'grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl mx-auto',
        className
      )}
    >
      {children}
    </div>
  );
};

export const BentoGridItem = ({
  className,
  title,
  description,
  header,
  icon,
  badge,
  action,
}: {
  className?: string;
  title?: string | React.ReactNode;
  description?: string | React.ReactNode;
  header?: React.ReactNode;
  icon?: React.ReactNode;
  badge?: string;
  action?: React.ReactNode;
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'row-span-1 rounded-3xl group/bento hover:shadow-2xl hover:shadow-cyan/10 transition-all duration-300 p-6 sm:p-8 bg-[#0D1527]/90 border border-white/10 hover:border-cyan/40 justify-between flex flex-col space-y-4 relative overflow-hidden backdrop-blur-xl',
        className
      )}
    >
      {/* Background ambient gradient */}
      <div className="absolute top-0 right-0 -mr-16 -mt-16 w-36 h-36 bg-cyan/10 rounded-full blur-2xl group-hover/bento:bg-cyan/20 transition-all pointer-events-none" />

      {header && <div className="relative z-10">{header}</div>}

      <div className="relative z-10 group-hover/bento:translate-x-1 transition duration-200">
        <div className="flex items-center justify-between mb-3">
          {icon && (
            <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-cyan">
              {icon}
            </div>
          )}
          {badge && (
            <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full bg-cyan/10 border border-cyan/30 text-cyan font-bold">
              {badge}
            </span>
          )}
        </div>

        <div className="font-extrabold text-white text-lg sm:text-xl mb-2">
          {title}
        </div>
        <div className="font-normal text-slate-400 text-xs sm:text-sm leading-relaxed">
          {description}
        </div>

        {action && <div className="mt-4 pt-3 border-t border-white/10">{action}</div>}
      </div>
    </motion.div>
  );
};
