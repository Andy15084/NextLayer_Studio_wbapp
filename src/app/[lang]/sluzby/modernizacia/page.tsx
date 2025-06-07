"use client";

import React, { useState, useEffect, useRef } from 'react';
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import PaletteButton from "@/components/PaletteButton";
import Image from "next/image";
import Link from 'next/link';
import { useTranslation } from "@/lib/TranslationContext";

interface ExpandableCardProps {
  title: string;
  content: string;
  isExpanded: boolean;
  onClick: () => void;
  isEven: boolean;
  onVisibilityChange: (isVisible: boolean) => void;
}

function ExpandableCard({ title, content, isExpanded, onClick, isEven, onVisibilityChange }: ExpandableCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const expandTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          // Auto-expand when in view
          if (expandTimeoutRef.current) clearTimeout(expandTimeoutRef.current);
          expandTimeoutRef.current = setTimeout(() => {
            onVisibilityChange(true);
          }, 200); // slight delay for smoothness
        } else {
          // Auto-collapse when out of view
          if (expandTimeoutRef.current) clearTimeout(expandTimeoutRef.current);
          expandTimeoutRef.current = setTimeout(() => {
            onVisibilityChange(false);
          }, 200);
        }
      },
      {
        threshold: 0.3,
        rootMargin: '0px'
      }
    );

    const currentElement = cardRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      const element = currentElement;
      if (element) observer.unobserve(element);
      if (expandTimeoutRef.current) clearTimeout(expandTimeoutRef.current);
    };
  }, [onVisibilityChange]);

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onClick();
  };

  return (
    <div 
      ref={cardRef}
      className={`bg-white rounded-2xl shadow-xl p-8 cursor-pointer transition-all duration-700 w-full max-w-3xl ${
        isExpanded ? 'hover:shadow-2xl' : 'hover:shadow-lg'
      } ${isEven ? 'md:ml-auto' : 'md:mr-auto'}`}
      onClick={handleClick}
    >
      <div className="flex justify-between items-center">
        <h2 className="font-heading text-2xl md:text-3xl font-bold text-[#023047]">{title}</h2>
        <svg
          className={`w-6 h-6 text-[#023047] transition-transform duration-700 ease-in-out ${
            isExpanded ? 'rotate-180' : ''
          }`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </div>
      <div 
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isExpanded ? 'max-h-[500px] mt-6 opacity-100' : 'max-h-0 opacity-0'
        }`}
        style={{
          transitionProperty: 'all',
          transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)'
        }}
      >
        <p className="font-mono text-lg text-[#023047]">{content}</p>
      </div>
    </div>
  );
}

interface TextSectionProps {
  title: string;
  content: string;
  isEven: boolean;
  illustration: string;
}

interface TextSectionContent {
  type: 'text';
  title: string;
  content: string;
  illustration: string;
}

interface CardContent {
  type: 'card';
  title: string;
  content: string;
}

type ContentItem = TextSectionContent | CardContent;

function TextSection({ title, content, isEven, illustration }: TextSectionProps) {
  return (
    <div className={`w-full max-w-5xl ${isEven ? 'md:ml-auto' : 'md:mr-auto'} px-0 md:px-0`}>
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className={`flex-1 ${isEven ? 'md:order-2' : 'md:order-1'}`}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#023047] mb-4">{title}</h2>
          <p className="font-mono text-xl text-[#023047] leading-relaxed">{content}</p>
        </div>
        <div className={`flex-1 ${isEven ? 'md:order-1' : 'md:order-2'} flex justify-center`}>
          <Image 
            src={illustration}
            alt={title}
            width={500}
            height={400}
            className="w-full max-w-lg h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}

export default function ModernizaciaPage() {
  const { t, currentLanguage } = useTranslation();
  const [expandedCards, setExpandedCards] = useState<Set<number>>(new Set());
  const [userInteractedCards, setUserInteractedCards] = useState<Set<number>>(new Set());

  const handleCardClick = (index: number) => {
    setUserInteractedCards(prev => {
      const newSet = new Set(prev);
      newSet.add(index);
      return newSet;
    });

    setExpandedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(index)) {
        newSet.delete(index);
      } else {
        newSet.add(index);
      }
      return newSet;
    });
  };

  const handleVisibilityChange = (index: number, isVisible: boolean) => {
    // Don't auto-expand/collapse if user has interacted with this card
    if (userInteractedCards.has(index)) {
      return;
    }

    if (isVisible) {
      setExpandedCards(prev => new Set([...prev, index]));
    } else {
      // Only collapse auto-expanded cards
      if (!userInteractedCards.has(index)) {
        setExpandedCards(prev => {
          const newExpanded = new Set(prev);
          newExpanded.delete(index);
          return newExpanded;
        });
      }
    }
  };

  const content: ContentItem[] = [
    {
      type: 'text',
      title: t('modernization.whyModernize.title'),
      content: t('modernization.whyModernize.content'),
      illustration: "/precomodernizovat-webstranku.png"
    },
    {
      type: 'card',
      title: t('modernization.outdatedDesign.title'),
      content: t('modernization.outdatedDesign.content')
    },
    {
      type: 'text',
      title: t('modernization.howWeWork.title'),
      content: t('modernization.howWeWork.content'),
      illustration: "/ako-pracujeme.png"
    },
    {
      type: 'card',
      title: t('modernization.slowLoading.title'),
      content: t('modernization.slowLoading.content')
    },
    {
      type: 'text',
      title: t('modernization.modernTech.title'),
      content: t('modernization.modernTech.content'),
      illustration: "/moderne-technologie.png"
    },
    {
      type: 'card',
      title: t('modernization.poorMobile.title'),
      content: t('modernization.poorMobile.content')
    },
    {
      type: 'text',
      title: t('modernization.seoOptimization.title'),
      content: t('modernization.seoOptimization.content'),
      illustration: "/seo-optimalizacia-modernizacia.png"
    },
    {
      type: 'card',
      title: t('modernization.lackingSEO.title'),
      content: t('modernization.lackingSEO.content')
    },
    {
      type: 'text',
      title: t('modernization.userExperience.title'),
      content: t('modernization.userExperience.content'),
      illustration: "/user-experience.png"
    },
    {
      type: 'card',
      title: t('modernization.complexNavigation.title'),
      content: t('modernization.complexNavigation.content')
    },
    {
      type: 'text',
      title: t('modernization.security.title'),
      content: t('modernization.security.content'),
      illustration: "/bezpecnost.png"
    },
    {
      type: 'card',
      title: t('modernization.securityVulnerabilities.title'),
      content: t('modernization.securityVulnerabilities.content')
    }
  ];

  return (
    <main className="p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 md:pt-24 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start justify-between px-2 md:ml-10 md:mt-10 min-h-[280px] md:min-h-[320px]">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-center md:text-left">
            {t('modernization.title')}
          </h1>
          <p className="font-mono text-xl md:text-2xl text-[#023047] mb-6 text-center md:text-left max-w-2xl">
            {t('modernization.heroTitle')}
          </p>
          <p className="font-mono text-lg text-[#023047] mb-6 text-center md:text-left max-w-2xl">
            {t('modernization.heroSubtitle')}
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-start w-full">
          <Image 
            src="/modernizacia-webstranky.png" 
            alt={t('modernization.title')}
            width={600} 
            height={600} 
            className="w-full max-w-xl h-auto object-contain" 
          />
        </div>
      </section>

      {/* Content sections */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pb-20">
        <div className="space-y-20">
          {content.map((item, index) => (
            <AnimatedOnScroll key={index} animation="fade-up">
              {item.type === 'text' ? (
                <TextSection
                  title={item.title}
                  content={item.content}
                  isEven={index % 2 === 1}
                  illustration={item.illustration}
                />
              ) : (
                <ExpandableCard
                  title={item.title}
                  content={item.content}
                  isExpanded={expandedCards.has(index)}
                  onClick={() => handleCardClick(index)}
                  isEven={index % 2 === 1}
                  onVisibilityChange={(isVisible) => handleVisibilityChange(index, isVisible)}
                />
              )}
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-[#023047] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('modernization.ctaTitle')}
          </h2>
          <p className="font-mono text-lg text-white mb-8 max-w-2xl mx-auto">
            {t('modernization.ctaDescription')}
          </p>
          <Link href={`/${currentLanguage}/kontakt`}>
            <PaletteButton variant="secondary">
              {t('modernization.ctaButton')}
            </PaletteButton>
          </Link>
        </div>
      </section>
    </main>
  );
} 