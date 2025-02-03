"use client";

import { useState } from "react";
import { FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Swiper as SwiperInstance } from "swiper/types"; 
import "swiper/css";

const testimonials = [
  {
    id: 1,
    name: "Pedro Flores",
    time: "Hace 2 días",
    rating: 5,
    comment: "¡Excelente servicio! Vendí mi auto rápido y sin complicaciones.",
  },
  {
    id: 2,
    name: "Ana Abreu",
    time: "Hace 1 semana",
    rating: 4,
    comment: "Muy buena atención, el proceso fue sencillo y seguro.",
  },
  {
    id: 3,
    name: "Jose Perez",
    time: "Hace 3 semanas",
    rating: 5,
    comment: "Increíble experiencia, obtuve el mejor precio por mi auto.",
  },
  {
    id: 4,
    name: "Juan Sosa",
    time: "Hace 1 mes",
    rating: 4,
    comment: "Me asesoraron muy bien y la venta fue rápida.",
  },
  {
    id: 5,
    name: "Pedro Perez",
    time: "Hace 2 meses",
    rating: 5,
    comment: "Muy recomendado, son muy profesionales y confiables.",
  },
];

const Testimonials = () => {
  const [swiper, setSwiper] = useState<SwiperInstance | null>(null); 

  return (
    <section className="bg-gray-100 py-12 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-sky-900 mb-6">
          Opiniones de nuestros clientes
        </h2>

        <div className="relative">
          <button
            className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition z-10"
            onClick={() => swiper?.slidePrev()}
          >
            <FaChevronLeft className="text-xl text-gray-700" />
          </button>

          <Swiper
            spaceBetween={20}
            slidesPerView={1}
            onSwiper={(s) => setSwiper(s)}
            breakpoints={{
              768: { slidesPerView: 2 },
            }}
          >
            {testimonials.map((testimony) => (
              <SwiperSlide key={testimony.id}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {testimony.name}
                  </h3>
                  <p className="text-gray-500 text-sm">{testimony.time}</p>
                  <div className="flex justify-center my-2">
                    {[...Array(testimony.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-500 text-xl" />
                    ))}
                  </div>
                  <p className="text-gray-700">{testimony.comment}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <button
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full shadow-md hover:bg-gray-400 transition z-10"
            onClick={() => swiper?.slideNext()}
          >
            <FaChevronRight className="text-xl text-gray-700" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

