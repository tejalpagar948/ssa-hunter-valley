'use client';
import SectionBlock from '@/components/elements/SectionBlock';

export default function ProgramsSection() {
  return (
    <SectionBlock
      layout="cards"
      title="Programs"
      subtitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
      ctaLabel="Register Now"
      onCtaClick={() => console.log('Register clicked')}
      programs={[
        {
          src: '/assets/images/Programs-1.png',
          alt: 'Overhead view of green tennis courts',
          title: 'Academy',
          subtitle: 'Live and train with us',
        },
        {
          src: '/assets/images/Programs-2.png',
          alt: 'Group of players at tennis camp',
          title: 'Camps',
          subtitle: 'Train the right way with us',
        },
        {
          src: '/assets/images/Programs-3.jpg',
          alt: 'Player performing on outdoor court',
          title: 'Performance',
          subtitle: 'Elevate your game with us',
        },
      ]}
    />
  );
}
