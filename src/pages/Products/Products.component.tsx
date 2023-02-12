import ProductsGallery from "../../components/ProductsGallery/ProductsGallery.component";
import SideProductMenu from "../../components/SideProductMenu/SideProductMenu.component";
import TopDropProductMenu from "../../components/TopDropProductMenu/TopDropProductMenu.component";
import { Wrapper } from "./Products.style";

const productsImages = Array.from(
  { length: 30 },
  () =>
    "https://source.unsplash.com/random?" + Math.floor(Math.random() * 100) + 1
);

const Products = () => {
  return (
    <>
      <TopDropProductMenu />
      <Wrapper>
        <SideProductMenu />
        <ProductsGallery columns={3} products={productsImages} />
      </Wrapper>
    </>
  );
};

export default Products;
