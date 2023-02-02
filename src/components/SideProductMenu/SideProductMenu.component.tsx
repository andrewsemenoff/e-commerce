import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import {
  Collapse,
  FormControlLabel,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Radio,
  RadioGroup,
} from "@mui/material";
import { useState } from "react";

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
const prices = [
  "100$ - 200$",
  "200$ - 300$",
  "300$ - 400$",
  "400$ - 500$",
  "500$+",
];
const brands = ["Levi's", "Jungmaven", "Sunspel", "Uniqlo", "Aime Leon Dore"];
const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
const seasons = ["Winter", "Spring", "Summer", "Autumn"];
const styles = ["All styles", "A-Line", "Graphic T-Shirts"];
const collections = ["first", "second", "third", "fourth"];

const SideProductMenu = () => {
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [isPriceOpen, setIsPriceOpen] = useState(false);
  const [isBrandOpen, setIsBrandOpen] = useState(false);
  const [isSizeOpen, setIsSizeOpen] = useState(false);
  const [isSeasonOpen, setIsSeasonOpen] = useState(false);
  const [isStyleOpen, setIsStyleOpen] = useState(false);
  const [isCollectionOpen, setIsCollectionOpen] = useState(false);

  const [chosenCategory, setChosenCategory] = useState("All");
  const [chosenSeason, setChosenSeason] = useState("All");
  const [chosenCollection, setChosenCollection] = useState("All");
  const [priceCheckboxes, setPriceCheckboxes] = useState(
    Array(prices.length).fill(false)
  );
  const [brandCheckboxes, setBrandCheckboxes] = useState(
    Array(brands.length).fill(false)
  );
  const [sizeCheckboxes, setSizeCheckboxes] = useState(
    Array(brands.length).fill(false)
  );
  const [currentStyle, setCurrentStyle] = useState(styles[0]);
  const handleClickCategoryItem = (value: string) => {
    setChosenCategory(value);
  };
  const handleClickSeasonItem = (value: string) => {
    setChosenSeason(value);
  };
  const handleClickCollectionItem = (value: string) => {
    setChosenCollection(value);
  };
  const handleClickCategory = () => {
    setIsCategoryOpen(!isCategoryOpen);
  };
  const handleClickSeason = () => {
    setIsSeasonOpen(!isSeasonOpen);
  };
  const handleClickCollection = () => {
    setIsCollectionOpen(!isCollectionOpen);
  };
  const handleClickPrice = () => {
    setIsPriceOpen(!isPriceOpen);
  };
  const handleClickBrand = () => {
    setIsBrandOpen(!isBrandOpen);
  };
  const handleClickSize = () => {
    setIsSizeOpen(!isSizeOpen);
  };
  const handleClickStyle = () => {
    setIsStyleOpen(!isStyleOpen);
  };
  const handlePriceCheckboxChange = (index: number) => {
    const newPriceCheckboxes = [...priceCheckboxes];
    newPriceCheckboxes[index] = !newPriceCheckboxes[index];
    setPriceCheckboxes(newPriceCheckboxes);
  };
  const handleBrandCheckboxChange = (index: number) => {
    const newBrandCheckboxes = [...brandCheckboxes];
    newBrandCheckboxes[index] = !newBrandCheckboxes[index];
    setBrandCheckboxes(newBrandCheckboxes);
  };
  const handleSizeCheckboxChange = (index: number) => {
    const newSizeCheckboxes = [...sizeCheckboxes];
    newSizeCheckboxes[index] = !newSizeCheckboxes[index];
    setSizeCheckboxes(newSizeCheckboxes);
  };
  const handleStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentStyle(event.target.value);
  };

  return (
    <div>
      <List sx={{ width: "100%", minWidth: 200, bgcolor: "none" }}>
        <ListItemButton onClick={handleClickCategory}>
          <h2>Category</h2>
          {isCategoryOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {categories.map((item, index) => {
          const isCurrent = item === chosenCategory;
          return (
            <Collapse key={index} in={isCategoryOpen} unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{
                    pl: 4,
                    color: isCurrent ? "#1985a1" : "none ",
                    fontWeight: isCurrent ? 800 : 500,
                    "&:hover": {
                      color: "#1985a1",
                    },
                  }}
                  onClick={() => handleClickCategoryItem(item)}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </List>
            </Collapse>
          );
        })}
        <ListItemButton onClick={handleClickPrice}>
          <h2>Price</h2>
          {isPriceOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {prices.map((item, index) => (
          <Collapse key={index} in={isPriceOpen} unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 0 }}
                onClick={() => handlePriceCheckboxChange(index)}
              >
                <ListItemIcon sx={{ pl: 4 }}>
                  <input
                    type="checkbox"
                    checked={priceCheckboxes[index]}
                    onChange={() => handlePriceCheckboxChange(index)}
                  />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </List>
          </Collapse>
        ))}
        <ListItemButton onClick={handleClickSize}>
          <h2>Size</h2>
          {isSizeOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gridTemplateRows: "repeat(3, 1fr)",
            gap: 0,
            gridAutoFlow: "column",
          }}
        >
          {sizes.map((item, index) => (
            <Collapse key={index} in={isSizeOpen} unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{ pl: 0 }}
                  onClick={() => handleSizeCheckboxChange(index)}
                >
                  <ListItemIcon sx={{ pl: 4 }}>
                    <input
                      type="checkbox"
                      checked={sizeCheckboxes[index]}
                      onChange={() => handleSizeCheckboxChange(index)}
                    />
                  </ListItemIcon>
                  <ListItemText primary={item} />
                </ListItemButton>
              </List>
            </Collapse>
          ))}
        </div>
        <ListItemButton onClick={handleClickBrand}>
          <h2>Brand</h2>
          {isBrandOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {brands.map((item, index) => (
          <Collapse key={index} in={isBrandOpen} unmountOnExit>
            <List component="div" disablePadding>
              <ListItemButton
                sx={{ pl: 0 }}
                onClick={() => handleBrandCheckboxChange(index)}
              >
                <ListItemIcon sx={{ pl: 4 }}>
                  <input
                    type="checkbox"
                    checked={brandCheckboxes[index]}
                    onChange={() => handleBrandCheckboxChange(index)}
                  />
                </ListItemIcon>
                <ListItemText primary={item} />
              </ListItemButton>
            </List>
          </Collapse>
        ))}
        <ListItemButton onClick={handleClickStyle}>
          <h2>Style</h2>
          {isStyleOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={isStyleOpen} unmountOnExit>
          <List component="div" disablePadding>
            <RadioGroup value={currentStyle} onChange={handleStyleChange}>
              {styles.map((item, index) => (
                <FormControlLabel
                  key={index}
                  value={item}
                  control={
                    <Radio
                      sx={{
                        color: "primary",
                        "&.Mui-checked": { color: "#1985a1" },
                        pl: 5,
                      }}
                    />
                  }
                  label={item}
                />
              ))}
            </RadioGroup>
          </List>
        </Collapse>
        <ListItemButton onClick={handleClickSeason}>
          <h2>Season</h2>
          {isSeasonOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {seasons.map((item, index) => {
          const isCurrent = item === chosenSeason;
          return (
            <Collapse key={index} in={isSeasonOpen} unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{
                    pl: 4,
                    color: isCurrent ? "#1985a1" : "none ",
                    fontWeight: isCurrent ? 800 : 500,
                    "&:hover": {
                      color: "#1985a1",
                    },
                  }}
                  onClick={() => handleClickSeasonItem(item)}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </List>
            </Collapse>
          );
        })}
        <ListItemButton onClick={handleClickCollection}>
          <h2>Collection</h2>
          {isCollectionOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        {collections.map((item, index) => {
          const isCurrent = item === chosenCollection;
          return (
            <Collapse key={index} in={isCollectionOpen} unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton
                  sx={{
                    pl: 4,
                    color: isCurrent ? "#1985a1" : "none ",
                    fontWeight: isCurrent ? 800 : 500,
                    "&:hover": {
                      color: "#1985a1",
                    },
                  }}
                  onClick={() => handleClickCollectionItem(item)}
                >
                  <ListItemText primary={item} />
                </ListItemButton>
              </List>
            </Collapse>
          );
        })}
      </List>
    </div>
  );
};

export default SideProductMenu;
