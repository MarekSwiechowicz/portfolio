import React from 'react';
import { motion } from 'framer-motion';
import { twMerge } from 'tailwind-merge';

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
    },
  },
};

type AnimatedTextProps = {
  text: string;
  className?: React.ReactNode;
};

const AnimatedText: React.FC<AnimatedTextProps> = ({
  text,
  className = '',
}) => {
  return (
    <div className='w-full mx-auto py-0 sm:py-2 flex items-center justify-center text-center overflow-hidden '>
      <motion.h1
        className={twMerge(
          `inline-block w-full text-dark font-bold capitalize text-8xl dark:text-light ${className} `
        )}
        variants={quote}
        initial='initial'
        animate='animate'
      >
        {text.split(' ').map((word, index) => (
          <motion.span
            variants={singleWord}
            className='inline-block'
            key={word + '-' + index}
          >
            {word}&nbsp;{' '}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  );
};

export default AnimatedText;
