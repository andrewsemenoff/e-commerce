import styled from "styled-components";

export const BaseButton = styled.button`
  pointer-events: ${(props) => (props.disabled ? "none" : null)};
  padding: 0.4em;
  height: fit-content;
  width: fit-content;
  font-size: 1em;
  decoration: none;
  border: none;
  border-radius: 0.2em;
  background: grey;
  color: white;
  opacity: ${(props) => (props.disabled ? 0.3 : 1)};
  cursor: pointer;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  &:hover {
    opacity: 1;
    filter: brightness(150%);
  }
  &:active {
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 10px;
    transform: translateY(0.1em);
  }
`;

export const BlueButton = styled(BaseButton)`
  background: #2d74ff;
  color: white;
`;

export const BlackButton = styled(BaseButton)`
  background: black;
  color: white;
`;
export const AddToCartButton = styled(BaseButton)`
  width: 2.5em;
  height: 2.5em;
  background: white;
  color: black;
  
`;

