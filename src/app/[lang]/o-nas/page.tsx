'use client';
import TypewriterOnView from '@/components/TypewriterOnView';
import Image from 'next/image';
import FloatingCard from '@/components/FloatingCard';
import { useTranslation } from '@/lib/TranslationContext';

export default function AboutUs() {
  const { t } = useTranslation();

  return (
    <main className="p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      <section className="max-w-7xl mx-auto mt-20 md:mt-32 mb-10 sm:mb-16 md:mb-24">
        <div className="mb-12 ml-0 md:ml-32 flex flex-col md:flex-row items-start gap-8">
          <div>
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#023047] leading-tight">
              {t('about.title')}
            </h1>
            <div className="font-mono text-base sm:text-lg mt-8 text-[#023047]">
              <TypewriterOnView text={t('about.subtitle')} speed={15} showCursor={true} animatedDots={true} />
            </div>
          </div>
          
          <div className="relative w-full md:w-[600px] h-[400px] md:h-[600px] flex-shrink-0 mt-4 md:-mt-16 flex items-center justify-center">
            <Image
              src="/logoyellow.png"
              alt="NextLayer Studio Logo"
              width={1000}
              height={1000}
              className="w-full h-full object-contain"
              priority
            />
          </div>
        </div>

        {/* Alternating text and cards layout */}
        <div className="max-w-5xl mx-auto space-y-10">
          {/* First paragraph */}
          <p className="font-mono text-black text-base sm:text-lg">
            {t('about.paragraph1')}
          </p>

          {/* First row of 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-2 transition-transform duration-200 hover:scale-105 w-full">
              <div className="flex flex-row gap-4 items-start">
                <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-xl overflow-hidden flex-shrink-0 border-2 border-[#FFB703]">
                  <Image
                    src="/IMG_1128.jpeg"
                    alt="Andrej Paulička"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                <div className="flex flex-col justify-start flex-1 min-w-0">
                  <h3 className="font-heading text-base md:text-lg font-bold text-[#023047] truncate">{t('about.team.ceo.name')}</h3>
                  <div className="font-mono text-xs md:text-sm text-[#FFB703] truncate">
                    {t('about.team.ceo.position')}
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs md:text-sm text-black italic mt-2">
                &quot;{t('about.team.ceo.quote')}&quot;
              </p>
            </FloatingCard>
            {/* Card 2 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-2 transition-transform duration-200 hover:scale-105 w-full">
              <div className="flex flex-row gap-4 items-start">
                <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-xl overflow-hidden flex-shrink-0 border-2 border-[#FFB703] bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Foto</div>
                </div>
                <div className="flex flex-col justify-start flex-1 min-w-0">
                  <h3 className="font-heading text-base md:text-lg font-bold text-[#023047] truncate">Meno Priezvisko</h3>
                  <div className="font-mono text-xs md:text-sm text-[#FFB703] truncate">
                    {t('about.team.dev.position')}
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs md:text-sm text-black italic mt-2">
                &quot;{t('about.team.dev.quote')}&quot;
              </p>
            </FloatingCard>
          </div>

          {/* Second paragraph */}
          <p className="font-mono text-black text-base sm:text-lg">
            {t('about.paragraph2')}
          </p>

          {/* Second row of 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 3 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-2 transition-transform duration-200 hover:scale-105 w-full">
              <div className="flex flex-row gap-4 items-start">
                <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-xl overflow-hidden flex-shrink-0 border-2 border-[#FFB703] bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Foto</div>
                </div>
                <div className="flex flex-col justify-start flex-1 min-w-0">
                  <h3 className="font-heading text-base md:text-lg font-bold text-[#023047] truncate">Meno Priezvisko</h3>
                  <div className="font-mono text-xs md:text-sm text-[#FFB703] truncate">
                    {t('about.team.marketing.position')}
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs md:text-sm text-black italic mt-2">
                &quot;{t('about.team.marketing.quote')}&quot;
              </p>
            </FloatingCard>
            {/* Card 4 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col gap-2 transition-transform duration-200 hover:scale-105 w-full">
              <div className="flex flex-row gap-4 items-start">
                <div className="w-24 h-24 md:w-28 md:h-28 relative rounded-xl overflow-hidden flex-shrink-0 border-2 border-[#FFB703] bg-gray-200">
                  <div className="w-full h-full flex items-center justify-center text-gray-400">Foto</div>
                </div>
                <div className="flex flex-col justify-start flex-1 min-w-0">
                  <h3 className="font-heading text-base md:text-lg font-bold text-[#023047] truncate">Meno Priezvisko</h3>
                  <div className="font-mono text-xs md:text-sm text-[#FFB703] truncate">
                    {t('about.team.design.position')}
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs md:text-sm text-black italic mt-2">
                &quot;{t('about.team.design.quote')}&quot;
              </p>
            </FloatingCard>
          </div>

          {/* Remaining paragraphs */}
          <div className="space-y-6">
            <p className="font-mono text-black text-base sm:text-lg">
              {t('about.paragraph3')}
            </p>
            <p className="font-mono text-black text-base sm:text-lg">
              {t('about.paragraph4')}
            </p>
          </div>
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
        .custom-duration {
          transition-duration: 3000ms;
        }
      `}</style>
    </main>
  );
} 