import StatsItem from './StatsItem';

const statsData = [
  {
    endCountNum: 10,
    endCountText: '+',
    text: 'Years of Experience',
  },
  {
    endCountNum: 100,
    endCountText: '+',
    text: 'Websites Built',
  },
  {
    endCountNum: 95,
    endCountText: '%',
    text: 'Client Satisfied',
  },
];

const Stats = () => {
  return (
    <div className='mx-auto flex justify-center gap-4 xl:mx-0 xl:justify-normal'>
      {statsData.map((stat, index) => (
        <div key={index}>
          <StatsItem
            endCountNum={stat.endCountNum}
            endCountText={stat.endCountText}
            text={stat.text}
          />
        </div>
      ))}
    </div>
  );
};

export default Stats;
