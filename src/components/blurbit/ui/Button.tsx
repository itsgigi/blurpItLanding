import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'dark';
}

export const Button: React.FC<ButtonProps> = ({ children, className = '', variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-[#23b260] text-white hover:bg-[#1a8c4c]',
    secondary: 'bg-[#d1d2d4] text-[#18293f] hover:bg-[#c0c1c3]',
    outline: 'bg-transparent text-[#18293f] border-2 border-[#18293f] hover:bg-[#18293f] hover:text-white',
    dark: 'bg-[#18293f] text-white hover:bg-[#2c3e50]',
  };

  return (
    <button 
      className={`
        px-8 py-4 
        rounded-[14px] 
        font-bold text-lg
        transition-all duration-200
        border border-[#18293f]
        shadow-[0px_4px_0px_0px_#18293f]
        active:translate-y-[2px]
        active:shadow-[0px_2px_0px_0px_#18293f]
        ${variants[variant]}
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};
