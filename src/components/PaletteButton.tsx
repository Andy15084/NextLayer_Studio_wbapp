"use client";
import { useState, ButtonHTMLAttributes } from "react";

type ButtonVariant = 'primary' | 'secondary';

interface PaletteButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
  variant?: ButtonVariant;
}

export default function PaletteButton({ 
  children, 
  className = "", 
  variant = 'primary',
  ...props 
}: PaletteButtonProps) {
  const [hover, setHover] = useState(false);

  const getStyles = () => {
    if (variant === 'secondary') {
      return {
        background: hover ? '#023047' : '#FFB703',
        border: '2px solid #FFB703',
        color: hover ? 'white' : '#023047',
      };
    }
    
    // Default primary style
    return {
      background: hover ? '#FB8500' : '#219EBC',
      border: '2px solid #219EBC',
      color: 'white',
    };
  };

  return (
    <button
      className={`font-mono px-4 py-2 sm:px-5 sm:py-3 rounded-[16px] text-base sm:text-lg transition-colors font-bold ${className}`}
      style={getStyles()}
      onMouseOver={() => setHover(true)}
      onMouseOut={() => setHover(false)}
      {...props}
    >
      {children}
    </button>
  );
} 