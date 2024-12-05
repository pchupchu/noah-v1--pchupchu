import Link from 'next/link';

interface LogoProps {
  light?: boolean;
}

const Logo = ({ light = false }: LogoProps) => {
  // determine the logo color based on the light prop
  const colorClass = light ? 'text-white' : 'text-primary'; //default to black
  return (
    <Link className='font-primary text-2xl tracking-[4px]' href='/'>
      <span className={colorClass}>Noah Jameson</span>
    </Link>
  );
};

export default Logo;
