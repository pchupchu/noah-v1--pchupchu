import Image from 'next/image';
import { useCallback, useState } from 'react';

import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { ImQuotesLeft } from 'react-icons/im';
import { Swiper as SwiperInstance } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import { Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import { cn } from '@/lib/utils';

import AnimatedText from './AnimatedText';

const slides = [
  {
    image: '/testimonial/img-1.png',
    name: 'Emma Johnson',
    message:
      'The service was fantastic! Highly recommend it to anyone looking for top notch design.',
  },
  {
    image: '/testimonial/img-2.png',
    name: 'Sophia Martinez',
    message:
      'I could not be happier with the result. The website is both beautiful and functional!',
  },
  {
    image: '/testimonial/img-3.png',
    name: 'James Smith',
    message:
      'Excellent work! The project was handeled professionally from start to finish!',
  },
  {
    image: '/testimonial/img-4.png',
    name: 'Olivia Williams',
    message:
      'Everything was delivered on time, and the design exseeded my expectations.',
  },
  {
    image: '/testimonial/img-5.png',
    name: 'Isabella Brown',
    message:
      'Amazing attention to detail. My site looks professional and user-friendly.',
  },
  {
    image: '/testimonial/img-6.png',
    name: 'Liam Davis',
    message:
      'The team truly understood my needs. My website is faster and looks great!.',
  },
];

const Testimonial = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperInstance | null>(null);

  //state to store the active slide index
  const [activeSlide, setActiveSlide] = useState(0);

  const handlePrevSlide = useCallback(() => {
    swiperRef?.slidePrev();
  }, [swiperRef]);

  const handleNextSlide = useCallback(() => {
    swiperRef?.slideNext();
  }, [swiperRef]);

  return (
    <section className='overflow-hidden py-24'>
      <div className='container'>
        <AnimatedText
          text='What Clients Say'
          textStyles='h2 text-center mb-[30px] xl:mb-[60px]'
        />
        <div className='flex flex-col gap-12 lg:flex-row'>
          <div className='mx-auto flex w-max flex-col items-center justify-center text-center xl:mx-0 xl:w-[600px] xl:items-start xl:text-left'>
            <ImQuotesLeft className='mb-4 text-9xl leading-none text-accent/20' />
            <h3 className='h3 mb-2'>{slides[activeSlide].name}</h3>
            <p className='mb-8 max-w-[360px]'>{slides[activeSlide].message}</p>
            <div className='flex gap-3'>
              <button
                className='flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl text-white transition-all duration-300 hover:bg-accent-hover'
                onClick={handlePrevSlide}>
                <FiArrowLeft />
              </button>
              <button
                className='flex h-12 w-12 items-center justify-center rounded-full bg-accent text-2xl text-white transition-all duration-300 hover:bg-accent-hover'
                onClick={handleNextSlide}>
                <FiArrowRight />
              </button>
            </div>
          </div>
          <Swiper
            className='h-[400px] w-full xl:h-[500px]'
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            breakpoints={{
              640: { slidesPerView: 1 },
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
              1280: { slidesPerView: 4 },
            }}
            onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
            modules={[Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            onSwiper={setSwiperRef}>
            {slides.map((slide, index) => {
              return (
                <SwiperSlide className='h-full select-none' key={index}>
                  <div className='flex h-full w-full items-end'>
                    <div
                      className={cn(
                        'relative flex h-[240px] w-full items-end overflow-hidden rounded-2xl transition-all duration-500',
                        activeSlide === index && 'h-full'
                      )}>
                      <Image
                        className='object-cover object-center'
                        src={slide.image}
                        alt={slide.name}
                        fill
                        quality={100}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
