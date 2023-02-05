import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Divider,
} from "@mui/material";
import { useState } from "react";
import useListHook from "../../customHooks/useListHook";
import { Title, Titles, VerticalFlex } from "./TopDropProductMene.style";

const categories = [
  "All",
  "Coats & Jackets",
  "T-shirts",
  "Tops",
  "Trousers",
  "Jumpsuits & Rompers",
  "Pants",
  "Shorts",
  "Sweaters",
  "Shoes",
];
const collections = [
  "Our Favorites",
  "New Arrivals",
  "New Collections",
  "Brands",
  "Trends",
  "New Names at Neiman's",
  "Luxe Essentials",
  "Exclusives",
];

const brands = [
  "Akris",
  "Alice + Olivia",
  "Brunello Cucinelli",
  "CHANEL",
  "Dolce & Gabbana",
  "Eileen Fisher",
  "Giorgio Armani",
  "Gucci",
  "Johnny Was",
  "Lafayette 148 New York",
  "Theory",
];

const TopDropProductMenu = () => {
  const [CategoriesList, currentCategory, setCurrentCategory] =
    useListHook(categories);
  const [CollectionsList, currentCollection, setCurrentCollection] =
    useListHook(collections);
  const [BrandsList, currentBrand, setCurrentBrand] = useListHook(brands);

  const gender = "women";

  return (
    <div style={{ position: "absolute", zIndex: 10, width: "100%" }}>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <MenuIcon style={{ margin: "0 2% 0 10%" }} />
          <Titles>
            <Title>{gender}</Title>
            {currentCategory && <Title>{`/${currentCategory}`}</Title>}
            {currentCollection && <Title>{`/${currentCollection}`}</Title>}
            {currentBrand && <Title>{`/${currentBrand}`}</Title>}
          </Titles>
        </AccordionSummary>
        <AccordionDetails sx={{ display: "flex", gap: "4em", pl: "11%" }}>
          <VerticalFlex>
            <h3>Category</h3>
            {CategoriesList}
          </VerticalFlex>
          {currentCategory && (
            <VerticalFlex>
              <h3>Collection</h3>
              {CollectionsList}
            </VerticalFlex>
          )}
          {currentCollection && (
            <VerticalFlex>
              <h3>Brand</h3>
              {BrandsList}
            </VerticalFlex>
          )}
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default TopDropProductMenu;
