import React from 'react';
import Image from 'next/image';
import SectionHeading from '../elements/SectionHeading';
import Button from '../common/Button';

type Professional = {
  id: number;
  name: string;
  role: string;
  image: string;
  imageAlt: string;
};

const professionals: Professional[] = [
  {
    id: 1,
    name: 'Craig Tiley',
    role: 'CEO Tennis Australia & Australian Open',
    image: '/assets/images/professionals3.png',
    imageAlt: 'Craig Tiley – CEO Tennis Australia & Australian Open',
  },
  {
    id: 2,
    name: 'Stephen Farrow',
    role: 'Director - Tournament, Players & International Relations',
    image: '/assets/images/professionals1.png',
    imageAlt:
      'Stephen Farrow – Director Tournament, Players & International Relations',
  },
  {
    id: 3,
    name: 'Cameron Pearson',
    role: 'Head Major Events - Tennis Australia',
    image: '/assets/images/professionals2.png',
    imageAlt: 'Cameron Pearson – Head Major Events Tennis Australia',
  },
];

interface ProfessionalCardProps {
  professional: Professional;
}

function ProfessionalCard({ professional }: ProfessionalCardProps) {
  return (
    <article className="flex flex-col gap-3">
      {/* Photo */}
      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg bg-gray-100">
        <Image
          src={professional.image}
          alt={professional.imageAlt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover object-top"
          priority={professional.id === 1}
        />
      </div>

      <div className="flex flex-col gap-1">
        <h3 className="text-[1.05rem] font-bold text-gray-900 leading-snug">
          {professional.name}
        </h3>
        <p className="text-[0.825rem] text-gray-500 italic leading-snug">
          {professional.role}
        </p>
      </div>
    </article>
  );
}

interface MeetOurProfessionalsProps {
  items?: Professional[];
  description?: string;
  onViewAll?: () => void;
}

export default function MeetOurProfessionals({
  items = professionals,
  description = "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  onViewAll,
}: MeetOurProfessionalsProps) {
  return (
    <section className="w-full bg-white">
      <div className="wrapper">
        <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between lg:gap-8 mb-2">
          <SectionHeading
            title="Meet our professionals"
            description="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, "
          />

          <div className="flex justify-start lg:justify-end items-start ">
            <Button
              variant="primary"
              className="self-start text-xl mb-5 lg:mb-0">
              Register Now
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {items.map((professional) => (
            <ProfessionalCard
              key={professional.id}
              professional={professional}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
