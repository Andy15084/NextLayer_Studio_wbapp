"use client";

import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import PaletteButton from "@/components/PaletteButton";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "@/lib/TranslationContext";

export default function EshopPage() {
  const { t, currentLanguage } = useTranslation();
  
  return (
    <main className="min-h-screen p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto pt-16 md:pt-24 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Left: Title and Subtitle (left-aligned, shifted further right) */}
        <div className="flex-1 flex flex-col justify-center items-start md:ml-30 ml-8 md:mt-10 min-h-[280px] md:min-h-[320px]">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-left">
            {t('eshop.title')}
          </h1>
          <p className="font-mono text-base sm:text-lg mb-6 md:mb-8 max-w-xs sm:max-w-xl text-[#023047] text-left">
            {t('eshop.subtitle')}
          </p>
        </div>
        {/* Right: Illustration (no card styling) */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Image src="/eshop illustration.png" alt="Eshop Illustration" width={480} height={480} className="w-full max-w-md h-auto object-contain" priority />
        </div>
      </section>

      {/* Jednoduchá administrácia & Integrácia služieb Section (left-aligned text, with images) */}
      <section className="max-w-7xl mx-auto mb-20 grid grid-cols-1 md:grid-cols-2 gap-12 items-center justify-items-center">
        {/* Left: Jednoduchá administrácia */}
        <div className="flex flex-col items-start text-left max-w-md w-full">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#023047]">{t('eshop.simpleAdmin')}</h2>
          <p className="font-mono text-base sm:text-lg mb-6 text-[#023047]">{t('eshop.simpleAdminDesc')}</p>
          <Image src="/statistic illustration.png" alt="Jednoduchá administrácia" width={500} height={350} className="w-full max-w-md h-auto object-contain" />
        </div>
        {/* Right: Integrácia služieb */}
        <div className="flex flex-col items-start text-left max-w-md w-full">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#023047]">{t('eshop.serviceIntegration')}</h2>
          <p className="font-mono text-base sm:text-lg mb-6 text-[#023047]">{t('eshop.serviceIntegrationDesc')}</p>
          <Image src="/third party illustration.png" alt="Integrácia služieb" width={500} height={350} className="w-full max-w-md h-auto object-contain" />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <AnimatedOnScroll animation="fade-up">
          <div className="flex items-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#023047]">{t('eshop.technologies')}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* First row: 3 cards */}
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <h3 className="font-heading text-xl font-bold mb-4 text-[#023047] flex items-center">
                <span className="text-[#FFB703] mr-2">✅</span> {t('eshop.frontend')}
              </h3>
              <div className="font-mono text-base space-y-2 text-black">
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>React</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Next.js</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Tailwind CSS</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>TypeScript</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <h3 className="font-heading text-xl font-bold mb-4 text-[#023047] flex items-center">
                <span className="text-[#FFB703] mr-2">✅</span> {t('eshop.backend')}
              </h3>
              <div className="font-mono text-base space-y-2 text-black">
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Node.js</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Express</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>MongoDB</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>GraphQL</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <h3 className="font-heading text-xl font-bold mb-4 text-[#023047] flex items-center">
                <span className="text-[#FFB703] mr-2">✅</span> {t('eshop.ecommerceFunctions')}
              </h3>
              <div className="font-mono text-base space-y-2 text-black">
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.paymentGateways')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.orderManagement')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.productManagement')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.userAccounts')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
              </div>
            </div>
            {/* Second row: 2 cards centered under the middle card */}
            <div className="hidden md:block"></div>
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <h3 className="font-heading text-xl font-bold mb-4 text-[#023047] flex items-center">
                <span className="text-[#FFB703] mr-2">✅</span> {t('eshop.securityPerformance')}
              </h3>
              <div className="font-mono text-base space-y-2 text-black">
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.httpsSSL')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.attackProtection')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.fastLoading')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.scalability')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <h3 className="font-heading text-xl font-bold mb-4 text-[#023047] flex items-center">
                <span className="text-[#FFB703] mr-2">✅</span> {t('eshop.seoMarketing')}
              </h3>
              <div className="font-mono text-base space-y-2 text-black">
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.seoOptimization')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.analyticsTools')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.emailMarketing')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>{t('eshop.socialNetworks')}</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
              </div>
            </div>
            <div className="hidden md:block"></div>
          </div>
        </AnimatedOnScroll>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-[#023047] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('eshop.ctaTitle')}
          </h2>
          <p className="font-mono text-lg text-white mb-8 max-w-2xl mx-auto">
            {t('eshop.ctaDescription')}
          </p>
          <Link href={`/${currentLanguage}/kontakt`}>
            <PaletteButton variant="secondary">
              {t('eshop.ctaButton')}
            </PaletteButton>
          </Link>
        </div>
      </section>

      {/* Successful Eshops Section */}
      <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
        <div className="text-left mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[#023047]">{t('eshop.successfulEshops')}</h2>
          <div className="font-mono text-base sm:text-lg text-[#023047] max-w-2xl">
            {t('eshop.successfulEshopsDesc')}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Featured Eshop 1 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/eshop illustration.png"
                alt="Fashion Eshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-2xl font-bold text-[#023047]">{t('eshop.fashionEshop')}</h3>
                <span className="bg-[#FFB703] text-[#023047] px-3 py-1 rounded-full text-sm font-heading font-bold">
                  {t('eshop.fashionCategory')}
                </span>
              </div>
              <p className="font-mono text-base text-gray-700 mb-6">
                {t('eshop.fashionDesc')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-[#023047]">{t('eshop.salesGrowth')}</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-[#023047]">{t('eshop.customers5k')}</div>
                </div>
              </div>
              <PaletteButton variant="secondary" className="w-full">
                {t('eshop.viewCaseStudy')}
              </PaletteButton>
            </div>
          </div>

          {/* Featured Eshop 2 */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="relative h-64">
              <Image
                src="/eshop illustration.png"
                alt="Electronics Eshop"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-heading text-2xl font-bold text-[#023047]">{t('eshop.electronicsEshop')}</h3>
                <span className="bg-[#FFB703] text-[#023047] px-3 py-1 rounded-full text-sm font-heading font-bold">
                  {t('eshop.electronicsCategory')}
                </span>
              </div>
              <p className="font-mono text-base text-gray-700 mb-6">
                {t('eshop.electronicsDesc')}
              </p>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-[#023047]">{t('eshop.salesGrowth200')}</div>
                </div>
                <div className="text-center">
                  <div className="font-heading text-2xl font-bold text-[#023047]">{t('eshop.customers8k')}</div>
                </div>
              </div>
              <PaletteButton variant="secondary" className="w-full">
                {t('eshop.viewCaseStudy')}
              </PaletteButton>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
} 