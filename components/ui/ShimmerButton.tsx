'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface ShimmerButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  href?: string;
  shimmerColor?: string;
}

export function ShimmerButton({
  children,
  className,
  href,
  shimmerColor = '#06B6D4',
  ...props
}: ShimmerButtonProps) {
  const content = (
    <div
      className={cn(
        'relative inline-flex h-12 overflow-hidden rounded-xl p-[1px] focus:outline-none group',
        className
      )}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_3s_linear_infinite]"
        style={{
          background: `conic-gradient(from 90deg at 50% 50%, #0A0F1D 0%, ${shimmerColor} 50%, #0A0F1D 100%)`,
        }}
      />
      <span className="inline-flex h-full w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#0A0F1D] px-6 py-2 text-sm font-bold text-white backdrop-blur-3xl transition-all duration-300 group-hover:bg-[#0D1527] group-hover:text-cyan">
        {children}
      </span>
    </div>
  );

  if (href) {
    return <Link href={href}>{content}</Link>;
  }

  return (
    <button {...props}>
      {content}
    </button>
  );
}
