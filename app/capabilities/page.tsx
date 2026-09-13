'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function CapabilitiesRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/what-we-do');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <p className="text-slate-400 text-sm">Redirecting to What We Do...</p>
    </div>
  );
}
