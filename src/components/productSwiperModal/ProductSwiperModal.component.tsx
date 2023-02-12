import React, { useState } from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { DarkBG, ProductPhoto, Wrapper } from "./ProductSwiperModal.style";
import "swiper/css";

interface Props {
  slides: string[];
  toggler: ()=>void;
  startSlide: number;
}

const ProductSwiperModal: React.FC<Props> = ({ slides, toggler, startSlide }) => {
  return (
    <Wrapper>
      <Swiper
        style={{ zIndex: 20 }}
        loop={true}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={3}
        initialSlide={startSlide}
      >
        {slides.map((s, index) => (
          <SwiperSlide key={index}>
            <ProductPhoto src={s} />
          </SwiperSlide>
        ))}
      </Swiper>
      <DarkBG onClick={()=>toggler()}/>
    </Wrapper>
  );
};

export default ProductSwiperModal;
