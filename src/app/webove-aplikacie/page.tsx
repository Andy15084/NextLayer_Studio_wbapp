"use client";

import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import PaletteButton from "@/components/PaletteButton";
import Image from "next/image";
import Link from "next/link";

export default function WeboveAplikaciePage() {
  return (
    <main className="min-h-screen p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto pt-16 md:pt-24 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Left: Title and Subtitle */}
        <div className="flex-1 flex flex-col justify-center items-start md:ml-30 ml-8 md:mt-10 min-h-[280px] md:min-h-[320px]">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-left">
            Tvorba Webových Aplikácií
          </h1>
          <p className="font-mono text-xl md:text-2xl text-[#023047] mb-6 text-left max-w-2xl">
            Vaša Digitálna Transformácia
          </p>
          <p className="font-mono text-lg text-[#023047] mb-6 text-left max-w-2xl">
            V dnešnom digitálnom svete nestačí mať len webovú stránku. Ak chcete svojmu podnikaniu priniesť skutočnú hodnotu, potrebujete webovú aplikáciu. Webová aplikácia nie je len obyčajná stránka – je to sofistikovaný digitálny nástroj, ktorý vám pomôže zefektívniť procesy, zvýšiť produktivitu a priniesť vašim zákazníkom unikátnu hodnotu.
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
          Webová aplikácia vám môže pomôcť:
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">⚡</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">Automatizácia úloh</h3>
              <p className="font-mono text-[#023047]">Automatizovať opakované úlohy a šetriť čas.</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">💬</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">Komunikácia</h3>
              <p className="font-mono text-[#023047]">Zlepšiť komunikáciu a interakciu so zákazníkmi.</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">Centralizácia dát</h3>
              <p className="font-mono text-[#023047]">Centralizovať údaje a zjednodušiť ich správu.</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">👥</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">Efektivita tímu</h3>
              <p className="font-mono text-[#023047]">Zvýšiť efektivitu tímu a podporiť spoluprácu.</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-6 hover:shadow-2xl transition-shadow duration-300">
              <div className="h-12 w-12 bg-[#FFB703] rounded-lg flex items-center justify-center mb-4">
                <span className="text-2xl">📈</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">Prehľad výkonnosti</h3>
              <p className="font-mono text-[#023047]">Získať lepší prehľad o výkonnosti vášho podnikania.</p>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>

      {/* What is Web Application Section */}
      <section className="max-w-7xl mx-auto my-32">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="flex-1">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047] text-left border-b-4 border-[#FFB703] inline-block pb-1">
              Čo je webová aplikácia a ako vám môže pomôcť?
            </h2>
            <p className="font-mono text-lg text-[#023047] mb-4 text-left max-w-4xl">
              Webová aplikácia je interaktívny softvér, ktorý je prístupný cez váš webový prehliadač, ale ponúka oveľa viac než bežná stránka. Od nástrojov na správu zákazníkov (CRM), rezervačných systémov, interných firemných panelov až po aplikácie pre komunikáciu so zákazníkmi – možnosti sú neobmedzené.
            </p>
            <p className="font-mono text-lg text-[#023047] text-left max-w-4xl">
              Na rozdiel od bežnej webovej stránky, ktorá je často statická a slúži len na prezentáciu informácií, webová aplikácia je živý systém. Môže byť prispôsobená na rôzne účely – od jednoduchých nástrojov na komunikáciu so zákazníkmi, cez systémy na správu interných procesov, až po komplexné platformy pre e-commerce alebo vzdelávanie.
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
          Ako pracujeme na vývoji webových aplikácií?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔍</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">Analýza potrieb</h3>
              <p className="font-mono text-[#023047]">Najprv vás spoznáme. Diskutujeme o vašich cieľoch, problémoch, ktoré chcete riešiť, a príležitostiach na zlepšenie.</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">✏️</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">Návrh riešenia</h3>
              <p className="font-mono text-[#023047]">Vytvoríme detailný plán webovej aplikácie. Od funkcií, ktoré budete potrebovať, až po dizajn a používateľskú skúsenosť.</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">💻</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">Vývoj na mieru</h3>
              <p className="font-mono text-[#023047]">Využívame moderné technológie ako React, Node.js, GraphQL a ďalšie, aby sme zabezpečili rýchlosť, stabilitu a škálovateľnosť vašej aplikácie.</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔧</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">Testovanie a optimalizácia</h3>
              <p className="font-mono text-[#023047]">Každá aplikácia prejde dôkladným testovaním, aby sme zabezpečili jej spoľahlivosť a bezpečnosť.</p>
            </div>
          </AnimatedOnScroll>

          <AnimatedOnScroll animation="fade-up">
            <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 flex flex-col min-h-[340px]">
              <div className="h-16 w-16 bg-[#FFB703] rounded-xl flex items-center justify-center mb-6">
                <span className="text-3xl">🔄</span>
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-[#023047]">Podpora a aktualizácie</h3>
              <p className="font-mono text-[#023047]">Spustením to nekončí. Sme tu pre vás, aby sme zabezpečili, že vaša aplikácia bude vždy aktuálna a funkčná.</p>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>

      {/* CTA Section: Chcete vedieť viac? */}
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

      {/* Use Cases Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047] text-left">
          Možnosti využitia webových aplikácií
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">Interné systémy</h3>
            <p className="font-mono text-[#023047]">Správa zamestnancov, úlohy, zdieľanie dokumentov.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">Rezervačné systémy</h3>
            <p className="font-mono text-[#023047]">Ideálne pre hotely, reštaurácie, služby.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">CRM a zákaznícka podpora</h3>
            <p className="font-mono text-[#023047]">Sledujte interakcie so zákazníkmi, spravujte vzťahy.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">Automatizácia</h3>
            <p className="font-mono text-[#023047]">Fakturácia, reporty, notifikácie.</p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-6">
            <h3 className="font-heading text-xl font-bold mb-3 text-[#023047]">Personalizované riešenia</h3>
            <p className="font-mono text-[#023047]">Aplikácie na mieru podľa vašich požiadaviek.</p>
          </div>
        </div>
      </section>
    </main>
  );
} 