import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <section id="home" className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover opacity-30 -z-20 md:opacity-100"
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[#030014]/60 via-[#030014]/40 to-[#030014]/80 md:hidden" />

      <HeroContent />
    </section>
  );
};
