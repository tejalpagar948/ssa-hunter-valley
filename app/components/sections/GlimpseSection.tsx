'use client';
import SectionBlock from '@/components/elements/SectionBlock';

export default function GlimpseSection() {
  return (
    <SectionBlock
      layout="split"
      title="A Glimpse of Excellence"
      subtitle="Lorem ipsum has been the industry's standard dummy text ever since the 1500s."
      ctaLabel="Register Now"
      onCtaClick={() => console.log('Register clicked')}
      images={[
        {
          // Portrait — left column (narrower)
          src: '/assets/images/Glimpse-1.png',
          alt: 'Tennis player mid-serve on clay court',
        },
        {
          // Landscape — right column (wider)
          src: '/assets/images/Glimpse-2.png',
          alt: 'Aerial view of tennis complex with multiple courts',
        },
      ]}
    />
  );
}
