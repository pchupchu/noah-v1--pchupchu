import About from '@/components/About';
import Contact from '@/components/Contact';
import Hero from '@/components/Hero';
import Journey from '@/components/Journey';
import Services from '@/components/Services';
import Work from '@/components/Work';

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <About />
      <Journey />
      <Work />
      <Contact />
      <div className='h-[3000px]'></div>
    </main>
  );
}
