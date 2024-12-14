import Image from 'next/image';
import Link from 'next/link';

import { FiArrowRight } from 'react-icons/fi';

import { Badge } from './ui/badge';

interface WorkItemProps {
  href: string;
  category: string;
  imgSrc: string;
  title: string;
}

const WorkItem = ({ href, category, imgSrc, title }: WorkItemProps) => {
  return (
    <Link className='group' href={href}>
      <div className='relative mb-6 flex h-[300px] w-full items-center justify-center overflow-hidden rounded-[30px] bg-[#f4f4f4] p-8'>
        <Badge className='absolute left-6 top-6 z-40 bg-primary text-base capitalize'>
          {category}
        </Badge>
        <Image
          className='object-cover transition-all duration-500 group-hover:scale-105'
          src={imgSrc}
          alt={title}
          fill
          priority
          quality={100}
        />
      </div>
      <div className='flex items-center justify-center'>
        <div className='flex-1'>
          <h3 className='h3'>{title}</h3>
        </div>
        <button
          className='flex h-12 w-12 -rotate-45 items-center justify-center rounded-full bg-accent text-white transition-all duration-500 group-hover:rotate-0'
          type='button'>
          <FiArrowRight className='text-2xl' />
        </button>
      </div>
    </Link>
  );
};

export default WorkItem;
