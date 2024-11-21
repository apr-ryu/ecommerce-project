"use client";

import React from "react";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// STYLES
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import required modules
import { EffectFade, Navigation, Pagination, Autoplay } from "swiper/modules";

type Data = {
  name: string;
  img: StaticImageData;
  slideTitle?: string;
  slideText?: string;
};

export default function swiper({ swiperList }: { swiperList: Data[] }) {
  return (
    <>
      <Swiper
        centeredSlides={true}
        speed={1000}
        allowTouchMove={false}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        spaceBetween={0}
        navigation={true}
        pagination={true}
        loop={true}
        modules={[EffectFade, Navigation, Pagination, Autoplay]}
        className="mySwiper"
      >
        {swiperList.map((item, index) => (
          <SwiperSlide key={index}>
            <Image src={item.img} alt={item.name} quality={100} priority />
            <div className="slide-text-wrapper">
              {item.slideTitle && (
                <div className="slide-title">{item.slideTitle}</div>
              )}
              {item.slideText && (
                <div className="slide-text">{item.slideText}</div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}
