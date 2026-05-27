import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import FooterNav from '../elements/FooterNav';

// ─── Types ────────────────────────────────────────────────────────────────────

type NavColumn = {
  links: { label: string; href: string }[];
};

// ─── Data ─────────────────────────────────────────────────────────────────────

const navColumns: NavColumn[] = [
  {
    links: [
      { label: 'About Us', href: '#tennisAcademyAbout' },
      { label: 'Programs', href: '#programs-section' },
    ],
  },
  {
    links: [
      { label: 'Coaches', href: '#coaches-section' },
      { label: 'Amenities', href: '#amenities-section' },
    ],
  },
  {
    links: [
      { label: 'News', href: '#news-section' },
      { label: 'Blogs', href: '#blogs-section' },
    ],
  },
  {
    links: [{ label: 'Matches', href: '#matches-section' }],
  },
  {
    links: [{ label: 'Events', href: '#events-section' }],
  },
  {
    links: [{ label: 'FAQs', href: '#faqs-section' }],
  },
];

const socialLinks = [
  {
    label: 'Facebook',
    href: 'https://facebook.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    label: 'X (Twitter)',
    href: 'https://twitter.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: 'Instagram',
    href: 'https://instagram.com',
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://youtube.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 001.46 6.42 29 29 0 001 12a29 29 0 00.46 5.58 2.78 2.78 0 001.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.96A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon
          points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"
          fill="white"
        />
      </svg>
    ),
  },
];

// ─── Main Footer ──────────────────────────────────────────────────────────────

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* ── Top section ── */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-16 pt-8 lg:!pt-20 sm:pt-10 pb-8 lg:!pb-15 flex flex-col lg:flex-row gap-0 lg:gap-30">
        {/* Left: Logo */}
        <div className="flex-shrink-0 flex justify-center lg:justify-start items-center lg:items-center mb-8 lg:mb-0">
          <div className="p-3 sm:p-4 w-[110px] sm:w-[130px] h-[80px] sm:h-[90px] flex items-center justify-center">
            <Image
              src="/assets/images/ssa-logo.png"
              alt="SSA Logo"
              width={100}
              height={60}
              className="object-contain"
            />
          </div>
        </div>

        <div className="w-full">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-6">
            {/* Right: Nav columns */}
            <div className="flex-1">
              <FooterNav />
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-[1.5px] bg-gray-200 my-6 sm:my-8" />

          {/* Bottom info row */}
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            {/* Left: address + contact */}
            <div className="flex flex-col gap-2 text-center md:text-left md:w-1/2">
              <Link
                href="/about"
                className="text-[#9ab825] font-bold text-[1rem] hover:underline">
                Signature Slam Academy
              </Link>

              <p className="text-[0.82rem] text-gray-600 mt-1">
                30 Wills Hill Road, Lovedale, NSW
              </p>

              <a
                href="tel:+915642589752"
                className="inline-flex justify-center md:justify-start items-center gap-2 text-[0.82rem] text-gray-600 hover:text-gray-900 transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                +91 5642589752
              </a>

              <a
                href="mailto:info@ssagroup.com"
                className="inline-flex justify-center md:justify-start items-center gap-2 text-[0.82rem] text-gray-600 hover:text-gray-900 transition-colors">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-gray-500">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M2 7l10 7 10-7" />
                </svg>
                info@ssagroup.com
              </a>
            </div>

            {/* Right: Social */}
            <div className="flex flex-col items-left text-center md:text-left md:items-left gap-3 md:w-1/2">
              <p className="text-[1rem] font-bold text-[#9ab825]">
                Connect with us
              </p>

              <div className="flex items-center justify-center md:justify-start gap-4">
                {socialLinks.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200">
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="w-full bg-[#1a2e3b] py-4 sm:py-3 px-4 sm:px-8 lg:px-16">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-2 text-center sm:text-left">
          <Link
            href="/terms"
            className="text-white/80 text-[0.72rem] hover:text-white transition-colors">
            Terms And Condition
          </Link>

          <p className="text-white/70 text-[0.72rem] text-center">
            © 2023 All Rights Reserved www.signatureslumacademy.com
          </p>

          <Link
            href="/privacy"
            className="text-white/80 text-[0.72rem] hover:text-white transition-colors">
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
