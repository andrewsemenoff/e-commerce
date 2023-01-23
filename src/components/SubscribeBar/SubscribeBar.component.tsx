import React from "react";
import {
  InfoText,
  SmallTitle,
  SubscribeBtn,
  SubscribeInputs,
  SubscriptionBox,
  SubscriptionForm,
  SubscriptionInput,
  SubscriptionPhoto,
} from "./SubscribeBar.style";
import { Input } from "@mui/material";
import CustomButton, { ButtonTypes } from "../CustomButton/CustomButton.component";

const SubscribeBar = () => {
  return (
    <SubscriptionBox>
      <SubscriptionForm>
        <SmallTitle>Newsletter</SmallTitle>
        <InfoText>Subscribe and get info about new releases first</InfoText>
        <SubscribeInputs>
          <SubscriptionInput
            id="outlined-password-input"
            label="mail"
            autoComplete="current-password"
          />
          <SubscribeBtn buttonType={ButtonTypes.BLACK}>subscribe</SubscribeBtn>
        </SubscribeInputs>
      </SubscriptionForm>
      <SubscriptionPhoto src={'https://images.unsplash.com/photo-1523381210434-271e8be1f52b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'}/>
    </SubscriptionBox>
  );
};

export default SubscribeBar;
