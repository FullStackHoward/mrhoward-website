import BleedingUnderline from "@/components/BleedingUnderline";

export default function WorkTogether() {
  return (
    <section id="contact" className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-4xl xl:max-w-5xl mx-auto text-center space-y-6 md:space-y-8">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Are you ready to get started on your next project?
          </h2>
          
          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
            Lets{' '}
            <BleedingUnderline color="deep-blue">
              work together!
            </BleedingUnderline>
          </h3>

          {/* Down Arrow */}
          <div className="text-4xl md:text-5xl lg:text-6xl">↓</div>

          {/* Button */}
          <a 
            href="https://fullstackhoward.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block text-[#2c2c2c] px-6 md:px-8 py-2 md:py-3 rounded-lg hover:opacity-90 active:shadow-[inset_0_0_0_6px_black] transition-all duration-150 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium relative"
            style={{ 
              backgroundColor: '#ffffff',
              boxShadow: 'inset 0 0 0 6px black, 6px 6px 0 0 #00FF7F'
            }}
          >
            Visit FullStackHoward.com
          </a>
        </div>
      </div>
    </section>
  );
}
