import { InputAdornment, MenuItem, TextField } from "@mui/material";
import React, { useState } from "react";
import {
  CartBadge,
  CartIcon,
  LogoIcon,
  Magnifier,
  NavBar,
  NavMenu,
  ProfileIcon,
  StyledLink,
} from "./NavigationBar.style";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const menuItems = ["Men", "Women", "Kids", "Sale", "Collections", "Blog"];
const NavigationBar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const searchedTextChangeHandler = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchValue(e.target.value);
  };
  return (
    <NavBar>
      <StyledLink to='/landing'>
        <LogoIcon>LOGO</LogoIcon>
      </StyledLink>
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
        <CartIcon />
      </CartBadge>
      <ProfileIcon />
    </NavBar>
  );
};

export default NavigationBar;
