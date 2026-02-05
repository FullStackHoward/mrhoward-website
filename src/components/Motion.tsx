import Image from "next/image";

export default function Motion() {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#fddada' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl xl:max-w-7xl mx-auto">
          {/* Left Column - Text */}
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8 flex items-center flex-wrap justify-center md:justify-start">
              <img 
                src="/img/trails.png" 
                alt="Motion trails" 
                className="h-[0.7em] w-auto"
              />
              <span className="italic" style={{ transform: 'skewX(-8deg)', display: 'inline-block', color: '#f96465' }}>
                Motion
              </span>
              <span className="inline-block mx-2"> </span>
              <span className="italic" style={{ transform: 'skewX(-8deg)', display: 'inline-block' }}>
                Graphics
              </span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed">
              I make things move. Animated logos, explainer videos, product reveals, 
              if it needs to grab attention and stick in someone's brain, motion 
              does the heavy lifting. It's like adding a pulse to your brand 
              instead of letting it just sit there.
            </p>
          </div>

          {/* Right Column - 2x2 Grid of GIFs */}
          <div className="grid grid-cols-2 gap-4 max-w-lg mx-auto">
            <div className="w-full h-auto">
              <img
                src="/img/cw.gif"
                alt="Creators World Logo Animation"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full h-auto">
              <img
                src="/img/viceLogo_optimized.gif"
                alt="Vice Logo Animation"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full h-auto">
              <img
                src="/img/vicelife.gif"
                alt="Vice Life Animation"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="w-full h-auto">
              <img
                src="/img/sunmoon.gif"
                alt="Sun Moon Animation"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
