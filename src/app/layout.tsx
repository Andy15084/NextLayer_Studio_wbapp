import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Albert_Sans, Roboto_Mono } from 'next/font/google';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

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
};

export default function RootLayout({
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
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
      </body>
    </html>
  );
}
