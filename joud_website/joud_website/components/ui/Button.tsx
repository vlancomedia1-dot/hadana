import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'ghost';
  icon?: React.ReactNode;
  className?: string;
}


const Button = ({ children, variant = 'primary', icon, className = '', ...props }: ButtonProps) => {
  const baseStyles = "px-6 py-3 rounded-full font-bold transition-transform active:scale-95 flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:opacity-90",
    secondary: "bg-white text-primary border border-primary hover:bg-gray-50",
    ghost: "bg-transparent text-text-muted hover:text-primary",
  };

  return (
    <button className={`${baseStyles} ${variants[variant]} ${className}`} {...props}>
      {children}
      {icon && <span className="mr-2">{icon}</span>}
    </button>
  );
};

export default Button;