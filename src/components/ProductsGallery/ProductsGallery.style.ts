import styled from "styled-components";

interface GridProps {
  rows?: number;
  columns?: number;
}

export const GridWrapper = styled.div<GridProps>`
  width: 100%;
  display: grid;
  grid-template: ${({ rows = 3, columns = 4 }) =>
    `repeat(${rows}, auto)/ repeat(${columns}, 1fr)`};
  gap: 2em;
`;

export const VerticalBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2em;
  align-items: center;
`;
