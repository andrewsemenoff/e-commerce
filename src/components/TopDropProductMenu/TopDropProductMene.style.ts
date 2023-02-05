import styled from "styled-components";

export const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.div`
  font-size: 1em;
  color: grey;
`;

export const Titles = styled.div`
  display: flex;
  div:last-child {
    color: black;
    font-weight: 700;
  }
`;
