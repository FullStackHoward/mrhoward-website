"use client";

import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] w-full overflow-hidden">
      {/* Hero Background Image */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/img/hero.jpg"
          alt="New Orleans cityscape"
          fill
          priority
          className="object-cover object-center"
          quality={100}
        />
      </div>

      {/* Cloud Divider at Bottom */}
      <div className="absolute -bottom-[1px] md:-bottom-5 left-0 right-0 w-full">
        <Image
          src="/svg/cloud_divider.svg"
          alt=""
          width={1920}
          height={100}
          className="w-full h-auto"
        />
      </div>
    </section>
  );
}
