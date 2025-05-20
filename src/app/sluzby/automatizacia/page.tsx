"use client";

import React from 'react';
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import PaletteButton from "@/components/PaletteButton";
import Link from 'next/link';
import Image from 'next/image';

const heroTitle = "Prečo sa trápiť ručne, keď to zvládne počítač?";
const heroSubtitle = "Rutinné úkony – prepisovanie tabuliek, kontrola skladu, počítanie miezd – pohlcujú hodiny práce a unavujú ľudí. Automatizácia tieto činnosti prevezme, pracuje nepretržite a bez chýb. Vy a váš tím sa môžete sústrediť na to, čo firme prináša skutočnú hodnotu.";

const digitalizaciaCards = [
  {
    title: "Revízia a kontrola produktov",
    description: "softvér porovná parametre výrobkov so štandardom, upozorní na odchýlky a vytvorí protokol."
  },
  {
    title: "Inventúra skladu",
    description: "mobilná aplikácia s QR-kódmi zrát​a zásoby za zlomok času a hneď odhalí nezrovnalosti."
  },
  {
    title: "Automatické rozdelenie miezd",
    description: "od zadania hodín, cez schválenie nadriadeným až po export do banky jedným klikom."
  },
  {
    title: "Tok dokumentov a schvaľovaní",
    description: "faktúry či objednávky putujú vopred nastav​enou cestou, vždy viete, kde sa nachádzajú."
  },
  {
    title: "Reporty na jedno kliknutie",
    description: "denný alebo týždenný prehľad pre manažment sa generuje sám."
  }
];

const digitalizaciaUndertitle = "Ak máte vo firme opakujúci sa proces, vieme ho preniesť do digitálneho prostredia.";

const naMieruTitle = "Na mieru, nie z krabice – zautomatizujeme takmer čokoľvek";
const naMieruIntro = `Ak dokážete postup opísať slovami alebo ukázať v tabuľke, dokážeme ho zautomatizovať – presne podľa vašich predstáv, bez kompromisov a s priestorom na budúci rast.Každá firma má vlastné postupy a "nepísané pravidlá". Preto netlačíme univerzálny balík funkcií, ale skladáme riešenie, ktoré kopíruje presne váš spôsob práce – od prvého kliknutia až po finálny report. Ak viete opísať, čo dnes zamestnanci robia ručne, môžeme to preniesť do softvéru.`;
const naMieruSteps = [
  {
    title: "1. Porozumenie vášmu procesu",
    description: "Spolu si rozkreslíme jednotlivé kroky – od príjmu tovaru, cez schvaľovanie dokladov, až po finálne čísla v účtovníctve. Čím konkrétnejšie úlohy pomenujeme, tým presnejšie ich dokážeme nahradiť algoritmom."
  },
  {
    title: "2. Návrh riešenia bez zbytočných funkcií",
    description: `Vyberieme len tie moduly, ktoré skutočne potrebujete: skenovanie kódov, automatické e-maily, výpočty miezd, kontrolu kvality, generovanie štatistík… Riešenie rastie podľa vás – ak zajtra pridáte výrobnú linku či novú pobočku, jednoducho "pricvakneme" ďalší modul.`
  },
  {
    title: "3. Priebežné testovanie a doladenie detailov",
    description: "Má byť tlačidlo vpravo? Chcete report radšej v PDF než v Exceli? Meníme, kým vám rozhranie nesadne na milimeter. Vidíte živú verziu, takže nikdy neplatíte za niečo, čo ste nevideli."
  },
  {
    title: "4. Nasadenie, integrácia a podpora",
    description: "Prepojíme softvér s čítačkami, ERP systémom, bankou či senzorom na výrobnej hale a vyškolíme tím. Keď sa procesy časom zmenia, sme pripravení upraviť workflow alebo pridať nové funkcie – bez prepisovania celej aplikácie."
  }
];

const vyhodyTitle = "Výhody pre vašu firmu";
const vyhodyPoints = [
  "Úspora času – proces, ktorý trval deň, zvládne softvér za pár minút.",
  "Menej chýb – automat nikdy nezabudne nulu ani nepomýli dátum.",
  "Vždy aktuálne dáta – prehľad stavu skladu či miezd máte na pár klikov.",
  "Rast bez chaosu – jasný systém udrží poriadok aj pri dvojnásobnom objeme práce."
];

const kontaktTitle = "Chcete vedieť, čo vieme zautomatizovať práve u vás?";
const kontaktText = "Napíšte nám, stručne popíšte svoj problém a bezplatne navrhneme postup, ako ho vyriešiť. Vaša predstava → náš kód → váš čas a peniaze naspäť.";

export default function AutomatizaciaPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 md:pt-24 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 flex flex-col items-center md:items-start justify-between px-2 md:ml-10 md:mt-10 min-h-[280px] md:min-h-[320px]">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-center md:text-left">
            Automatizácia a priemyselné riešenia
          </h1>
          <p className="font-mono text-xl md:text-2xl text-[#023047] mb-6 text-center md:text-left max-w-2xl">
            {heroTitle}
          </p>
          <p className="font-mono text-lg text-[#023047] mb-6 text-center md:text-left max-w-2xl">
            {heroSubtitle}
          </p>
        </div>
        {/* Right: Illustration */}
        <div className="flex-1 flex justify-center items-start w-full">
          <Image 
            src="/automatizacia-a-priemyselne-riesenia.png" 
            alt="Automatizácia a priemyselné riešenia" 
            width={600} 
            height={600} 
            className="w-full max-w-xl h-auto object-contain" 
          />
        </div>
      </section>

      {/* Digitalizácia Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-[#023047] text-left">
          Čo všetko vieme zdigitalizovať?
        </h2>
        <p className="font-mono text-lg text-[#023047] text-left max-w-3xl mb-8">
          {digitalizaciaUndertitle}
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          {digitalizaciaCards.map((card, idx) => (
            <AnimatedOnScroll key={idx} animation="fade-up">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 text-[#023047]">{card.title}</h3>
                <p className="font-mono text-lg text-[#023047]">{card.description}</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* Na mieru Section (soft highlight) */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047] text-left">
          {naMieruTitle}
        </h2>
        <p className="font-mono text-lg text-[#023047] mb-6 text-left max-w-4xl">
          {naMieruIntro}
        </p>
        <div className="border-4 border-[#023047] rounded-2xl shadow-lg p-8 md:p-12">
          {naMieruSteps.map((step, idx) => (
            <div key={idx} className="mb-6 last:mb-0">
              <div className="font-heading text-xl md:text-2xl font-bold text-[#023047] mb-2">{step.title}</div>
              <div className="font-mono text-lg text-[#023047]">{step.description}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Výhody Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047] text-left">
          {vyhodyTitle}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {vyhodyPoints.map((point, idx) => (
            <AnimatedOnScroll key={idx} animation="fade-up">
              <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300">
                <p className="font-mono text-lg text-[#023047]">{point}</p>
              </div>
            </AnimatedOnScroll>
          ))}
        </div>
      </section>

      {/* Kontakt Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 mb-20">
        <div className="bg-[#023047] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
            {kontaktTitle}
          </h2>
          <p className="font-mono text-lg text-white mb-8 max-w-2xl mx-auto">
            {kontaktText}
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