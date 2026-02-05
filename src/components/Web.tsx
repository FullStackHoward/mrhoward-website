import Image from "next/image";

export default function Web() {
  return (
    <section className="py-12 md:py-20" style={{ backgroundColor: '#e4ebfe' }}>
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center max-w-6xl xl:max-w-7xl mx-auto">
          {/* Images - Shows second on mobile, left on desktop */}
          <div className="grid grid-cols-2 gap-4 md:order-1 order-2">
            <div className="col-span-1">
              <img
                src="/img/web1.jpg"
                alt="Web Design Example 1"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/img/web2.jpg"
                alt="Web Design Example 2"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/img/web3.jpg"
                alt="Web Design Example 3"
                className="w-full h-auto rounded-lg"
              />
            </div>
            <div className="col-span-1">
              <img
                src="/img/web4.jpg"
                alt="Web Design Example 4"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>

          {/* Text - Shows first on mobile, right on desktop */}
          <div className="text-center md:text-left md:order-2 order-1">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 md:mb-8">
              <span style={{ color: '#4A90E2' }}>Web</span>{' '}
              <span>Design</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl xl:text-2xl leading-relaxed">
              Clean interfaces, custom illustrations, and visual systems that 
              actually make sense together. I design websites and graphics that 
              look intentional instead of like someone threw a Pinterest board at 
              the wall. Everything's built to work in the real world, not just 
              look pretty in a mockup.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
