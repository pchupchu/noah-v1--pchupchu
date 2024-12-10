'use client';

import { useEffect, useState } from 'react';

import { AnimatePresence, motion } from 'framer-motion';
import { FiMail, FiMapPin, FiPhoneCall } from 'react-icons/fi';
import { useMediaQuery } from 'react-responsive';

import MenuBtn from './MenuBtn';
import Nav from './Nav';
import Socials from './Socials';

const FixedMenu = () => {
  const [showMenuBtn, setShowMenuBtn] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const isMobile = useMediaQuery({
    query: '(max-width: 640px)',
  });

  //check if the component is mounted to prevent SSR mismatches
  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const handleScroll = () => {
        setShowMenuBtn(window.scrollY > 150); //show the menu button after scrolling 150px
      };

      if (!isMobile) {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      } else {
        //always show the menu button on mobile
        setShowMenuBtn(true);
      }
    }
  }, [isMounted, isMobile]);

  //prevent rendering until mounted
  if (!isMounted) return null;

  const onClick = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className='pointer-events-none fixed z-50 flex h-[400px] w-full justify-center bg-transparent'>
      <AnimatePresence>
        {showMenu && showMenuBtn && (
          <motion.div className='pointer-events-auto relative bottom-[28rem] min-h-[400px] w-full max-w-md px-4 md:max-w-none xl:bottom-[21.2rem]'>
            <div className='shadow-custom mx-auto flex h-full w-full max-w-[1170px] items-center gap-12 rounded-lg bg-white px-12 py-12 xl:px-32'>
              <Nav
                containerStyle='md:border-r border-secondary/20 md:pr-12 w-full md:w-auto text-center md:text-left'
                listStyle='flex flex-col justify-center gap-4'
                linkStyle='text-primary font-primary text-4xl cursor-pointer'
                spy={true}
              />
              <div className='mx-auto hidden md:block'>
                <div className='mb-12 flex gap-12'>
                  <div className='flex flex-col'>
                    <FiMapPin className='text-accent mb-2 text-[28px]' />
                    <p className='text-primary text-lg font-semibold'>
                      Location
                    </p>
                    <p>New York, USA</p>
                  </div>
                  <div className='flex flex-col'>
                    <FiPhoneCall className='text-accent mb-2 text-[28px]' />
                    <p className='text-primary text-lg font-semibold'>Phone</p>
                    <p>+123 456 789</p>
                  </div>
                  <div className='flex flex-col'>
                    <FiMail className='text-accent mb-2 text-[28px]' />
                    <p className='text-primary text-lg font-semibold'>Email</p>
                    <p>youremail@example.com</p>
                  </div>
                </div>
                <Socials
                  containerStyle='flex flex-wrap gap-4'
                  iconStyle='w-8 h-8 text-[20px] text-primaty flex items-center justify-center rounded-full'
                />
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {isMobile ? (
        <div className='fixed bottom-16 z-50'>
          <MenuBtn btnClass='pointer-events-auto' onClick={onClick} />
        </div>
      ) : (
        <AnimatePresence>
          {showMenuBtn && (
            <motion.div
              className='pointer-events-auto fixed bottom-16 z-50'
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 40,
              }}>
              <MenuBtn onClick={onClick} />
            </motion.div>
          )}
        </AnimatePresence>
      )}
    </div>
  );
};

export default FixedMenu;
