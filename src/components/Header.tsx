'use client';

import Logo from './Logo';
import Nav from './Nav';
import Socials from './Socials';

const Header = () => {
  return (
    <header className='absolute z-30 w-full py-8 xl:py-12'>
      <div className='container'>
        <div className='flex flex-col items-center gap-4 lg:flex-row lg:justify-between'>
          <Logo />
          <div className='flex items-center gap-12'>
            <Nav
              containerStyle='hidden xl:flex'
              listStyle='flex gap-6'
              linkStyle='text-primary font-primary text-lg tracking-[1.4px] transition-all duration-300 cursor-pointer'
            />
            <Socials
              containerStyle='flex items-center gap-2'
              iconStyle='flex items-center justify-center test-base w-8 h-8 bg-primary text-white rounded-full'
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
