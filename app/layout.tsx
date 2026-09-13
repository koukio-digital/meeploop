import type { Metadata } from 'next';
import { Plus_Jakarta_Sans, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-primary',
  display: 'swap',
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://growcell.in'),
  title: 'GrowCell IT Architect & Technology Solutions',
  description: 'GrowCell IT Architect provides IT consulting, custom software development, ERP, CRM, HRMS, billing software, websites, mobile applications, IT infrastructure and digital technology solutions.',
  keywords: [
    'IT Architect',
    'Custom ERP Development',
    'Enterprise CRM',
    'IT Consulting',
    'IT Infrastructure',
    'Computer Lab Setup',
    'Robotics Lab Setup',
    'Digital Transformation',
  ],
  authors: [{ name: 'GrowCell IT Architect' }],
  icons: {
    icon: '/img/cell.JPG',
    shortcut: '/img/cell.JPG',
    apple: '/img/cell.JPG',
  },
  openGraph: {
    title: 'GrowCell IT Architect & Technology Solutions',
    description: 'Future-ready IT solutions for growing enterprises.',
    url: 'https://growcell.in',
    siteName: 'GrowCell IT Architect',
    images: [
      {
        url: '/img/carousel_1.jpg',
        width: 1200,
        height: 630,
        alt: 'GrowCell IT Architect',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${plusJakarta.variable} ${inter.variable} scroll-smooth dark`} data-theme="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                localStorage.removeItem('growcell-theme');
              } catch (e) {}
              document.documentElement.classList.add('dark');
              document.documentElement.classList.remove('light');
              document.documentElement.setAttribute('data-theme', 'dark');

              // Automatically remove Next.js dev indicator badge
              (function() {
                if (typeof window === 'undefined') return;
                var clean = function() {
                  var targets = document.querySelectorAll('[data-next-badge="true"], [data-nextjs-dev-tools-button="true"], #next-logo, nextjs-portal');
                  targets.forEach(function(t) { t.remove(); });
                };
                clean();
                window.addEventListener('DOMContentLoaded', clean);
                window.addEventListener('load', clean);
                try {
                  var obs = new MutationObserver(clean);
                  obs.observe(document.documentElement, { childList: true, subtree: true });
                } catch(e) {}
              })();
            `,
          }}
        />
      </head>
      <body className="bg-[var(--bg-main)] text-[var(--text-main)] min-h-screen flex flex-col antialiased selection:bg-cyan selection:text-navy">
        <Navbar />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
