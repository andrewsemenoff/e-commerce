import { TextField } from "@mui/material";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton.component";

export const SubscriptionBox = styled.div`
  display: flex;
  height: 20em;
  width: 100%;
`;
export const SubscriptionForm = styled.div`
  width: 50%;
  height: 100%;
  padding: 5% 10%;
  display: flex;
  gap: 20%;
  flex-direction: column;
  justify-content: center;
  background-color: #1985a1;
`;
export const SmallTitle = styled.div`
  font-size: 1em;
  color: white;
`;
export const InfoText = styled.div`
  font-size: 2em;
  line-height: 1em;
  color: white;
`;
export const SubscribeInputs = styled.div`
  height: fit-content ;
  display: flex;
  justify-content: space-between;
`;
export const SubscriptionInput = styled(TextField)`
  color: white;
  & .MuiInputBase-input {
    height: 1em;
    color: white;
  }
`;
export const SubscribeBtn = styled(CustomButton)`
  height: 100%;
`;

export const SubscriptionPhoto = styled.div<{ src: string }>`
  width: 50%;
  height: 100%;
  background-color: grey;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center;
`;
