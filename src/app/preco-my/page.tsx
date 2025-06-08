'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';
import { useTranslation } from '@/lib/TranslationContext';

export default function PrecoMyPage() {
  const { t } = useTranslation();
  const [expanded, setExpanded] = useState<number | null>(null);

const precoMyCards = [
  {
      title: t('homepage.features.ai.title'),
      short: t('whyUs.cards.ai.short'),
      long: t('whyUs.cards.ai.long'),
    img: '/ai.png',
    alt: 'AI',
  },
  {
      title: t('whyUs.cards.modern.title'),
      short: t('whyUs.cards.modern.short'),
      long: t('whyUs.cards.modern.long'),
    img: '/moderne.png',
    alt: 'Moderne',
  },
  {
      title: t('homepage.features.personalization.title'),
      short: t('whyUs.cards.personalization.short'),
      long: t('whyUs.cards.personalization.long'),
    img: '/komunikacia.png',
    alt: 'Personalizácia',
  },
  {
      title: t('homepage.features.communication.title'),
      short: t('whyUs.cards.communication.short'),
      long: t('whyUs.cards.communication.long'),
    img: '/personalizacia.png',
    alt: 'Komunikácia',
  },
  {
      title: t('homepage.features.seo.title'),
      short: t('whyUs.cards.seo.short'),
      long: t('whyUs.cards.seo.long'),
    img: '/CMS.png',
    alt: 'SEO',
  },
  {
      title: t('homepage.features.cms.title'),
      short: t('whyUs.cards.cms.short'),
      long: t('whyUs.cards.cms.long'),
    img: '/seo.png',
    alt: 'CMS',
  }
];

  return (
    <main className="p-4 sm:p-8 relative z-10 min-h-screen" style={{ background: '#8ECAE6' }}>
      <Navbar />
      <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-10 sm:mb-16 md:mb-24">
        <div className="mb-10 text-left ml-0 sm:ml-2 md:ml-4 lg:ml-6">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#023047] leading-tight mb-6">{t('whyUs.title')}</h1>
          <div className="font-mono text-base sm:text-lg text-[#023047] max-w-2xl mb-8">
            {t('whyUs.description')}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-12">
          {precoMyCards.map((card, idx) => (
            <div key={card.title}>
              <div
                className={`group bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center transition-shadow duration-300 cursor-pointer min-h-[220px] md:min-h-[260px] relative overflow-hidden
                  ${expanded === idx ? 'scale-105 z-10 shadow-2xl border-2 border-[#219EBC]' : 'hover:shadow-2xl hover:border-2 hover:border-[#219EBC]'}
                  hover:animate-bounce-slight`}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                style={{ transition: 'box-shadow 0.3s, border 0.3s, transform 0.3s' }}
              >
                <Image src={card.img} alt={card.alt} width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">{card.title}</div>
                <div className={`font-mono text-base mb-2 text-black ${expanded === idx ? '' : 'text-fade-bottom'}`}>
                  {expanded === idx ? card.long : card.short}
                </div>
                {expanded !== idx && (
                  <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white via-white to-transparent pointer-events-none flex items-end justify-center pb-2">
                    <span className="text-[#219EBC] text-sm font-semibold animate-pulse">{t('whyUs.clickForMore')}</span>
                  </div>
                )}
                <span className="sr-only">Kliknite pre viac informácií</span>
              </div>
            </div>
          ))}
        </div>
        <div className="font-mono text-lg text-[#023047] max-w-2xl text-left ml-0 sm:ml-2 md:ml-4 lg:ml-6">
          {t('whyUs.conclusion')}
        </div>
      </section>
      <style jsx global>{`
        @keyframes bounce-slight {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }
        .animate-bounce-slight {
          animation: bounce-slight 0.7s;
        }
        .text-fade-bottom {
          position: relative;
          max-height: 70px;
          overflow: hidden;
          mask-image: linear-gradient(to bottom, black 50%, transparent 95%);
          -webkit-mask-image: linear-gradient(to bottom, black 50%, transparent 95%);
        }
      `}</style>
    </main>
  );
} 