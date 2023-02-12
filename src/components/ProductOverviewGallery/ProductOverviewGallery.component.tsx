import React, { useState } from "react";
import useModal from "../../customHooks/useModal";
import ProductSwiperModal from "../productSwiperModal/ProductSwiperModal.component";
import {
  ProductPhoto,
  ProductPhotosGrid,
  Wrapper
} from "./ProductOverviewGallery.style";

interface Props {
  photos: string[];
}

const ProductOverviewGallery: React.FC<Props> = ({ photos }) => {
  const {isDisplayed, toggleIsDisplayed} = useModal();
  const [startSlide, setStartSlide] = useState(0);
  const handlePhotoClick =(index: number)=>{
    toggleIsDisplayed();
    setStartSlide(index)
  }
  return (
    <Wrapper>
      <ProductPhotosGrid>
        {photos.map((photo, index) => <ProductPhoto onClick={()=>handlePhotoClick(index)} src={photo} key={index}/>)}
      </ProductPhotosGrid>
      {isDisplayed && <ProductSwiperModal startSlide={startSlide} toggler = {toggleIsDisplayed} slides={photos}/>}
    </Wrapper>
  );
};

export default ProductOverviewGallery;
