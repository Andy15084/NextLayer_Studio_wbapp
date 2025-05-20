'use client';
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Image from 'next/image';

const precoMyCards = [
  {
    title: 'AI',
    short: 'Využívame AI a vlastné procesy na to, aby ste Váš nový moderný web mali hotový kvalitne, rýchlo a bez stresu.',
    long: 'Umelú inteligenciu neberieme ako módne slovo, ale ako nástroj, ktorý zrýchli analýzu, pomôže generovať koncepty dizajnu a odhalí chyby ešte skôr, než sa vôbec dostanú do produkcie. Vďaka vlastným AI workflow skracujeme čas dodania, znižujeme náklady a garantujeme konzistentnú kvalitu – bez stresu pre vás.',
    img: '/moderne.png',
    alt: 'AI',
  },
  {
    title: 'Moderné technológie',
    short: 'Sme generácia, ktorá vyrástla na trendoch internetu. Čo je "in", pre nás nie je novinka, ale bežná súčasť života.',
    long: 'React, Next .js, Tailwind, serverless cloud, CI/CD… tieto skratky sú pre nás bežnou rečou. Používame ich preto, aby bol váš web rýchly, bezpečný a pripravený na budúce rozšírenia. Keď sa objaví nová technológia, okamžite skúmame, či vám môže priniesť konkurenčnú výhodu.',
    img: '/ai.png',
    alt: 'Moderne',
  },
  {
    title: 'Personalizácia',
    short: 'Váš web bude tak jedinečný, ako Vaša značka – žiadne šablóny, žiadne klišé.',
    long: 'Žiadne šablóny a "one-size-fits-all" riešenia – každý pixel aj funkcia sa rodí z dialógu s vami. Dizajn, obsahové bloky aj automatizované procesy prispôsobujeme identite vašej značky, takže výsledok je taký jedinečný, ako vy sami.',
    img: '/komunikacia.png',
    alt: 'Personalizácia',
  },
  {
    title: 'Komunikácia',
    short: 'Sme otvorení, prístupní a radi Vás zapojíme do celého procesu. Váš názor má váhu.',
    long: 'Veríme, že najlepší projekty vznikajú v diskusii, nie v tichu. Priebežne zdieľame prototypy, zbierame spätnú väzbu a meníme smer podľa toho, čo vám dáva zmysel. Máte k dispozícii priamy kontakt na vývojára aj dizajnéra; váš názor sa do kódu pretavuje v reálnom čase.',
    img: '/personalizacia.png',
    alt: 'Komunikácia',
  },
  {
    title: 'SEO',
    short: 'Rýchlosť načítania, semantický kód, optimalizované obrázky a technické nastavenia profesionálnej analytiky zabezpečia, že vás Google nielen uvidí, ale aj posunie vyššie.',
    long: 'Rýchlosť načítania, semantický kód, optimalizované obrázky a technické nastavenia profesionálnej analytiky zabezpečia, že vás Google nielen uvidí, ale aj posunie vyššie. Výsledkom je väčšia návštevnosť bez nutnosti stále platiť za reklamu.',
    img: '/CMS.png',
    alt: 'SEO',
  },
  {
    title: 'CMS',
    short: 'Dodáme vlastné, intuitívne redakčné rozhranie, v ktorom zvládnete meniť texty, obrázky či pridávať novinky bez jedinej riadk​y kódu.',
    long: 'Dodáme vlastné, intuitívne redakčné rozhranie, v ktorom zvládnete meniť texty, obrázky či pridávať novinky bez jedinej riadk​y kódu. Čím menej ste závislí od programátorov pri bežnej správe obsahu, tým rýchlejšie môžete reagovať na potreby trhu.',
    img: '/seo.png',
    alt: 'CMS',
  }
];

export default function PrecoMyPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <main className="p-4 sm:p-8 relative z-10 min-h-screen" style={{ background: '#8ECAE6' }}>
      <Navbar />
      <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-10 sm:mb-16 md:mb-24">
        <div className="mb-10 text-left ml-0 sm:ml-2 md:ml-4 lg:ml-6">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#023047] leading-tight mb-6">Prečo práve my</h1>
          <div className="font-mono text-base sm:text-lg text-[#023047] max-w-2xl mb-8">
            Sme mladý, flexibilný tím, ktorý doslova vyrástol na internete; trendy nesledujeme z odstupu, žijeme nimi každý deň. Pri vývoji webov a aplikácií siaham​e po najmodernejších technológiách, no nikdy na úkor jednoduchosti pre vás. Od prvej konzultácie až po finálne spustenie ostávame rýchli, otvorení a pripravení prispôsobiť sa presne tomu, čo vaša značka potrebuje.
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8 mb-12">
          {precoMyCards.map((card, idx) => (
            <div key={card.title}>
              <div
                className={`group bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center transition-shadow duration-300 cursor-pointer min-h-[220px] md:min-h-[260px] relative
                  ${expanded === idx ? 'scale-105 z-10 shadow-2xl border-2 border-[#219EBC]' : 'hover:shadow-2xl hover:border-2 hover:border-[#219EBC]'}
                  hover:animate-bounce-slight`}
                onClick={() => setExpanded(expanded === idx ? null : idx)}
                style={{ transition: 'box-shadow 0.3s, border 0.3s, transform 0.3s' }}
              >
                <Image src={card.img} alt={card.alt} width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">{card.title}</div>
                <div className="font-mono text-base mb-2 text-black">
                  {expanded === idx ? card.long : card.short}
                </div>
                {/* Animated chevron/plus icon */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center justify-center">
                  <span
                    className={`inline-block transition-transform duration-300 ${expanded === idx ? 'rotate-180' : 'animate-pulse'} text-[#219EBC]`}
                    style={{ fontSize: 28 }}
                  >
                    ▼
                  </span>
                </div>
                <span className="sr-only">Kliknite pre viac informácií</span>
              </div>
            </div>
          ))}
        </div>
        <div className="font-mono text-lg text-[#023047] max-w-2xl text-left ml-0 sm:ml-2 md:ml-4 lg:ml-6">
          Mladý prístup, najnovšie technológie a absolútna orientácia na klienta – to je Next Layer Studio. Ak hľadáte partnera, ktorý premení vašu predstavu na moderný, výkonný a dokonale personalizovaný web alebo aplikáciu, ste na správnej adrese.
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
      `}</style>
    </main>
  );
} 