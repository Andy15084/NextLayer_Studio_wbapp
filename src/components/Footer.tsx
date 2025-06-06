'use client';
import Link from 'next/link';
import { useTranslation } from '@/lib/TranslationContext';

export default function Footer() {
  const { t } = useTranslation();
  
  return (
    <footer className="w-full py-8" style={{ background: '#023047', borderTop: '2px solid #219EBC' }}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-2 md:mb-4">
          {/* Quick Links */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">{t('footer.quickLinks')}</div>
            <Link href="/" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">{t('footer.home')}</Link>
            <Link href="/preco-my" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">{t('footer.whyUs')}</Link>
            <Link href="/o-nas" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">{t('footer.aboutUs')}</Link>
            <Link href="/projekty" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">{t('footer.projects')}</Link>
            <Link href="/kontakt" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">{t('footer.contact')}</Link>
            <a href="https://next-layer-studio-marketing.vercel.app" target="_blank" rel="noopener noreferrer" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#00ffdd] transition-colors">{t('footer.marketing')}</a>
          </div>
          {/* Company Info */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">{t('footer.companyInfo')}</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">{t('footer.ico')}</div>
            <div className="font-mono text-xs sm:text-sm mb-1 text-white">{t('footer.registrationNumber')}</div>
            <div className="font-mono text-xs sm:text-sm text-white">{t('footer.registeredIn')}</div>
          </div>
          {/* What We Offer */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">{t('footer.whatWeOffer')}</div>
            <Link href="/eshop" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">{t('services.eshopCreation')}</Link>
            <Link href="/webove-aplikacie" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">{t('services.webAppDevelopment')}</Link>
            <Link href="/sluzby/modernizacia" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">{t('services.websiteModernization')}</Link>
            <Link href="/sluzby/automatizacia" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">{t('services.automationAndIndustrial')}</Link>
          </div>
          {/* Contact */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">{t('footer.contact')}</div>
            <a href="mailto:nextlayerstudio@gmail.com" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">email: nextlayerstudio@gmail.com</a>
            <a href="tel:0903652258" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">tel.: 0903 652 258</a>
          </div>
        </div>
        <div className="text-center font-mono text-xs sm:text-sm text-white mt-4 md:mt-6">
          {t('footer.copyright')}
        </div>
      </div>
    </footer>
  );
} 