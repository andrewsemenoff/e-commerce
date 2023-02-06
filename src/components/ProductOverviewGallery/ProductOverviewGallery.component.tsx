import React from "react";
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
  const [isSwiperModalDisplayed, setIsSwiperModalDisplayed] = useModal();
  return (
    <Wrapper>
      <ProductPhotosGrid>
        {photos.map((photo, index) => <ProductPhoto src={photo} key={index}/>)}
      </ProductPhotosGrid>
      {true &&<ProductSwiperModal slides={photos}/>}
    </Wrapper>
  );
};

export default ProductOverviewGallery;
