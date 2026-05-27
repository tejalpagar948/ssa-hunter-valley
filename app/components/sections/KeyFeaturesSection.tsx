'use client';
import React from 'react';
import Image from 'next/image';
import SectionHeading from '../elements/SectionHeading';
import Button from '../common/Button';

// ─── Interfaces ──────────────────────────────────────────────────────────────
interface FeatureItem {
  id: string;
  text: string;
}

interface FeatureColumnProps {
  items: FeatureItem[];
}

// ─── Data ────────────────────────────────────────────────────────────────────
const FEATURES: FeatureItem[] = [
  { id: 'c1-1', text: 'First venue in the world' },
  {
    id: 'c1-2',
    text: 'First venue in the world to have 60 multi surface courts (20 clay & 30 hard + 10 natural grass) at one location alongside a stadium',
  },
  {
    id: 'c1-3',
    text: 'First facility in the world to have capabilities to hold WTA & ATP events on any three court surface at one location',
  },
  {
    id: 'c1-4',
    text: 'First tennis academy in the world to have capabilities to stage WTA & ATP events too',
  },
  {
    id: 'c1-5',
    text: 'First venue in the world with tennis academy, Equestrian Centre, 18 holes golf course, Exhibition Centre, Aboriginal Art & Culture Museum, Stadium, 5 Star Hunter Valley resort and airport all in 500 meters radius',
  },
  { id: 'c1-6', text: 'First one stop tennis academy in Asia Pacific' },
];

// ─── Reusable Column Component ───────────────────────────────────────────────
function FeatureColumn({ items }: FeatureColumnProps) {
  return (
    <div className="flex flex-col gap-6 lg:gap-8">
      {items.map((item) => (
        <div key={item.id} className="flex items-start gap-4">
          <Image
            src="/assets/icons/right-arrow.svg"
            alt="arrow"
            width={20}
            height={14}
            className="flex-shrink-0 mt-[5px]"
          />

          <p className="text-[15px] sm:text-[16px] leading-[1.6] text-left">
            {item.text}
          </p>
        </div>
      ))}
    </div>
  );
}

// ─── Main Component ──────────────────────────────────────────────────────────
export default function KeyFeaturesSection() {
  return (
    <section className="relative w-full min-h-screen overflow-hidden bg-white px-6 sm:px-12 md:px-20 lg:px-24 flex items-center justify-center">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute inset-0 flex justify-between px-[10%] opacity-[0.06]">
          <div className="w-[1.5px] h-full bg-slate-900" />
          <div className="w-[1.5px] h-full bg-slate-900" />
          <div className="w-[1.5px] h-full bg-slate-900" />
          <div className="w-[1.5px] h-full bg-slate-900" />
        </div>

        <svg
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="absolute left-0 top-0 w-full h-full object-cover opacity-[0.18]"
          preserveAspectRatio="xMidYMid slice">
          <defs>
            <linearGradient
              id="gridGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%">
              <stop offset="0%" stopColor="#8eb421" stopOpacity="0.25" />
              <stop offset="50%" stopColor="#475569" stopOpacity="0.15" />
              <stop offset="100%" stopColor="#0f172a" stopOpacity="0.05" />
            </linearGradient>
          </defs>

          {Array.from({ length: 24 }).map((_, i) => {
            const offset = i * 28;
            return (
              <g key={i}>
                <path
                  d={`M -100,${200 + offset} C ${200 + offset * 0.5},${
                    250 + offset * 0.8
                  } ${400 - offset * 0.2},${100 + offset * 0.4} ${
                    600 + offset
                  },${300 + offset * 0.2} C ${800 + offset * 1.5},500 ${
                    1100 - offset
                  },${150 + offset} 1600,${250 + offset * 0.5}`}
                  stroke="url(#gridGradient)"
                  strokeWidth="1"
                  strokeLinecap="round"
                />
                <path
                  d={`M ${-50 + offset},850 C ${100 + offset},500 ${
                    450 - offset
                  },400 ${550 + offset * 0.6},250 C ${
                    650 + offset * 1.2
                  },100 900,0 ${1200 + offset * 0.5},-100`}
                  stroke="url(#gridGradient)"
                  strokeWidth="0.75"
                  strokeLinecap="round"
                />
              </g>
            );
          })}
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col justify-center">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8 mb-2">
          <SectionHeading
            title="key Features"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s."
          />

          <div className="flex justify-start lg:justify-end items-start ">
            <Button variant="primary" className="self-start text-xl">
              Register Now
            </Button>
          </div>
        </div>

        {/* Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 lg:gap-y-0 pt-4">
          <FeatureColumn items={FEATURES} />

          <div className="lg:border-t-0 border-t border-slate-100 pt-8 lg:pt-0">
            <FeatureColumn items={FEATURES} />
          </div>
        </div>
      </div>
    </section>
  );
}
