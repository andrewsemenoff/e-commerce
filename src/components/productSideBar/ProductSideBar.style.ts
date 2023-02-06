import styled from "styled-components";
import SvgShoppingBag from "../../svg_components/ShoppingBag";
import CustomButton from "../CustomButton/CustomButton.component";

export const BasicSubtitle = styled.div`
  font-size: 1em;
  color: black;
`;
export const LightSubtitle = styled(BasicSubtitle)`
  color: grey;
`;
export const BlueSubtitle = styled(BasicSubtitle)`
  color: #1985a1;
  cursor: pointer;
  &:hover{
    color: white;
  }
`;
export const ColorsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const PricesWrapper = styled.div`
  display: flex;
  gap: 1em;
`;

export const Discount = styled.div`
  width: fit-content;
  padding: 0.3em;
  background-color: #fa4a69;
  border-radius: 0.8em;
  color: white;
`;
export const PreviousPrice = styled.div`
  color: grey;
  font-size: 1.2em;
  text-decoration: line-through red;
`;

export const CurrentPrice = styled.div`
  color: black;
  font-size: 1.7em;
`;

export const SideBarWrapper = styled.div`
  background-color: lightgrey;
  display: flex;
  flex-direction: column;
  width: 30%;
  gap: 1em;
  min-height: 30em;
  max-height: fit-content;
  margin: 5% 10% 5% 0;
  padding: 3% 2%;
`;

export const ProductTitle = styled.div`
  font-size: 2em;
  font-weight: 700;
  color: black;
`;
export const Description = styled.div`
  color: grey;
  font-size: 0.8em;
`;

export const DividerLine = styled.hr`
  border: none;
  border-top: 1px solid grey;
`;

export const BagIcon = styled(SvgShoppingBag)`
  fill: white;
`;

export const AddToBagBtn = styled(CustomButton)`
  display: flex;
  width: 100%;
  padding: 1em;
  align-items: center;
  justify-content: center;
  gap: 1em;
`;

