'use client';

import { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const services = [
  { name: 'Tvorba eshopu', href: '/sluzby/eshop' },
  { name: 'Tvorba webových aplikácii', href: '/sluzby/webove-aplikacie' },
  { name: 'Tvorba digitálnej identity', href: '/sluzby/digitalna-identita' },
  { name: 'Modernizácia webstránky', href: '/sluzby/modernizacia' },
  { name: 'Automatizácia a priemyselné aplikácie', href: '/sluzby/automatizacia' },
  { name: 'Správa sociálnch sietí a online marketing', href: '/sluzby/marketing' },
];

const about = [
  { name: 'O nás', href: '/o-nas' },
];

export default function Navbar() {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const closeTimeout = useRef<NodeJS.Timeout | null>(null);
  const aboutTimeout = useRef<NodeJS.Timeout | null>(null);

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
          <div className="flex-shrink-0 flex items-center h-10">
            <div className="relative w-32 h-8">
              <Image
                src="/logo-placeholder.svg"
                alt="NextLayer Studio Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Domov
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={handleServicesEnter}
                  onMouseLeave={handleServicesLeave}
                  className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  Čo ponúkame
                  <svg
                    className={`ml-2 h-4 w-4 transition-transform ${
                      isServicesOpen ? 'rotate-180' : ''
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

                {/* Dropdown Menu */}
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

              {/* About Dropdown */}
              <div className="relative">
                <button
                  onMouseEnter={handleAboutEnter}
                  onMouseLeave={handleAboutLeave}
                  className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium inline-flex items-center"
                >
                  Prečo my
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
                      {about.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 font-heading"
                          role="menuitem"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <Link
                href="/projekty"
                className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Úspešné projekty
              </Link>

              <Link
                href="/kontakt"
                className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Kontakt
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
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
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
            href="/"
            className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Domov
          </Link>

          {/* Mobile Services Dropdown */}
          <div className="relative">
            <button
              className="font-heading text-gray-700 hover:text-gray-900 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsServicesOpen(!isServicesOpen)}
            >
              Čo ponúkame
            </button>
            {isServicesOpen && (
              <div className="pl-4 space-y-1">
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

          {/* Mobile About Dropdown */}
          <div className="relative">
            <button
              className="font-heading text-gray-700 hover:text-gray-900 block w-full text-left px-3 py-2 rounded-md text-base font-medium"
              onClick={() => setIsAboutOpen(!isAboutOpen)}
            >
              Prečo my
            </button>
            {isAboutOpen && (
              <div className="pl-4 space-y-1">
                {about.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-sm"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            href="/projekty"
            className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Úspešné projekty
          </Link>

          <Link
            href="/kontakt"
            className="font-heading text-gray-700 hover:text-gray-900 block px-3 py-2 rounded-md text-base font-medium"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
} 