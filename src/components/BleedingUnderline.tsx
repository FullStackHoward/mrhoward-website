'use client';

import { useEffect, useRef, useState } from 'react';

interface BleedingUnderlineProps {
  children: React.ReactNode;
  className?: string;
  color?: 'deep-blue' | 'electric-green' | 'coral' | 'sunny-yellow';
}

export default function BleedingUnderline({ 
  children, 
  className = '',
  color = 'deep-blue'
}: BleedingUnderlineProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5, rootMargin: '0px 0px -100px 0px' }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <span ref={ref} className={`relative inline-block ${className}`}>
      {children}
      <span className={`bleeding-stroke bleeding-stroke-${color} ${shouldAnimate ? 'animate' : ''}`} />
    </span>
  );
}
