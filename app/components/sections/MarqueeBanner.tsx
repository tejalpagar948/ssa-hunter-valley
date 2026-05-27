'use client';

import { memo, CSSProperties } from 'react';
import { Barlow } from 'next/font/google';

const barlow = Barlow({
  subsets: ['latin'],
  weight: ['800'],
  display: 'swap',
  preload: true,
});

const WORDS = ['ADOPT', 'NURTURE', 'DELIVER'] as const;

const COLORS = {
  primary: '#8DB600',
  background: '#FFFFFF',
} as const;

const baseTextStyles: CSSProperties = {
  fontFamily: barlow.style.fontFamily,
  fontWeight: 800,
  fontSize: 'clamp(32px, 4vw, 56px)',
  letterSpacing: '0.04em',
  lineHeight: 1,
  whiteSpace: 'nowrap',
  userSelect: 'none',
};

interface WordProps {
  word: string;
  outlined?: boolean;
}

const Word = memo(function Word({ word, outlined = false }: WordProps) {
  return (
    <span
      style={{
        ...baseTextStyles,
        paddingInline: '6px',
        color: outlined ? 'transparent' : COLORS.primary,
        WebkitTextStroke: outlined ? `2px ${COLORS.primary}` : 'unset',
      }}>
      {word}
    </span>
  );
});

const Separator = memo(function Separator() {
  return (
    <span
      aria-hidden="true"
      style={{
        ...baseTextStyles,
        color: COLORS.primary,
        paddingInline: '20px',
      }}>
      ·
    </span>
  );
});

const MarqueeContent = memo(function MarqueeContent() {
  return (
    <>
      {WORDS.map((word, index) => (
        <div key={`${word}-${index}`} className="flex items-center shrink-0">
          <Word word={word} outlined={index % 2 !== 0} />
          <Separator />
        </div>
      ))}
    </>
  );
});

export default function MarqueeBanner() {
  return (
    <>
      <section
        aria-label="Company values"
        className="w-full overflow-hidden bg-white !pt-5 !pb-12 lg:!pt-10 lg:!pb-25">
        <div className="marquee-wrapper">
          <div className="marquee-track">
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
            <MarqueeContent />
          </div>
        </div>
      </section>

      <style jsx>{`
        .marquee-wrapper {
          display: flex;
          overflow: hidden;
          width: 100%;
        }

        .marquee-track {
          display: flex;
          align-items: center;
          width: max-content;
          flex-shrink: 0;
          animation: marquee-scroll 14s linear infinite;
          will-change: transform;
        }

        .marquee-track:hover {
          animation-play-state: paused;
        }

        @media (prefers-reduced-motion: reduce) {
          .marquee-track {
            animation: none;
          }
        }

        @keyframes marquee-scroll {
          0% {
            transform: translateX(0);
          }

          100% {
            transform: translateX(-50%);
          }
        }
      `}</style>
    </>
  );
}
