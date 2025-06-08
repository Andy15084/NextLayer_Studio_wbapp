"use client";

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import FloatingCard from '@/components/FloatingCard';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import PaletteButton from '@/components/PaletteButton';
import Link from 'next/link';
import { useTranslation } from '@/lib/TranslationContext';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  category: 'all' | 'webDev' | 'ecommerce' | 'apps' | 'marketing';
  url?: string;
}

export default function ProjektyPage() {
  const { t } = useTranslation();
  const [filter, setFilter] = useState<'all' | 'webDev' | 'ecommerce' | 'apps' | 'marketing'>('all');
  const observerRef = useRef<IntersectionObserver | null>(null);

  const projects: Project[] = [
    {
      id: '1',
      title: 'KarinArt',
      description: t('homepage.projects.karinart'),
    image: '/karinart.png',
      category: 'webDev',
      url: 'https://karinart.sk'
  },
  {
      id: '2',
      title: 'NatusVolare',
      description: t('homepage.projects.natusvolare'),
    image: '/natusvolare.png',
      category: 'webDev',
      url: 'https://natusvolare.sk'
  },
  {
      id: '3',
      title: 'Portfolio',
      description: t('homepage.projects.portfolio'),
    image: '/portfolio.png',
      category: 'webDev',
      url: 'https://andrejpaulicka.sk'
  }
];

  const filters = [
    { key: 'all' as const, label: t('projects.filters.all') },
    { key: 'webDev' as const, label: t('projects.filters.webDev') },
    { key: 'ecommerce' as const, label: t('projects.filters.ecommerce') },
    { key: 'apps' as const, label: t('projects.filters.apps') },
    { key: 'marketing' as const, label: t('projects.filters.marketing') }
  ];

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.category === filter);

  const processSteps = [
    {
      number: '01',
      title: t('projects.process.step1.title'),
      description: t('projects.process.step1.description')
    },
    {
      number: '02',
      title: t('projects.process.step2.title'),
      description: t('projects.process.step2.description')
    },
    {
      number: '03',
      title: t('projects.process.step3.title'),
      description: t('projects.process.step3.description')
    },
    {
      number: '04',
      title: t('projects.process.step4.title'),
      description: t('projects.process.step4.description')
    }
  ];

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animation logic can be added here if needed
          }
        });
      },
      { threshold: 0.1 }
    );

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    const elements = document.querySelectorAll('[data-animate]');
    elements.forEach((element) => {
      if (observerRef.current) {
        observerRef.current.observe(element);
      }
    });

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [filteredProjects]);

  return (
    <main className="p-4 sm:p-8 relative z-10 min-h-screen" style={{ background: '#8ECAE6' }}>
      <section className="max-w-6xl mx-auto mt-20 md:mt-32 mb-10 sm:mb-16 md:mb-24">
        {/* Header */}
        <div className="mb-16 text-left">
          <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold text-[#023047] leading-tight mb-6">
            {t('projects.title')}
        </h1>
          <div className="font-mono text-base sm:text-lg text-[#023047] max-w-3xl mb-8 space-y-4">
            <p>{t('projects.description1')}</p>
            <p>{t('projects.description2')}</p>
          </div>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap gap-2 mb-12 justify-center">
          {filters.map((filterOption) => (
          <button 
              key={filterOption.key}
              onClick={() => setFilter(filterOption.key)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                filter === filterOption.key
                  ? 'bg-[#023047] text-white shadow-lg'
                  : 'bg-white text-[#023047] hover:bg-[#219EBC] hover:text-white'
              }`}
            >
              {filterOption.label}
          </button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {filteredProjects.map((project, index) => (
            <AnimatedOnScroll 
              key={project.id} 
              delay={index * 200}
              className="h-full"
            >
              <FloatingCard className="bg-white rounded-2xl shadow-xl overflow-hidden transition-transform duration-300 hover:scale-105 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image 
                    src={project.image} 
                    alt={project.title} 
                    fill
                    className="object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="font-heading text-xl font-bold text-[#023047] mb-3">
                    {project.title}
                  </h3>
                  <p className="font-mono text-sm text-gray-700 mb-6 flex-1">
                    {project.description}
                  </p>
                  {project.url && (
                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#FFB703] text-[#023047] font-semibold py-2 px-4 rounded-lg hover:bg-[#FF9500] transition-colors duration-300"
                    >
                      {t('projects.viewProject')}
                    </a>
                  )}
                </div>
              </FloatingCard>
            </AnimatedOnScroll>
          ))}
        </div>

        {/* Process section */}
        <div className="mb-20">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#023047] mb-12 text-center">
            {t('projects.process.title')}
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {processSteps.map((step, index) => (
              <AnimatedOnScroll
                key={step.number}
                delay={index * 200}
                className="h-full"
              >
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <div className="flex items-start gap-4 h-full">
                    <div className="bg-[#FFB703] text-[#023047] font-heading text-2xl font-bold w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0">
                      {step.number}
                </div>
                    <div className="flex-1">
                      <h3 className="font-heading text-xl font-bold text-[#023047] mb-3">
                        {step.title}
                      </h3>
                      <p className="font-mono text-sm text-gray-700">
                        {step.description}
                      </p>
                </div>
                </div>
              </div>
            </AnimatedOnScroll>
            ))}
          </div>
            </div>
            
        {/* Results section */}
              <div className="text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-[#023047] mb-6">
            {t('projects.results.title')}
          </h2>
          <p className="font-mono text-lg text-[#023047] max-w-2xl mx-auto">
            {t('projects.results.subtitle')}
          </p>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="bg-[#023047] rounded-2xl shadow-xl p-12 text-center">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white">
            {t('projects.cta.title')}
          </h2>
          <p className="font-mono text-lg text-white mb-8 max-w-2xl mx-auto">
            {t('projects.cta.description')}
          </p>
          <Link href="/kontakt">
            <PaletteButton style={{ background: '#FFB703', border: '2px solid #FFB703', color: '#023047', fontWeight: 'bold', fontSize: '1.1rem' }}>
              {t('projects.cta.button')}
            </PaletteButton>
          </Link>
        </div>
      </section>
    </main>
  );
} 