'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslation } from '@/lib/TranslationContext';

export default function Navbar() {
  const { currentLanguage, setLanguage, t } = useTranslation();
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [isLanguageOpen, setIsLanguageOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeout = useRef<NodeJS.Timeout | null>(null);
  const languageTimeout = useRef<NodeJS.Timeout | null>(null);

  // Helper function to create language-specific URLs
  const createURL = (path: string) => {
    if (currentLanguage === 'sk') {
      return path === '/' ? '/' : path;
    }
    return `/${currentLanguage}${path}`;
  };

  // Services menu items with translations
  const services = [
    { name: t('services.eshopCreation'), href: createURL('/eshop') },
    { name: t('services.webAppDevelopment'), href: createURL('/webove-aplikacie') },
    { name: t('services.websiteModernization'), href: createURL('/sluzby/modernizacia') },
    { name: t('services.automationAndIndustrial'), href: createURL('/sluzby/automatizacia') },
  ];

  // Language options with translations
  const languages = [
    { code: 'sk', name: 'SK', fullName: t('languages.slovak') },
    { code: 'de', name: 'DE', fullName: t('languages.german') },
    { code: 'cs', name: 'CZ', fullName: t('languages.czech') },
    { code: 'en', name: 'EN', fullName: t('languages.english') },
  ];

  // Scroll handler for auto-hide/show
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setShowNavbar(true);
      } else if (currentScrollY > lastScrollY) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }
      setLastScrollY(currentScrollY);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const handleServicesEnter = () => {
    if (closeTimeout.current) clearTimeout(closeTimeout.current);
    setIsServicesOpen(true);
  };
  const handleServicesLeave = () => {
    closeTimeout.current = setTimeout(() => setIsServicesOpen(false), 200);
  };

  const handleAboutEnter = () => {
    if (aboutTimeout.current) clearTimeout(aboutTimeout.current);
    setIsAboutOpen(true);
  };
  const handleAboutLeave = () => {
    aboutTimeout.current = setTimeout(() => setIsAboutOpen(false), 200);
  };

  const handleLanguageEnter = () => {
    if (languageTimeout.current) clearTimeout(languageTimeout.current);
    setIsLanguageOpen(true);
  };

  const handleLanguageLeave = () => {
    languageTimeout.current = setTimeout(() => setIsLanguageOpen(false), 200);
  };

  const handleLanguageChange = (code: string) => {
    setLanguage(code as 'sk' | 'en' | 'de' | 'cs');
    setIsLanguageOpen(false);
    
    // Redirect to the appropriate URL
    if (code === 'sk') {
      // For Slovak, go to root
      window.location.href = '/';
    } else {
      // For other languages, go to language-specific path
      window.location.href = `/${code}/`;
    }
  };

  return (
    <nav
      className={`w-[80%] mx-auto bg-white rounded-b-xl shadow-md fixed left-1/2 -translate-x-1/2 z-50 transition-transform duration-300 ${
        showNavbar ? 'translate-y-0' : '-translate-y-full'
      }`}
      style={{ minHeight: '56px', top: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href={createURL('/')}>
              <div className="relative w-40 h-10 cursor-pointer flex items-center">
                <Image
                  src="/logoblack.png"
                  alt="NextLayer Studio Logo"
                  width={160}
                  height={40}
                  className="object-contain"
                  priority
                  quality={100}
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <div className="relative">
                <button
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                  className="bg-[#FFB703] text-[#023047] border-2 border-[#FFB703] hover:bg-[#023047] hover:border-[#023047] hover:text-white font-heading px-5 py-2 rounded-md text-sm font-bold shadow transition-colors duration-200 inline-flex items-center"
                >
                  {t('nav.webSolutions')}
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isServicesOpen && (
                  <div
                    onMouseEnter={handleServicesEnter}
                    onMouseLeave={handleServicesLeave}
                    className="absolute left-0 mt-2 w-72 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1 divide-y divide-gray-200" role="menu">
                      {services.map((service) => (
                        <Link
                          key={service.href}
                          href={service.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-heading"
                          role="menuitem"
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <a
                href="https://next-layer-studio-marketing.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00ffdd] hover:bg-[#00e6c7] text-[#023047] font-heading px-5 py-2 rounded-md text-sm font-bold shadow transition"
              >
                {t('nav.marketing')}
              </a>

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                  className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  {t('nav.whyUs')}
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform ${
                      isAboutOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isAboutOpen && (
                  <div
                    onMouseEnter={handleAboutEnter}
                    onMouseLeave={handleAboutLeave}
                    className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1 divide-y divide-gray-200" role="menu">
                      <Link
                        href={createURL('/preco-my')}
                        className="font-heading text-gray-700 hover:text-gray-900 block px-4 py-2 text-sm"
                      >
                        {t('nav.whyUsMenu')}
                      </Link>
                      <Link
                        href={createURL('/o-nas')}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-heading"
                        role="menuitem"
                      >
                        {t('nav.aboutUs')}
                      </Link>
                    </div>
                  </div>
                )}
              </div>

              <Link
                href={createURL('/projekty')}
                className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {t('nav.projects')}
              </Link>

              <Link
                href={createURL('/kontakt')}
                className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                {t('nav.contact')}
              </Link>

              {/* Language Selector */}
              <div className="relative">
                <button
                  onMouseEnter={handleLanguageEnter}
                  onMouseLeave={handleLanguageLeave}
                  className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  {languages.find(lang => lang.code === currentLanguage)?.name || 'SK'}
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform ${
                      isLanguageOpen ? 'rotate-180' : ''
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {isLanguageOpen && (
                  <div
                    onMouseEnter={handleLanguageEnter}
                    onMouseLeave={handleLanguageLeave}
                    className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                  >
                    <div className="py-1 divide-y divide-gray-200" role="menu">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          onClick={() => handleLanguageChange(language.code)}
                          className={`block w-full text-left px-4 py-2 text-sm ${
                            currentLanguage === language.code
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-700 hover:bg-gray-100'
                          } font-heading`}
                          role="menuitem"
                        >
                          <span className="font-bold mr-2">{language.name}</span>
                          {language.fullName}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Mobile Language Selector - Always visible */}
          <div className="flex items-center md:hidden">
            <div className="relative mr-2">
              <button
                onClick={() => setIsLanguageOpen(!isLanguageOpen)}
                className="font-heading text-gray-700 hover:text-gray-900 px-2 py-1 rounded-md text-sm font-medium inline-flex items-center"
              >
                {languages.find(lang => lang.code === currentLanguage)?.name || 'SK'}
                <svg
                  className={`ml-1 h-4 w-4 transition-transform ${
                    isLanguageOpen ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {isLanguageOpen && (
                <div
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="py-1 divide-y divide-gray-200" role="menu">
                    {languages.map((language) => (
                      <button
                        key={language.code}
                        onClick={() => handleLanguageChange(language.code)}
                        className={`block w-full text-left px-4 py-2 text-sm ${
                          currentLanguage === language.code
                            ? 'bg-gray-100 text-gray-900'
                            : 'text-gray-700 hover:bg-gray-100'
                        } font-heading`}
                        role="menuitem"
                      >
                        <span className="font-bold mr-2">{language.name}</span>
                        {language.fullName}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
              aria-controls="mobile-menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`md:hidden ${mobileMenuOpen ? '' : 'hidden'}`} id="mobile-menu">
        <div className="px-2 pt-2 pb-3 space-y-4 sm:px-3">
          <div className="relative">
            <button
              className="bg-[#FFB703] text-[#023047] border-2 border-[#FFB703] hover:bg-[#023047] hover:border-[#023047] hover:text-white font-heading px-5 py-2 rounded-md text-sm font-bold shadow transition-colors duration-200 inline-flex items-center w-full justify-between"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              {t('nav.webSolutions')}
              <svg
                className={`ml-2 h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`}
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>
            {isServicesOpen && (
              <div className="pl-4 space-y-2 mt-2">
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <a
            href="https://next-layer-studio-marketing.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#00ffdd] hover:bg-[#00e6c7] text-[#023047] font-heading px-5 py-3 rounded-md text-sm font-bold shadow transition w-full block text-center"
          >
            {t('nav.marketing')}
          </a>

          {/* Mobile About Dropdown */}
          <div className="relative">
            <button
              className="font-heading text-gray-700 hover:text-gray-900 block w-full text-left px-3 py-3 rounded-md text-base font-medium"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              {t('nav.whyUs')}
            </button>
            {isAboutOpen && (
              <div className="pl-4 space-y-2 mt-1">
                <Link
                  href={createURL('/preco-my')}
                  className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm"
                >
                  {t('nav.whyUsMenu')}
                </Link>
                <Link
                  href={createURL('/o-nas')}
                  className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm"
                >
                  {t('nav.aboutUs')}
                </Link>
              </div>
            )}
          </div>

          <Link
            href={createURL('/projekty')}
            className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-3 rounded-md text-base font-medium"
          >
            {t('nav.projects')}
          </Link>

          <Link
            href={createURL('/kontakt')}
            className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-3 rounded-md text-base font-medium"
          >
            {t('nav.contact')}
          </Link>
        </div>
      </div>
    </nav>
  );
} 