import Logo from './Logo';

const Footer = () => {
  return (
    <footer className='bg-primary py-12'>
      <div className='container'>
        <div className='flex flex-col items-center justify-between xl:flex-row'>
          <Logo light={true} />
          <div className='font-light text-white/70'>
            Copyright &copy; 2024. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
