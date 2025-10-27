"use client";
import Image from "next/image";

export default function SliderHome() {
  return (
    <section
      className="
        relative w-full overflow-hidden
        aspect-[16/9] md:h-[420px] md:aspect-auto
        bg-black
      "
      
    >
      <Image
        src="/logos/slider.png"
        alt="SYSTECH"
        fill
   
        className="object-cover"
        sizes="(max-width: 768px) 100vw, 1200px"
        priority
      />
    </section>
  );
}
