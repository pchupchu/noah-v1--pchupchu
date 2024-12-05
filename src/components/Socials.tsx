import Link from 'next/link';

import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

const socials = [
  { icon: <RiInstagramFill />, link: '#' },
  { icon: <FaFacebookF />, link: '#' },
  { icon: <FaTwitter />, link: '#' },
  { icon: <FaLinkedinIn />, link: '#' },
];

interface SocialsProps {
  containerStyle?: string;
  iconStyle?: string;
}
const Socials = ({ containerStyle, iconStyle }: SocialsProps) => {
  return (
    <div className={containerStyle}>
      {socials.map((social, index) => {
        return (
          <Link className={iconStyle} key={index} href={social.link}>
            <span>{social.icon}</span>
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
