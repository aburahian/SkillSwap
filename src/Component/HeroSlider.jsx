import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import fourMan from "../assets/fourMan.jpg";
import twoHand from "../assets/twohand.jpg";
import threeBrine from "../assets/threebrain.jpg";

const HeroSlider = () => {
  const slides = [
    {
      id: 1,
      title: "Swap Skills. Build Futures.",
      subtitle: "Learn from others. Teach what you know. Grow together.",
      image: threeBrine,
      btnText: "Get Started",
      btnLink: "/signup",
    },
    {
      id: 2,
      title: "Connect. Collaborate. Create.",
      subtitle: "Join a community that trades skills, not money.",
      image: twoHand,
      btnText: "Join Now",
      btnLink: "/",
    },
    {
      id: 3,
      title: "Learn Faster with Real People.",
      subtitle: "Hands-on skill exchange that`s actually fun.",
      image: fourMan,
      btnText: "Explore Skills",
      btnLink: "/",
    },
  ];
  return (
    <div className="mt-6">
      <section className="relative w-11/12 mx-auto h-[400px] md:h-[430px] overflow-hidden rounded-lg ">
        <Swiper
          modules={[Pagination, Autoplay]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop={true}
          className="w-full h-[500px] md:h-[500px]"
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div
                className="relative w-full h-full flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              >
                <div className="absolute inset-0 bg-black/50"></div>
                <div className="relative z-10 text-white max-w-2xl px-6">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4">
                    {slide.title}
                  </h2>
                  <p className="text-lg md:text-xl mb-6 text-gray-200">
                    {slide.subtitle}
                  </p>
                  <a
                    href={slide.btnLink}
                    className="inline-block px-6 py-3 bg-[#f76305] hover:bg-[#f76305] rounded-full text-white font-semibold transition"
                  >
                    {slide.btnText}
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default HeroSlider;
