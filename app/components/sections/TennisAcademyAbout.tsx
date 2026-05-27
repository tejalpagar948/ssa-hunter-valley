'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Button from '@/components/common/Button';
import PanelWrapper from '@/components/elements/PanelWrapper';
import SectionHeading from '@/components/elements/SectionHeading';

type TabId = 'about' | 'coaches' | 'vision' | 'mission';

const ACADEMY_CONFIG = {
  tagline: {
    text: 'To be the first venue in the world to have',
    highlight: '60 multi surface courts',
    suffix:
      'at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.',
  },

  stats: [
    { num: '20', label: 'courts' },
    { num: '12', label: 'coaches' },
    { num: '17', label: 'years' },
    { num: '10', label: 'clubs' },
  ],

  photos: [
    {
      row: 1,
      images: [
        {
          src: '/assets/images/tennis-academy-about1.png',
          alt: 'Two tennis players high-fiving in celebration on court',
          width: '65%',
          sizes: '(max-width: 1024px) 60vw, 35vw',
          priority: true,
        },
        {
          src: '/assets/images/tennis-academy-about2.png',
          alt: 'Junior tennis players greeting each other at the net',
          width: '35%',
          sizes: '(max-width: 1024px) 30vw, 20vw',
          priority: true,
        },
      ],
    },
    {
      row: 2,
      images: [
        {
          src: '/assets/images/tennis-academy-about3.png',
          alt: 'Male tennis player running dynamically on tennis court',
          width: '48%',
          sizes: '(max-width: 1024px) 45vw, 25vw',
          priority: false,
        },
        {
          src: '/assets/images/tennis-academy-about4.png',
          alt: 'Female tennis player preparing to receive a serve on court',
          width: '52%',
          sizes: '(max-width: 1024px) 50vw, 28vw',
          priority: false,
        },
      ],
    },
  ],

  coaches: [
    { initials: 'RK', name: 'Rahul Kapoor', role: 'Head Coach' },
    { initials: 'SP', name: 'Sneha Patel', role: 'Junior Development' },
    { initials: 'AM', name: 'Arjun Mehta', role: 'Performance Coach' },
    { initials: 'LD', name: "Lisa D'Souza", role: 'Fitness & Conditioning' },
    { initials: 'VN', name: 'Vikram Nair', role: 'Tactical Analyst' },
    { initials: 'PM', name: 'Priya Mishra', role: 'Mental Skills Coach' },
  ],

  tabs: [
    {
      id: 'about' as TabId,
      label: 'About Us',
      heading: 'About Us',
      description:
        'To be the first venue in the world to have 60 multi surface courts at one location and establish first one stop tennis academy in the Asia Pacific producing grand slam champions.',
    },
    {
      id: 'coaches' as TabId,
      label: 'Coaches',
      heading: 'Our Coaches',
      description:
        'Our world-class coaching team brings decades of professional experience to develop players at every level.',
    },
    {
      id: 'vision' as TabId,
      label: 'Vision',
      heading: 'Our Vision',
      paragraphs: [
        'To become the foremost tennis institution in the Asia Pacific region — a destination where talent is discovered, nurtured, and elevated to the highest stages of world tennis.',
        'We envision a facility with 60 multi-surface courts, state-of-the-art training infrastructure, and a proven pathway that produces grand slam champions from the ground up.',
      ],
    },
    {
      id: 'mission' as TabId,
      label: 'Mission',
      heading: 'Our Mission',
      paragraphs: [
        'To provide every player — regardless of age or background — with access to elite coaching, world-class facilities, and a structured development programme that maximises their potential.',
        'We are committed to growing the culture of tennis across India and the Asia Pacific, one champion at a time.',
      ],
    },
  ],
};

type AcademyTab = (typeof ACADEMY_CONFIG.tabs)[number];

const TAB_MAP = Object.fromEntries(
  ACADEMY_CONFIG.tabs.map((t) => [t.id, t])
) as Record<TabId, AcademyTab>;

function AboutPanel() {
  const tab = TAB_MAP.about;

  return (
    <PanelWrapper>
      <div className="w-full lg:w-[45%] flex flex-col justify-center pr-2">
        <SectionHeading title={tab.heading} />

        <p className="text-[clamp(14px,1.5vw,16px)] text-gray-600 leading-relaxed mb-8">
          {tab.description}
        </p>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {ACADEMY_CONFIG.stats.map(({ num, label }) => (
            <div key={label} className="flex flex-col">
              <span className="text-[clamp(28px,3.2vw,36px)] font-bold text-[#8eb421] leading-none">
                {num}
              </span>
              <span className="text-[clamp(12px,1.2vw,20px)] text-gray-800 font-semibold mt-1">
                {label}
              </span>
            </div>
          ))}
        </div>

        <Button variant="primary" className="self-start text-xl">
          Read More
        </Button>
      </div>

      <div className="w-full lg:w-[45%] flex flex-col gap-3">
        {ACADEMY_CONFIG.photos.map(({ row, images }) => (
          <div
            key={row}
            className="flex gap-3 w-full aspect-[16/7] sm:aspect-[16/6] lg:aspect-[11/5]">
            {images.map((img) => (
              <div
                key={img.src}
                style={{ flexBasis: img.width }}
                className="group relative h-full flex-shrink-0 overflow-hidden bg-gray-50">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="transition-transform duration-700 ease-out group-hover:scale-105"
                  sizes={img.sizes}
                  priority={img.priority}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </PanelWrapper>
  );
}

function CoachesPanel() {
  const tab = TAB_MAP.coaches;

  return (
    <PanelWrapper>
      <div className="w-full py-8 px-4 sm:px-6 lg:px-0">
        <SectionHeading title={tab.heading} description={tab.description} />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {ACADEMY_CONFIG.coaches.map(({ initials, name, role }) => (
            <div
              key={name}
              className="flex flex-col items-center text-center bg-gray-50 rounded-2xl p-4 sm:p-6 transition-all duration-300 hover:bg-gray-100/70 hover:scale-[1.02]">
              <div className="w-14 h-14 rounded-full bg-[#8eb421] text-white flex items-center justify-center font-bold text-base mb-4 shadow-sm shadow-[#8eb421]/20">
                {initials}
              </div>
              <span className="text-sm font-bold text-gray-800">{name}</span>
              <span className="text-xs font-light text-gray-400 mt-2">
                {role}
              </span>
            </div>
          ))}
        </div>
      </div>
    </PanelWrapper>
  );
}

function GenericPanel({ tabId }: { tabId: 'vision' | 'mission' }) {
  const tab = TAB_MAP[tabId];

  return (
    <PanelWrapper>
      <div className="w-full py-6 px-4 sm:px-6 lg:px-0">
        <SectionHeading title={tab.heading} />

        <div className="flex flex-col gap-4 max-w-3xl">
          {tab.paragraphs?.map((para, i) => (
            <p
              key={i}
              className="text-[clamp(14px,1.5vw,16px)] text-gray-600 leading-relaxed">
              {para}
            </p>
          ))}
        </div>
      </div>
    </PanelWrapper>
  );
}

export default function TennisAcademyAbout() {
  const [activeTab, setActiveTab] = useState<TabId>('about');

  return (
    <section
      className="relative lg:!pt-10 overflow-hidden bg-white font-sans"
      id="tennisAcademyAbout">
      <div className="absolute hidden lg:inline-block">
        <Image
          src="/assets/images/tennis-academy-about.svg"
          alt="tennis academy"
          width={270}
          height={300}
          className="h-[250px]  xl:h-[270px] w-[270px]"
          priority
        />
      </div>
      <div className="wrapper py-5 flex flex-col lg:flex-row lg:items-start">
        <div className="max-w-[686px] mx-auto">
          <div className="relative z-10 text-center py-10 pt-0 lg:pt-10  px-4 sm:px-6 lg:px-0">
            <p className="text-[clamp(18px,2.2vw,24px)] font-normal text-gray-800 leading-[1.1] max-w-3xl mx-auto tracking-tight">
              {ACADEMY_CONFIG.tagline.text}{' '}
              <span className="text-[#8eb421] font-bold">
                {ACADEMY_CONFIG.tagline.highlight}
              </span>
              <br />
              {ACADEMY_CONFIG.tagline.suffix}
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 pb-4 lg:pb-10 px-4 sm:px-6 lg:px-0">
            {ACADEMY_CONFIG.tabs.map(({ id, label }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`text-[14px] sm:text-[18px] md:text-[22px] pb-2 px-1 transition-all duration-300 ${
                  activeTab === id
                    ? 'font-bold text-gray-900 border-b-[3px] border-[#8eb421]'
                    : 'font-semibold text-gray-400 border-b-[3px] border-transparent hover:text-gray-600'
                }`}>
                {label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="wrapper flex flex-col items-center text-center lg:items-stretch lg:text-left">
        {activeTab === 'about' && <AboutPanel />}
        {activeTab === 'coaches' && <CoachesPanel />}
        {activeTab === 'vision' && <GenericPanel tabId="vision" />}
        {activeTab === 'mission' && <GenericPanel tabId="mission" />}
      </div>
    </section>
  );
}
