"use client";

import React, { useState, useEffect, useRef } from 'react';
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import PaletteButton from "@/components/PaletteButton";
import Image from "next/image";
import Link from 'next/link';

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
      title: "Prečo modernizovať webstránku?",
      content: "V dnešnej digitálnej dobe je vaša webstránka často prvým kontaktom potenciálnych zákazníkov s vašou značkou. Ak je zastaralá alebo nefunkčná, môžete stratiť dôležité obchodné príležitosti. Modernizácia webstránky nie je len o vzhľade – ide o komplexné vylepšenie, ktoré prináša reálne výsledky.",
      illustration: "/precomodernizovat-webstranku.png"
    },
    {
      type: 'card',
      title: "Rýchlosť a prvý dojem",
      content: "Keď niekto otvorí vašu stránku, máte len pár sekúnd, aby ste ho zaujali. Ak sa stránka načítava pomaly alebo vyzerá, akoby uviazla v roku 2010, návštevník jednoducho klikne na \"späť\" a ide ku konkurencii. Rýchly a moderný web pôsobí profesionálne a zvyšuje šancu, že si zákazník prečíta, čo mu ponúkate."
    },
    {
      type: 'text',
      title: "Čo všetko modernizácia zahŕňa?",
      content: "Modernizácia webstránky je komplexný proces, ktorý zahŕňa technické vylepšenia, aktualizáciu dizajnu a optimalizáciu používateľského zážitku. Zameriavame sa na všetky aspekty, ktoré sú dôležité pre úspech vašej online prítomnosti.",
      illustration: "/covsetko-modernizacia-zahrna.png"
    },
    {
      type: 'card',
      title: "Jednoduchý, prehľadný dizajn",
      content: "Ľudia nechcú lúštiť, kde majú kliknúť. Čisté rozloženie, čitateľné písmo a jedno-značné tlačidlo s výzvou na akciu (napríklad \"Objednať\" alebo \"Kontaktovať\") im uľahčia rozhodovanie. Menej zbytočných farieb a blikajúcich prvkov znamená, že sa sústredia presne na to, čo im chcete povedať."
    },
    {
      type: 'card',
      title: "Cesta, ktorá vedie k cieľu",
      content: "Dobre navrhnutá stránka funguje ako predajca v obchode: privíta človeka, vysvetlí benefity, ukáže skúsenosti iných zákazníkov a nakoniec ho prirodzene privedie k objednávke. Keď sú kroky jasné a logicky zoradené, návštevníci sa menia na platiacich klientov bez toho, aby si to uvedomili."
    },
    {
      type: 'text',
      title: "Technologické vylepšenia",
      content: "Moderná webstránka musí byť nielen krásna, ale aj technicky dokonalá. Implementujeme najnovšie technológie pre rýchle načítanie, bezpečnosť a kompatibilitu so všetkými zariadeniami. Naše riešenia sú pripravené na budúcnosť a ľahko rozšíriteľné.",
      illustration: "/technologickevylepsenia.png"
    },
    {
      type: 'card',
      title: "Funguje rovnako na mobile aj na počítači",
      content: "Viac ako 60 % ľudí dnes prehliada internet cez telefón. Ak sa web na malom displeji rozpadne, stratíte väčšinu publika a Google vás navyše posunie nižšie vo výsledkoch vyhľadávania. Preto je dôležité, aby sa obsah automaticky prispôsobil každému zariadeniu – od smartfónu až po veľký monitor."
    },
    {
      type: 'card',
      title: "Súčasné technológie a bezpečnosť",
      content: "Moderný kód nielen zrýchľuje načítanie stránok, ale aj chráni údaje vašich zákazníkov. Zastaralé technológie sú náchylnejšie na chyby a hackerské útoky. Priebežná modernizácia znamená, že stránka spĺňa aktuálne normy, zobrazuje sa správne vo všetkých prehliadačoch a ľahko sa na ňu dajú doplniť nové funkcie – napríklad online platby či chat s podporou."
    },
    {
      type: 'text',
      title: "Výhody modernizácie",
      content: "Modernizácia webstránky prináša okamžité aj dlhodobé benefity. Zlepšuje vašu pozíciu vo vyhľadávačoch, zvyšuje konverzie a posilňuje dôveryhodnosť vašej značky. Je to investícia, ktorá sa vracia v podobe vyšších tržieb a nižších marketingových nákladov.",
      illustration: "/vyhody-modernizacie.png"
    },
    {
      type: 'card',
      title: "Lepšie výsledky vo vyhľadávaní",
      content: "Vyhľadávače, ako je Google, uprednostňujú rýchle a mobil-pripravené stránky. Čím lepšie technicky a obsahovo stránku nastavíte, tým vyššie sa zobrazí vo výsledkoch. To znamená viac návštev bez platenia reklamy a nižšie náklady na marketing."
    },
    {
      type: 'card',
      title: "Pripravenosť na budúcnosť",
      content: "Trendy a požiadavky sa menia rýchlo. Ak je web postavený moderne, nové sekcie, jazyky či prepojenia na sociálne siete pridáte za pár hodín, nie za týždne. Investícia do modernizácie sa preto vracia nielen vyššími tržbami, ale aj úsporou času a peňazí pri ďalšom rozvoji."
    }
  ];

  return (
    <main className="min-h-screen p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 md:pt-24 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Left: Title and Subtitle */}
        <div className="flex-1 flex flex-col items-center md:items-start justify-between px-2 md:ml-10 md:mt-10 min-h-[280px] md:min-h-[320px]">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-left">
            Modernizácia webstránky
          </h1>
          <p className="font-mono text-xl md:text-2xl text-[#023047] mb-6 text-center md:text-left max-w-2xl">
            Dajte svojej webstránke nový život
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-center w-full">
          <Image src="/modernizaciawebstranky.png" alt="Modernizácia webstránky" width={480} height={480} className="w-full max-w-md h-auto object-contain" priority />
        </div>
      </section>

      {/* Main Content Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <div className="space-y-16">
          {content.map((item, index) => (
            <AnimatedOnScroll key={index} animation={index % 2 === 0 ? "fade-right" : "fade-left"}>
              <div>
                {item.type === 'card' ? (
                  <ExpandableCard
                    title={item.title}
                    content={item.content}
                    isExpanded={expandedCards.has(index)}
                    onClick={() => handleCardClick(index)}
                    isEven={index % 2 === 1}
                    onVisibilityChange={(isVisible) => handleVisibilityChange(index, isVisible)}
                  />
                ) : (
                  <TextSection
                    title={item.title}
                    content={item.content}
                    isEven={index % 2 === 1}
                    illustration={item.illustration}
                  />
                )}
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-[#023047] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
            Chcete modernizovať svoju webstránku?
          </h2>
          <p className="font-mono text-lg text-white mb-8 max-w-2xl mx-auto">
            Kontaktujte nás a spoločne dáme vašej webstránke nový život.
          </p>
          <Link href="/kontakt">
            <PaletteButton variant="secondary">
              Kontaktovať nás
            </PaletteButton>
          </Link>
        </div>
      </section>
    </main>
  );
} 