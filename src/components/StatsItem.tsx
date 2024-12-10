'use client';

import CountUp from 'react-countup';

interface StatsItemProps {
  endCountNum: number;
  endCountText: string;
  text: string;
}

const StatsItem = ({ endCountNum, endCountText, text }: StatsItemProps) => {
  return (
    <div className='flex flex-col items-center text-center xl:flex-1'>
      <div className='text-primary font-primary text-4xl leading-none xl:text-5xl'>
        <CountUp end={endCountNum} delay={1} duration={4} />
        <span>{endCountText}</span>
      </div>
      <p className='text-sm'>{text}</p>
    </div>
  );
};

export default StatsItem;
