import Image from "next/image";

export default function ThreeDVisuals() {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#fefbdb' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl xl:max-w-7xl mx-auto">
          {/* Images - Shows second on mobile, left on desktop */}
          <div className="grid grid-cols-2 gap-4 md:order-1 order-2">
            <div className="col-span-1">
              <img
                src="/img/n64_blenderwork.jpg"
                alt="N64 Blender Work"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/img/n64.gif"
                alt="N64 Animation"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="col-span-2">
              <img
                src="/img/cw_full.jpg"
                alt="Creators World 3D"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Text - Shows first on mobile, right on desktop */}
          <div className="text-center md:text-left md:order-2 order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8">
              <span className="relative inline-block">
                <span style={{ color: '#FFD93D', position: 'relative', zIndex: 2 }}>3D</span>
                <span className="md:top-[4px] md:left-[4px] top-[2px] left-[2px]" style={{ color: '#2c2c2c', position: 'absolute', zIndex: 1 }}>3D</span>
              </span>{' '}
              <span>Visualization</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed">
              Sometimes the best way to show an idea is to build it in 3D first. I 
              create product visualizations, web experiences, and concepts that 
              don't exist yet but need to look convincing. Turns out people 
              believe things more when they can see them from multiple angles.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
