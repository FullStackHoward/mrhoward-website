'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import BleedingUnderline from '@/components/BleedingUnderline';

export default function Process() {
  const [visibleArrows, setVisibleArrows] = useState<number[]>([]);

  useEffect(() => {
    // Blink arrows sequentially: fade in, fade out, next arrow
    const timers = [
      setTimeout(() => setVisibleArrows([0]), 0),      // Arrow 0 fade in
      setTimeout(() => setVisibleArrows([]), 500),     // Arrow 0 fade out
      setTimeout(() => setVisibleArrows([1]), 1000),   // Arrow 1 fade in
      setTimeout(() => setVisibleArrows([]), 1500),    // Arrow 1 fade out
      setTimeout(() => setVisibleArrows([2]), 2000),   // Arrow 2 fade in
      setTimeout(() => setVisibleArrows([]), 2500),    // Arrow 2 fade out
    ];

    // Loop the animation
    const interval = setInterval(() => {
      setVisibleArrows([0]);
      setTimeout(() => setVisibleArrows([]), 500);
      setTimeout(() => setVisibleArrows([1]), 1000);
      setTimeout(() => setVisibleArrows([]), 1500);
      setTimeout(() => setVisibleArrows([2]), 2000);
      setTimeout(() => setVisibleArrows([]), 2500);
    }, 3000);

    return () => {
      timers.forEach(timer => clearTimeout(timer));
      clearInterval(interval);
    };
  }, []);

  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#F4EAD5' }}>
      <div className="container mx-auto px-4 md:px-8">
        {/* Top Heading */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-center mb-8 md:mb-16 leading-relaxed">
          From{' '}
          <span className="relative inline-block">
            <span>Idea</span>
            <span className="bleeding-stroke bleeding-stroke-sunny-yellow animate" style={{ transform: 'rotate(-1.5deg)' }}></span>
          </span>{' '}
          to{' '}
          <span className="relative inline-block">
            <span>Concept</span>
            <span className="bleeding-stroke bleeding-stroke-deep-blue animate" style={{ transform: 'rotate(2deg)' }}></span>
          </span>{' '}
          to{' '}
          <span className="relative inline-block">
            <span>Wireframe</span>
            <span className="bleeding-stroke bleeding-stroke-coral animate" style={{ transform: 'rotate(-2.5deg)' }}></span>
          </span>{' '}
          to{' '}
          <span className="relative inline-block">
            <span>Product</span>
            <span className="bleeding-stroke bleeding-stroke-electric-green animate" style={{ transform: 'rotate(1.8deg)' }}></span>
          </span>
          ...
        </h2>

        {/* Process Flow */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3 sm:gap-4 md:gap-3 lg:gap-6 mb-16 md:overflow-x-auto lg:overflow-x-visible px-8 md:px-4 lg:px-8 py-4">
          {/* Light Bulb */}
          <div className="flex-shrink-0">
            <Image
              src="/svg/light-bulb.svg"
              alt="Idea"
              width={200}
              height={200}
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[100px] md:h-[100px] lg:w-[170px] lg:h-[170px]"
            />
          </div>

          {/* Yellow Arrow */}
          <div className={`flex-shrink-0 transition-opacity duration-300 ${visibleArrows.includes(0) ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/svg/arrow-yellow.svg"
              alt="Arrow"
              width={100}
              height={100}
              className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[50px] md:h-[50px] lg:w-[85px] lg:h-[85px] rotate-90 md:rotate-0"
            />
          </div>

          {/* Tablet */}
          <div className="flex-shrink-0 ml-[5px] md:ml-0">
            <Image
              src="/svg/tablet.svg"
              alt="Concept"
              width={200}
              height={192}
              className="w-[150px] h-[144px] sm:w-[180px] sm:h-[173px] md:w-[100px] md:h-[96px] lg:w-[170px] lg:h-[163px]"
            />
          </div>

          {/* Blue Arrow */}
          <div className={`flex-shrink-0 transition-opacity duration-300 ${visibleArrows.includes(1) ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/svg/arrow-blue.svg"
              alt="Arrow"
              width={100}
              height={100}
              className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[50px] md:h-[50px] lg:w-[85px] lg:h-[85px] rotate-90 md:rotate-0"
            />
          </div>

          {/* Wireframe */}
          <div className="flex-shrink-0">
            <Image
              src="/svg/wireframe.svg"
              alt="Wireframe"
              width={200}
              height={200}
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[100px] md:h-[100px] lg:w-[170px] lg:h-[170px]"
            />
          </div>

          {/* Red Arrow */}
          <div className={`flex-shrink-0 transition-opacity duration-300 ${visibleArrows.includes(2) ? 'opacity-100' : 'opacity-0'}`}>
            <Image
              src="/svg/arrow-red.svg"
              alt="Arrow"
              width={100}
              height={100}
              className="w-[50px] h-[50px] sm:w-[65px] sm:h-[65px] md:w-[50px] md:h-[50px] lg:w-[85px] lg:h-[85px] rotate-90 md:rotate-0"
            />
          </div>

          {/* Layout/Product */}
          <div className="flex-shrink-0">
            <Image
              src="/svg/layout.svg"
              alt="Product"
              width={200}
              height={200}
              className="w-[150px] h-[150px] sm:w-[180px] sm:h-[180px] md:w-[100px] md:h-[100px] lg:w-[170px] lg:h-[170px]"
            />
          </div>
        </div>

        {/* Bottom Heading with Infrastructure */}
        <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-center flex items-center justify-center gap-2 sm:gap-4 flex-wrap leading-relaxed">
          ...with{' '}
          <span className="relative inline-block">
            <span>infrastructure</span>
            <span className="bleeding-stroke animate" style={{ transform: 'rotate(-1.8deg)', background: '#2c2c2c' }}></span>
          </span>{' '}
          to support
          <Image
            src="/svg/server.svg"
            alt="Infrastructure"
            width={128}
            height={128}
            className="w-[80px] h-[80px] sm:w-[100px] sm:h-[100px] md:w-[80px] md:h-[80px] lg:w-[128px] lg:h-[128px] inline-block"
          />
        </h2>
      </div>
    </section>
  );
}
