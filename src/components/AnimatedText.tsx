'use client';

import { motion } from 'framer-motion';

const letterAnimation = {
  initial: {
    opacity: 0,
    y: '100%',
  },
  animate: (i: number[]) => ({
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      ease: [0.2, 0, 0.1, 1],
      delay: i[0],
    },
  }),
};

const getLetter = (name: string) => {
  const letters: JSX.Element[] = [];
  name.split('').forEach((letter, index) => {
    return letters.push(
      <motion.span
        key={index}
        variants={letterAnimation}
        initial='initial'
        whileInView='animate'
        custom={[index * 0.02, (name.length - index) * 0.01]}>
        {letter}
      </motion.span>
    );
  });
  return letters;
};

interface AnimatedTextProps {
  text: string;
  textStyles?: string;
}

const AnimatedText = ({ text, textStyles }: AnimatedTextProps) => {
  return <div className={textStyles}>{getLetter(text)}</div>;
};

export default AnimatedText;
