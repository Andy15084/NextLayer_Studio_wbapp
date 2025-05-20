'use client';

import { useState } from 'react';
import AnimatedOnScroll from '@/components/AnimatedOnScroll';
import PaletteButton from '@/components/PaletteButton';

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here - connect to backend/API
    console.log('Form submitted:', formData);
    alert('Správa bola odoslaná! Ďakujeme za váš kontakt.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <main className="p-4 sm:p-8 relative z-10" style={{ background: '#8ECAE6' }}>
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto mt-20 md:mt-24 mb-16 md:mb-24">
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-[#023047]">
          Kontaktujte nás
        </h1>
        <div className="font-mono text-base sm:text-lg mb-10 max-w-3xl text-[#023047]">
          <p className="mb-4">
            Máte otázky, nápady alebo potrebujete konzultáciu? 
            Neváhajte nás kontaktovať. Sme tu pre vás a radi vám pomôžeme posunúť váš projekt na novú úroveň.
          </p>
        </div>
      </section>

      {/* Contact Info and Form Section */}
      <section className="max-w-7xl mx-auto mb-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Information */}
          <AnimatedOnScroll animation="fade-right">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-[#023047]">Kde nás nájdete</h2>
              
              {/* Phone */}
              <div className="mb-8">
                <div className="font-heading text-xl font-bold mb-2 text-[#023047]">Telefón</div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  <a href="tel:+421900000000" className="font-mono text-lg hover:text-[#219EBC] transition-colors">
                    +421 900 000 000
                  </a>
                </div>
              </div>
              
              {/* Email */}
              <div className="mb-8">
                <div className="font-heading text-xl font-bold mb-2 text-[#023047]">Email</div>
                <div className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                  </svg>
                  <a href="mailto:info@nextlayerstudio.sk" className="font-mono text-lg hover:text-[#219EBC] transition-colors">
                    info@nextlayerstudio.sk
                  </a>
                </div>
              </div>
              
              {/* Social Media */}
              <div>
                <div className="font-heading text-xl font-bold mb-4 text-[#023047]">Sociálne siete</div>
                <div className="flex flex-wrap gap-6">
                  {/* Instagram */}
                  <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                  </a>
                  {/* GitHub */}
                  <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                  {/* X (Twitter) */}
                  <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                    </svg>
                  </a>
                  {/* TikTok */}
                  <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="hover:scale-110 transition-transform">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M9 0h1.98c.144.715.54 1.617 1.235 2.512C12.895 3.389 13.797 4 15 4v2c-1.753 0-3.07-.814-4-1.829V11a5 5 0 1 1-5-5v2a3 3 0 1 0 3 3V0Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </AnimatedOnScroll>

          {/* Contact Form */}
          <AnimatedOnScroll animation="fade-left">
            <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-[#023047]">Kontaktný formulár</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="font-mono block w-full px-4 py-3 text-black bg-white border-b-2 border-gray-300 focus:border-[#219EBC] focus:outline-none transition-colors"
                    placeholder="meno"
                    required
                  />
                </div>

                {/* Email Field */}
                <div>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="font-mono block w-full px-4 py-3 text-black bg-white border-b-2 border-gray-300 focus:border-[#219EBC] focus:outline-none transition-colors"
                    placeholder="email"
                    required
                  />
                </div>

                {/* Message Field */}
                <div>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="font-mono block w-full px-4 py-3 text-black bg-white border-b-2 border-gray-300 focus:border-[#219EBC] focus:outline-none transition-colors resize-none"
                    placeholder="váš text"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <PaletteButton 
                    type="submit" 
                    variant="secondary"
                    className="w-full"
                  >
                    Odoslať správu
                  </PaletteButton>
                </div>
              </form>
            </div>
          </AnimatedOnScroll>
        </div>
      </section>
    </main>
  );
} 