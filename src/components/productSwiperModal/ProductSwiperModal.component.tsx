import React from "react";
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ProductPhoto, Wrapper } from "./ProductSwiperModal.style";
import "swiper/css";

interface Props {
  slides: string[];
}

const ProductSwiperModal: React.FC<Props> = ({ slides }) => {
  return (
    <Wrapper>
      <Swiper
        loop={true}
        navigation={true}
        modules={[Navigation]}
        slidesPerView={1}
        spaceBetween={3}
      >
        {slides.map((s, index) => (
          <SwiperSlide key={index}>
            <ProductPhoto src={s} />
          </SwiperSlide>
        ))}
      </Swiper>
    </Wrapper>
  );
};

export default ProductSwiperModal;
