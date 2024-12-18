'use client';

import Image from 'next/image';

import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

import Header from './Header';
import RotatingShape from './RotatingShape';
import Stats from './Stats';

const Hero = () => {
  return (
    <section className='bg-accent/10 relative h-[800px] xl:bg-white' id='home'>
      <Header />
      <div className='container h-full'>
        <div className='relative z-20 flex h-full w-full flex-col items-center justify-center pt-10 text-center xl:max-w-3xl xl:items-start xl:text-left'>
          <h1 className='h1 mb-2 max-w-80 capitalize xl:max-w-none'>
            <span className='text-accent'>I build and</span> design powerful
            <TypeAnimation
              className='ml-2 xl:ml-4'
              preRenderFirstString={true}
              sequence={['websites', 2000, 'apps', 2000]}
              speed={50}
              wrapper='span'
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          <p className='lead mb-7 max-w-[476px]'>
            Delivering powerful, custom websites that blend aesthetics with
            performance.
          </p>
          <Link to='contact' smooth>
            <button className='btn btn-accent mb-8'>Contact me</button>
          </Link>
          <Stats />
        </div>
        <div className='bg-accent absolute right-0 top-0 hidden min-h-[800px] min-w-[55vw] xl:flex'>
          <Image
            className='absolute bottom-0 left-[6.5vw] z-20 object-contain'
            src='/hero/dev.png'
            height={642}
            width={558}
            alt='Noah'
            quality='100'
            priority
          />
          <Image
            className='absolute left-[4vw] top-48 hidden xl:flex'
            src='hero/arrow.svg'
            alt='arrow'
            width={160}
            height={160}
            data-scroll
            data-scroll-speed='0.05'
          />
          <div className='absolute left-[3vw] top-[600px]'>
            <RotatingShape
              content={
                <Image
                  src='hero/shape-1.svg'
                  alt='shape'
                  width={38}
                  height={38}
                  data-scroll
                  data-scroll-speed='0.2'
                />
              }
              direction='left'
              duration={6}
            />
          </div>
          <div className='absolute left-[30vw] top-60'>
            <RotatingShape
              content={
                <Image
                  src='hero/shape-2.svg'
                  alt='shape'
                  width={34}
                  height={34}
                  data-scroll
                  data-scroll-speed='0.1'
                />
              }
              direction='right'
              duration={5}
            />
          </div>
          <div className='absolute left-[40vw] top-[480px]'>
            <RotatingShape
              content={
                <Image
                  src='hero/shape-3.svg'
                  alt='shape'
                  width={36}
                  height={36}
                  data-scroll
                  data-scroll-speed='0.08'
                />
              }
              direction='left'
              duration={7}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
