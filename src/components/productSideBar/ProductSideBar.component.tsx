import { MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ButtonTypes } from "../CustomButton/CustomButton.component";
import ProductKindsNav from "../ProductKindsNav/ProductKindsNav.component";
import {
  AddToBagBtn,
  BagIcon,
  BasicSubtitle,
  BlueSubtitle,
  ColorsWrapper,
  CurrentPrice,
  Description,
  Discount,
  DividerLine,
  LightSubtitle,
  PreviousPrice,
  PricesWrapper,
  ProductTitle,
  SideBarWrapper,
} from "./ProductSideBar.style";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const colors = ["green", "black", "violet", "lightgreen", "darkblue", "purple"];

function createProductKindObj(kind: string, photo: string) {
  return {
    kind,
    photo,
  };
}
const productKinds = colors.map((c, inx) =>
  createProductKindObj(
    c,
    "https://source.unsplash.com/random?" + Math.floor(Math.random() * 100) + 1
  )
);

const ProductSideBar = () => {
  const navigate = useNavigate();
  const [size, setSize] = useState("");
  const [kind, setKind] = useState(productKinds[0].kind);
  const handleProductKindChange = (kind: string) => {
    setKind(kind);
  };

  const handleChange = (event: SelectChangeEvent) => {
    setSize(event.target.value);
  };
  return (
    <SideBarWrapper>
      <Discount>45%</Discount>
      <ProductTitle>T-Shirt</ProductTitle>
      <Description>
        The T-Shirt sets you up with soft cotton jersey and a classic logo with
        camo on the chest.
      </Description>
      <PricesWrapper>
        <CurrentPrice>$35</CurrentPrice>
        <PreviousPrice>$55</PreviousPrice>
      </PricesWrapper>
      <DividerLine />
      <LightSubtitle>Color: {kind} </LightSubtitle>
      <ProductKindsNav
        productKinds={productKinds}
        handleProductKindChange={handleProductKindChange}
      />
      <ColorsWrapper>
        <LightSubtitle>Choose size</LightSubtitle>
        <BlueSubtitle onClick={() => navigate("/size-guide")}>
          Size guide
        </BlueSubtitle>
      </ColorsWrapper>
      <Select
        value={size}
        onChange={handleChange}
        displayEmpty
        inputProps={{ "aria-label": "Without label" }}
      >
        <MenuItem value="">None</MenuItem>
        {sizes.map((s, index) => (
          <MenuItem key={index} value={s}>
            {s}
          </MenuItem>
        ))}
      </Select>
      <AddToBagBtn buttonType={ButtonTypes.BLUE}>
        <BagIcon />
        Add to bag
      </AddToBagBtn>
      <BasicSubtitle>Details</BasicSubtitle>
      <Description>
        <p>Standard fit for a relaxed, easy feel</p>
        <p>Fabric: 100% cotton Machine wash</p>
        <p>Imported</p>
        <p>Shown: Cactus</p>
        <p>Flower</p>
        <p>Style: CU8914-564</p>
      </Description>
      <BasicSubtitle>Shipping & Returns</BasicSubtitle>
    </SideBarWrapper>
  );
};

export default ProductSideBar;
