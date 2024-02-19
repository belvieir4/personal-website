'use client';
import { motion } from 'framer-motion';
import Tag from './Tag';

export type HeroProps = {
  title: string;
  subtitle: string;
  tags?: string[];
  animate?: boolean;
};

const Hero = ({ title, subtitle, tags, animate }: HeroProps) => {
  return (
    <div className="flex w-full flex-col items-center px-6 pb-16 pt-20 lg:px-20 lg:pb-28 lg:pt-32">
      <div className="mb-10 flex gap-3">
        {tags?.map((tag, index) => <Tag key={index}>{tag}</Tag>)}
      </div>
      <h1 className="text-center text-4xl font-bold text-white lg:text-6xl">
        {animate
          ? title.split('').map((letter, index) => (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0,
                  delay: index / (title.length / 2),
                }}
                key={index}
              >
                {letter}
              </motion.span>
            ))
          : title}
      </h1>
      <p className=" mt-4 text-center font-light text-white lg:text-xl">
        {animate ? (
          <motion.span
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: (title.length - 1) / (title.length / 2),
            }}
            className="block"
          >
            {subtitle}
          </motion.span>
        ) : (
          subtitle
        )}
      </p>
      <hr className="mt-14 w-40 rounded-sm border-2 border-teal-400 lg:mt-20" />
    </div>
  );
};

export default Hero;
