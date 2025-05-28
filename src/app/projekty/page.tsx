"use client";

import Image from 'next/image';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import PaletteButton from '@/components/PaletteButton';
import Link from 'next/link';
import { useState } from 'react';

// Real project data
const projects = [
  {
    id: 'karinart',
    title: 'Karin Art Tattoo',
    category: 'Web Development',
    description: 'Moderný, elegantný web pre tetovací salón v Bratislave s dôrazom na prezentáciu portfólia umeleckých diel a jednoduchú komunikáciu s klientmi.',
    image: '/karinart.png',
    url: 'https://www.karinart.sk'
  },
  {
    id: 'natusvolare',
    title: 'Natus Volare',
    category: 'Web Development',
    description: 'Dynamický web pre spoločnosť špecializujúcu sa na dronové služby, ktorý efektívne prezentuje široké spektrum služieb od filmovania po termálne inšpekcie.',
    image: '/natusvolare.png',
    url: 'https://misk0o.github.io/Natus-Volare/'
  },
  {
    id: 'portfolio',
    title: 'Developer Portfolio',
    category: 'Web Development',
    description: 'Minimalistické a elegantné portfólio pre vývojára, ktoré efektívne prezentuje jeho zručnosti, projekty a profesionálne skúsenosti s dôrazom na čistý dizajn.',
    image: '/portfolio.png',
    url: 'https://my-portfolio-delta-sandy-33.vercel.app'
  }
];

export default function ProjektyPage() {
  const [activeFilter, setActiveFilter] = useState('Všetky');
  
  // Filter projects based on active filter
  const filteredProjects = activeFilter === 'Všetky' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <main className="p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-20 md:mt-24 mb-16 md:mb-24">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#023047]">
          Úspešné projekty
        </h1>
        <div className="font-mono text-base sm:text-lg mb-10 max-w-3xl text-[#023047]">
          <p className="mb-4">
            Naše portfólio je dôkazom, že kvalitná práca nepotrebuje veľké reči. Každý web, každá stránka a každý dizajn, ktorý vytvoríme, nesie našu filozofiu: personalizácia, rýchlosť, výsledky.
          </p>
          <p>
            Pozrite si, ako sme pomohli značkám rásť, vystúpiť z davu a zaujať svoje publikum. Nižšie nájdete výber z našich najúspešnejších projektov.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="max-w-7xl mx-auto mb-16 md:mb-20">
        <div className="flex flex-wrap gap-2 md:gap-4">
          <button 
            className={`font-mono px-4 py-2 rounded-md transition-colors ${activeFilter === 'Všetky' ? 'bg-[#023047] text-white' : 'bg-white text-[#023047] hover:bg-[#023047] hover:text-white'}`}
            onClick={() => setActiveFilter('Všetky')}
          >
            Všetky
          </button>
          <button 
            className={`font-mono px-4 py-2 rounded-md transition-colors ${activeFilter === 'Web Development' ? 'bg-[#023047] text-white' : 'bg-white text-[#023047] hover:bg-[#023047] hover:text-white'}`}
            onClick={() => setActiveFilter('Web Development')}
          >
            Web Development
          </button>
          <button 
            className={`font-mono px-4 py-2 rounded-md transition-colors ${activeFilter === 'E-commerce' ? 'bg-[#023047] text-white' : 'bg-white text-[#023047] hover:bg-[#023047] hover:text-white'}`}
            onClick={() => setActiveFilter('E-commerce')}
          >
            E-commerce
          </button>
          <button 
            className={`font-mono px-4 py-2 rounded-md transition-colors ${activeFilter === 'Aplikácie' ? 'bg-[#023047] text-white' : 'bg-white text-[#023047] hover:bg-[#023047] hover:text-white'}`}
            onClick={() => setActiveFilter('Aplikácie')}
          >
            Aplikácie
          </button>
          <button 
            className={`font-mono px-4 py-2 rounded-md transition-colors ${activeFilter === 'Marketing' ? 'bg-[#023047] text-white' : 'bg-white text-[#023047] hover:bg-[#023047] hover:text-white'}`}
            onClick={() => setActiveFilter('Marketing')}
          >
            Marketing
          </button>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="max-w-7xl mx-auto mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <AnimatedOnScroll 
              key={project.id} 
              animation="fade-up" 
              delay={index * 100}
              className="h-full"
            >
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-start h-full transition-transform duration-200 hover:scale-105">
                <div className="w-full h-40 md:h-48 rounded-xl mb-4 md:mb-6 flex items-center justify-center relative overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    width={600}
                    height={350}
                    className="object-cover w-full h-full" 
                  />
                </div>
                
                <div className="flex-grow">
                  <div className="font-heading text-lg md:text-2xl font-bold mb-2 text-[#023047]">{project.title}</div>
                  <div className="font-mono text-xs md:text-sm text-[#FFB703] mb-2">{project.category}</div>
                  <div className="font-mono text-sm md:text-base mb-6 text-black">{project.description}</div>
                </div>
                
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="w-full mt-auto">
                  <button className="font-mono w-full px-4 py-2 bg-[#FFB703] border-2 border-[#FFB703] rounded-[16px] text-sm md:text-base hover:bg-[#023047] hover:text-white hover:border-[#023047] transition-colors text-[#023047]">
                    Pozrieť projekt
                  </button>
                </a>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* Project Process */}
      <section className="max-w-7xl mx-auto mb-20 md:mb-32">
        <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-[#023047]">
          Náš prístup k projektom
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
          {/* Left side: Process steps */}
          <div className="space-y-12">
            <AnimatedOnScroll animation="fade-right">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#FFB703] rounded-full flex items-center justify-center font-heading text-2xl font-bold text-[#023047]">
                  1
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-[#023047]">Pochopenie vašich potrieb</h3>
                  <p className="font-mono text-black">Najprv sa stretneme, aby sme dôkladne pochopili vaše ciele, cieľovú skupinu a očakávania od projektu.</p>
                </div>
              </div>
            </AnimatedOnScroll>
            
            <AnimatedOnScroll animation="fade-right" delay={100}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#FFB703] rounded-full flex items-center justify-center font-heading text-2xl font-bold text-[#023047]">
                  2
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-[#023047]">Návrh a prototypovanie</h3>
                  <p className="font-mono text-black">Vytvoríme detailné wireframy a interaktívne prototypy, ktoré vám umožnia vidieť a testovať produkt ešte pred vývojom.</p>
                </div>
              </div>
            </AnimatedOnScroll>
            
            <AnimatedOnScroll animation="fade-right" delay={200}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#FFB703] rounded-full flex items-center justify-center font-heading text-2xl font-bold text-[#023047]">
                  3
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-[#023047]">Vývoj a testovanie</h3>
                  <p className="font-mono text-black">Implementujeme riešenie s dôrazom na kvalitný kód, optimálny výkon a bezpečnosť. Každá funkcia prechádza dôkladným testovaním.</p>
                </div>
              </div>
            </AnimatedOnScroll>
            
            <AnimatedOnScroll animation="fade-right" delay={300}>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-[#FFB703] rounded-full flex items-center justify-center font-heading text-2xl font-bold text-[#023047]">
                  4
                </div>
                <div>
                  <h3 className="font-heading text-xl md:text-2xl font-bold mb-2 text-[#023047]">Spustenie a podpora</h3>
                  <p className="font-mono text-black">Po nasadení vám poskytujeme potrebné školenie, následnú podporu a pomáhame s ďalším rozvojom projektu podľa vašich potrieb.</p>
                </div>
              </div>
            </AnimatedOnScroll>
          </div>
          
          {/* Right side: Image/stat */}
          <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col justify-center">
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2 text-[#023047]">Naše výsledky</h3>
              <p className="font-mono text-black">Projekty, ktoré prinášajú reálnu hodnotu</p>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-[#FFB703] mb-2">100%</div>
                <p className="font-mono text-sm text-[#023047]">responzívne weby</p>
              </div>
              
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-[#FFB703] mb-2">65%</div>
                <p className="font-mono text-sm text-[#023047]">vyššia návštevnosť</p>
              </div>
              
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-[#FFB703] mb-2">85%</div>
                <p className="font-mono text-sm text-[#023047]">zlepšenie SEO</p>
              </div>
              
              <div className="text-center">
                <div className="font-heading text-4xl md:text-5xl font-bold text-[#FFB703] mb-2">3x</div>
                <p className="font-mono text-sm text-[#023047]">vyššia konverzia</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-[#023047] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
            Chcete vedieť viac?
          </h2>
          <p className="font-mono text-lg text-white mb-8 max-w-2xl mx-auto">
            Kontaktujte nás a spoločne nájdeme najlepšie riešenie pre váš projekt.
          </p>
          <Link href="/kontakt">
            <PaletteButton style={{ background: '#FFB703', border: '2px solid #FFB703', color: '#023047', fontWeight: 'bold', fontSize: '1.1rem' }}>
              Kontaktovať nás
            </PaletteButton>
          </Link>
        </div>
      </section>
    </main>
  );
} 