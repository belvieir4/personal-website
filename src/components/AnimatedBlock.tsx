"use client";
import { motion, Variants } from "framer-motion";
import { Children, ReactNode } from "react";

type Direction = "left" | "right" | "top";

type AnimatedBlockProps = {
  children: ReactNode;
  direction: Direction;
  delayed?: boolean;
  className?: string;
};

const variants: Record<Direction, Variants> = {
  left: {
    offscreen: {
      x: -300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  },
  right: {
    offscreen: {
      x: 300,
      opacity: 0,
    },
    onscreen: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  },
  top: {
    offscreen: {
      y: -100,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  },
};

const AnimatedBlock = ({
  children,
  direction,
  delayed,
  className,
}: AnimatedBlockProps) => {
  const variant = variants[direction];
  return (
    <motion.div
      className={className}
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      variants={
        delayed
          ? {
              onscreen: {
                transition: { staggerChildren: 0.25 },
              },
            }
          : {}
      }
    >
      {delayed ? (
        Children.map(children, (child) => {
          return (
            <motion.div className="card-container-item" variants={variant}>
              {child}
            </motion.div>
          );
        })
      ) : (
        <motion.div className="card-container-item" variants={variant}>
          {children}
        </motion.div>
      )}
    </motion.div>
  );
};

export default AnimatedBlock;
