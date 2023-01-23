import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { mockProducts } from "../../mocks/data";
import CustomButton, {
  ButtonTypes,
} from "../CustomButton/CustomButton.component";
import {
  BrandTitle,
  ButtonsGroup,
  LightSpot1,
  LightSpot2,
  ProductPicture,
  QuickShopSliderContainer,
  SmallText,
  Subtitle,
  Wrapper,
} from "./QuickShopSlider.style";

const QuickShopSlider = () => {
  return (
    <QuickShopSliderContainer>
      <Wrapper>
        <Swiper
          loop={true}
          navigation={true}
          modules={[Navigation]}
          slidesPerView={1}
          spaceBetween={30}
        >
          {mockProducts.map((p, index) => (
            <SwiperSlide
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <ProductPicture src={p.images} />
            </SwiperSlide>
          ))}
        </Swiper>
      </Wrapper>
      <LightSpot2 />

      <LightSpot1 />
      <BrandTitle>
        <Subtitle>AIR Beyond Compare</Subtitle>
        NIKE
        <SmallText>Explore the best Air Max for fall & beyond</SmallText>
      </BrandTitle>
      <ButtonsGroup>
        <CustomButton buttonType={ButtonTypes.BLUE}>Buy now</CustomButton>
        <CustomButton buttonType={ButtonTypes.BASE}>Explore</CustomButton>
      </ButtonsGroup>
    </QuickShopSliderContainer>
  );
};

export default QuickShopSlider;
