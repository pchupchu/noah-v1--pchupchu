import AnimatedText from './AnimatedText';
import Cards from './Cards';

const Journey = () => {
  return (
    <section id='journey'>
      <div className='container'>
        <AnimatedText
          text='My Professional Journey'
          textStyles='h2 mb-[30px] text-center'
        />
        <Cards />
      </div>
    </section>
  );
};

export default Journey;
