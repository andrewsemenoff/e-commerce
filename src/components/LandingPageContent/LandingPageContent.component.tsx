import BlogDivision from "../BlogDivision/BlogDivision.component";
import Categories from "../CategoriesDivision/CategoriesDivision.component";
import NewArrivalsGallery from "../NewArrivalsGallery/NewArrivalsGallery.component";
import QuickShopSlider from "../QuickShopSlider/QuickShopSlider.component";
import SubscribeBar from "../SubscribeBar/SubscribeBar.component";
import { LandingPageContentWrapper, Title } from "./LandingPageContent.style";

const LandingPageContent = () => {
  return (
    <>
      <QuickShopSlider />
      <LandingPageContentWrapper>
        <Title>New Arrivals</Title>
        <NewArrivalsGallery />
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
