'use client';

import { useEffect } from 'react';

import About from '@/components/About';
import Contact from '@/components/Contact';
import FixedMenu from '@/components/FixedMenu';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Services from '@/components/Services';
import Testimonial from '@/components/Testimonial';
import Work from '@/components/Work';

export default function Home() {
  //implement locomotive scroll
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const LocomotiveScroll = (await import('locomotive-scroll')).default;
      new LocomotiveScroll();
    };
    loadLocomotiveScroll();
  }, []);

  return (
    <main>
      <Hero />
      <FixedMenu />
      <Services />
      <About />
      <Journey />
      <Work />
      <Testimonial />
      <Contact />
      <Footer />
    </main>
  );
}
