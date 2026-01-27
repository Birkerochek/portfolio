'use client';
import { motion, useInView, type MotionProps } from 'framer-motion';
import { useRef } from 'react';

interface MotionDivProps extends MotionProps {
  hasScale?: boolean;
  children: React.ReactNode;
  duration?: number;
  className?: string;
}
export const MotionDiv = ({
  className,
  hasScale = false,
  children,
  duration = 0.6,
  ...props
}: MotionDivProps) => {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  return (
    <>
      <motion.div
        className={className}
        initial={{ opacity: 0, scale: hasScale ? 0.95 : 1 }}
        animate={isInView && { opacity: 1, scale: hasScale ? 1 : 1 }}
        transition={{ duration: duration }}
        {...props}
        ref={ref}
      >
        {children}
      </motion.div>
    </>
  );
};
