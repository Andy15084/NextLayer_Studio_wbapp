'use client';

import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import TypewriterOnView from "@/components/TypewriterOnView";
import FloatingCard from "@/components/FloatingCard";
import PaletteButton from "@/components/PaletteButton";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import ContactForm from "@/components/ContactForm";
import Link from "next/link";
import { useTranslation } from "@/lib/TranslationContext";

export default function Home() {
  const { t, currentLanguage } = useTranslation();
  
  return (
    <>
      {/* Add your new background here if needed */}
      <main className="p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 pt-16 md:pt-24 pb-12 md:pb-20">
          {/* Left Side */}
          <div className="flex-1 px-2 pt-6 md:ml-10 md:mt-10">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-center md:text-left">
            NextLayer Studio
            </h1>
            <div className="h-[100px] md:h-[160px]">
              <p className="font-mono text-sm sm:text-base mb-6 md:mb-8 max-w-xs sm:max-w-xl text-black text-center md:text-left">
                <Typewriter text={t('homepage.heroDescription')} speed={10} />
              </p>
            </div>
            
            {/* Button with better mobile spacing */}
            <div className="-mt-2 md:-mt-12 text-center md:text-left">
              <Link href={`/${currentLanguage}/kontakt`}>
                <PaletteButton variant="secondary">{t('homepage.ctaButton')}</PaletteButton>
              </Link>
            </div>
          </div>
          {/* Right Side */}
          <div className="flex-1 flex items-center justify-center mt-4 md:-mt-8">
            <Image
              src="/image-2.png"
              alt="Hero Illustration"
              width={320}
              height={320}
              className="w-48 sm:w-72 md:w-full max-w-xs md:max-w-md lg:max-w-lg h-auto"
              priority
            />
          </div>
        </section>

        {/* Process Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-36">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#023047]">{t('homepage.processTitle')}</h2>
          <div className="font-mono text-base sm:text-lg mb-6 md:mb-8 text-black">
            <TypewriterOnView text={t('homepage.processSubtitle')} speed={20} showCursor={false} animatedDots={true} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-10 flex flex-col items-start min-h-[180px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-1 md:mb-2 text-[#023047]">{t('homepage.process.step1.title')}</div>
              <div className="font-mono text-xs md:text-sm mb-2 md:mb-4 text-black">{t('homepage.process.step1.description')}</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">1</div>
            </FloatingCard>
            {/* Card 2 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-10 flex flex-col items-start min-h-[180px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-1 md:mb-2 text-[#023047]">{t('homepage.process.step2.title')}</div>
              <div className="font-mono text-xs md:text-sm mb-2 md:mb-4 text-black">{t('homepage.process.step2.description')}</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">2</div>
            </FloatingCard>
            {/* Card 3 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-10 flex flex-col items-start min-h-[180px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-1 md:mb-2 text-[#023047]">{t('homepage.process.step3.title')}</div>
              <div className="font-mono text-xs md:text-sm mb-2 md:mb-4 text-black">{t('homepage.process.step3.description')}</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">3</div>
            </FloatingCard>
            {/* Card 4 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-10 flex flex-col items-start min-h-[180px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-1 md:mb-2 text-[#023047]">{t('homepage.process.step4.title')}</div>
              <div className="font-mono text-xs md:text-sm mb-2 md:mb-4 text-black">{t('homepage.process.step4.description')}</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">4</div>
            </FloatingCard>
          </div>
        </section>

        {/* Why Choose Us + SEO & CMS Unified Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
          <div className="mb-6 md:mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-[#023047]">{t('homepage.whyUsTitle')}</h2>
            <div className="font-mono text-base sm:text-lg text-[#023047]">{t('homepage.whyUsSubtitle')}</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {/* Card: AI */}
            <AnimatedOnScroll animation="fade-up" delay={0}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/ai.png" alt="AI" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">{t('homepage.features.ai.title')}</div>
                <div className="font-mono text-base mb-2 text-black">{t('homepage.features.ai.description')}</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: Moderne */}
            <AnimatedOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/moderne.png" alt="Moderne" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">{t('homepage.features.modern.title')}</div>
                <div className="font-mono text-base mb-2 text-black">{t('homepage.features.modern.description')}</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: Personalizácia */}
            <AnimatedOnScroll animation="fade-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/komunikacia.png" alt="Personalizácia" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">{t('homepage.features.personalization.title')}</div>
                <div className="font-mono text-base mb-2 text-black">{t('homepage.features.personalization.description')}</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: Komunikácia */}
            <AnimatedOnScroll animation="fade-up" delay={300}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/personalizacia.png" alt="Komunikácia" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">{t('homepage.features.communication.title')}</div>
                <div className="font-mono text-base mb-2 text-black">{t('homepage.features.communication.description')}</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: SEO */}
            <AnimatedOnScroll animation="fade-up" delay={400}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/CMS.png" alt="SEO" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">{t('homepage.features.seo.title')}</div>
                <div className="font-mono text-base mb-2 text-black">{t('homepage.features.seo.description')}</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: CMS */}
            <AnimatedOnScroll animation="fade-up" delay={500}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/seo.png" alt="CMS" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">{t('homepage.features.cms.title')}</div>
                <div className="font-mono text-base mb-2 text-black">{t('homepage.features.cms.description')}</div>
              </div>
            </AnimatedOnScroll>
          </div>
        </section>

        {/* Successful Projects Section - Updated styling to match projekty page - TEST CHANGE */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#023047]">{t('homepage.projectsTitle')}</h2>
          <div className="font-mono text-base sm:text-lg mb-6 md:mb-8 text-[#023047] max-w-xs sm:max-w-3xl">
            {t('homepage.projectsDescription')}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {/* Project 1 - KarinArt */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/karinart.png"
                  alt="Karin Art Tattoo"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-xl font-bold text-[#023047] mb-3">
                  Karin Art Tattoo
                </h3>
                <p className="font-mono text-sm text-gray-700 mb-6 flex-1">
                  {t('homepage.projects.karinart')}
                </p>
                <a
                  href="https://www.karinart.sk"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#FFB703] text-[#023047] font-semibold py-2 px-4 rounded-lg hover:bg-[#FF9500] transition-colors duration-300"
                >
                  {t('homepage.viewProject')}
                </a>
              </div>
            </FloatingCard>
            {/* Project 2 - Natus Volare */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/natusvolare.png"
                  alt="Natus Volare"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-xl font-bold text-[#023047] mb-3">
                  Natus Volare
                </h3>
                <p className="font-mono text-sm text-gray-700 mb-6 flex-1">
                  {t('homepage.projects.natusvolare')}
                </p>
                <a
                  href="https://misk0o.github.io/Natus-Volare/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#FFB703] text-[#023047] font-semibold py-2 px-4 rounded-lg hover:bg-[#FF9500] transition-colors duration-300"
                >
                  {t('homepage.viewProject')}
                </a>
              </div>
            </FloatingCard>
            {/* Project 3 - Portfolio */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src="/portfolio.png"
                  alt="Developer Portfolio"
                  fill
                  className="object-cover transition-transform duration-300 hover:scale-110"
                />
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="font-heading text-xl font-bold text-[#023047] mb-3">
                  Developer Portfolio
                </h3>
                <p className="font-mono text-sm text-gray-700 mb-6 flex-1">
                  {t('homepage.projects.portfolio')}
                </p>
                <a
                  href="https://my-portfolio-delta-sandy-33.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center bg-[#FFB703] text-[#023047] font-semibold py-2 px-4 rounded-lg hover:bg-[#FF9500] transition-colors duration-300"
                >
                  {t('homepage.viewProject')}
                </a>
              </div>
            </FloatingCard>
          </div>
          <div className="flex justify-center">
            <Link href={`/${currentLanguage}/projekty`}>
              <PaletteButton variant="secondary">{t('homepage.viewFullPortfolio')}</PaletteButton>
            </Link>
          </div>
        </section>

        {/* About Us Section */}
        <section className="max-w-4xl mx-auto mt-20 md:mt-32 mb-10 sm:mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#023047]">{t('homepage.aboutTitle')}</h2>
          <div className="font-mono text-base sm:text-lg mb-4 text-[#023047]">
            <TypewriterOnView text={t('homepage.aboutSubtitle')} speed={20} showCursor={true} animatedDots={true} />
          </div>
          <div className="space-y-1 mb-6 md:mb-8">
            <div className="font-mono text-black text-base sm:text-lg">{t('homepage.aboutDescription1')}</div>
            <div className="font-mono text-black text-base sm:text-lg">{t('homepage.aboutDescription2')}</div>
            <div className="font-mono text-black text-base sm:text-lg">{t('homepage.aboutDescription3')}</div>
          </div>
          <div className="font-heading text-lg sm:text-xl font-bold mb-2 text-black">{t('homepage.aboutValuesTitle')}</div>
          <div className="font-mono text-base sm:text-lg mb-6 md:mb-8 text-black">
            {t('homepage.aboutValues')}
          </div>
          <div className="flex justify-center">
            <Link href={`/${currentLanguage}/o-nas`}>
              <PaletteButton>{t('homepage.aboutTeamButton')}</PaletteButton>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto mt-10 sm:mt-16 md:mt-24 mb-20 md:mb-32">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#023047]">{t('homepage.contactTitle')}</h2>
          <p className="font-mono text-base mb-16 text-black max-w-2xl">
            {t('homepage.contactDescription')}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left: Contact Form */}
            <div>
              <ContactForm />
            </div>

            {/* Right: Contact Info */}
            <div className="flex flex-col justify-start space-y-8 pt-8">
              {/* Instagram */}
              <a 
                href="https://instagram.com/nextlayerstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.40s-.644-1.44-1.439-1.44z" />
                </svg>
                <span className="font-mono">nextlayerstudio</span>
              </a>
              
              {/* GitHub */}
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span className="font-mono">nextlayerstudio</span>
              </a>
              
              {/* X (Twitter) */}
              <a 
                href="https://x.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                </svg>
                <span className="font-mono">nextlayerstudio</span>
              </a>
              
              {/* LinkedIn */}
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
                <span className="font-mono">nextlayerstudio</span>
              </a>
              
              {/* TikTok */}
              <a 
                href="https://tiktok.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-black">
                  <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                </svg>
                <span className="font-mono">nextlayerstudio</span>
              </a>
              
              {/* YouTube */}
              <a 
                href="https://youtube.com/@nextlayerstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span className="font-mono">nextlayerstudio</span>
              </a>
              
              {/* Phone */}
              <a 
                href="tel:0903652258"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 20 20" fill="currentColor" className="text-black">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                </svg>
                <span className="font-mono">0903 652 258</span>
              </a>
              
              {/* Email */}
              <a 
                href="mailto:nextlayerstudio@gmail.com" 
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span className="font-mono">nextlayerstudio@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 