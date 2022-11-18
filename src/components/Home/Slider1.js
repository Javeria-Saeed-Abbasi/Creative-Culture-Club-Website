import React, { useEffect } from "react";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./styles.css";
import WOW from "wowjs";

const Slider1 = () => {
  
 useEffect(() => {
  new WOW.WOW({
    boxClass:     'wow',      // default
    animateClass: 'animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         false
}).init();
 }, [])
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
          <span className="para-3 wow fadeIn center" data-wow-delay="0.5s" data-wow-offset="10">
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
           <span className="para-3 wow fadeIn center" data-wow-delay="0.8s" data-wow-offset="10">
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
           <span className="para-3 wow fadeIn center" data-wow-delay="1s" data-wow-offset="10">
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
           <span className="para-3 wow fadeIn center" data-wow-delay="1.3s" data-wow-offset="10">
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
           <span className="para-3 wow fadeIn center" data-wow-delay="1.5s" data-wow-offset="10">
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
           <span className="para-3 wow fadeIn center" data-wow-delay="1.7s" data-wow-offset="10">
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
