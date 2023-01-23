import React, { useState } from "react";
import { ButtonTypes } from "../CustomButton/CustomButton.component";
import {
    AddToCartBtn,
    CardContainer,
    CartIcon,
    ImageWrapper,
    Price,
    ProductName,
    ProductPhoto,
    ProductPriceWrapper,
    RatingStarts
} from "./ProductCard.style";
interface Props {
  src: string;
  alt?: string;
}
const ProductCard: React.FC<Props> = ({ src, alt }) => {
  const [rating, setRating] = useState<number | null>(2.5);
  const [hoverRating, setHoverRating] = useState(-1);
  return (
    <CardContainer>
      <ImageWrapper>
        <ProductPhoto src={src} alt={alt} />
        <AddToCartBtn buttonType={ButtonTypes.ADD}>
          <CartIcon />
        </AddToCartBtn>
      </ImageWrapper>
      <RatingStarts
        value={rating}
        precision={0.5}
        readOnly={false}
        onChange={(event, newValue) => {
          setRating(newValue);
        }}
        onChangeActive={(event, newHover) => {
          setHoverRating(newHover);
        }}
      />
      <ProductPriceWrapper>
        <ProductName>NoName</ProductName>
        <Price>50$</Price>
      </ProductPriceWrapper>
    </CardContainer>
  );
};

export default ProductCard;
