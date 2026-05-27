import React from 'react';
import Image from 'next/image';
import SectionHeading from '../elements/SectionHeading';

type TagColor = 'green' | 'blue' | 'yellow' | 'teal';
type Tag = { label: string; color: TagColor; bgColor?: string };
type Facility = {
  id: number;
  title: string;
  description: string;
  image: string;
  imageAlt: string;
  tags: Tag[];
};

const facilities: Facility[] = [
  {
    id: 1,
    title: 'Tennis',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/assets/images/Facilities-1.png',
    imageAlt: 'Tennis courts aerial view',
    tags: [
      { label: '8 Clay Courts', color: 'green' },
      { label: '4 Hard Courts', color: 'green' },
    ],
  },
  {
    id: 2,
    title: 'Accommodation',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/assets/images/Facilities-2.png',
    imageAlt: 'Accommodation room interior',
    tags: [{ label: '5 Star Hotel', color: 'blue' }],
  },
  {
    id: 3,
    title: 'Fitness',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/assets/images/Facilities-3.png',
    imageAlt: 'Fitness gym equipment',
    tags: [
      { label: 'Gym', color: 'yellow' },
      { label: 'Fitness Room', color: 'yellow' },
    ],
  },
  {
    id: 4,
    title: 'Recovery',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    image: '/assets/images/Facilities-4.png',
    imageAlt: 'Recovery pool at dusk',
    tags: [
      { label: 'Spa', color: 'teal' },
      { label: 'Pool', color: 'teal' },
      { label: 'Massage', color: 'teal' },
    ],
  },
];

const tagStyles: Record<TagColor, string> = {
  green: 'bg-[#8dc63f] text-white',
  blue: 'bg-[#3a8a7a] text-white',
  yellow: 'bg-[#e8a020] text-white',
  teal: 'bg-[#3a8a7a] text-white',
};

function PlayButton() {
  return (
    <div
      className="absolute inset-0 flex items-center justify-center"
      aria-hidden="true">
      <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center shadow-lg">
        <svg width="12" height="14" viewBox="0 0 12 14" fill="none">
          <path d="M1 1L11 7L1 13V1Z" fill="#1a1a1a" />
        </svg>
      </div>
    </div>
  );
}

function FacilityCard({
  facility,
  darkText = false,
  priority = false,
}: {
  facility: Facility;
  darkText?: boolean;
  priority?: boolean;
}) {
  return (
    <article className="flex flex-col gap-3">
      <div className="relative w-full aspect-[3/3] overflow-hidden rounded-xl bg-gray-200 cursor-pointer group">
        <Image
          src={facility.image}
          alt={facility.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
          priority={priority}
        />
        <PlayButton />
      </div>

      <h3
        className={`text-[1.25rem] font-bold leading-tight ${
          darkText ? 'text-gray-900' : 'text-white'
        }`}>
        {facility.title}
      </h3>

      <div className="flex flex-wrap gap-2">
        {facility.tags.map((tag) => (
          <span
            key={tag.label}
            className={`inline-flex items-center px-4 py-1 rounded-full text-[0.72rem] font-semibold border ${
              tag.bgColor
                ? 'text-white border-transparent'
                : darkText
                ? 'bg-[#99B81B] text-white'
                : 'bg-white text-black'
            }`}
            style={tag.bgColor ? { backgroundColor: tag.bgColor } : undefined}>
            {tag.label}
          </span>
        ))}
      </div>

      <p
        className={`text-[0.82rem] leading-relaxed ${
          darkText ? 'text-gray-500' : 'text-white/75'
        }`}>
        {facility.description}
      </p>
    </article>
  );
}

function TrophyWatermark() {
  return (
    <div
      className="absolute right-8 inset-y-0 flex items-center pointer-events-none"
      aria-hidden="true">
      <svg
        viewBox="0 0 240 340"
        fill="none"
        className="h-[80%] w-auto opacity-[0.1]">
        <path
          d="M55 8 H185 V95 C185 150 148 185 120 196 C92 185 55 150 55 95 Z"
          fill="white"
        />
        <path
          d="M55 35 C22 35 10 62 10 80 C10 108 30 128 55 128"
          stroke="white"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M185 35 C218 35 230 62 230 80 C230 108 210 128 185 128"
          stroke="white"
          strokeWidth="14"
          fill="none"
          strokeLinecap="round"
        />
        <rect x="108" y="196" width="24" height="70" fill="white" rx="5" />
        <rect x="72" y="264" width="96" height="18" fill="white" rx="7" />
        <rect x="52" y="280" width="136" height="16" fill="white" rx="7" />
        <path
          d="M120 60 L126 80 H148 L131 92 L137 112 L120 100 L103 112 L109 92 L92 80 H114 Z"
          fill="white"
          opacity="0.4"
        />
      </svg>
    </div>
  );
}

const bandStyle = {
  background:
    'linear-gradient(135deg, #0d2b45 0%, #0f3040 20%, #123830 55%, #1a5028 80%, #276624 100%)',
};

export default function Facilities({
  items = facilities,
  description = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
}: {
  items?: Facility[];
  description?: string;
}) {
  return (
    <section className="w-full bg-white overflow-x-hidden !pt-10 !py-0 lg:!py-24">
      <div className="flex flex-col lg:gap-25">
        <div className="wrapper !px-0 px-8 sm:px-12 lg:px-16 lg:pt-10 lg:pb-8 text-center lg:text-left">
          <SectionHeading
            title="Facilities"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s'"
          />
        </div>
        <div className="lg:hidden w-full py-8 px-6 sm:px-10" style={bandStyle}>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {items.map((facility, i) => (
              <FacilityCard
                key={facility.id}
                facility={facility}
                darkText={false}
                priority={i === 0}
              />
            ))}
          </div>
        </div>

        <div className="hidden lg:block h-[500px]">
          <div className="relative">
            <div
              className="absolute inset-0 pointer-events-none"
              style={bandStyle}
            />
            <TrophyWatermark />
            <div className="relative z-10 h-[300px] wrapper">
              <div className="hidden lg:block">
                <div className="grid grid-cols-4 gap-8 mb-12 absolute -translate-y-1/2 top-1/5">
                  <div className="col-span-1">
                    <FacilityCard
                      facility={items[0]}
                      darkText={false}
                      priority={true}
                    />
                  </div>
                  <div className="col-span-1">
                    <FacilityCard facility={items[1]} darkText={false} />
                  </div>
                  <div className="col-span-2" />
                </div>
                <div className="grid grid-cols-4 gap-8 absolute translate-y-1/2 -bottom-1/5">
                  <div className="col-span-2" />
                  <div className="col-span-1">
                    <FacilityCard facility={items[2]} darkText={true} />
                  </div>
                  <div className="col-span-1">
                    <FacilityCard facility={items[3]} darkText={true} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
