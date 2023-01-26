import React from "react";
import {
  AddToCartButton,
  BaseButton,
  BlackButton,
  BlueButton,
} from "./CustomButton.style";

export enum ButtonTypes {
  BASE = "base",
  BLACK = "black",
  BLUE = "blue",
  ADD = "add",
}

interface ButtonProps {
  children: any;
  buttonType?: ButtonTypes;
  type?: "button" | "submit" | "reset" | undefined;
  isFullWidth?: boolean;
  disabled?: boolean;
}

const getButton = (buttonType: ButtonTypes = ButtonTypes.BASE) =>
  ({
    [ButtonTypes.BASE]: BaseButton,
    [ButtonTypes.BLACK]: BlackButton,
    [ButtonTypes.BLUE]: BlueButton,
    [ButtonTypes.ADD]: AddToCartButton,
  }[buttonType]);

const CustomButton: React.FC<ButtonProps> = ({
  children,
  isFullWidth=false,
  type,
  buttonType,
  disabled,
  ...otherProps
}) => {
  const StyledButton = getButton(buttonType);
  return (
    <StyledButton disabled={disabled} isFullWidth={isFullWidth} type={type} {...otherProps}>
      {children}
    </StyledButton>
  );
};

export default CustomButton;
