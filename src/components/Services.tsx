import Image from 'next/image';

const services = [
  {
    icon: 'services/icon-1.svg',
    title: 'UI UX Design',
    description: 'Designing compelling engaging user experiences.',
  },
  {
    icon: 'services/icon-2.svg',
    title: 'Web Development',
    description: 'Developing robust, scalable websites for all devices.',
  },
  {
    icon: 'services/icon-3.svg',
    title: 'E-commerce Solutions',
    description: 'Building secure, user-friendly online stores to drive sales.',
  },
  {
    icon: 'services/icon-4.svg',
    title: 'Care & Support',
    description: 'Prividing updates, security and support for performance.',
  },
];

const Services = () => {
  return (
    <section className='relative z-40'>
      <div className='container'>
        <ul className='relative -top-12 grid grid-cols-1 place-items-center gap-5 md:grid-cols-2 lg:place-items-stretch xl:grid-cols-4'>
          {services.map((service, index) => (
            <li
              className='shadow-custom max-w-[350px] rounded-lg bg-white p-6 md:max-w-none'
              key={index}>
              <Image
                className='mb-4'
                src={service.icon}
                alt={service.title}
                width={48}
                height={48}
              />
              <div>
                <h3 className='text-primary mb-3 text-xl font-semibold'>
                  {service.title}
                </h3>
                <p className='text-[15px]'>{service.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Services;
