import { Pagination } from "@mui/material";
import ProductCard from "../ProductCard/ProductCard.component";
import { GridWrapper } from "./NewArrivalsGallery.style";
import { useState } from "react";

const clothesImages = Array.from(
  { length: 10 },
  () =>
    "https://source.unsplash.com/random?" + Math.floor(Math.random() * 100) + 1
);
const NewArrivalsGallery = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number)=>{
    console.log(page);
    setCurrentPage(page);
  }
  return (
    <>
      <GridWrapper>
        {clothesImages.map((img, index) => (
          <ProductCard key={index} src={img} alt="cloth" />
        ))}
      </GridWrapper>
      <Pagination count={10} color="secondary" shape="rounded" onChange={handleChangePage} />
    </>
  );
};

export default NewArrivalsGallery;
