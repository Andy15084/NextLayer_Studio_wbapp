import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Albert_Sans, Roboto_Mono } from 'next/font/google';
import { TranslationProvider } from "@/lib/TranslationContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";

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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sk" className={`${geistSans.variable} ${geistMono.variable} ${albertSans.variable} ${robotoMono.variable} antialiased`}>
      <head>
        <link rel="icon" href="/logopink.png" />
        <link rel="shortcut icon" href="/logopink.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="mask-icon" href="/logopink.png" color="#000000" />
      </head>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <TranslationProvider>
          <Navbar />
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </TranslationProvider>
        <Analytics />
      </body>
    </html>
  );
}
