import React from "react";
import { GridWrapper } from "./NewArrivalsGallery.style";
import ProductCard from "../ProductCard/ProductCard.component";

const clothesImages =Array.from({length:10},()=> 'https://source.unsplash.com/random?' + Math.floor(Math.random() * 100) + 1);
const NewArrivalsGallery = () => {
  return (
    <GridWrapper>
      {clothesImages.map((img, index) => (
        <ProductCard key={index} src={img} alt="cloth" />
      ))}
    </GridWrapper>
  );
};

export default NewArrivalsGallery;
