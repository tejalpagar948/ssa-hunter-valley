'use client';

import React from 'react';
import { X, Activity } from 'lucide-react';
import RegistrationForm from './RegistrationForm';

type Props = {
  isOpen: boolean;
  onClose: () => void;
  serverError: string | null;
  formData: any;
  isSubmitting: boolean;
  handleInputChange: (e: any) => void;
  handleFormSubmit: (e: any) => void;
};

export default function RegistrationModal({
  isOpen,
  onClose,
  serverError,
  formData,
  isSubmitting,
  handleInputChange,
  handleFormSubmit,
}: Props) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
      <div className="relative w-full max-w-lg bg-slate-900 text-white rounded-2xl p-6">
        {/* Close */}
        <button onClick={onClose} className="absolute top-3 right-3">
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-5">
          <h2 className="flex items-center gap-2 text-xl font-bold">
            <Activity className="h-5 w-5 text-lime-400" />
            Registration
          </h2>
        </div>

        {/* Error */}
        {serverError && (
          <p className="text-red-400 text-sm mb-3">{serverError}</p>
        )}

        {/* Form */}
        <RegistrationForm
          formData={formData}
          isSubmitting={isSubmitting}
          handleInputChange={handleInputChange}
          handleFormSubmit={handleFormSubmit}
        />
      </div>
    </div>
  );
}
