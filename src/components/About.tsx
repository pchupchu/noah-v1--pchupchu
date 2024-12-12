'use client';

import Image from 'next/image';

import { motion } from 'framer-motion';

import AnimatedText from './AnimatedText';

const About = () => {
  return (
    <section className='relative pb-24 pt-12' id='about'>
      <div className='container h-full'>
        <div className='flex h-full items-center justify-center'>
          <div className='hidden flex-1 pl-8 xl:flex'>
            <div className='relative w-full max-w-[380px]'>
              <div className='bg-accent absolute -left-5 -top-5 -z-10 h-40 w-40'></div>
              <div className='flex min-h-[480px] w-full items-end justify-center rounded-tl-lg rounded-tr-[120px] bg-[#e5f8f6]'>
                <Image
                  src={'/about/img.png'}
                  alt='Noah'
                  width={350}
                  height={478}
                  quality={100}
                  priority
                />
              </div>
              <div className='absolute -right-[65px] top-1/2 flex items-center justify-center'>
                <motion.div
                  animate={{ rotate: [0, 360] }}
                  transition={{
                    duration: 10,
                    ease: 'linear',
                    repeat: Infinity,
                  }}>
                  <Image
                    src={'/about/shape-1.svg'}
                    alt='shape'
                    width={160}
                    height={160}
                  />
                </motion.div>
                <div className='absolute text-center leading-none text-white'>
                  <p className='text-5xl font-bold leading-none'>10+</p>
                  <p className='max-w-24'>Years of Experience</p>
                </div>
              </div>
            </div>
          </div>
          <div className='mx-auto flex w-full flex-col gap-6 text-center xl:mx-0 xl:w-1/2 xl:text-left'>
            <div>
              <AnimatedText text='My Name is Noah' textStyles='h2 mb-2' />
              <p className='text-lg capitalize'>
                Frontend developer & designer
              </p>
            </div>
            <p className='mx-auto mb-2 max-w-[680px] xl:mx-0'>
              I create visually stunning and functional websites using modern
              frontend technologies and design principles. Explore my work to
              see how combine creativity with technical skill to deliver
              exeptional digital experiences.
            </p>
            <ul className='mx-auto flex flex-col items-center gap-8 md:gap-10 lg:flex-row xl:mx-0'>
              <li>
                <p className='text-primary font-bold uppercase'>Age</p>
                <p className='capitalize'>30 years</p>
              </li>
              <li>
                <p className='text-primary font-bold uppercase'>Born in</p>
                <p className='capitalize'>New York, USA</p>
              </li>
              <li>
                <p className='text-primary font-bold uppercase'>Phone</p>
                <p className='capitalize'>+123 456 789</p>
              </li>
              <li>
                <p className='text-primary font-bold uppercase'>Email</p>
                <p className='capitalize'>email@example.com</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
