import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const onlineSections = [
  {
    title: "LinkedIn",
    text: `Čo robíme: B2B články, personal branding lídrov, cielené reklamy podľa odvetvia\nVáš zisk: Viditeľnosť u rozhodovateľov a nábor kvalitných zamestnancov`
  },
  {
    title: "Instagram",
    text: `Čo robíme: Feed príspevky, stories, reels, súťaže, vizuálna identita\nVáš zisk: Budovanie komunity a emočné prepojenie so značkou`
  },
  {
    title: "TikTok",
    text: `Čo robíme: Krátke dynamické videá, trendové hashtagy, spolupráca s tvorcami\nVáš zisk: Virálny dosah a mladšie publikum bez nákladov na TV spot`
  },
  {
    title: "X (Twitter)",
    text: `Čo robíme: Realtime správy, zákaznícka podpora, influencer spolupráce\nVáš zisk: Rýchla spätná väzba, šírenie noviniek a PR krízový štít`
  },
  {
    title: "Facebook",
    text: `Čo robíme: Kampane na klik alebo konverzie, remarketing, komunitný manažment\nVáš zisk: Predaj a opätovné oslovenie ľudí, ktorí už vašu stránku navštívili`
  },
  {
    title: "Google Ads & YouTube",
    text: `Čo robíme: Vyhľadávacie, bannerové a videoreklamy, remarketing, Performance Max\nVáš zisk: Okamžitá návštevnosť s jasne merateľným ROI`
  },
  {
    title: "E-mail marketing",
    text: `Čo robíme: Automatické série, odchádzajúci košík, newslettery, segmentácia\nVáš zisk: Priamy kanál k lidem, ktorí už prejavili záujem, a vyššia lojalita`
  },
  {
    title: "Bannerová sieť",
    text: `Čo robíme: Statické, HTML5 aj video bannery, programmatic nákup\nVáš zisk: Masový zásah za nízky CPM (cena za tisíc zobrazení)`
  },
  {
    title: "Content & SEO",
    text: `Čo robíme: Blogy, PR články, white-papery, optimalizácia kľúčových slov\nVáš zisk: Organické pozície, dlhodobá autorita domény a stabilná návštevnosť`
  },
  {
    title: "Promo videá",
    text: `Čo robíme: Scenár, natáčanie, animácia, titulky, hudobná podkresba\nVáš zisk: Profesionálny materiál použiteľný na webe, sociálnych sieťach aj veľkej obrazovke`
  }
];

const offlineSections = [
  {
    title: "Billboardy & citylighty",
    text: `Čo robíme: kreatívny návrh vizuálu, výber a prenájom plôch, tlač, montáž, fotodokumentácia kampane\nVáš zisk: veľký dosah 24/7 na presne zvolenom mieste, rýchle budovanie povedomia značky`
  },
  {
    title: "Plagáty & výlep",
    text: `Čo robíme: grafika, tlač rôznych formátov, logistika a kontrolovaný výlep v mestách či na podujatiach\nVáš zisk: cenovo dostupné oslovenie miestnej komunity a cielenej lokality`
  },
  {
    title: "Tlačová reklama & PR články",
    text: `Čo robíme: inzercia v denníkoch a magazínoch, písanie a distribúcia PR textov, mediálne plánovanie\nVáš zisk: dôveryhodnosť a presah k čitateľom, ktorí hľadajú odborný obsah`
  },
  {
    title: "TV & rádio spoty",
    text: `Čo robíme: scenár, casting hlasov/hercov, zvuková a obrazová produkcia, nákup médií\nVáš zisk: masový zásah a silná emocionálna stopa u širokého publika`
  },
  {
    title: "Firemné eventy & veľtrhy",
    text: `Čo robíme: návrh a stavba stánku, roll‑upy, hostesky, technické zabezpečenie, livestream z miesta\nVáš zisk: osobný kontakt so zákazníkmi, okamžitá spätná väzba a posilnenie vzťahov`
  },
  {
    title: "Brožúry, letáky & vizitky",
    text: `Čo robíme: copywriting, DTP zalomenie, kvalitná tlač, distribúcia alebo odovzdanie na akciách\nVáš zisk: hmatateľný materiál, ktorý si klient odnesie a môže k nemu opakovane vrátiť`
  },
  {
    title: "Merch & darčekové predmety",
    text: `Čo robíme: výber predmetov, návrh potlače, výroba, balenie a doručenie\nVáš zisk: dlhodobé pripomenutie značky v každodennom živote zákazníkov`
  },
  {
    title: "Direct mail / adresné zásielky",
    text: `Čo robíme: personalizované listy alebo balíčky, tlač, skladanie, doručenie poštou či kuriérom\nVáš zisk: vysoká miera otvorenia a osobný, adresný kontakt s klientom`
  },
  {
    title: "Digitálne OOH displeje",
    text: `Čo robíme: animované kreatívy pre LCD/LED panely, plán vysielania, monitoring výkonu\nVáš zisk: dynamická, ľahko aktualizovateľná prezentácia v rušných zónach a nákupných centrách`
  }
];

export default function CampaignSelector() {
  const [showOptions, setShowOptions] = useState(false);
  const [selected, setSelected] = useState<"online" | "offline" | null>(null);

  const handleMainClick = () => {
    if (showOptions) {
      setShowOptions(false);
      setSelected(null);
    } else {
      setShowOptions(true);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center pt-4 pb-16">
      {/* Main Button as Extra Large Circle */}
      <motion.button
        layout
        initial={{ scale: 0.7, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="bg-[#023047] text-white rounded-full w-[340px] h-[340px] flex flex-col items-center justify-center text-6xl font-bold shadow-lg hover:scale-105 transition mb-2"
        onClick={handleMainClick}
        style={{ minWidth: 340, minHeight: 340 }}
      >
        Kampaň
        <div className="text-2xl font-mono font-normal mt-4">klikni</div>
      </motion.button>

      {/* Online/Offline Buttons as Circles with Animation */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            className="flex gap-8 mt-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.4 }}
          >
            <motion.button
              className={`bg-[#023047] text-white rounded-full w-28 h-28 flex flex-col items-center justify-center text-2xl font-bold shadow hover:scale-105 transition border-4 border-transparent ${selected === "online" ? "ring-4 ring-blue-400 border-blue-400" : ""}`}
              onClick={() => setSelected("online")}
              style={{ minWidth: 112, minHeight: 112 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92, rotate: -3 }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              Online
            </motion.button>
            <motion.button
              className={`bg-[#023047] text-white rounded-full w-28 h-28 flex flex-col items-center justify-center text-2xl font-bold shadow hover:scale-105 transition border-4 border-transparent ${selected === "offline" ? "ring-4 ring-blue-400 border-blue-400" : ""}`}
              onClick={() => setSelected("offline")}
              style={{ minWidth: 112, minHeight: 112 }}
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.92, rotate: 3 }}
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.1 }}
            >
              Offline
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Details as Horizontal Scrollable Gallery with Prettier Cards */}
      <AnimatePresence>
        {showOptions && (
          <motion.div
            className="w-full max-w-6xl mt-10 flex overflow-x-auto gap-6 pb-4"
            style={{ scrollSnapType: "x mandatory" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {selected === "online" &&
              onlineSections.map((section, idx) => (
                <motion.div
                  key={section.title}
                  className="relative bg-white rounded-3xl shadow-xl p-6 border border-[#e0e0e0] min-w-[290px] max-w-xs flex-shrink-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                  style={{
                    scrollSnapAlign: "start",
                    background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ef 100%)"
                  }}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <h3 className="text-lg font-bold text-[#023047] mb-3 mt-3 text-center">{section.title}</h3>
                  <div className="whitespace-pre-wrap font-mono text-[#023047] text-sm px-1 pb-1 text-center">
                    {section.text}
                  </div>
                </motion.div>
              ))}
            {selected === "offline" &&
              offlineSections.map((section, idx) => (
                <motion.div
                  key={section.title}
                  className="relative bg-white rounded-3xl shadow-xl p-6 border border-[#e0e0e0] min-w-[290px] max-w-xs flex-shrink-0 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 group"
                  style={{
                    scrollSnapAlign: "start",
                    background: "linear-gradient(135deg, #f8fafc 60%, #e0e7ef 100%)"
                  }}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 30, opacity: 0 }}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <h3 className="text-lg font-bold text-[#023047] mb-3 mt-3 text-center">{section.title}</h3>
                  <div className="whitespace-pre-wrap font-mono text-[#023047] text-sm px-1 pb-1 text-center">
                    {section.text}
                  </div>
                </motion.div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
} 