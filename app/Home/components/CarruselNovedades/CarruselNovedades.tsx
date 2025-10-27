// components/Home/CarruselNovedades.tsx
"use client";

import { Button } from "@/components/ui/button";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import React from "react";
import type { Settings } from "react-slick";

const Slider = dynamic(() => import("react-slick"), { ssr: false });

const CarruselNovedades = () => {
  const router = useRouter();

  const settings: Settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <section className="py-20">
      <h2 className="text-3xl font-extrabold text-center mb-5 uppercase tracking-wide
               text-neutral-900 dark:text-white">
        Nuestros servicios
      </h2>

      {/* Envolver todo para controlar stacking */}
      <div className="relative max-w-[640px] mx-auto">
        {/* Carrusel debajo en el stacking */}
        <div className="relative z-0">
          <Slider {...settings}>
            <div className="w-full flex justify-center items-center">
              <img
                src="/servicios/mantenimiento-1.jpg"
                alt="PlayMovies"
                className="object-contain rounded-lg shadow-md mx-auto"
                style={{ width: "100%", maxWidth: 612, height: "auto", boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}
              />
            </div>
          </Slider>
        </div>

        {/* Botón por encima y pegado al carrusel */}
        <div className="relative z-10 mt-4 flex justify-center">
          <Button
            className="bg-black text-white hover:text-black hover:bg-[#00ffff]
             dark:bg-[#00ffff] dark:text-black dark:hover:bg-[#7fffff]"
          >
            Más Servicios
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CarruselNovedades;
