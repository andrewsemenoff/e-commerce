import BlogDivision from "../BlogDivision/BlogDivision.component";
import Categories from "../CategoriesDivision/CategoriesDivision.component";
import ProductsGallery from "../ProductsGallery/ProductsGallery.component";
import QuickShopSlider from "../QuickShopSlider/QuickShopSlider.component";
import SubscribeBar from "../SubscribeBar/SubscribeBar.component";
import { LandingPageContentWrapper, Title } from "./LandingPageContent.style";

const clothesImages = Array.from(
  { length: 12 },
  () =>
    "https://source.unsplash.com/random?" + Math.floor(Math.random() * 100) + 1
);


const LandingPageContent = () => {
  return (
    <>
      <QuickShopSlider />
      <LandingPageContentWrapper>
        <Title>New Arrivals</Title>
        <ProductsGallery products={clothesImages} />
        <Title>Categories</Title>
        <Categories />
        <Title>Blog</Title>
        <BlogDivision />
      </LandingPageContentWrapper>
      <SubscribeBar/>
    </>
  );
};

export default LandingPageContent;
