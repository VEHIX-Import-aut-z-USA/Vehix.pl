"use client";

import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedNumberProps {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const AnimatedNumber = ({
  value,
  duration = 2000,
  prefix = "",
  suffix = "",
  className = "",
}: AnimatedNumberProps) => {
  const [count, setCount] = useState(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });
  
  const countRef = useRef(0);
  const startTimeRef = useRef<number | null>(null);
  
  useEffect(() => {
    if (inView) {
      const animate = (timestamp: number) => {
        if (!startTimeRef.current) {
          startTimeRef.current = timestamp;
        }
        
        const progress = timestamp - startTimeRef.current;
        const percentage = Math.min(progress / duration, 1);
        
        const currentCount = Math.floor(percentage * value);
        
        if (currentCount !== countRef.current) {
          countRef.current = currentCount;
          setCount(currentCount);
        }
        
        if (percentage < 1) {
          requestAnimationFrame(animate);
        } else {
          setCount(value);
        }
      };
      
      requestAnimationFrame(animate);
    }
  }, [inView, value, duration]);
  
  return (
    <span ref={ref} className={className}>
      {prefix}
      {count.toLocaleString()}
      {suffix}
    </span>
  );
};

export default AnimatedNumber;