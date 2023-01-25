import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton.component";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

export const SignBox = styled.div`
  width: 30vw;
  margin: 3em auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5em;
  border: #1985A1 solid 2px;
`;

export const StyledForm = styled.form``;

export const SubmitBtn = styled(CustomButton)`
  margin: 1em 0;
  height: 3em;
`;

export const MyLink = styled(NavLink)`
  color: grey;
  &:hover{
    color: #1985A1;
  }
`;

export const HorizontalBox = styled.div<{align?: string}>`
    width: 100%;
    display: flex;
    justify-content: ${({align})=> align??'space-between'};
`
