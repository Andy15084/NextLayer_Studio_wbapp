import TypewriterOnView from '@/components/TypewriterOnView';
import Image from 'next/image';
import FloatingCard from '@/components/FloatingCard';

export default function AboutUs() {
  return (
    <main className="p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      <section className="max-w-7xl mx-auto mt-20 md:mt-32 mb-10 sm:mb-16 md:mb-24">
        <div className="mb-12 ml-0 md:ml-32">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#023047] leading-tight">
            Čo je
            <br />
            NextLayer
            <br />
            Studio
          </h1>
          <div className="font-mono text-base sm:text-lg mt-8 text-[#023047]">
            <TypewriterOnView text="Tím, ktorý tvorí vrstvu navyše" speed={15} showCursor={true} animatedDots={true} />
          </div>
        </div>

        {/* Alternating text and cards layout */}
        <div className="max-w-5xl mx-auto space-y-10">
          {/* First paragraph */}
          <p className="font-mono text-black text-base sm:text-lg">
            Next Layer Studio tvorí mladý, dynamický tím vývojárov, dizajnérov a technologických nadšencov, ktorých spája chuť posúvať hranice možného a pretaviť moderné technológie do praktických riešení. Navrhujeme a programujeme rýchle responzívne webstránky a e-shopy, budujeme komplexné webové aplikácie – od interných portálov a rezervačných systémov až po nástroje na monitorovanie výrobných liniek – a pomáhame firmám šetriť čas napojením týchto riešení na ich procesy, čím automatizujeme inventúru, mzdy či schvaľovanie dokumentov.
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
                  <h3 className="font-heading text-base md:text-lg font-bold text-[#023047] truncate">Andrej Paulička</h3>
                  <div className="font-mono text-xs md:text-sm text-[#FFB703] truncate">
                    Zakladateľ a CEO (výkonný riaditeľ)<br />vedúci oddelenia dizajnu a komunikácie
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs md:text-sm text-black italic mt-2">
                &quot;Spoločne vždy dosiahneme najlepšie riešenie pre Váš biznis. Postarám sa o to aby sme pre Vás vytvorili čo najlepší návrh, postup práce a cenovú ponuku, ktorá Vám bude vyhovovať.&quot;
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
                    Vedúci oddelenia vývoja
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs md:text-sm text-black italic mt-2">
                &quot;Naše technologické riešenia sú postavené na moderných technológiách, ktoré zabezpečujú rýchlosť, bezpečnosť a škálovateľnosť.&quot;
              </p>
            </FloatingCard>
          </div>

          {/* Second paragraph */}
          <p className="font-mono text-black text-base sm:text-lg">
            Keď s nami začnete spolupracovať, najskôr si podrobne vypočujeme váš problém, aby sme pochopili ciele a denné úlohy vašich ľudí. Na základe toho navrhneme riešenie, v ktorom použijeme len také technológie a funkcie, ktoré vám skutočne prinesú úžitok. Počas vývoja priebežne ukazujeme reálnu verziu aplikácie, zbierame spätnú väzbu a dolaďujeme detaily, kým výsledok dokonale nesedí vašim požiadavkám. Nasadením však práca nekončí: poskytujeme podporu, údržbu a sme pripravení projekt ďalej rozvíjať, keď váš biznis narastie.
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
                    Vedúci oddelenia marketingu
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs md:text-sm text-black italic mt-2">
                &quot;Marketing je o príbehoch a emóciách. Pomáhame značkám vyprávať ich príbeh spôsobom, ktorý rezonuje s ich publikom.&quot;
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
                    Vedúci oddelenia dizajnu
                  </div>
                </div>
              </div>
              <p className="font-mono text-xs md:text-sm text-black italic mt-2">
                &quot;Dizajn je most medzi technológiou a používateľom. Tvoríme rozhrania, ktoré sú nielen krásne, ale aj intuitívne.&quot;
              </p>
            </FloatingCard>
          </div>

          {/* Remaining paragraphs */}
          <div className="space-y-6">
            <p className="font-mono text-black text-base sm:text-lg">
              Nebojíme sa inovácií, sledujeme aktuálne trendy a zavádzame ich všade tam, kde vám pomôžu získať náskok pred konkurenciou. Komunikujeme zrozumiteľne a rýchlo, staviame na flexibilných technológiách, dbáme na bezpečnosť aj výkon a budujeme dlhodobé partnerstvá založené na dôvere a merateľných výsledkoch.
            </p>
            <p className="font-mono text-black text-base sm:text-lg">
              Veríme, že technológie majú ľuďom uľahčovať prácu a otvárať nové príležitosti. Ak hľadáte spoľahlivého partnera, ktorý z vašej myšlienky vytvorí funkčný nástroj šitý na mieru a prevedie vás celým procesom bez zbytočnej technickej reči, Next Layer Studio je tou správnou voľbou – ďalšou vrstvou vášho úspechu.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
} 