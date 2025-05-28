import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="w-full py-8" style={{ background: '#023047', borderTop: '2px solid #219EBC' }}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-2 md:mb-4">
          {/* Quick Links */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">Rýchle odkazy</div>
            <Link href="/" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Domov</Link>
            <Link href="/preco-my" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Prečo práve my</Link>
            <Link href="/o-nas" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">O nás</Link>
            <Link href="/projekty" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Úspešné projekty</Link>
            <Link href="/kontakt" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Kontakt</Link>
            <a href="https://next-layer-studio-marketing.vercel.app" target="_blank" rel="noopener noreferrer" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#00ffdd] transition-colors">Marketing</a>
          </div>
          {/* Company Info */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">Údaje o firme</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">IČO: 56580894</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Číslo živnostenského registra: 140-35375</div>
            <div className="font-mono text-xs sm:text-sm text-white">Zapísaný v: Živnostenskom registri<br/>okresného úradu Senec</div>
          </div>
          {/* What We Offer */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">Čo ponúkame</div>
            <Link href="/eshop" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Tvorba eshopu</Link>
            <Link href="/webove-aplikacie" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Tvorba webových aplikácii</Link>
            <Link href="/sluzby/modernizacia" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Modernizácia webstránky</Link>
            <Link href="/sluzby/automatizacia" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Automatizácia a priemyselné riešenia</Link>
          </div>
          {/* Contact */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">Kontakt</div>
            <a href="mailto:nextlayerstudio@gmail.com" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">email: nextlayerstudio@gmail.com</a>
            <a href="tel:0903652258" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">tel.: 0903 652 258</a>
          </div>
        </div>
        <div className="text-center font-mono text-xs sm:text-sm text-white mt-4 md:mt-6">
          © 2024 NextLayer Studio s.r.o Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
} 