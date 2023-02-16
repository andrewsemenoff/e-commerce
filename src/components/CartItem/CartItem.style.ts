import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton.component";

export const CartItemWrapper = styled.div`
  display: flex;
  gap: 1em;
  margin-bottom: 1em;
`;
export const CartItemPicture = styled.div<{ src: string }>`
  min-width: 100%;
  min-height: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;
`;

export const Discount = styled.div`
  position: absolute;
  width: fit-content;
  background-color: #cf533a;
  border-radius: 0.5em;
  padding: 2%;
  color: white;
`;

export const PictureBackground = styled.div`
  position: relative;
  min-width: 14em;
  min-height: 12em;
  padding: 3%;
  border-radius: 0.5em;
  background-image: linear-gradient(135deg, #c2ffd8 10%, #465efb 100%);
`;

export const VerticalBox = styled.div`
  padding: 1em 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const ProductName = styled.div`
  font-size: 1.2em;
  font-weight: 600;
`;
export const Subtitle = styled.div`
  font-size: 1em;
  color: grey;
`;

export const InputsWrapper = styled.div`
  display: flex;
`;

export const PriceWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

export const PreviousPrice = styled.div`
  color: grey;
  font-size: 1em;
  text-decoration: line-through red;
`;

export const CurrentPrice = styled.div`
  color: black;
  font-size: 1.2em;
  font-weight: 600;
`;
