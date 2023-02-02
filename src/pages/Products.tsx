import React from "react";
import SideProductMenu from "../components/SideProductMenu/SideProductMenu.component";
import SubscribeBar from "../components/SubscribeBar/SubscribeBar.component";
import ProductsGallery from "../components/ProductsGallery/ProductsGallery.component";
import { Wrapper } from "./Products.style";


const productsImages = Array.from(
  { length: 30 },
  () =>
    "https://source.unsplash.com/random?" + Math.floor(Math.random() * 100) + 1
);

const Products = () => {
  return (
    <div>
      <Wrapper>
        <SideProductMenu />
        <ProductsGallery columns={3} products={productsImages} />
      </Wrapper>
      <SubscribeBar />
    </div>
  );
};

export default Products;
