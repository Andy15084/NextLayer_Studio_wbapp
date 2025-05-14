import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import TypewriterOnView from "@/components/TypewriterOnView";
import FloatingCard from "@/components/FloatingCard";

export default function Home() {
  return (
    <>
      <main className="min-h-screen p-4 sm:p-8 bg-cyan-100">
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 pt-16 md:pt-24 pb-12 md:pb-20">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-center px-2 pt-6 md:ml-10 md:mt-10">
            <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-black text-center md:text-left">
              NextLayer Studio
            </h1>
            <p className="font-mono text-sm sm:text-base mb-6 md:mb-8 max-w-xs sm:max-w-xl text-black text-center md:text-left">
              <Typewriter text={"Sme tím mladých tvorcov, ktorí vedia, že rýchlosť, kvalita a komunikácia robia rozdiel. Váš web nebude len stránka. Bude Vašou zbraňou."} speed={10} />
            </p>
            <button className="font-mono px-4 py-2 sm:px-5 sm:py-3 border-2 border-black rounded-[20px] text-base sm:text-lg hover:bg-black hover:text-white transition-colors text-black">
              Chcem moderný web
            </button>
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
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black">Ako postupujeme pri vývoji webu</h2>
          <div className="font-mono text-sm sm:text-base mb-6 md:mb-8 text-black">
            <TypewriterOnView text="Váš web vzniká v štyroch krokoch" speed={20} showCursor={false} animatedDots={true} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[220px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-2 text-black">Konzultácia a pochopenie Vašich cieľov</div>
              <div className="font-mono text-xs md:text-sm mb-4 text-black">Spoznáme Vašu značku, potreby a Vaše sny</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">1</div>
            </FloatingCard>
            {/* Card 2 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[220px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-2 text-black">Návrh a dizajn</div>
              <div className="font-mono text-xs md:text-sm mb-4 text-black">Navrhneme Vám jedinečný vzhľad a štruktúru šitú na mieru</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">2</div>
            </FloatingCard>
            {/* Card 3 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[220px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-2 text-black">Vývoj a testovanie</div>
              <div className="font-mono text-xs md:text-sm mb-4 text-black">Postavíme Váš web na moderných technológiách, otestujeme jeho rýchlosť a bezpečnosť</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">3</div>
            </FloatingCard>
            {/* Card 4 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[220px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-2 text-black">Spustenie a podpora</div>
              <div className="font-mono text-xs md:text-sm mb-4 text-black">Web Vám nasadíme, odovzdáme, a ak budete chcieť, ostaneme Vám kryť chrbát.</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">4</div>
            </FloatingCard>
          </div>
        </section>

        {/* Why Choose Us + SEO & CMS Unified Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
          <div className="mb-6 md:mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-black">Prečo si vybrať nás</h2>
            <div className="font-mono text-sm sm:text-base text-gray-500 text-black">Prečo NextLayer Studio?</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
            {/* Card: AI */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center">
              <Image src="/moderne.png" alt="AI" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
              <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-black">AI</div>
              <div className="font-mono text-base mb-2 text-black">Využívame AI a vlastné procesy na to, aby ste Váš nový moderný web mali hotový kvalitne, rýchlo a bez stresu.</div>
            </div>
            {/* Card: Moderne */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center">
              <Image src="/ai.png" alt="Moderne" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
              <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-black">Moderne</div>
              <div className="font-mono text-base mb-2 text-black">Sme generácia, ktorá vyrástla na trendoch internetu. Čo je &quot;in&quot;, pre nás nie je novinka, ale bežná súčasť života.</div>
            </div>
            {/* Card: Personalizácia */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center">
              <Image src="/komunikacia.png" alt="Personalizácia" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
              <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-black">Personalizácia</div>
              <div className="font-mono text-base mb-2 text-black">Váš web bude tak jedinečný, ako Vaša značka – žiadne šablóny, žiadne klišé.</div>
            </div>
            {/* Card: Komunikácia */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center">
              <Image src="/personalizacia.png" alt="Komunikácia" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
              <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-black">Komunikácia</div>
              <div className="font-mono text-base mb-2 text-black">Sme otvorení, prístupní a radi Vás zapojíme do celého procesu. Váš názor má váhu.</div>
            </div>
            {/* Card: SEO */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center">
              <Image src="/CMS.png" alt="SEO" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
              <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-black">SEO</div>
              <div className="font-mono text-base mb-2 text-black">Vďaka kvalitnému SEO zabezpečíme, aby vaša stránka bola viditeľná, ľahko nájditeľná a pritiahla viac zákazníkov.</div>
            </div>
            {/* Card: CMS */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center">
              <Image src="/seo.png" alt="CMS" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
              <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-black">CMS</div>
              <div className="font-mono text-base mb-2 text-black">Vďaka nášmu modernému CMS systému môžete jednoducho spravovať obsah svojej webovej stránky bez potreby technických znalostí.</div>
            </div>
          </div>
        </section>

        {/* Successful Projects Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black">Naše úspešné projekty</h2>
          <div className="font-mono text-sm sm:text-base mb-6 md:mb-8 text-black max-w-xs sm:max-w-3xl">
            Naše portfólio je dôkazom, že kvalitná práca nepotrebuje veľké reči. Každý web, každá stránka a každý dizajn, ktorý vytvoríme, nesie našu filozofiu: personalizácia, rýchlosť, výsledky.<br />
            Pozrite si, ako sme pomohli značkám rásť, vystúpiť z davu a zaujať svoje publikum.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {/* Project 1 */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[300px] md:min-h-[380px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="w-full h-28 md:h-40 bg-gray-300 rounded-xl mb-4 md:mb-6 flex items-center justify-center">
                <span className="text-gray-400 font-mono text-xs md:text-base">Obrázok projektu</span>
              </div>
              <div className="font-heading text-lg md:text-2xl font-bold mb-2 text-black">Názov projektu</div>
              <div className="font-mono text-xs md:text-sm text-blue-600 mb-1">Kategória</div>
              <div className="font-mono text-sm md:text-base mb-4 md:mb-6 text-black">Mini popis Modernizácia webu pre firmu v oblasti tetovania</div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                <button className="font-mono w-full px-4 py-2 border-2 border-black rounded-[16px] text-sm md:text-base hover:bg-black hover:text-white transition-colors text-black">
                  Pozrieť projekt
                </button>
              </a>
            </div>
            {/* Project 2 */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[300px] md:min-h-[380px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="w-full h-28 md:h-40 bg-gray-300 rounded-xl mb-4 md:mb-6 flex items-center justify-center">
                <span className="text-gray-400 font-mono text-xs md:text-base">Obrázok projektu</span>
              </div>
              <div className="font-heading text-lg md:text-2xl font-bold mb-2 text-black">Názov projektu</div>
              <div className="font-mono text-xs md:text-sm text-blue-600 mb-1">Kategória</div>
              <div className="font-mono text-sm md:text-base mb-4 md:mb-6 text-black">Mini popis Modernizácia webu pre firmu v oblasti tetovania</div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                <button className="font-mono w-full px-4 py-2 border-2 border-black rounded-[16px] text-sm md:text-base hover:bg-black hover:text-white transition-colors text-black">
                  Pozrieť projekt
                </button>
              </a>
            </div>
            {/* Project 3 */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[300px] md:min-h-[380px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="w-full h-28 md:h-40 bg-gray-300 rounded-xl mb-4 md:mb-6 flex items-center justify-center">
                <span className="text-gray-400 font-mono text-xs md:text-base">Obrázok projektu</span>
              </div>
              <div className="font-heading text-lg md:text-2xl font-bold mb-2 text-black">Názov projektu</div>
              <div className="font-mono text-xs md:text-sm text-blue-600 mb-1">Kategória</div>
              <div className="font-mono text-sm md:text-base mb-4 md:mb-6 text-black">Mini popis Modernizácia webu pre firmu v oblasti tetovania</div>
              <a href="#" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                <button className="font-mono w-full px-4 py-2 border-2 border-black rounded-[16px] text-sm md:text-base hover:bg-black hover:text-white transition-colors text-black">
                  Pozrieť projekt
                </button>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <button className="font-mono px-6 py-2 md:px-8 md:py-3 border-2 border-black rounded-[16px] text-base md:text-lg hover:bg-black hover:text-white transition-colors text-black">
              Celé portfólio
            </button>
          </div>
        </section>

        {/* About Us Section */}
        <section className="max-w-4xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black">O nás</h2>
          <div className="font-mono text-sm sm:text-base mb-4 text-black">
            <TypewriterOnView text="Tím, ktorý tvorí vrstvu navyše" speed={20} showCursor={true} animatedDots={true} />
          </div>
          <div className="space-y-1 mb-6 md:mb-8">
            <div className="font-mono text-black text-sm sm:text-base">Sme tím mladých ľudí ktorí spojili vášeň pre technológie, dizajn a rýchlu komunikáciu.</div>
            <div className="font-mono text-black text-sm sm:text-base">Veríme, že weby nemajú byť len pekné – ale majú byť aj nástrojom na rast biznisu.</div>
            <div className="font-mono text-black text-sm sm:text-base">Preto tvoríme stránky na mieru – také, ktoré fungujú nielen dnes, ale aj zajtra.</div>
          </div>
          <div className="font-heading text-lg sm:text-xl font-bold mb-2 text-black">Naše základné hodnoty</div>
          <div className="font-mono text-sm sm:text-base mb-6 md:mb-8 text-black">
            Každý web tvoríme ako originál. Každý klient je pre nás výzvou.<br />
            Využívame moderné technológie a AI na zrýchlenie procesov bez straty kvality.<br />
            Spolupráca pre nás znamená počúvať, chápať a hľadať najlepšie riešenie.<br />
            Rozumieme, ako sa svet mení. A vieme ako zostať vždy o krok vpred.
          </div>
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 mb-2">
            <button className="font-mono px-4 py-2 border-2 border-black rounded-[16px] text-sm sm:text-base hover:bg-black hover:text-white transition-colors text-black">Čítať viac</button>
            <button className="font-mono px-4 py-2 border-2 border-black rounded-[16px] text-sm sm:text-base hover:bg-black hover:text-white transition-colors text-black">Náš tím</button>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-4xl mx-auto mb-20 md:mb-32">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-black">Kontakt</h2>
          <div className="font-mono text-sm sm:text-base mb-4 md:mb-6 text-black">Začnite svoju cestu s nami!<br />Stačí nás kontaktovať. Všetko ostatné už vyriešime spolu...</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 items-start">
            {/* Contact Form */}
            <form className="flex flex-col gap-2 sm:gap-4 font-mono">
              <label className="flex flex-col gap-1">
                <span>meno:</span>
                <input type="text" className="border-2 border-black rounded-[10px] px-3 py-1 bg-transparent outline-none" />
              </label>
              <label className="flex flex-col gap-1">
                <span>email:</span>
                <input type="email" className="border-2 border-black rounded-[10px] px-3 py-1 bg-transparent outline-none" />
              </label>
              <label className="flex flex-col gap-1">
                <span>text:</span>
                <textarea rows={5} className="border-2 border-black rounded-[10px] px-3 py-1 bg-transparent outline-none resize-none" />
              </label>
              {/* You can add a submit button here if needed */}
            </form>
            {/* Social & Contact Info */}
            <div className="flex flex-col gap-2 sm:gap-4 font-mono text-black">
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-block w-6 h-6"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7.75 2.75h8.5A5 5 0 0121.25 7.25v9.5a5 5 0 01-5 5h-8.5a5 5 0 01-5-5v-9.5a5 5 0 015-5z" /><circle cx="12" cy="12" r="3.5" stroke="currentColor" strokeWidth={2} /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" /></svg></span>
                nextlayerstudio
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-block w-6 h-6"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth={2} /><path d="M10 9l5 3-5 3V9z" fill="currentColor" /></svg></span>
                nextlayerstudio
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-block w-6 h-6"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" /><circle cx="12" cy="9" r="2.5" stroke="currentColor" strokeWidth={2} /></svg></span>
                nextlayerstudio
              </div>
              <div className="flex items-center gap-2 sm:gap-3">
                <span className="inline-block w-6 h-6"><svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 8V7a2 2 0 00-2-2H5a2 2 0 00-2 2v1m18 0v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8m18 0H3" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 12h.01" /></svg></span>
                nextlayerstudio@gmail.com
              </div>
            </div>
          </div>
        </section>
      </main>
      {/* Footer */}
      <footer className="bg-gray-50 border-t border-black/50 pt-2 pb-1">
        <div className="max-w-6xl mx-auto px-2 sm:px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-10 mb-4 md:mb-6">
            {/* Quick Links */}
            <div>
              <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Rýchle odkazy</div>
              <div className="font-mono text-base mb-2">Domov</div>
              <div className="font-mono text-base mb-2">Prečo my</div>
              <div className="font-mono text-base mb-2">Úspešné projekty</div>
              <div className="font-mono text-base mb-2">Kontakt</div>
            </div>
            {/* Company Info */}
            <div>
              <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Údaje o firme</div>
              <div className="font-mono text-base mb-2">IČO: 56580894</div>
              <div className="font-mono text-base mb-2">Číslo živnostenského registra: 140-35375</div>
              <div className="font-mono text-base">Zapísaný v: Živnostenskom registri<br/>okresného úradu Senec</div>
            </div>
            {/* What We Offer */}
            <div>
              <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Čo ponúkame</div>
              <div className="font-mono text-base mb-2">Správa sociálnych sietí</div>
              <div className="font-mono text-base mb-2">Modernizácia vašej webstránky</div>
              <div className="font-mono text-base mb-2">Vytvorenie digitálnej identity spoločnosti</div>
              <div className="font-mono text-base mb-2">Tvorba eshopu</div>
              <div className="font-mono text-base mb-2">Tvorba webových aplikácii</div>
            </div>
            {/* Contact */}
            <div>
              <div className="font-heading text-xl sm:text-2xl md:text-3xl font-bold mb-4 md:mb-6">Kontakt</div>
              <div className="font-mono text-base mb-2">email: nextlayerstudio@gmail.com</div>
              <div className="font-mono text-base mb-2">tel.: 0903652258</div>
            </div>
          </div>
          <div className="text-center font-mono text-sm sm:text-base text-black/80 mt-4 md:mt-6">
            © 2024 NextLayer Studio s.r.o Všetky práva vyhradené.
          </div>
        </div>
      </footer>
    </>
  );
}
