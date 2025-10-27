"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import type { Settings } from "react-slick";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

export default function CarruselServicios() {
  const router = useRouter();

  const settings: Settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    adaptiveHeight: true,
  };

  return (
    <section className="py-20">
      <h2 className="text-3xl font-extrabold text-center mb-5 uppercase tracking-wide text-neutral-900 dark:text-white">
        Nuestros servicios
      </h2>
      <div className="relative mx-auto px-4 w-full max-w-[680px]">
        <div className="relative z-0">
          <Slider {...settings}>
            {[
              "/servicios/mantenimiento-1.jpg",
              "/servicios/servicios-1.jpg",
              "/servicios/servicios-2.jpg",
            ].map((src, i) => (
              <div key={i} className="w-full flex justify-center items-center">
                <img
                  src={src}
                  alt={`servicio-${i}`}
                  className="block w-auto max-w-full h-auto rounded-xl shadow-md mx-auto
                  max-h-[420px] sm:max-h-[460px] md:max-h-[520px]"
                />
              </div>
            ))}
          </Slider>
        </div>

        <div className="relative z-10 mt-4 flex justify-center">
          <Button
            className="bg-black text-white hover:text-black hover:bg-[#00ffff]
                       dark:bg-[#00ffff] dark:text-black dark:hover:bg-[#7fffff]"
            onClick={() => router.push("/servicios")}
          >
            Más Servicios
          </Button>
        </div>
      </div>
    </section>
  );
}
