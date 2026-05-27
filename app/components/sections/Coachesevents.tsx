import Image from 'next/image';
import Link from 'next/link';

type BannerCard = {
  id: number;
  title: string;
  description: string;
  href: string;
  image: string;
  imageAlt: string;
  sideImage?: string;
  theme: 'dark' | 'lime';
};

const cards: BannerCard[] = [
  {
    id: 1,
    title: 'Our Coaches',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    href: '/coaches',
    image: '/assets/images/our coach.png',
    imageAlt: 'Tennis coach on court',
    theme: 'dark',
  },
  {
    id: 2,
    title: 'Events',
    description:
      "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
    href: '/events',
    image: '',
    sideImage: '/assets/images/tenis.png', // shown in yellow-bordered box
    imageAlt: 'Tennis player at events',
    theme: 'lime',
  },
];

function ArrowRight() {
  return (
    <svg
      width="32"
      height="12"
      viewBox="0 0 32 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg">
      <path
        d="M0 6H30M30 6L25 1M30 6L25 11"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function BannerCard({ card }: { card: BannerCard }) {
  const isLime = card.theme === 'lime';

  return (
    <div className="relative flex-1 min-h-[200px] sm:min-h-[220px] overflow-hidden group">
      {!isLime && (
        <Image
          src={card.image}
          alt={card.imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover object-center transition-transform duration-700 group-hover:scale-105 opacity-60"
          priority
        />
      )}

      <div
        className="absolute inset-0"
        style={{
          backgroundColor: isLime ? '#9ab825' : 'rgba(0,0,0,0.45)',
        }}
      />

      {isLime && (
        <div
          className="absolute right-6 top-4 bottom-4 w-[38%] pointer-events-none"
          aria-hidden="true">
          <div className="absolute inset-0 overflow-hidden rounded-sm">
            <Image
              src={card.sideImage ?? card.image}
              alt=""
              fill
              sizes="20vw"
              className="object-cover object-top opacity-70"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 flex flex-col justify-between h-full px-8 sm:px-18 py-7 sm:py-16">
        <div className="flex flex-col gap-3">
          <h2 className="text-white text-[1.55rem] sm:text-[1.75rem] font-extrabold leading-tight inline-flex items-start gap-1">
            {card.title}
            <span
              className="inline-block w-2 h-2 rounded-full bg-white mt-2 flex-shrink-0"
              aria-hidden="true"
            />
          </h2>
          <p className="text-white/80 text-[0.8rem] sm:text-[0.85rem] leading-relaxed max-w-[260px]">
            {card.description}
          </p>
        </div>

        <Link
          href={card.href}
          className="inline-flex items-center gap-3 text-white text-[0.8rem] font-semibold mt-6 hover:gap-5 transition-all duration-300">
          Read More
          <ArrowRight />
        </Link>
      </div>
    </div>
  );
}

export default function CoachesEvents({
  cards: items = cards,
}: {
  cards?: BannerCard[];
}) {
  return (
    <div className="w-full flex flex-col sm:flex-row">
      {items.map((card) => (
        <BannerCard key={card.id} card={card} />
      ))}
    </div>
  );
}
