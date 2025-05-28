import Image from "next/image";
import Typewriter from "@/components/Typewriter";
import TypewriterOnView from "@/components/TypewriterOnView";
import FloatingCard from "@/components/FloatingCard";
import PaletteButton from "@/components/PaletteButton";
import AnimatedOnScroll from "@/components/AnimatedOnScroll";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Add your new background here if needed */}
      <main className="p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
        {/* Hero Section */}
        <section className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-0 pt-16 md:pt-24 pb-12 md:pb-20">
          {/* Left Side */}
          <div className="flex-1 flex flex-col items-center md:items-start justify-between px-2 pt-6 md:ml-10 md:mt-10 min-h-[280px] md:min-h-[320px]">
            <div>
              <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-4 md:mb-6 leading-tight text-[#023047] text-center md:text-left">
                NextLayer Studio
              </h1>
              <div className="h-[60px] md:h-[80px]">
                <p className="font-mono text-sm sm:text-base mb-6 md:mb-8 max-w-xs sm:max-w-xl text-black text-center md:text-left">
                  <Typewriter text={"Sme tím mladých tvorcov, ktorí vedia, že rýchlosť, kvalita a komunikácia robia rozdiel. Váš web nebude len stránka. Bude Vašou zbraňou."} speed={10} />
                </p>
              </div>
            </div>
            <Link href="/kontakt">
              <PaletteButton variant="secondary">Chcem moderný web</PaletteButton>
            </Link>
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
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#023047]">Ako postupujeme pri vývoji webu</h2>
          <div className="font-mono text-base sm:text-lg mb-6 md:mb-8 text-black">
            <TypewriterOnView text="Váš web vzniká v štyroch krokoch" speed={20} showCursor={false} animatedDots={true} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 md:gap-6">
            {/* Card 1 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-10 flex flex-col items-start min-h-[180px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-1 md:mb-2 text-[#023047]">Konzultácia a pochopenie Vašich cieľov</div>
              <div className="font-mono text-xs md:text-sm mb-2 md:mb-4 text-black">Spoznáme Vašu značku, potreby a Vaše sny</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">1</div>
            </FloatingCard>
            {/* Card 2 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-10 flex flex-col items-start min-h-[180px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-1 md:mb-2 text-[#023047]">Návrh a dizajn</div>
              <div className="font-mono text-xs md:text-sm mb-2 md:mb-4 text-black">Navrhneme Vám jedinečný vzhľad a štruktúru šitú na mieru</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">2</div>
            </FloatingCard>
            {/* Card 3 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-10 flex flex-col items-start min-h-[180px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-1 md:mb-2 text-[#023047]">Vývoj a testovanie</div>
              <div className="font-mono text-xs md:text-sm mb-2 md:mb-4 text-black">Postavíme Váš web na moderných technológiách, otestujeme jeho rýchlosť a bezpečnosť</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">3</div>
            </FloatingCard>
            {/* Card 4 */}
            <FloatingCard className="bg-white rounded-2xl shadow-xl p-4 md:p-10 flex flex-col items-start min-h-[180px] md:min-h-[260px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="font-heading text-base md:text-lg font-bold mb-1 md:mb-2 text-[#023047]">Spustenie a podpora</div>
              <div className="font-mono text-xs md:text-sm mb-2 md:mb-4 text-black">Web Vám nasadíme, odovzdáme, a ak budete chcieť, ostaneme Vám kryť chrbát.</div>
              <div className="mt-auto font-heading text-xl md:text-2xl text-gray-400">4</div>
            </FloatingCard>
          </div>
        </section>

        {/* Why Choose Us + SEO & CMS Unified Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
          <div className="mb-6 md:mb-10">
            <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-1 text-[#023047]">Prečo si vybrať nás</h2>
            <div className="font-mono text-base sm:text-lg text-[#023047]">Prečo NextLayer Studio?</div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-8">
            {/* Card: AI */}
            <AnimatedOnScroll animation="fade-up" delay={0}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/moderne.png" alt="AI" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">AI</div>
                <div className="font-mono text-base mb-2 text-black">Využívame AI a vlastné procesy na to, aby ste Váš nový moderný web mali hotový kvalitne, rýchlo a bez stresu.</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: Moderne */}
            <AnimatedOnScroll animation="fade-up" delay={100}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/ai.png" alt="Moderne" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">Moderne</div>
                <div className="font-mono text-base mb-2 text-black">Sme generácia, ktorá vyrástla na trendoch internetu. Čo je &quot;in&quot;, pre nás nie je novinka, ale bežná súčasť života.</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: Personalizácia */}
            <AnimatedOnScroll animation="fade-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/komunikacia.png" alt="Personalizácia" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">Personalizácia</div>
                <div className="font-mono text-base mb-2 text-black">Váš web bude tak jedinečný, ako Vaša značka – žiadne šablóny, žiadne klišé.</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: Komunikácia */}
            <AnimatedOnScroll animation="fade-up" delay={300}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/personalizacia.png" alt="Komunikácia" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">Komunikácia</div>
                <div className="font-mono text-base mb-2 text-black">Sme otvorení, prístupní a radi Vás zapojíme do celého procesu. Váš názor má váhu.</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: SEO */}
            <AnimatedOnScroll animation="fade-up" delay={400}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/CMS.png" alt="SEO" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">SEO</div>
                <div className="font-mono text-base mb-2 text-black">Vďaka kvalitnému SEO zabezpečíme, aby vaša stránka bola viditeľná, ľahko nájditeľná a pritiahla viac zákazníkov.</div>
              </div>
            </AnimatedOnScroll>
            {/* Card: CMS */}
            <AnimatedOnScroll animation="fade-up" delay={500}>
              <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-center text-center hover:shadow-2xl transition-shadow duration-300">
                <Image src="/seo.png" alt="CMS" width={120} height={120} className="mb-4 md:mb-6 w-20 md:w-44 h-auto" />
                <div className="font-heading text-xl md:text-3xl mb-2 md:mb-4 text-[#023047]">CMS</div>
                <div className="font-mono text-base mb-2 text-black">Vďaka nášmu modernému CMS systému môžete jednoducho spravovať obsah svojej webovej stránky bez potreby technických znalostí.</div>
              </div>
            </AnimatedOnScroll>
          </div>
        </section>

        {/* Successful Projects Section */}
        <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#023047]">Naše úspešné projekty</h2>
          <div className="font-mono text-base sm:text-lg mb-6 md:mb-8 text-[#023047] max-w-xs sm:max-w-3xl">
            Naše portfólio je dôkazom, že kvalitná práca nepotrebuje veľké reči. Každý web, každá stránka a každý dizajn, ktorý vytvoríme, nesie našu filozofiu: personalizácia, rýchlosť, výsledky.<br />
            Pozrite si, ako sme pomohli značkám rásť, vystúpiť z davu a zaujať svoje publikum.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 mb-8 md:mb-12">
            {/* Project 1 - KarinArt */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[300px] md:min-h-[380px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="w-full h-28 md:h-40 rounded-xl mb-4 md:mb-6 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/karinart.png" 
                  alt="Karin Art Tattoo" 
                  width={400} 
                  height={225} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-heading text-lg md:text-2xl font-bold mb-2 text-[#023047]">Karin Art Tattoo</div>
              <div className="font-mono text-xs md:text-sm text-[#FFB703] mb-1">Web Development</div>
              <div className="font-mono text-sm md:text-base mb-4 md:mb-6 text-black">Moderný, elegantný web pre tetovací salón v Bratislave s dôrazom na prezentáciu portfólia umeleckých diel a jednoduchú komunikáciu s klientmi.</div>
              <a href="https://www.karinart.sk" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                <PaletteButton variant="secondary" className="w-full">
                  Pozrieť projekt
                </PaletteButton>
              </a>
            </div>
            {/* Project 2 - Natus Volare */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[300px] md:min-h-[380px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="w-full h-28 md:h-40 rounded-xl mb-4 md:mb-6 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/natusvolare.png" 
                  alt="Natus Volare" 
                  width={400} 
                  height={225} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-heading text-lg md:text-2xl font-bold mb-2 text-[#023047]">Natus Volare</div>
              <div className="font-mono text-xs md:text-sm text-[#FFB703] mb-1">Web Development</div>
              <div className="font-mono text-sm md:text-base mb-4 md:mb-6 text-black">Dynamický web pre spoločnosť špecializujúcu sa na dronové služby, ktorý efektívne prezentuje široké spektrum služieb od filmovania po termálne inšpekcie.</div>
              <a href="https://misk0o.github.io/Natus-Volare/" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                <PaletteButton variant="secondary" className="w-full">
                  Pozrieť projekt
                </PaletteButton>
              </a>
            </div>
            {/* Project 3 - Portfolio */}
            <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col items-start min-h-[300px] md:min-h-[380px] transition-transform duration-200 hover:scale-105 w-full">
              <div className="w-full h-28 md:h-40 rounded-xl mb-4 md:mb-6 flex items-center justify-center overflow-hidden">
                <Image 
                  src="/portfolio.png" 
                  alt="Developer Portfolio" 
                  width={400} 
                  height={225} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="font-heading text-lg md:text-2xl font-bold mb-2 text-[#023047]">Developer Portfolio</div>
              <div className="font-mono text-xs md:text-sm text-[#FFB703] mb-1">Web Development</div>
              <div className="font-mono text-sm md:text-base mb-4 md:mb-6 text-black">Minimalistické a elegantné portfólio pre vývojára, ktoré efektívne prezentuje jeho zručnosti, projekty a profesionálne skúsenosti s dôrazom na čistý dizajn.</div>
              <a href="https://my-portfolio-delta-sandy-33.vercel.app" target="_blank" rel="noopener noreferrer" className="mt-auto w-full">
                <PaletteButton variant="secondary" className="w-full">
                  Pozrieť projekt
                </PaletteButton>
              </a>
            </div>
          </div>
          <div className="flex justify-center">
            <Link href="/projekty">
              <PaletteButton variant="secondary">Celé portfólio</PaletteButton>
            </Link>
          </div>
        </section>

        {/* About Us Section */}
        <section className="max-w-4xl mx-auto mt-20 md:mt-32 mb-10 sm:mb-16 md:mb-24">
          <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-[#023047]">O nás</h2>
          <div className="font-mono text-base sm:text-lg mb-4 text-[#023047]">
            <TypewriterOnView text="Tím, ktorý tvorí vrstvu navyše" speed={20} showCursor={true} animatedDots={true} />
          </div>
          <div className="space-y-1 mb-6 md:mb-8">
            <div className="font-mono text-black text-base sm:text-lg">Sme tím mladých ľudí ktorí spojili vášeň pre technológie, dizajn a rýchlu komunikáciu.</div>
            <div className="font-mono text-black text-base sm:text-lg">Veríme, že weby nemajú byť len pekné – ale majú byť aj nástrojom na rast biznisu.</div>
            <div className="font-mono text-black text-base sm:text-lg">Preto tvoríme stránky na mieru – také, ktoré fungujú nielen dnes, ale aj zajtra.</div>
          </div>
          <div className="font-heading text-lg sm:text-xl font-bold mb-2 text-black">Naše základné hodnoty</div>
          <div className="font-mono text-base sm:text-lg mb-6 md:mb-8 text-black">
            Každý web tvoríme ako originál. Každý klient je pre nás výzvou.<br />
            Využívame moderné technológie a AI na zrýchlenie procesov bez straty kvality.<br />
            Spolupráca pre nás znamená počúvať, chápať a hľadať najlepšie riešenie.<br />
            Rozumieme, ako sa svet mení. A vieme ako zostať vždy o krok vpred.
          </div>
          <div className="flex justify-center">
            <Link href="/o-nas">
              <PaletteButton>O našom tíme</PaletteButton>
            </Link>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-6xl mx-auto mt-10 sm:mt-16 md:mt-24 mb-20 md:mb-32">
          <h2 className="font-heading text-4xl sm:text-5xl md:text-6xl font-bold mb-4 text-[#023047]">Kontakt</h2>
          <p className="font-mono text-base mb-16 text-black max-w-2xl">
            Začnite svoju cestu s nami!<br />
            Stačí nás kontaktovať. Všetko ostatné už vyriešime spolu...
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
            {/* Left: Contact Form */}
            <div>
              <form>
                <div className="mb-8">
                  <label className="block font-mono mb-2 text-black">meno:</label>
                  <input 
                    type="text"
                    className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent"
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block font-mono mb-2 text-black">email:</label>
                  <input 
                    type="email" 
                    className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent"
                  />
                </div>
                
                <div className="mb-8">
                  <label className="block font-mono mb-2 text-black">text:</label>
                  <textarea 
                    rows={8}
                    className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent resize-none"
                  />
                </div>

                <Link href="/kontakt">
                  <PaletteButton 
                    type="button"
                    variant="secondary" 
                    className="w-full"
                  >
                    Odoslať správu
                  </PaletteButton>
                </Link>
              </form>
            </div>
            
            {/* Right: Contact Info */}
            <div className="flex flex-col justify-start space-y-8 pt-8">
              <a 
                href="https://instagram.com/nextlayerstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <span className="font-mono">nextlayerstudio</span>
              </a>
              
              <a 
                href="https://youtube.com/@nextlayerstudio" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                </svg>
                <span className="font-mono">nextlayerstudio</span>
              </a>
              
              <a 
                href="tel:0903652258"
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm-3 5h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2h-2V9zm-3 0h2v2H8V9zm-3 0h2v2H5V9zm3 3h2v2H8v-2zm3 0h2v2h-2v-2zm3 0h2v2h-2v-2zm-6 3h8v2H8v-2z"/>
                </svg>
                <span className="font-mono">0903 652 258</span>
              </a>
              
              <a 
                href="mailto:nextlayerstudio@gmail.com" 
                className="flex items-center gap-6 hover:opacity-70 transition-opacity"
              >
                <svg viewBox="0 0 24 24" width="24" height="24" className="text-black fill-current">
                  <path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z"/>
                </svg>
                <span className="font-mono">nextlayerstudio@gmail.com</span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
