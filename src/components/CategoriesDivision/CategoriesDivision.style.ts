import { log } from "console";
import styled, { css } from "styled-components";

interface Props {
  src: string;
}

export const CategoriesWrapper = styled.div<{ titles: string[] }>`
  align-self: start;
  gap: 1.5em;
  width: ${`calc(100% - 1.5em)`};
  height: 100%;

  justify-content: space-between;
  display: grid;
  grid-template: ${({ titles }) =>
    `"${titles[0]} ${titles[1]} ${titles[2]}" minmax(min-content, 1fr) 
    "${titles[0]} ${titles[3]} ${titles[4]}" 1fr/ 2fr 1fr 1fr`};
`;

export const CategoryTitle = styled.div<{ isBigTitle: boolean }>`
  font-size: ${({ isBigTitle }) => (isBigTitle ? 3 : 1.7)}em;
  font-weight: 600;
`;

export const BaseStyle = css<Props>`
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 0.5em;
  aspect-ratio: 1/1;

  padding: 15% 5%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Category = styled.div<{ title: string; src: string }>`
  grid-area: ${(props) => props.title};
  ${BaseStyle};
`;
