import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import i1 from "../assets/1.jpg";
import i4 from "../assets/4.jpg";
import i6 from "../assets/6.jpg";

const Slider = () => {
  return (
    <div className="mt-25 md:mt-2">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img className="w-full object-cover h-[400px]" src={i1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover h-[400px]" src={i4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="w-full object-cover h-[400px]" src={i6} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider;
