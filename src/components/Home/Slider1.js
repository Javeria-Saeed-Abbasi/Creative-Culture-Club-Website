import React from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";

const Slider1 = () => {
  return (
    <div className="swiper1">
      <Swiper
        centeredSlides={true}
        autoplay={{
          delay: 2000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper mySwiper1">
        <SwiperSlide>
          <div className="bgImg-slider1 position-relative">

            <div className="slide-text position-absolute">
              <span className="head-1 text-start">OUR PRODUCTS</span>  
            </div>
            <div className="slide-text2 position-absolute">
           <span className="para-3">
                From team building events to offsites and fun days, we got you covered with the right idea for your team
           </span>
            </div>
          
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bgImg-slider2 position-relative"></div>
          <div className="slide-text position-absolute">
              <span className="head-1 text-start">OUR PRODUCTS</span>  
            </div>
            <div className="slide-text2 position-absolute">
           <span className="para-3">
                From team building events to offsites and fun days, we got you covered with the right idea for your team
           </span>
            </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bgImg-slider3 position-relative">
          <div className="slide-text position-absolute">
              <span className="head-1 text-start">OUR PRODUCTS</span>  
            </div>
            <div className="slide-text2 position-absolute">
           <span className="para-3">
                From team building events to offsites and fun days, we got you covered with the right idea for your team
           </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bgImg-slider4 position-relative">
          <div className="slide-text position-absolute">
              <span className="head-1 text-start">OUR PRODUCTS</span>  
            </div>
            <div className="slide-text2 position-absolute">
           <span className="para-3">
                From team building events to offsites and fun days, we got you covered with the right idea for your team
           </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bgImg-slider5 position-relative">
          <div className="slide-text position-absolute">
              <span className="head-1 text-start">OUR PRODUCTS</span>  
            </div>
            <div className="slide-text2 position-absolute">
           <span className="para-3">
                From team building events to offsites and fun days, we got you covered with the right idea for your team
           </span>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bgImg-slider6 position-relative">
          <div className="slide-text position-absolute">
              <span className="head-1 text-start">OUR PRODUCTS</span>  
            </div>
            <div className="slide-text2 position-absolute">
           <span className="para-3">
                From team building events to offsites and fun days, we got you covered with the right idea for your team
           </span>
            </div>
          </div>
        </SwiperSlide>
       
      </Swiper>
    </div>
  );
};

export default Slider1;
