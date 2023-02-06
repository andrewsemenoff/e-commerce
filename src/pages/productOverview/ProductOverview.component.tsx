import ProductOverviewGallery from "../../components/ProductOverviewGallery/ProductOverviewGallery.component";
import ProductSideBar from "../../components/productSideBar/ProductSideBar.component";
import { ProductOverviewWrapper } from "./ProductOverview.style";

const photos = Array.from(
  { length: 4 },
  () =>
    "https://source.unsplash.com/random?" + Math.floor(Math.random() * 100) + 1
);

const ProductOverview = () => {
  return (
    <ProductOverviewWrapper>
      <ProductOverviewGallery photos={photos} />
      <ProductSideBar />
    </ProductOverviewWrapper>
  );
};

export default ProductOverview;
