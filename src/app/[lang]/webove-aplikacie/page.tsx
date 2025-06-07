"use client";

import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import PaletteButton from "@/components/PaletteButton";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/TranslationContext";

export default function WeboveAplikaciePage() {
  const { t, currentLanguage } = useTranslation();
  
  return (
    <main className="min-h-screen p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto pt-16 md:pt-24 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Left: Title and Subtitle */}
        <div className="flex-1 flex flex-col justify-center items-start md:ml-30 ml-8 md:mt-10 min-h-[280px] md:min-h-[320px]">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-left whitespace-pre-line">
            {t('webApps.title')}
          </h1>
          <p className="font-mono text-xl md:text-2xl text-[#023047] mb-6 text-left max-w-2xl">
            {t('webApps.subtitle')}
          </p>
          <p className="font-mono text-lg text-[#023047] mb-6 text-left max-w-2xl">
            {t('webApps.heroDescription')}
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Image src="/tvorbawebovychaplikacii.png" alt="Tvorba webových aplikácií" width={480} height={480} className="w-full max-w-md h-auto object-contain" priority />
        </div>
      </section>

      {/* Benefits Cards Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047] text-left">
          {t('webApps.benefitsTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.benefits.automation.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.benefits.automation.description')}</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.benefits.communication.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.benefits.communication.description')}</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.benefits.dataCentralization.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.benefits.dataCentralization.description')}</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.benefits.teamEfficiency.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.benefits.teamEfficiency.description')}</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.benefits.performanceOverview.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.benefits.performanceOverview.description')}</p>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>

      {/* What is Web Application Section */}
      <section className="max-w-7xl mx-auto my-32">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047] text-left border-b-4 border-[#FFB703] inline-block pb-1">
              {t('webApps.whatIsTitle')}
            </h2>
            <p className="font-mono text-lg text-[#023047] mb-4 text-left max-w-4xl">
              {t('webApps.whatIsDescription1')}
            </p>
            <p className="font-mono text-lg text-[#023047] text-left max-w-4xl">
              {t('webApps.whatIsDescription2')}
            </p>
          </div>
          <div className="flex-1 flex justify-center items-center">
            <Image src="/co-je-webova-aplikacia.png" alt="Čo je webová aplikácia" width={400} height={320} className="w-full max-w-xs md:max-w-md h-auto object-contain" />
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-[#023047] text-left">
          {t('webApps.howWeWorkTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">{t('webApps.process.analysis.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.process.analysis.description')}</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">✏️</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">{t('webApps.process.design.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.process.design.description')}</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">{t('webApps.process.development.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.process.development.description')}</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">{t('webApps.process.testing.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.process.testing.description')}</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">{t('webApps.process.support.title')}</h3>
              <p className="font-mono text-[#023047]">{t('webApps.process.support.description')}</p>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>

      {/* CTA Section: Chcete vedieť viac? */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-[#023047] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('webApps.ctaTitle')}
          </h2>
          <p className="font-mono text-lg text-white mb-8 max-w-2xl mx-auto">
            {t('webApps.ctaDescription')}
          </p>
          <Link href={`/${currentLanguage}/kontakt`}>
            <PaletteButton variant="secondary">
              {t('webApps.ctaButton')}
            </PaletteButton>
          </Link>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047] text-left">
          {t('webApps.useCasesTitle')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.useCases.internal.title')}</h3>
            <p className="font-mono text-[#023047]">{t('webApps.useCases.internal.description')}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.useCases.reservation.title')}</h3>
            <p className="font-mono text-[#023047]">{t('webApps.useCases.reservation.description')}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.useCases.tracking.title')}</h3>
            <p className="font-mono text-[#023047]">{t('webApps.useCases.tracking.description')}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.useCases.communication.title')}</h3>
            <p className="font-mono text-[#023047]">{t('webApps.useCases.communication.description')}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.useCases.crm.title')}</h3>
            <p className="font-mono text-[#023047]">{t('webApps.useCases.crm.description')}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">{t('webApps.useCases.analytics.title')}</h3>
            <p className="font-mono text-[#023047]">{t('webApps.useCases.analytics.description')}</p>
          </div>
        </div>
      </section>
    </main>
  );
} 