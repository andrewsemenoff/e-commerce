import { InputAdornment, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  CartBadge,
  CartIcon,
  Magnifier,
  NavBar,
  NavMenu,
  ProfileIcon,
} from "./NavigationBar.style";

const menuItems = ["Men", "Women", "Kids", "Sale", "Collections", "Blog"];
const NavigationBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(1);
  const searchedTextChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };
  return (
    <NavBar>
      <h2>LOGO</h2>
      <NavMenu>
        {menuItems.map((item, index) => (
          <MenuItem key={index}>{item}</MenuItem>
        ))}
      </NavMenu>
      <TextField
        placeholder="search"
        size="small"
        value={searchValue}
        onChange={searchedTextChangeHandler}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Magnifier />
            </InputAdornment>
          ),
        }}
      />
      <CartBadge badgeContent={count}>
        <CartIcon/>
      </CartBadge>
      <ProfileIcon />
    </NavBar>
  );
};

export default NavigationBar;
