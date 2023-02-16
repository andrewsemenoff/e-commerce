import {
    FormControl,
    InputLabel,
    MenuItem,
    Select,
    SelectChangeEvent,
    TextField,
} from "@mui/material";
import React, { useState } from "react";
import { sizes } from "../../mocks/data";
import CustomButton from "../CustomButton/CustomButton.component";
import {
    CartItemPicture,
    CartItemWrapper,
    CurrentPrice,
    Discount,
    InputsWrapper,
    PictureBackground,
    PreviousPrice,
    PriceWrapper,
    ProductName,
    Subtitle,
    VerticalBox
} from "./CartItem.style";

interface Props {
  src: string;
}

const CartItem: React.FC<Props> = ({ src }) => {
  const [size, setSize] = useState("");
  const handleChangeSize = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };

  return (
    <CartItemWrapper>
      <PictureBackground>
        <Discount>50%</Discount>
        <CartItemPicture src={src} />
      </PictureBackground>
      <VerticalBox>
        <Subtitle>#7142</Subtitle>
        <ProductName>Basic t-shirt</ProductName>
        <Subtitle>Black with print</Subtitle>
        <InputsWrapper>
          <FormControl variant="standard" sx={{ mr: 2, width: "4em" }}>
            <InputLabel>Size</InputLabel>
            <Select value={size} onChange={handleChangeSize} label="Size">
              {sizes.map((s, index) => (
                <MenuItem value={s} key={index}>
                  {s}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl variant="standard" sx={{ maxWidth: "4em" }}>
            <TextField type="number" label="Quantity" variant="standard" />
          </FormControl>
        </InputsWrapper>
      </VerticalBox>
      <VerticalBox style={{ marginLeft: "auto" }}>
        <PriceWrapper>
          <PreviousPrice>$55</PreviousPrice>
          <CurrentPrice>$35</CurrentPrice>
        </PriceWrapper>
        <CustomButton>Remove</CustomButton>
      </VerticalBox>
    </CartItemWrapper>
  );
};

export default CartItem;
