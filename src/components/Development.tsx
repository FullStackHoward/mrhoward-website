import Image from "next/image";

export default function Development() {
  return (
    <section className="py-12 md:py-20 px-4 md:px-6 relative overflow-hidden" style={{ backgroundColor: '#F4EAD5' }}>
      {/* Big Sphere - bottom left */}
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] lg:w-[600px] h-[300px] md:h-[500px] lg:h-[600px] -translate-x-1/4 translate-y-1/4">
        <Image
          src="/svg/smallsphere.svg"
          alt="Big sphere decoration"
          width={600}
          height={600}
          className="w-full h-full"
        />
      </div>
      
      {/* Small Sphere - next to big sphere with slight overlap */}
      <div className="absolute top-0 left-90 w-40 md:w-56 lg:w-70 h-40 md:h-56 lg:h-70 translate-y-1/4">
        <Image
          src="/svg/bigsphere.svg"
          alt="Small sphere decoration"
          width={280}
          height={280}
          className="w-full h-full"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Column - Empty for sphere space */}
          <div className="hidden lg:block"></div>

          {/* Right Column - Content */}
          <div className="space-y-4 md:space-y-6 text-center lg:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold">
              Development
            </h2>
            <p className="text-base sm:text-lg xl:text-xl leading-relaxed">
              I design it. I build it. Front-end, back-end, hosting, all of it. 
              React, Python, WordPress, custom applications, the works. I've been 
              writing code since the MySpace days, so yeah, I can actually turn 
              these designs into functioning websites that don't break when 
              someone uses Safari. Want the full technical breakdown?
            </p>
            <a 
              href="https://howard.codes" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-block text-white px-6 md:px-8 py-2 md:py-3 rounded-lg hover:opacity-90 active:shadow-[inset_0_0_0_6px_white] transition-all duration-150 text-xl md:text-2xl lg:text-3xl font-medium relative"
              style={{ 
                backgroundColor: '#2c2c2c',
                boxShadow: 'inset 0 0 0 6px white, 6px 6px 0 0 #4A90E2'
              }}
            >
              Visit Howard<span style={{ color: '#4A90E2' }}>.Codes</span> <span style={{ color: '#4A90E2' }}>→</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
