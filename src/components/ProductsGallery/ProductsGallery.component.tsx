import React, { useState } from "react";
import { GridWrapper, VerticalBox } from "./ProductsGallery.style";
import ProductCard from "../ProductCard/ProductCard.component";
import { Pagination } from "@mui/material";
import { useNavigate } from "react-router-dom";

interface Props {
  itemsPerPage?: number;
  products: string[];
  rows?: number;
  columns?: number;
}
const ProductsGallery: React.FC<Props> = ({ products, columns, rows, itemsPerPage=9 }) => {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const displayProducts = products.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    setCurrentPage(page);
  };
  return (
    <VerticalBox>
      <GridWrapper columns={columns} rows={rows}>
        {displayProducts.map((img, index) => {
          return <ProductCard key={index} src={img} alt="cloth" />;
        })}
      </GridWrapper>
      <Pagination
        count={totalPages}
        page={currentPage}
        color="secondary"
        shape="rounded"
        onChange={handleChangePage}
      />
    </VerticalBox>
  );
};

export default ProductsGallery;
