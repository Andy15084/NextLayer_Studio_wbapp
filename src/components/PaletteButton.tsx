"use client";
import { useState, ButtonHTMLAttributes } from "react";

type ButtonVariant = 'primary' | 'secondary' | 'marketing';

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
    if (variant === 'marketing') {
      return {
        background: hover ? '#00e6c7' : '#00ffdd',
        border: '2px solid #00ffdd',
        color: '#023047',
      };
    }
    
    // Both primary and secondary use yellow style now
    return {
      background: hover ? '#023047' : '#FFB703',
      border: '2px solid #FFB703',
      color: hover ? 'white' : '#023047',
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