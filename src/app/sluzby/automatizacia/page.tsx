"use client";

import React from 'react';
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import PaletteButton from "@/components/PaletteButton";
import Link from 'next/link';
import Image from 'next/image';
import { useTranslation } from '@/lib/TranslationContext';

export default function AutomatizaciaPage() {
  const { t } = useTranslation();

const digitalizaciaCards = [
  {
      title: t('automation.revisionCard.title'),
      description: t('automation.revisionCard.description')
  },
  {
      title: t('automation.inventoryCard.title'),
      description: t('automation.inventoryCard.description')
  },
  {
      title: t('automation.payrollCard.title'),
      description: t('automation.payrollCard.description')
  },
  {
      title: t('automation.documentsCard.title'),
      description: t('automation.documentsCard.description')
  },
  {
      title: t('automation.reportsCard.title'),
      description: t('automation.reportsCard.description')
  }
];

const naMieruSteps = [
  {
      title: t('automation.step1.title'),
      description: t('automation.step1.description')
  },
  {
      title: t('automation.step2.title'),
      description: t('automation.step2.description')
  },
  {
      title: t('automation.step3.title'),
      description: t('automation.step3.description')
  },
  {
      title: t('automation.step4.title'),
      description: t('automation.step4.description')
  }
];

const vyhodyPoints = [
    t('automation.benefit1'),
    t('automation.benefit2'),
    t('automation.benefit3'),
    t('automation.benefit4')
  ];

  return (
    <main className="min-h-screen p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 md:pt-24 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start justify-between px-2 md:ml-10 md:mt-10 min-h-[280px] md:min-h-[320px]">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-center md:text-left">
            {t('automation.title')}
          </h1>
          <p className="font-mono text-xl md:text-2xl text-[#023047] mb-6 text-center md:text-left max-w-2xl">
            {t('automation.heroTitle')}
          </p>
          <p className="font-mono text-lg text-[#023047] mb-6 text-center md:text-left max-w-2xl">
            {t('automation.heroSubtitle')}
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-start w-full">
          <Image 
            src="/automatizacia-a-priemyselne-riesenia.png" 
            alt={t('automation.title')}
            width={600} 
            height={600} 
            className="w-full max-w-xl h-auto object-contain" 
          />
        </div>
      </section>

      {/* Digitalizácia Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#023047] text-left">
          {t('automation.digitalizationTitle')}
        </h2>
        <p className="font-mono text-lg text-[#023047] text-left max-w-3xl mb-8">
          {t('automation.digitalizationSubtitle')}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {digitalizaciaCards.map((card, idx) => (
            <AnimatedOnScroll key={idx} animation="fade-up">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-[#023047]">{card.title}</h3>
                <p className="font-mono text-lg text-[#023047]">{card.description}</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* Na mieru Section (soft highlight) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047] text-left">
          {t('automation.customTitle')}
        </h2>
        <p className="font-mono text-lg text-[#023047] mb-6 text-left max-w-4xl">
          {t('automation.customIntro')}
        </p>
        <div className="border-4 border-[#023047] rounded-2xl shadow-lg p-8 md:p-12">
          {naMieruSteps.map((step, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <div className="font-heading text-xl md:text-2xl font-bold text-[#023047] mb-2">{step.title}</div>
              <div className="font-mono text-lg text-[#023047]">{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Výhody Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047] text-left">
          {t('automation.benefitsTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vyhodyPoints.map((point, idx) => (
            <AnimatedOnScroll key={idx} animation="fade-up">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <p className="font-mono text-lg text-[#023047]">{point}</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-[#023047] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('automation.ctaTitle')}
          </h2>
          <p className="font-mono text-lg text-white mb-8 max-w-2xl mx-auto">
            {t('automation.ctaDescription')}
          </p>
          <Link href="/kontakt">
            <PaletteButton variant="secondary">
              {t('automation.ctaButton')}
            </PaletteButton>
          </Link>
        </div>
      </section>
    </main>
  );
} 