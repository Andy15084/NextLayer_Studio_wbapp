import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import { Albert_Sans, Roboto_Mono } from 'next/font/google';
import Link from "next/link";
import Image from "next/image";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const albertSans = Albert_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-albert-sans',
});

const robotoMono = Roboto_Mono({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-roboto-mono',
});

export const metadata: Metadata = {
  title: "NextLayer Studio - Kontakt",
  description: "Kontaktujte nás - NextLayer Studio, web development agency",
};

// Static Navbar component for kontakt page
function StaticNavbar() {
  return (
    <nav
      className="w-[80%] mx-auto bg-white rounded-b-xl shadow-md fixed left-1/2 -translate-x-1/2 z-50"
      style={{ minHeight: '56px', top: 0 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/">
              <div className="relative w-40 h-10 cursor-pointer flex items-center">
                <Image
                  src="/logoblack.png"
                  alt="NextLayer Studio Logo"
                  width={160}
                  height={40}
                  className="object-contain"
                  priority
                  unoptimized
                />
              </div>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                href="/"
                className="bg-[#FFB703] text-[#023047] border-2 border-[#FFB703] hover:bg-[#023047] hover:border-[#023047] hover:text-white font-heading px-5 py-2 rounded-md text-sm font-bold shadow transition-colors duration-200"
              >
                Späť na domov
              </Link>
              
              <Link
                href="/eshop"
                className="font-heading text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium"
              >
                Eshop
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

// Static Footer component for kontakt page
function StaticFooter() {
  return (
    <footer className="w-full py-8" style={{ background: '#023047', borderTop: '2px solid #219EBC' }}>
      <div className="max-w-6xl mx-auto px-2 sm:px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2 md:gap-6 mb-2 md:mb-4">
          {/* Quick Links */}
          <div>
            <div className="font-heading text-base sm:text-lg md:text-xl font-bold mt-4 mb-2 md:mb-4 text-white">Rýchle odkazy</div>
            <Link href="/" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Domov</Link>
            <Link href="/eshop" className="block font-mono text-xs sm:text-sm mb-1 text-white hover:text-[#FFB703] transition-colors">Eshop</Link>
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

export default function KontaktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} ${albertSans.variable} ${robotoMono.variable} antialiased`}>
      <head>
        <link rel="icon" href="/logopink.png" />
        <link rel="shortcut icon" href="/logopink.png" />
        <link rel="apple-touch-icon" href="/logopink.png" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <StaticNavbar />
        <div className="flex-grow pt-16">
          {children}
        </div>
        <StaticFooter />
      </body>
    </html>
  );
} 