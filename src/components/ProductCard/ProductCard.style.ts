import styled from "@emotion/styled";
import { Rating } from "@mui/material";
import SvgShoppingBag from "../../svg_components/ShoppingBag";
import CustomButton from "../CustomButton/CustomButton.component";

export const CardContainer = styled.div`

  min-height: 10vh;
  width: 100%;
  min-width: 15vw;
  display: flex;
  overflow: hidden;
  flex-direction: column;
  align-items: center;
  gap: 0.3em;
`;
export const ProductPhoto = styled.div<{ src: string; alt?: string }>`
  width: 100%;
  height: 50vh;
  background-color: grey;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
`;
export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  border-radius: 0.5em;
  overflow: hidden;
`;

export const AddToCartBtn = styled(CustomButton)`
  position: absolute;
  width: fit-content;
  height: fit-content;
  bottom: 10%;
  right: 10%;
`;
export const CartIcon = styled(SvgShoppingBag)`
  fill: #1985a1;
`;
export const RatingStarts = styled(Rating)`
  color: #1985a1;
  align-self: start;
`;
export const ProductPriceWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
export const ProductName = styled.div``;
export const Price = styled.div``;
