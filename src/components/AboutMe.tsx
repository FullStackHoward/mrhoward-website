import Image from "next/image";
import BleedingUnderline from "@/components/BleedingUnderline";

export default function AboutMe() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-12 text-center">
          ... just call me{' '}
          <BleedingUnderline color="deep-blue">
            Howard
          </BleedingUnderline>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center max-w-6xl xl:max-w-7xl mx-auto">
          {/* Image - Shows first on mobile and tablet, right on desktop */}
          <div className="md:col-span-1 lg:col-span-1 lg:order-2 flex items-center justify-center">
            <div className="relative">
              <Image
                src="/img/howard_cartoon.png"
                alt="Howard cartoon illustration"
                width={348}
                height={422}
                className="w-full h-auto max-w-[250px] md:max-w-full xl:max-w-[696px]"
              />
            </div>
          </div>

          {/* Text - Shows second on mobile and tablet, left on desktop (2/3) */}
          <div className="md:col-span-2 lg:col-span-2 lg:order-1 flex flex-col items-center justify-center text-center px-4 md:px-8">
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed w-full">
              I've been designing since the MySpace era, back when auto-playing songs and glittery Top 8s were peak web design. Fast forward through a Computer Science degree and over a decade of working as a Full-Stack Engineer, and now I build websites, software, motion graphics, 3D renders, and logos that actually help businesses grow. Turns out the same instincts that made profiles look cool translate pretty well to making brands people want to click on. Character development at its finest.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
