"use client";

import { useEffect, useRef, ReactNode } from 'react';

interface AnimatedOnScrollProps {
  children: ReactNode;
  className?: string;
  animation?: 'fade-up' | 'fade-down' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
}

export default function AnimatedOnScroll({ 
  children, 
  className = '', 
  animation = 'fade-up',
  delay = 0 
}: AnimatedOnScrollProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('animate-in');
            }, delay);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay]);

  const getAnimationClasses = () => {
    const baseClasses = 'opacity-0 transition-all duration-700 ease-out';
    const animationClasses = {
      'fade-up': 'translate-y-8',
      'fade-down': '-translate-y-8',
      'fade-left': 'translate-x-8',
      'fade-right': '-translate-x-8',
      'scale': 'scale-95'
    };
    
    return `${baseClasses} ${animationClasses[animation]}`;
  };

  return (
    <div 
      ref={elementRef} 
      className={`${getAnimationClasses()} ${className} [&.animate-in]:opacity-100 [&.animate-in]:translate-y-0 [&.animate-in]:translate-x-0 [&.animate-in]:scale-100`}
    >
      {children}
    </div>
  );
} 