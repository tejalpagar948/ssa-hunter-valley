'use client';

import React from 'react';

export default function PanelWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-16 px-4 sm:px-6 lg:px-0">
      {children}
    </div>
  );
}
