'use client';

import React, { useCallback, useMemo } from 'react';
import { Trophy, CloudSun, Swords, Medal } from 'lucide-react';

// ==========================================
// TYPES
// ==========================================

interface MatchScore {
  id: string;
  court: string;
  player1: string;
  player2: string;
  score: string;
}

interface TournamentResult {
  id: string;
  event: string;
  winner: string;
  runnerUp: string;
  score: string;
  date: string;
}

type TabType = 'weather' | 'matches' | 'score';

interface HeroSidebarProps {
  activeTab: TabType | null;
  setActiveTab: (tab: TabType | null) => void;
  currentTime: string;
  weather: {
    temp: number;
    unit: string;
    location: string;
  };
  matches: MatchScore[];
  scores: TournamentResult[];
}

// ==========================================
// CONSTANTS
// ==========================================

const TABS: ReadonlyArray<{
  id: TabType;
  label: string;
  mobileLabel: string;
  icon: React.ReactNode;
}> = [
  {
    id: 'weather',
    label: 'Weather',
    mobileLabel: 'Weather',
    icon: <CloudSun className="w-4 h-4" />,
  },
  {
    id: 'matches',
    label: 'Ongoing Matches',
    mobileLabel: 'Matches',
    icon: <Swords className="w-4 h-4" />,
  },
  {
    id: 'score',
    label: 'Score',
    mobileLabel: 'Score',
    icon: <Medal className="w-4 h-4" />,
  },
];

// ==========================================
// INLINE ICONS (UNCHANGED)
// ==========================================

const ChevronDoubleLeft = () => (
  <svg
    className="w-3.5 h-3.5 text-[#D1F04F] inline-block mr-2 stroke-[3px]"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor">
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5"
    />
  </svg>
);

const PinIcon = () => (
  <svg
    className="w-3.5 h-3.5 text-[#D1F04F] inline-block"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeWidth={2}>
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
  </svg>
);

// ==========================================
// PANELS
// ==========================================

const WeatherPanel = ({
  weather,
  currentTime,
}: {
  weather: HeroSidebarProps['weather'];
  currentTime: string;
}) => (
  <div className="w-full bg-[#99B81B47]/85 backdrop-blur-md px-6 py-5 text-white shadow-2xl transition-all duration-300">
    <div className="flex justify-between items-end">
      <div className="flex flex-col gap-2">
        <div className="flex items-center gap-1.5 text-white/95">
          <PinIcon />
          <span className="text-sm font-extrabold tracking-wide">
            {weather.location}
          </span>
        </div>
        <div className="flex items-start leading-none">
          <span className="text-[52px] font-black tracking-tighter leading-none">
            {weather.temp}
          </span>
          <span className="text-2xl font-light ml-0.5 mt-1">
            {weather.unit}
          </span>
        </div>
      </div>

      <div className="text-right flex flex-col justify-end pb-1">
        <p className="text-base font-extrabold leading-tight">Weather</p>
        <p className="text-xs font-normal text-white/80 mt-2">{currentTime}</p>
      </div>
    </div>
  </div>
);

const MatchesPanel = ({ matches }: { matches: MatchScore[] }) => (
  <div className="w-full space-y-3 rounded-sm bg-black/75 backdrop-blur-md p-4 border border-white/5 shadow-2xl transition-all duration-300">
    {matches.map((match) => (
      <div
        key={match.id}
        className="rounded-sm bg-white/5 p-3 border border-white/5 hover:bg-white/10 transition-colors duration-200">
        <div className="flex justify-between mb-1.5">
          <span className="text-[10px] font-bold text-lime-400 uppercase tracking-widest">
            {match.court}
          </span>

          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-red-500 animate-ping" />
            <span className="text-[9px] font-semibold text-red-400 uppercase">
              Live
            </span>
          </div>
        </div>

        <div className="flex justify-between items-center">
          <div className="text-xs font-medium text-white/95">
            <p>{match.player1}</p>
            <p className="mt-0.5 text-white/60">vs {match.player2}</p>
          </div>

          <span className="font-mono text-xs font-bold text-lime-300 bg-black/40 px-2 py-1 rounded">
            {match.score}
          </span>
        </div>
      </div>
    ))}
  </div>
);

const ScorePanel = ({ scores }: { scores: TournamentResult[] }) => (
  <div className="w-full space-y-3 rounded-sm bg-black/75 backdrop-blur-md p-4 border border-white/5 shadow-2xl transition-all duration-300">
    {scores.map((result) => (
      <div
        key={result.id}
        className="rounded-sm bg-white/5 p-3 border border-white/5 hover:bg-white/10 transition-colors duration-200">
        <p className="text-[10px] font-bold text-white/50 uppercase tracking-wider mb-1">
          {result.event}
        </p>

        <div className="flex justify-between items-start mt-1">
          <div>
            <div className="flex items-center gap-1">
              <Trophy className="w-3 h-3 text-yellow-400" />
              <span className="text-xs font-bold text-white">
                {result.winner}
              </span>
            </div>

            <p className="text-[11px] text-white/60 ml-4">
              def. {result.runnerUp}
            </p>
          </div>

          <div className="text-right">
            <p className="font-mono text-xs font-bold text-lime-300">
              {result.score}
            </p>
            <p className="text-[9px] text-white/40 mt-1">{result.date}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
);

// ==========================================
// MAIN COMPONENT
// ==========================================

export default function HeroSidebar({
  activeTab,
  setActiveTab,
  currentTime,
  weather,
  matches,
  scores,
}: HeroSidebarProps) {
  const handleTabToggle = useCallback(
    (id: TabType) => {
      setActiveTab(activeTab === id ? null : id);
    },
    [activeTab, setActiveTab]
  );

  const renderContent = useMemo(() => {
    switch (activeTab) {
      case 'weather':
        return <WeatherPanel weather={weather} currentTime={currentTime} />;
      case 'matches':
        return <MatchesPanel matches={matches} />;
      case 'score':
        return <ScorePanel scores={scores} />;
      default:
        return null;
    }
  }, [activeTab, weather, currentTime, matches, scores]);

  return (
    <>
      {/* Desktop */}
      <aside className="absolute hidden md:block right-0 bottom-5 w-[280px] z-20">
        <div className="space-y-4">
          {TABS.map((tab) => (
            <div key={tab.id} className="flex flex-col items-end">
              <button
                onClick={() => handleTabToggle(tab.id)}
                className="flex items-center justify-end w-full py-2 group focus:outline-none">
                <span className="flex items-center text-xs font-black tracking-wider text-white uppercase transition-opacity duration-300 group-hover:opacity-90">
                  <ChevronDoubleLeft />
                  {tab.label}
                </span>
                <div className="h-[1.5px] w-16 ml-3 bg-[#D1F04F]" />
              </button>

              {activeTab === tab.id && (
                <div className="w-full mt-2 transition-all duration-300 ease-in-out">
                  {renderContent}
                </div>
              )}
            </div>
          ))}
        </div>
      </aside>

      {/* Mobile */}
      <div className="md:hidden absolute bottom-0 left-0 right-0 z-30">
        <div
          className={`w-full px-4 pt-4 pb-2 transition-all duration-300 ease-in-out overflow-hidden ${
            activeTab ? 'max-h-[50vh] opacity-100' : 'max-h-0 opacity-0'
          }`}>
          <div className="overflow-y-auto max-h-[calc(50vh-56px)] pb-2">
            {renderContent}
          </div>
        </div>

        <div className="flex items-stretch bg-black/90 backdrop-blur-md border-t border-white/10">
          {TABS.map((tab) => {
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabToggle(tab.id)}
                className={`flex-1 flex flex-col items-center justify-center gap-1 py-3 text-[10px] font-bold uppercase tracking-widest transition-colors duration-200 ${
                  isActive
                    ? 'text-lime-400 border-t-2 border-lime-400 -mt-[2px]'
                    : 'text-white/50 border-t-2 border-transparent -mt-[2px]'
                }`}>
                <span className={isActive ? 'text-lime-400' : 'text-white/40'}>
                  {tab.icon}
                </span>
                {tab.mobileLabel}
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
