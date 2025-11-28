import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'white' | 'green' | 'dark' | 'gray';
}

export const Card: React.FC<CardProps> = ({ children, className = '', variant = 'white' }) => {
  const bgColors = {
    white: 'bg-[#fbfbfb]',
    green: 'bg-[#23b260]',
    dark: 'bg-[#18293f]',
    gray: 'bg-[#d1d2d4]',
  };

  const textColors = {
    white: 'text-[#18293f]',
    green: 'text-white',
    dark: 'text-white',
    gray: 'text-[#18293f]',
  };

  return (
    <div 
      className={`
        ${bgColors[variant]} 
        ${textColors[variant]}
        border border-[#18293f] 
        rounded-[30px] md:rounded-[45px] 
        shadow-[0px_5px_0px_0px_#18293f] 
        p-6 md:p-10 
        ${className}
      `}
    >
      {children}
    </div>
  );
};
