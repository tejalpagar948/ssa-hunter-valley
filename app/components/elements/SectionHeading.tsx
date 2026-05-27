'use client';

import React from 'react';

export default function SectionHeading({
  title,
  description,
}: {
  title: string;
  description?: string | null;
}) {
  return (
    <div className="inline-block mb-6 self-center lg:self-start text-center lg:text-left">
      <h3 className="relative inline-flex items-center gap-2 text-[clamp(28px,3.5vw,36px)] font-bold text-gray-900 tracking-tight leading-none">
        {title}
        <span className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 h-2 w-2 rounded-full bg-[#8eb421]" />
      </h3>

      {description && (
        <p className="text-[clamp(4px,1.5vw,16px)] text-gray-600 leading-relaxed mt-3 max-w-2xl">
          {description}
        </p>
      )}
    </div>
  );
}
