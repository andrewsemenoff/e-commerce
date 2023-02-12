import styled from "styled-components";
import SvgClock from "../../svg_components/Clock";

export const BlogsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, minmax(10em, fit-content));
  padding: 5% 10%;
  gap: 1em;
`;

export const TopDiv = styled.div`
  grid-column: 1 / 4;
  grid-row: 1 / 2;
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  grid-template-rows: repeat(2, 1fr);
  gap: 1em;
`;
export const FirstBlog = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2em 1em;
  grid-column: 1 / 2;
  grid-row: 1 / 3;
  border-radius: 0.5em;
  background-color: lightgrey;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
`;

export const BigTitle = styled.div`
  font-size: 3em;
  line-height: 1.5em;
  text-shadow: 2px 2px 5px black;
`;

export const ClockIcon = styled(SvgClock)`
  fill: black;
  width: 0.9em;
`;


export const PublishDate = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5em;
  font-weight: 600;
`;