'use client';
import Image from 'next/image';
import SectionHeading from './SectionHeading';
import Button from '../common/Button';

// ─────────────────────────────────────────────
// TYPES
// ─────────────────────────────────────────────

export interface SplitImage {
  src: string;
  alt: string;
}

export interface ProgramCard {
  src: string;
  alt: string;
  title: string;
  subtitle?: string;
}

interface BaseProps {
  title: string;
  subtitle?: string;
  ctaLabel?: string;
  onCtaClick?: () => void;
}

interface SplitProps extends BaseProps {
  layout: 'split';
  images: readonly [SplitImage, SplitImage];
}

interface CardsProps extends BaseProps {
  layout: 'cards';
  programs: readonly ProgramCard[];
}

export type SectionBlockProps = SplitProps | CardsProps;

// ─────────────────────────────────────────────
// HEADER (PURE + REUSABLE)
// ─────────────────────────────────────────────

type SectionHeaderProps = BaseProps;

function SectionHeader({
  title,
  subtitle,
  ctaLabel = 'Register Now',
  onCtaClick,
}: SectionHeaderProps) {
  return (
    <div className="flex items-end justify-between lg:gap-6 mb-9 flex-col lg:flex-row">
      <SectionHeading title={title} description={subtitle} />

      <Button
        variant="primary"
        className="text-xl lg:mb-6"
        onClick={onCtaClick}>
        {ctaLabel}
      </Button>
    </div>
  );
}

// ─────────────────────────────────────────────
// SPLIT GALLERY
// ─────────────────────────────────────────────

interface SplitGalleryProps {
  images: readonly [SplitImage, SplitImage];
}

function SplitGallery({ images }: SplitGalleryProps) {
  const [first, second] = images;

  return (
    <div className="grid grid-cols-[1fr_1.72fr] gap-4 max-md:grid-cols-1">
      <ImageCard image={first} />
      <ImageCard image={second} />
    </div>
  );
}

function ImageCard({ image }: { image: SplitImage }) {
  return (
    <div className="relative h-[430px] rounded-[18px] overflow-hidden">
      <Image
        src={image.src}
        alt={image.alt}
        fill
        priority={false}
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover transition-transform duration-500 hover:scale-105"
      />
    </div>
  );
}

// ─────────────────────────────────────────────
// PROGRAM CARDS
// ─────────────────────────────────────────────

interface ProgramCardsProps {
  programs: readonly ProgramCard[];
}

function ProgramCards({ programs }: ProgramCardsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 max-md:grid-cols-1">
      {programs.map((program, index) => (
        <ProgramCardItem key={`${program.title}-${index}`} program={program} />
      ))}
    </div>
  );
}

function ProgramCardItem({ program }: { program: ProgramCard }) {
  return (
    <div className="group relative h-[430px] rounded-[18px] overflow-hidden cursor-pointer bg-neutral-900">
      <Image
        src={program.src}
        alt={program.alt}
        fill
        className="object-cover brightness-[0.78] group-hover:brightness-[0.60] group-hover:scale-105 transition-all duration-500"
        sizes="(max-width: 768px) 100vw, 33vw"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent group-hover:from-black/80 transition-all duration-500" />

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-center p-5 w-full text-white ">
        <p className="font-display text-[28px] font-medium leading-tight">
          {program.title}
        </p>

        {program.subtitle && <p className="mt-1 text-sm">{program.subtitle}</p>}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────
// MAIN COMPONENT
// ─────────────────────────────────────────────

export default function SectionBlock(props: SectionBlockProps) {
  const { title, subtitle, ctaLabel, onCtaClick } = props;

  return (
    <section
      className="
        w-full bg-white rounded-[28px] max-md:px-7 max-md:py-9
      ">
      <div className="wrapper">
        <SectionHeader
          title={title}
          subtitle={subtitle}
          ctaLabel={ctaLabel}
          onCtaClick={onCtaClick}
        />

        {props.layout === 'split' ? (
          <SplitGallery images={props.images} />
        ) : (
          <ProgramCards programs={props.programs} />
        )}
      </div>
    </section>
  );
}
