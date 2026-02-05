import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative" style={{ backgroundColor: '#F4EAD5' }}>
      {/* Cloud Divider - upside down */}
      <div className="relative w-full -mt-5 md:-mt-[22px] lg:-mt-5">
        <Image
          src="/svg/cloud_divider.svg"
          alt="Cloud divider"
          width={1920}
          height={100}
          className="w-full h-auto transform rotate-180"
          priority
        />
      </div>

      {/* Footer Content */}
      <div className="py-6 md:py-8 text-center px-4">
        <p className="text-base font-bold md:text-lg">©2026 FullStackHoward LLC</p>
      </div>
    </footer>
  );
}
