"use client";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";

export default function Testimoniales() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    // Reflow para slick en móviles reales (corrige anchuras/colapsos)
    setTimeout(() => {
      if (typeof window !== "undefined") {
        window.dispatchEvent(new Event("resize"));
      }
    }, 0);
  }, []);

  if (!isMounted) return null;

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    responsive: [
      {
        breakpoint: 1280,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 768,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const testimonials = [
    {
      name: "Jesus Aguilar",
      quote:
        "Lleve mi laptop porque estaba demasiado lenta y se calentaba, los chicos le dieron mantenimiento y limpieza y ahora mi laptop esta mas fluida y ya no calienta",
      app: "Mantenimiento general Laptop",
      rating: 5,
    },
    {
      name: "Carlos M.",
      quote:
        "Los mejores, lleve mi laptop a mantenimiento preventivo, no tardaron mucho en realizarlo, a los 3 dias ya la tenia de vuelta y sin detalles, trabajo limpio y a buen precio",
      app: "Mantenimiento preventivo Laptop HP",
      rating: 5,
    },
    {
      name: "Estefania López",
      quote:
        "Mi equipo se trababa mucho y calentaba, le hicieron diagnostico y resulta que era por falta de mantenimiento y por que tenia un virus, los chicos me ayudaron a solucionarlo, ya no se calienta ni traba mi laptop, muy amables y su trabajo es de calidad",
      app: "Mantenimiento a laptop DELL Aspire",
      rating: 5,
    },
    {
      name: "Yahir Lozada",
      quote:
        "Necesitaba una apliación web para un proyecto escolar, contacte por el servicio y la verdad el trabajo que realizaron fue de calidad, ademas considerando lo complejo del mismo el precio de mano de obra fue muy barato a comparación con otros locales en la zona.",
      app: "App Web - (MorgaFilms desarrollo web)",
      rating: 5,
    },
    {
      name: "Ailyn Trinidad",
      quote:
        "Me ayudaron a terminar mi proyecto de programación escolar, la app era muy compleja y ellos se encargaron de todo el desarrollo, estoy satisfecha con el trabajo y los pagos super accesibles, te brindan seguridad en su trabajo y transparencia",
      app: "App Web de Escritorio con Java",
      rating: 5,
    },
  ];

  return (
    <section className="w-full py-12 px-4 text-neutral-900 dark:text-white">
      <h2 className="text-3xl font-extrabold text-center mb-8 uppercase tracking-wide">
        Clientes Satisfechos
      </h2>

      <p className="text-center text-black dark:text-gray-400 max-w-2xl mx-auto mb-10">
        La calidad de trabajo nos respalda y nuestros clientes támbien, agradecemos a todos los que han confiado en nuestros servicios.
      </p>

      <div className="max-w-screen-xl mx-auto">
        <div className="h-full">
          <Slider {...settings}>
            {testimonials.map((item, index) => (
              // Slide: sin flex aquí (evita bug en móviles); centramos dentro
              <div key={index} className="px-4">
                {/* Wrapper interno: centra y limita ancho en móvil */}
                <div className="mx-auto max-w-[360px] h-full flex items-stretch">
                  <div
                    className="rounded-2xl p-6 shadow-lg text-left transition-all duration-300 w-full flex flex-col min-h-[260px]
                               bg-gray-200 text-neutral-900 border border-neutral-800 hover:border-neutral-300
                               dark:bg-gray-900 dark:text-white dark:border-cyan-500/30 dark:hover:border-cyan-400/80"
                    style={{ boxShadow: "0 0 10px rgba(0,255,255,0.2)" }}
                  >
                    {/* Avatar tipo letra */}
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full bg-cyan-600 flex items-center justify-center text-xl font-bold text-black/90">
                        {item.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-semibold">{item.name}</p>
                        <p className="text-black dark:text-gray-400 text-sm">
                          Reseña → <span className="text-blue-500">{item.app}</span>
                        </p>
                      </div>
                    </div>

                    {/* Estrellas */}
                    <div className="flex mb-3 text-yellow-400 text-xl">
                      {[...Array(5)].map((_, i) => (
                        <span key={i}>{i < item.rating ? "★" : "☆"}</span>
                      ))}
                    </div>

                    {/* Comentario */}
                    <p className="text-sm leading-relaxed text-justify text-black dark:text-gray-300">
                      {item.quote}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}
