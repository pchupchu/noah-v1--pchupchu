'use client';

import { motion } from 'framer-motion';

interface RotatingShapeProps {
  content: JSX.Element;
  direction: 'left' | 'right';
  duration: number;
}

const RotatingShape = ({
  content,
  direction,
  duration,
}: RotatingShapeProps) => {
  const rotationAnimation = {
    animate: {
      rotate: direction === 'right' ? 360 : direction === 'left' ? -360 : 0,

      transition: {
        duration: duration, //duration of one full rotation
        ease: 'linear',
        repeat: Infinity,
      },
    },
  };

  return (
    <motion.div variants={rotationAnimation} animate='animate'>
      {content}
    </motion.div>
  );
};

export default RotatingShape;
