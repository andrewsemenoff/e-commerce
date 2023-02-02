import React, { useState } from "react";
import { GridWrapper, VerticalBox } from "./ProductsGallery.style";
import ProductCard from "../ProductCard/ProductCard.component";
import { Pagination } from "@mui/material";

interface Props{
  products: string[],
  rows?: number,
  columns?: number,
}
const ProductsGallery: React.FC <Props> = ({products, columns, rows}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handleChangePage = (event: React.ChangeEvent<unknown>, page: number)=>{
    setCurrentPage(page);
  }
  return (
    <VerticalBox>
      <GridWrapper columns={columns} rows={rows}>
        {products.map((img, index) => {
          return <ProductCard key={index} src={img} alt="cloth" />;
        })}
      </GridWrapper>
      <Pagination
        count={10}
        color="secondary"
        shape="rounded"
        onChange={handleChangePage}
      />
    </VerticalBox>
  );
};

export default ProductsGallery;
