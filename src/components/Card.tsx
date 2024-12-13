import Image from 'next/image';

interface CardProps {
  type: string;
  company?: string;
  logoSrc?: string;
  position?: string;
  duration: string;
  description: string;
  institution?: string;
  qualification?: string;
  name?: string;
  icon?: JSX.Element;
}

const Card = ({
  type,
  company,
  logoSrc,
  position,
  duration,
  description,
  institution,
  qualification,
  name,
  icon,
}: CardProps) => {
  return (
    <div className='h-[270px] w-full rounded-lg border border-accent/80 bg-[#f4ffff]'>
      <div className='flex h-full flex-col'>
        <div className='flex h-20 flex-col items-center justify-center rounded-tl-lg rounded-tr-lg bg-white px-6 md:px-[84px] xl:h-[68px] xl:flex-row xl:justify-between'>
          <div className='flex gap-2'>
            <Image
              src='/journey/shape.svg'
              alt='squares'
              width={16}
              height={16}
            />
            <h3 className='text-lg font-semibold text-primary'>
              {type === 'experience'
                ? position
                : type === 'education'
                  ? qualification
                  : duration}
            </h3>
          </div>
          <p className='text-base'>
            {type !== 'experience' && type !== 'education' ? null : duration}
          </p>
        </div>
        <div className='flex flex-1 items-center justify-center md:px-16 md:py-8 xl:justify-start'>
          <div className='flex flex-col items-center gap-4 px-4 text-center xl:flex-row xl:items-start xl:gap-10 xl:px-0 xl:text-left'>
            {type === 'skill' ? (
              <div className='relative flex h-full w-max items-center justify-center xl:w-[300px]'>
                <div className='text-5xl text-primary/90'>{icon}</div>
              </div>
            ) : (
              logoSrc !== undefined && (
                <div className='relative h-[38px] w-[300px] xl:h-[44px]'>
                  <Image
                    className='object-contain'
                    src={logoSrc}
                    alt='logo'
                    fill
                  />
                </div>
              )
            )}

            <div className='w-full xl:border-l xl:border-secondary/10 xl:pl-12'>
              <h3 className='h3 mb-2 hidden xl:mb-4 xl:flex'>
                {type === 'experience'
                  ? company
                  : type === 'education'
                    ? institution
                    : type === 'skill'
                      ? name
                      : null}
              </h3>
              <p className='max-w-[660px] text-base'>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
