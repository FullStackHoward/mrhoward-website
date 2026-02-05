import Image from "next/image";

export default function Brand() {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#e0fedb' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl xl:max-w-7xl mx-auto">
          {/* Left Column - Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8">
              <span style={{ color: '#00FF7F' }}>Brand</span>{' '}
              <span>Identity</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed">
              A logo is just the starting point. I build complete visual identities: 
              the colors, typography, and design systems that make people recognize 
              your brand before they even read the name.
            </p>
          </div>

          {/* Right Column - Images */}
          <div className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
              <img
                src="/img/vicers_sketch.png"
                alt="Vicers Sketch"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/img/vicers.png"
                alt="Vicers Logo"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <img
                src="/img/vicers_website.jpg"
                alt="Vicers Website"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
