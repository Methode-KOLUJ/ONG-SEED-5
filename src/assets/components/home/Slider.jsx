import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom"; // Import du composant Link

const Slider = ({ slides }) => {
  return (
    <div className="w-full max-w-6xl mx-auto top-0">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000 }}
        loop
        className="rounded overflow-hidden"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="relative">
              {/* Image */}
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-[600px] object-cover"
                loading="lazy"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/65 flex flex-col justify-center items-center text-white p-6">
                <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extrabold mb-10 text-teal-600 dark:text-blue-600 text-center">{slide.title}</h2>
                <p className="sm:text-xl md:text-xl lg:text-2xl xl:text-3xl mb-10 font-semibold text-center">{slide.description}</p>
                <Link
                  to={slide.link} 
                  className="bg-blue-600 hover:bg-blue-700 dark:bg-teal-600 dark:hover:bg-teal-700 font-extrabold text-white px-5 py-3 rounded-lg transition duration-500 ease-in-out"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
