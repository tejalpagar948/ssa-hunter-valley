import React from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'hero';

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const baseStyles =
  'px-8 py-2.5 rounded-full text-xs sm:text-sm font-medium tracking-wide transition-all duration-300 active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed mx-auto lg:mx-0';

const variants: Record<ButtonVariant, string> = {
  primary: 'bg-[#99B81B] text-white hover:opacity-90',

  secondary: 'bg-white text-black hover:bg-gray-100',

  outline:
    'bg-transparent border border-lime-600 text-white hover:bg-white hover:text-black',

  hero: 'border border-[#99B81B] bg-black/15 text-white hover:bg-white hover:text-black hover:border-white hover:shadow-[0_0_15px_rgba(255,255,255,0.2)]',
};

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  onClick,
  className = '',
  type = 'button',
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`${baseStyles} ${variants[variant]} ${className}`}>
      {children}
    </button>
  );
};

export default Button;
