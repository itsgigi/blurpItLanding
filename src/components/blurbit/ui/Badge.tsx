import React from 'react';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, className = '' }) => {
  return (
    <span 
      className={`
        inline-block
        bg-[#23b260] 
        text-white 
        px-4 py-1 
        rounded-[7px] 
        font-medium text-lg
        border border-[#18293f]
        shadow-[2px_2px_0px_0px_#18293f]
        ${className}
      `}
    >
      {children}
    </span>
  );
};
