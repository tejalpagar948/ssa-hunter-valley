import React from 'react';
import Image from 'next/image';

type ConnectivityItem = {
  label: string;
  distance: string;
};

const connectivityItems: ConnectivityItem[] = [
  { label: 'Hunter Valley Golf And Country Club', distance: '220m' },
  { label: 'Rydges Resort Hunter Valley', distance: '550m' },
  { label: 'Cressnock Airport', distance: '1.7km' },
  { label: 'Cressnock CBD', distance: '7km' },
  { label: 'Nulkaba Public School', distance: '4.8km' },
  { label: 'Cressnock Hospital', distance: '7.3km' },
  { label: 'Mcdonalds, KFC, Oporto', distance: '7km' },
];

// Single reusable map-pin SVG for all items
const MapPinIcon = () => (
  <Image
    src="assets/icons/golf-icon.svg"
    alt="Location Pin"
    width={18}
    height={22}
    priority
  />
);

export default function SSAConnectivity() {
  return (
    <div className="w-full font-sans overflow-hidden shadow-2xl">
      <div className="flex flex-col md:flex-row w-full min-h-[340px]">
        {/* LEFT PANEL */}
        <div
          className="relative flex flex-col justify-center px-7 py-8 md:px-9 md:py-10 w-full md:w-[42%] lg:w-[40%] min-h-[360px] md:min-h-0"
          style={{
            background:
              'linear-gradient(160deg, #2d6a2d 0%, #1e4d1e 40%, #163b16 100%)',
          }}>
          {/* Subtle texture overlay */}
          <div
            className="absolute inset-0 opacity-10 pointer-events-none"
            style={{
              backgroundImage: `radial-gradient(circle at 20% 50%, rgba(255,255,255,0.08) 0%, transparent 60%),
                                radial-gradient(circle at 80% 20%, rgba(255,255,255,0.05) 0%, transparent 50%)`,
            }}
          />

          {/* LAUNCHING badge */}
          <p
            className="text-[25px] tracking-[0.22em] uppercase mb-4 relative z-10"
            style={{ color: 'rgba(255,255,255,0.65)' }}>
            Launching
          </p>

          {/* Title */}
          <h4 className="relative z-10 mb-5 text-[30px] md:text-[40px] font-bold leading-tight text-white">
            Signature Slam Academy
            <br />
            Hunter Valley
          </h4>

          {/* Subtitle */}
          <p className="relative z-10 mb-4 text-sm md:text-lg font-medium text-white mb-8">
            SSA Connectivity
          </p>

          {/* Connectivity items */}
          <ul className="flex flex-col gap-[25px] relative z-10">
            {connectivityItems.map((item, i) => (
              <li key={i} className="flex items-center gap-3">
                {/* Single shared icon */}
                <span className="flex-shrink-0 w-5 flex items-center justify-center opacity-85">
                  <MapPinIcon />
                </span>

                {/* Label */}
                <span
                  className="flex-1 text-[12.5px] font-medium truncate"
                  style={{ color: 'rgba(255,255,255,0.88)' }}>
                  {item.label}
                </span>

                {/* Dotted line */}
                <span
                  className="flex-shrink-0 mx-1"
                  style={{
                    flex: '0 1 60px',
                    borderBottom: '1.5px dotted rgba(255,255,255,0.3)',
                    minWidth: '28px',
                  }}
                />

                {/* Distance */}
                <span
                  className="flex-shrink-0 text-[12px] font-semibold tabular-nums"
                  style={{
                    color: 'rgba(255,255,255,0.9)',
                    minWidth: '36px',
                    textAlign: 'right',
                  }}>
                  {item.distance}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT PANEL — aerial photo */}
        <div className="relative w-full md:w-[58%] lg:w-[60%] min-h-[240px] md:min-h-0 overflow-hidden">
          <Image
            src="/assets/images/gulf.png"
            alt="Hunter Valley Golf and Country Club aerial view"
            fill
            priority
            className="object-cover object-center"
          />
          {/* Left-edge blend gradient */}
          <div
            className="absolute inset-y-0 left-0 w-16 pointer-events-none hidden md:block"
            style={{
              background:
                'linear-gradient(to right, rgba(22,59,22,0.55) 0%, transparent 100%)',
            }}
          />
        </div>
      </div>
    </div>
  );
}
