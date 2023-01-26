import { Badge, MenuItem } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import styled, { css } from "styled-components";
import SvgSearch from "../../svg_components/Search";
import SvgShoppingBag from "../../svg_components/ShoppingBag";
import SvgUser from "../../svg_components/User";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const buttonStyles = css`
  fill: #dcdcdd;
  cursor: pointer;
  filter: drop-shadow(rgba(0, 0, 0, 0.65) 1px 2px 1px);
  transition: filter 0.2s;
  &:hover {
    fill: white;
  }
  &:active {
    filter: drop-shadow(rgba(0, 0, 0, 0.65) 0px 0px 0.5px);
  }
`;

export const NavBar = styled.div`
  padding: 1em;
  width: 100%;
  height: fit-content;
  display: flex;
  background: #46494c;
  align-items: center;
  gap: 2em;
`;

export const NavMenu = styled.div`
  width: 70%;
  display: flex;
  font-size: em;
  gap: 1em;
`;

export const Magnifier = styled(SvgSearch)`
  width: 1.5em;
  height: 1.5em;
  ${buttonStyles}
`;

export const CartBadge = muiStyled(Badge)({
  "& .MuiBadge-badge": {
    right: "10%",
    backgroundColor: "#1985a1",
  },
  backgroundColor: "info",
});
export const CartIcon = styled(SvgShoppingBag)`
  width: 1.8em;
  ${buttonStyles}
`;

export const ProfileIcon = styled(SvgUser)`
  fill: #dcdcdd;
  width: 2.1em;
  ${buttonStyles};
`;

export const LogoIcon = styled.div`
  font-size: 2em;
  color: black;
  transition: all .2s;
  &:hover{
    color: white;
    transform: scale(1.1) ;
  }
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
`;
