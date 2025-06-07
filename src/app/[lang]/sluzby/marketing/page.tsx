"use client";

import React from 'react';
import Image from 'next/image';

export default function MarketingPage() {
  return (
    <main className="min-h-screen p-4 sm:p-8 relative z-10" style={{ background: '#FFC067' }}>
      {/* Image Section */}
      <section className="max-w-6xl mx-auto px-4 sm:px-8 pt-16 md:pt-24 pb-12 md:pb-20 flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-1 flex justify-center items-start w-full">
          <Image src="/marketing.png" alt="Marketing" width={480} height={480} className="w-full max-w-md h-auto object-contain" priority />
        </div>
      </section>
    </main>
  );
} 