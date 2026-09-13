'use client';

import React from 'react';
import { cn } from '@/lib/utils';

export function BackgroundGrid({
  children,
  className,
  variant = 'grid',
}: {
  children?: React.ReactNode;
  className?: string;
  variant?: 'grid' | 'dots';
}) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden bg-[var(--bg-main)] transition-colors duration-300',
        variant === 'grid'
          ? 'bg-[linear-gradient(to_right,var(--border-main)_1px,transparent_1px),linear-gradient(to_bottom,var(--border-main)_1px,transparent_1px)] bg-[size:4rem_4rem]'
          : 'bg-[radial-gradient(var(--border-main)_1px,transparent_1px)] bg-[size:24px_24px]',
        className
      )}
    >
      {/* Radial gradient mask for subtle vignette edge falloff */}
      <div className="pointer-events-none absolute inset-0 bg-[var(--bg-main)] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] transition-colors duration-300" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
