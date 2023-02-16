import { TextField } from "@mui/material";
import CartItem from "../../components/CartItem/CartItem.component";
import { mockProducts } from "../../mocks/data";
import {
  ApplyBtn,
  CartItemsWrapper,
  Wrapper,
  PromoCodeField,
  SummeryBox,
  CheckoutBtn,
  HorizontalField,
  Subtitle,
  Title,
  Line,
} from "./CartPage.style";
import { ButtonTypes } from "../../components/CustomButton/CustomButton.component";

const CartPage = () => {
  return (
    <Wrapper>
      <CartItemsWrapper>
        {mockProducts.map((p, index) => (
          <CartItem src={p.images} />
        ))}
      </CartItemsWrapper>

      <SummeryBox>
        <h3>Summary</h3>
        <PromoCodeField>
          <TextField
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
            inputProps={{
              style: { height: "1em" },
            }}
          />
          <ApplyBtn buttonType={ButtonTypes.BLACK}>Apply</ApplyBtn>
        </PromoCodeField>
        <HorizontalField>
          <Subtitle>Subtotal</Subtitle>
          <Subtitle>$290</Subtitle>
        </HorizontalField>
        <HorizontalField>
          <Subtitle>Estimated Shipping & Handling</Subtitle>
          <Subtitle>$8.00</Subtitle>
        </HorizontalField>
        <Line/>
        <HorizontalField>
          <Title>Total</Title>
          <Title>$298</Title>
        </HorizontalField>
        <Line/>
        <CheckoutBtn buttonType={ButtonTypes.BLUE}>Checkout</CheckoutBtn>
      </SummeryBox>
    </Wrapper>
  );
};

export default CartPage;
