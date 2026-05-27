'use client';

import React, { useState } from 'react';

interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    quote:
      'We have created an environment ideal for building craft. Our goal is to be recognized as the best tennis performance centre in the world.',
    author: 'John Doe',
    role: 'Chairman',
  },
];

export default function TestimonialSection() {
  const [activeIndex] = useState(0);
  const current = TESTIMONIALS[activeIndex];

  return (
    <section className="w-full px-6 sm:px-12 md:px-24 bg-[url('/assets/images/testimonial-bg.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-white text-[22px] sm:text-[28px] md:text-[34px] font-light leading-normal">
          “{current.quote}”
        </p>

        <div className="w-full h-px bg-white/40 my-8" />

        <div className="text-center md:text-left">
          <span className="text-white text-lg sm:text-xl font-semibold">
            {current.author}
          </span>
          <p className="text-white/70 text-xs sm:text-sm uppercase tracking-widest mt-1">
            {current.role}
          </p>
        </div>
      </div>
    </section>
  );
}
