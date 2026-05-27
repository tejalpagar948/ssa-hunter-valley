import HeroSection from '@/components/sections/HeroSection';
import TennisAcademyAbout from '@/components/sections/TennisAcademyAbout';
import TestimonialSection from '@/components/sections/TestimonialSection';
import KeyFeaturesSection from '@/components/sections/KeyFeaturesSection';
import GlimpseSection from '@/components/sections/GlimpseSection';
import ProgramsSection from '@/components/sections/ProgramsSection';
import MarqueeBanner from '@/components/sections/MarqueeBanner';
import Ssaconnectivity from '@/components/sections/Ssaconnectivity';
import Meetourprofessionals from '@/components/sections/Meetourprofessionals ';
import Facilities from '@/components/sections/Facilities';
import Coachesevents from '@/components/sections/Coachesevents';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SSA Hunter Valley - Grow Your Game With The Professionals',
  description:
    'Elevate your performance at SSA Hunter Valley. Professional training, live status matches, and top-tier sports guidance.',
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <TennisAcademyAbout />
      <TestimonialSection />
      <KeyFeaturesSection />
      <GlimpseSection />
      <ProgramsSection />
      <MarqueeBanner />
      <Ssaconnectivity />
      <Meetourprofessionals />
      <Facilities />
      <Coachesevents />
    </>
  );
}
