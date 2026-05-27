'use client';

import { useState, useEffect, useCallback, FormEvent, memo } from 'react';
import Image from 'next/image';
import RegistrationModal from '../formUI/RegistrationModal';
import HeroSidebar from '@/components/elements/HeroSidebar';
import { Check } from 'lucide-react';
import heroBanner from '../../../public/assets/images/hero-banner.gif';

interface RegistrationForm {
  fullName: string;
  email: string;
  phone: string;
  sport: 'Tennis' | 'Padel' | 'Squash' | 'Badminton' | '';
  level: 'Beginner' | 'Intermediate' | 'Advanced' | '';
  agreedToTerms: boolean;
}

interface MatchScore {
  id: string;
  court: string;
  player1: string;
  player2: string;
  score: string;
  status: 'live' | 'completed' | 'delayed';
}

interface TournamentResult {
  id: string;
  event: string;
  winner: string;
  runnerUp: string;
  score: string;
  date: string;
}

type TabType = 'weather' | 'matches' | 'score' | null;

const INITIAL_FORM: RegistrationForm = {
  fullName: '',
  email: '',
  phone: '',
  sport: '',
  level: '',
  agreedToTerms: false,
};

const MOCK_WEATHER = {
  temp: 19,
  unit: '°C',
  location: 'Hunter Valley',
  condition: 'Clear, Cool Breeze',
  time: 'Saturday, 8:00 PM',
};

const MOCK_MATCHES: MatchScore[] = [
  {
    id: 'm1',
    court: 'Court 1',
    player1: 'Marcus Aurelius',
    player2: 'Lucius Verus',
    score: '6-4, 4-3',
    status: 'live',
  },
  {
    id: 'm2',
    court: 'Court 3',
    player1: 'Elena Rostova',
    player2: 'Serena Vane',
    score: '3-6, 5-5',
    status: 'live',
  },
  {
    id: 'm3',
    court: 'Court 5',
    player1: 'Alex Mercer',
    player2: 'Chris Redfield',
    score: '7-5, 2-1',
    status: 'live',
  },
];

const MOCK_SCORES: TournamentResult[] = [
  {
    id: 'r1',
    event: 'SSA Hunter Valley Open',
    winner: 'Julius Caesar',
    runnerUp: 'Pompey Magnus',
    score: '6-3, 6-4',
    date: 'May 24, 2026',
  },
  {
    id: 'r2',
    event: 'Under-21 Regional Cup',
    winner: 'Diana Prince',
    runnerUp: 'Barbara Minerva',
    score: '6-7, 6-2, 6-1',
    date: 'May 23, 2026',
  },
];

const TIME_FORMAT: Intl.DateTimeFormatOptions = {
  weekday: 'long',
  hour: 'numeric',
  minute: '2-digit',
  hour12: true,
};

async function submitRegistration(
  data: RegistrationForm
): Promise<{ success: boolean; leadId?: string; error?: string }> {
  const { fullName, email, phone, sport, level } = data;

  if (!fullName || !email || !phone || !sport || !level) {
    return { success: false, error: 'All fields are required.' };
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('SFDC Lead Payload →', {
        oid: '00D80000000abc123',
        retURL: 'https://ssahuntervalley.com/thank-you',
        first_name: fullName.split(' ')[0] ?? '',
        last_name: fullName.split(' ').slice(1).join(' ') || 'Attendee',
        email,
        phone,
        SFDC_Sport__c: sport,
        SFDC_Skill_Level__c: level,
        LeadSource: 'Website Registration Modal',
      });

      resolve({
        success: true,
        leadId: `LID-${Math.random()
          .toString(36)
          .substring(2, 11)
          .toUpperCase()}`,
      });
    }, 1500);
  });
}

export default function HeroSection() {
  const [activeTab, setActiveTab] = useState<TabType>('weather');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [formData, setFormData] = useState<RegistrationForm>(INITIAL_FORM);
  const [currentTime, setCurrentTime] = useState(MOCK_WEATHER.time);

  useEffect(() => {
    const tick = () =>
      setCurrentTime(new Date().toLocaleDateString('en-US', TIME_FORMAT));
    tick();
    const id = setInterval(tick, 60_000);
    return () => clearInterval(id);
  }, []);

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
      const { name, value, type } = e.target;
      setFormData((prev) => ({
        ...prev,
        [name]:
          type === 'checkbox' ? (e.target as HTMLInputElement).checked : value,
      }));
    },
    []
  );

  const handleModalClose = useCallback(() => {
    setIsModalOpen(false);
    setSubmitSuccess(false);
    setServerError(null);
    setFormData(INITIAL_FORM);
  }, []);

  const handleFormSubmit = useCallback(
    async (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setIsSubmitting(true);
      setServerError(null);

      try {
        const res = await submitRegistration(formData);
        if (res.success) {
          setSubmitSuccess(true);
          setFormData(INITIAL_FORM);
        } else {
          setServerError(
            res.error ?? 'Submission failed. Please check your data.'
          );
        }
      } catch {
        setServerError('System connection timed out. Please try again later.');
      } finally {
        setIsSubmitting(false);
      }
    },
    [formData]
  );

  return (
    <section className="relative min-h-screen w-full overflow-x-hidden bg-slate-950 font-sans border-1 border-gray-100 text-white flex flex-col justify-between">
      <div className="absolute inset-0 z-0">
        <Image
          src={heroBanner}
          alt="SSA Hunter Valley Tennis Courts Sunset"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-90"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-black/30 to-black/60" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(245,158,11,0.25),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.15),transparent_60%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen w-[90vw] flex-col items-center justify-center py-[6vw]">
        <div className="flex flex-col items-center text-center xl:max-w-3xl flex-grow justify-center py-12 pb-30">
          <div className="mb-2">
            <h1 className="block text-[clamp(13px,1.2vw,14px)] xl:text-[18px] font-bold uppercase tracking-[0.4em] text-white/95">
              SSA Hunter Valley
            </h1>
          </div>

          <h2 className="flex flex-col items-center mb-10 text-[clamp(24px,3.2vw,42px)] xl:text-[50px]">
            <span className="font-light leading-tight tracking-[0.05em] text-white">
              GROW YOUR GAME WITH THE
            </span>
            <span className="font-bold font-black leading-none tracking-wide text-white uppercase mt-2 pb-4 border-b-2 border-white/80">
              PROFESSIONALS
            </span>
          </h2>

          <div className="relative w-full max-w-[650px] py-1 px-8 mb-10 overflow-hidden">
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(180,220,80,0)_0%,rgba(180,220,80,0.18)_20%,rgba(220,255,120,0.25)_50%,rgba(180,220,80,0.18)_80%,rgba(180,220,80,0)_100%)]" />
            <div className="absolute inset-0 border-y border-white/10" />
            <p className="relative flex items-center justify-center text-[clamp(12px,1.1vw,13px)] xl:text-[18px] font-light tracking-[0.4em] uppercase text-white">
              Adopt<span className="mx-5 text-[35px] leading-none">•</span>
              Nurture<span className="mx-5 text-[35px] leading-none">•</span>
              Deliver
            </p>
          </div>

          <button
            onClick={() => setIsModalOpen(true)}
            className="px-8 py-3.5 rounded-full border border-[#99B81B] bg-black/15 text-white text-xs sm:text-sm font-normal tracking-wide transition-all duration-300 hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)] active:scale-95">
            Register Now
          </button>
        </div>
      </div>

      <HeroSidebar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        currentTime={currentTime}
        weather={MOCK_WEATHER}
        matches={MOCK_MATCHES}
        scores={MOCK_SCORES}
      />

      <div
        role="button"
        aria-label="Scroll to next section"
        tabIndex={0}
        onKeyDown={(e) =>
          e.key === 'Enter' &&
          document
            .getElementById('tennisAcademyAbout')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        onClick={() =>
          document
            .getElementById('tennisAcademyAbout')
            ?.scrollIntoView({ behavior: 'smooth' })
        }
        className="absolute bottom-0 left-1/2 z-10 -translate-x-1/2 hidden md:block cursor-pointer">
        <Image
          src="/assets/icons/arrow down.svg"
          alt="Scroll Down"
          width={20}
          height={20}
          className="animate-bounce"
        />
      </div>

      <RegistrationModal
        isOpen={isModalOpen}
        onClose={handleModalClose}
        serverError={serverError}
        formData={formData}
        isSubmitting={isSubmitting}
        handleInputChange={handleInputChange}
        handleFormSubmit={handleFormSubmit}
      />
    </section>
  );
}
