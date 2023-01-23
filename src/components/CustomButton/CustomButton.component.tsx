import React from "react";
import { AddToCartButton, BaseButton, BlackButton, BlueButton } from "./CustomButton.style";

export enum ButtonTypes {
  BASE = "base",
  BLACK = "black",
  BLUE = "blue",
  ADD = 'add',
}

const getButton = (buttonType: ButtonTypes = ButtonTypes.BASE) =>
  ({
    [ButtonTypes.BASE]: BaseButton,
    [ButtonTypes.BLACK]: BlackButton,
    [ButtonTypes.BLUE]: BlueButton,
    [ButtonTypes.ADD]: AddToCartButton,
  }[buttonType]);

const CustomButton = ({ children, buttonType, ...otherProps }: {children: any, buttonType?: ButtonTypes}) => {
  const StyledButton = getButton(buttonType);
  return <StyledButton {...otherProps}>{children}</StyledButton>;
};

export default CustomButton;
