import styled from "styled-components";
import SvgClock from "../../svg_components/Clock";

export const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border-radius: 0.5em;
  background-color: lightgrey;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  width: 50%;
`;

export const Title = styled.div`
  line-height: 1.5em;
  font-size: 1.5em;
  font-weight: 600;
  margin: 2em 1em;
`;

export const PublishDate = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5em;
  margin: 2em 0;
  font-weight: 600;
`;
export const ClockIcon = styled(SvgClock)`
  fill: black;
  width: 0.9em;
`;

export const BlogPicture = styled.div<{ src: string }>`
  width: 100%;
  min-height: 20em;
  max-height: 30em;
  border-radius: 0.5em;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;
