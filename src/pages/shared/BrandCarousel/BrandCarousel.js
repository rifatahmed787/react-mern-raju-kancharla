import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

const BrandCarousel = () => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          {" "}
          <img
            className="d-block w-100"
            src="https://github.com/ProgrammingHero1/dragon-news-client-module-60/blob/main/src/assets/brands/Brand1.png?raw=true"
            alt="First slide"
          />
        </SwiperSlide>

        <SwiperSlide>
          <img
            className="d-block w-100"
            src="https://github.com/ProgrammingHero1/dragon-news-client-module-60/blob/main/src/assets/brands/Brand2.png?raw=true"
            alt="Second slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/mvw88kD/brand3.jpg"
            alt="Second slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/5n9vCCY/brand4.jpg"
            alt="Second slide"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/SQVQWWh/brand5.png"
            alt="Second slide"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default BrandCarousel;
