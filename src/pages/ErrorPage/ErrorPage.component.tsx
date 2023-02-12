import React from "react";
import CustomButton, {
  ButtonTypes,
} from "../../components/CustomButton/CustomButton.component";
import { Link } from "react-router-dom";
import { Subtitle, Wrapper } from "./ErrorPage.style"
import ProductsGallery from "../../components/ProductsGallery/ProductsGallery.component";

const clothesImages = Array.from(
    { length: 30 },
    () =>
      "https://source.unsplash.com/random?" + Math.floor(Math.random() * 100) + 1
  );

const ErrorPage = () => {
  return (
    <Wrapper>
      <h1>Error404</h1>
      <h2>Oops! Something went wrong.</h2>
      <h3>The requested page could not be found.</h3>
      <Link to="/landing">
        <CustomButton buttonType={ButtonTypes.BLACK}>
          Go to main page
        </CustomButton>
      </Link>
      <Subtitle>You might also like</Subtitle>
      <ProductsGallery itemsPerPage={4} products={clothesImages} />
    </Wrapper>
  );
};

export default ErrorPage;
