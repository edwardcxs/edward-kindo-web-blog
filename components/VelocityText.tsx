import React, { useRef } from 'react';
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from 'framer-motion';

const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

interface ParallaxProps {
  children?: React.ReactNode;
  baseVelocity?: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400
  });
  
  // Adjust velocity mapping as needed
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false
  });

  // We wrap between 0% and -25% assuming we have 4 identical children.
  // When -25% is reached (end of first child), we snap back to 0%.
  const x = useTransform(baseX, (v) => `${wrap(0, -25, v)}%`);

  const directionFactor = useRef<number>(1);
  
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    // Change direction based on scroll velocity polarity
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    // Add velocity effect
    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="overflow-hidden flex flex-nowrap leading-[0.85] select-none py-4">
      <motion.div className="flex flex-nowrap gap-4 md:gap-16 whitespace-nowrap" style={{ x }}>
        {/* Render 4 copies to ensure smooth wrap at -25% */}
        {[...Array(4)].map((_, i) => (
           <span key={i} className="block text-5xl sm:text-6xl md:text-8xl lg:text-9xl font-black uppercase tracking-tighter text-transparent text-stroke opacity-30 hover:opacity-100 transition-opacity duration-300">
            {children}
           </span>
        ))}
      </motion.div>
    </div>
  );
}

export const VelocityText: React.FC = () => {
  return (
    <section className="py-16 md:py-24 border-t border-white/10 bg-dark z-20 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-blue-600/5 mix-blend-overlay"></div>
      
      <div className="relative z-10">
        <ParallaxText baseVelocity={-3}>Thank You For Visiting My Website</ParallaxText>
        <div className="mt-8">
           <ParallaxText baseVelocity={3}>Thank You For Visiting My Website</ParallaxText>
        </div>
      </div>
    </section>
  );
};