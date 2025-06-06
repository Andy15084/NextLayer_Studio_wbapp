import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Albert_Sans, Roboto_Mono } from 'next/font/google';
import { locales } from "../../../middleware";

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

export async function generateStaticParams() {
  return locales.map(lang => ({ lang }));
}

// This is a special Next.js function that modifies the HTML and body
// attributes for internationalization
export function generateViewport() {
  return {
    themeColor: '#8ECAE6',
  };
}

// This is a special Next.js function that modifies the HTML and body
// attributes for internationalization
export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "NextLayer Studio",
    description: "NextLayer Studio - Web Development Agency",
    icons: {
      icon: [
        {
          url: "/logopink.png",
          type: "image/png",
          sizes: "any",
        },
      ],
      apple: {
        url: "/apple-touch-icon.png",
        type: "image/png",
      },
      shortcut: "/logopink.png",
    },
  };
}

export default function LocaleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className={`flex-grow ${geistSans.variable} ${geistMono.variable} ${albertSans.variable} ${robotoMono.variable}`}>
        {children}
      </div>
    </>
  );
} 