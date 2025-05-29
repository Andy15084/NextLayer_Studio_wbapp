"use client";

import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import PaletteButton from "@/components/PaletteButton";
import Image from "next/image";
import Link from "next/link";

export default function EshopPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto pt-16 md:pt-24 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Left: Title and Subtitle (left-aligned, shifted further right) */}
        <div className="flex-1 flex flex-col justify-center items-start md:ml-30 ml-8 md:mt-10 min-h-[280px] md:min-h-[320px]">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-left">
            Vytvorenie<br />e-shopu
          </h1>
          <p className="font-mono text-base sm:text-lg mb-6 md:mb-8 max-w-xs sm:max-w-xl text-[#023047] text-left">
            Vaša cesta k úspešnému online predaju
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
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#023047]">Jednoduchá administrácia</h2>
          <p className="font-mono text-base sm:text-lg mb-6 text-[#023047]">Váš e-shop bude mať intuitívny administračný panel, ktorý vám umožní jednoducho spravovať produkty, objednávky a zákazníkov. Automatizované e-mailové notifikácie vám ušetria čas a všetko budete mať pod kontrolou.</p>
          <Image src="/statistic illustration.png" alt="Jednoduchá administrácia" width={500} height={350} className="w-full max-w-md h-auto object-contain" />
        </div>
        {/* Right: Integrácia služieb */}
        <div className="flex flex-col items-start text-left max-w-md w-full">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#023047]">Integrácia služieb</h2>
          <p className="font-mono text-base sm:text-lg mb-6 text-[#023047]">Prepojíme váš e-shop s externými službami, ktoré vám uľahčia podnikanie. Či už ide o platobné brány ako Stripe a PayPal, analytické nástroje alebo logistické služby. Všetko pre vaše pohodlie a efektívne podnikanie.</p>
          <Image src="/third party illustration.png" alt="Integrácia služieb" width={500} height={350} className="w-full max-w-md h-auto object-contain" />
        </div>
      </section>

      {/* Technologies Section */}
      <section className="max-w-6xl mx-auto mb-20">
        <AnimatedOnScroll animation="fade-up">
          <div className="flex items-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-[#023047]">Používané technológie</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* First row: 3 cards */}
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <h3 className="font-heading text-xl font-bold mb-4 text-[#023047] flex items-center">
                <span className="text-[#FFB703] mr-2">✅</span> Frontend
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
                <span className="text-[#FFB703] mr-2">✅</span> Backend
              </h3>
              <div className="font-mono text-base space-y-2 text-black">
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Node.js</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Express.js</span>
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
                <span className="text-[#FFB703] mr-2">✅</span> E-commerce funkcie
              </h3>
              <div className="font-mono text-base space-y-2 text-black">
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Platobné brány</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Správa objednávok</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Správa produktov</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Užívateľské účty</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
              </div>
            </div>
            {/* Second row: 2 cards centered under the middle card */}
            <div className="hidden md:block"></div>
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <h3 className="font-heading text-xl font-bold mb-4 text-[#023047] flex items-center">
                <span className="text-[#FFB703] mr-2">✅</span> Bezpečnosť a výkon
              </h3>
              <div className="font-mono text-base space-y-2 text-black">
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>HTTPS a SSL</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Ochrana pred útokmi</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Rýchle načítanie</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Škálovateľnosť</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-sm">
              <h3 className="font-heading text-xl font-bold mb-4 text-[#023047] flex items-center">
                <span className="text-[#FFB703] mr-2">✅</span> SEO a marketing
              </h3>
              <div className="font-mono text-base space-y-2 text-black">
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>SEO optimalizácia</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Analytické nástroje</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Email marketing</span>
                  <span className="text-[#219EBC]">✓</span>
                </div>
                <div className="flex justify-between items-center p-2 bg-[#8ECAE6]/10 rounded-lg">
                  <span>Sociálne siete</span>
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
            Chcete vedieť viac?
          </h2>
          <p className="font-mono text-lg text-white mb-8 max-w-2xl mx-auto">
            Kontaktujte nás a spoločne nájdeme to najlepšie riešenie pre váš online obchod.
          </p>
          <Link href="/kontakt">
            <PaletteButton variant="secondary">
              Kontaktovať nás
            </PaletteButton>
          </Link>
        </div>
      </section>

      {/* Successful Eshops Section */}
      <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
        <div className="text-left mb-12">
          <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4 text-[#023047]">Naše úspešné eshopy</h2>
          <div className="font-mono text-base sm:text-lg text-[#023047] max-w-2xl">
            Pozrite sa na naše najúspešnejšie projekty. Každý e-shop je príbeh úspechu, ktorý pomohol našim klientom rásť v digitálnom svete.
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Featured Eshop 1 */}
          <AnimatedOnScroll animation="fade-up" delay={0} className="h-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-start h-full transition-transform duration-200 hover:scale-105">
              <div className="w-full h-40 md:h-48 bg-gray-300 rounded-xl mb-4 md:mb-6 flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/eshop illustration.png"
                  alt="Módny e-shop" 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className="flex-grow">
                <div className="font-heading text-lg md:text-2xl font-bold mb-2 text-[#023047]">Módny e-shop</div>
                <div className="font-mono text-xs md:text-sm text-[#FFB703] mb-2">Móda a doplnky</div>
                <div className="font-mono text-sm md:text-base mb-3 text-black">
                  Moderný e-shop s pokročilými funkciami pre módny brand. Implementovali sme personalizované odporúčania a AI-powered vyhľadávanie.
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="px-3 py-1 bg-[#8ECAE6]/20 rounded-full">
                    <span className="font-mono text-xs text-[#023047]">+150% Rast predaja</span>
                  </div>
                  <div className="px-3 py-1 bg-[#8ECAE6]/20 rounded-full">
                    <span className="font-mono text-xs text-[#023047]">5,000+ Zákazníkov</span>
                  </div>
                </div>
              </div>
              
              <Link href="#" className="w-full mt-auto">
                <PaletteButton variant="secondary" className="w-full">
                  Pozrieť prípadovú štúdiu
                </PaletteButton>
              </Link>
            </div>
          </AnimatedOnScroll>

          {/* Featured Eshop 2 */}
          <AnimatedOnScroll animation="fade-up" delay={100} className="h-full">
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 flex flex-col items-start h-full transition-transform duration-200 hover:scale-105">
              <div className="w-full h-40 md:h-48 bg-gray-300 rounded-xl mb-4 md:mb-6 flex items-center justify-center relative overflow-hidden">
                <Image 
                  src="/third party illustration.png"
                  alt="Elektronika" 
                  fill 
                  className="object-cover" 
                />
              </div>
              
              <div className="flex-grow">
                <div className="font-heading text-lg md:text-2xl font-bold mb-2 text-[#023047]">Elektronika</div>
                <div className="font-mono text-xs md:text-sm text-[#FFB703] mb-2">Elektronika a gadgets</div>
                <div className="font-mono text-sm md:text-base mb-3 text-black">
                  Kompletný e-shop s prepojením na dodávateľské reťazce a automatickým riadením skladu. Implementácia B2B a B2C objednávkových systémov.
                </div>
                <div className="flex flex-wrap gap-3 mb-6">
                  <div className="px-3 py-1 bg-[#8ECAE6]/20 rounded-full">
                    <span className="font-mono text-xs text-[#023047]">+200% Rast predaja</span>
                  </div>
                  <div className="px-3 py-1 bg-[#8ECAE6]/20 rounded-full">
                    <span className="font-mono text-xs text-[#023047]">8,000+ Zákazníkov</span>
                  </div>
                </div>
              </div>
              
              <Link href="#" className="w-full mt-auto">
                <PaletteButton variant="secondary" className="w-full">
                  Pozrieť prípadovú štúdiu
                </PaletteButton>
              </Link>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>
    </main>
  );
} 