import React from "react";
import { LandingPageContentWrapper, Title } from "./LandingPageContent.style";
import NewArrivalsGallery from "../NewArrivalsGallery/NewArrivalsGallery.component";
import Categories from "../CategoriesDivision/CategoriesDivision.component";
import BlogDivision from "../BlogDivision/BlogDivision.component";

const LandingPageContent = () => {
  return (
    <LandingPageContentWrapper>
      <Title>New Arrivals</Title>
      <NewArrivalsGallery />
      <Title>Categories</Title>
      <Categories/>
      <Title>Blog</Title>
      <BlogDivision/>
    </LandingPageContentWrapper>
  );
};

export default LandingPageContent;
