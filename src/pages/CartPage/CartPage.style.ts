import styled from "styled-components";
import CustomButton from "../../components/CustomButton/CustomButton.component";

export const Wrapper = styled.div`
  display: flex;
  padding: 5% 10%;
  justify-content: space-between;
`;
export const CartItemsWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SummeryBox = styled.div`
  height: fit-content;
  padding: 1em;
  display: flex;
  gap: 1em;
  flex-direction: column;
  border-radius: 0.5em;
  background-color: #d7e9ea;
`;
export const PromoCodeField = styled.div`
  display: flex;
  gap: 1em;
  justify-content: space-between;
  height: 3em;
`;

export const ApplyBtn = styled(CustomButton)`
  height: 100%;
`;

export const CheckoutBtn = styled(CustomButton)`
  width: 100%;
  height: 3em;
`;

export const HorizontalField = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
`;

export const Subtitle = styled.div`
  color: black;
  font-size: 0.8em;
`;

export const Title = styled.div`
  size: 1.2em;
  font-weight: 600;
`;

export const Line = styled.hr`
  border: none;
  height: .05em; 
  background: grey;
`;
