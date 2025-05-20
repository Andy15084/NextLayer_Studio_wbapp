export default function Footer() {
  return (
    <footer className="w-full py-8" style={{ background: '#023047', borderTop: '2px solid #219EBC' }}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-2 md:mb-4">
          {/* Quick Links */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">Rýchle odkazy</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Domov</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Prečo my</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Úspešné projekty</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Kontakt</div>
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
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Správa sociálnych sietí</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Modernizácia vašej webstránky</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Vytvorenie digitálnej identity spoločnosti</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Tvorba eshopu</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">Tvorba webových aplikácii</div>
          </div>
          {/* Contact */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">Kontakt</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">email: nextlayerstudio@gmail.com</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">tel.: 0903652258</div>
          </div>
        </div>
        <div className="text-center font-mono text-xs sm:text-sm text-white mt-4 md:mt-6">
          © 2024 NextLayer Studio s.r.o Všetky práva vyhradené.
        </div>
      </div>
    </footer>
  );
} 