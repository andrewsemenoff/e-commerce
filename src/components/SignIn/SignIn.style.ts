import { NavLink } from "react-router-dom";
import styled from "styled-components";
import CustomButton from "../CustomButton/CustomButton.component";

export const SignBox = styled.div`
  width: 30vw;
  margin: 3em auto;
  padding: 1em; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  border-radius: 0.5em;
  border: #1985a1 solid 2px;
`;

export const StyledForm = styled.form`
width: 100%
`;

export const SubmitBtn = styled(CustomButton)`
  margin: 1em 0;
  height: 3em;
`;

export const MyLink = styled(NavLink)`
  text-decoration: none;
  text-align: center;
  color: #1985a1;
  transition: all 0.1s;
  display: inline-block;
  &:hover {
    transform: scale(1.1);
    color: #0a3b47;
  }
`;

export const HorizontalBox = styled.div<{ align?: string }>`
  width: 100%;
  display: flex;
  justify-content: ${({ align }) => align ?? "space-between"};
`;
export const HighlightedText = styled.span`
  color: black;
  font-weight: 700;
  text-align: center;
`;

export const Paragraph = styled.p`
  text-align: center;
  color: grey;
`;
