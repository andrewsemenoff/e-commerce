import styled from "styled-components";

interface ThumbNailProps {
  src: string;
  isCurrent: boolean;
}

export const GridWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template: repeat(1, auto) / repeat(4, minmax(2em, 1fr));
  gap: 0.2em;
`;

export const ProductThumpNail = styled.div<ThumbNailProps>`
  min-width: 3em;
  min-height: 3em;
  border-radius: 0.3em;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border: ${({ isCurrent }) => (isCurrent ? "#1985a1 solid 0.2em" : "none")};
  &:hover {
    border: lightblue solid 0.2em;
  }
`;
