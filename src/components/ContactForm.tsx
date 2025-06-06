'use client';

import { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';
import PaletteButton from './PaletteButton';
import { useTranslation } from '@/lib/TranslationContext';

export default function ContactForm() {
  const { t } = useTranslation();
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init('VBkXVCwNKLhntRGyJ');
  }, []);

  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!form.current) return;
    
    setIsSubmitting(true);
    setSubmitStatus('idle');

    try {
      // EmailJS configuration with real credentials
      await emailjs.sendForm(
        'service_1fedtkm',     // Service ID (corrected)
        'template_6u08llf',    // Template ID  
        form.current,
        'VBkXVCwNKLhntRGyJ'    // Public Key
      );
      
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="space-y-8">
      <div>
        <label className="block font-mono mb-2 text-black" htmlFor="user_name">
          {t('homepage.contactForm.name')}
        </label>
        <input 
          type="text"
          name="user_name"
          id="user_name"
          required
          className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703]"
        />
      </div>
      
      <div>
        <label className="block font-mono mb-2 text-black" htmlFor="user_email">
          {t('homepage.contactForm.email')}
        </label>
        <input 
          type="email" 
          name="user_email"
          id="user_email"
          required
          className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703]"
        />
      </div>

      <div>
        <label className="block font-mono mb-2 text-black" htmlFor="message">
          {t('homepage.contactForm.message')}
        </label>
        <textarea 
          name="message"
          id="message"
          rows={8}
          required
          className="w-full border-2 border-black rounded-md px-3 py-2 font-mono bg-transparent resize-none focus:outline-none focus:ring-2 focus:ring-[#FFB703] focus:border-[#FFB703]"
        />
      </div>

      {/* Status Messages */}
      {submitStatus === 'success' && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded font-mono">
          ✅ {t('contactForm.successMessage') || 'Správa bola úspešne odoslaná!'}
        </div>
      )}
      
      {submitStatus === 'error' && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded font-mono">
          ❌ {t('contactForm.errorMessage') || 'Nastala chyba pri odosielaní správy. Skúste to znovu.'}
        </div>
      )}

      <PaletteButton 
        type="submit"
        variant="secondary" 
        className="w-full"
        disabled={isSubmitting}
      >
        {isSubmitting 
          ? (t('contactForm.sending') || 'Odosielam...')
          : t('homepage.contactForm.send')
        }
      </PaletteButton>
    </form>
  );
} 