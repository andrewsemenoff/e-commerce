import styled from "styled-components";
import SvgClock from "../../svg_components/Clock";

export const BaseText = styled.div`
  font-size: 1em;
`;

export const Wrapper = styled.div`
  padding: 5% 20%;
  display: flex;
  flex-direction: column;
`;

export const BlogTitle = styled.div`
  text-align: center;
  font-weight: 800;
  font-size: 2em;
  color: black;
`;

export const Subtitle = styled.div`
  margin: 2em 0 1em 0;
  font-weight: 600;
  font-size: 1.5em;
  color: black;
`;
export const Date = styled(BaseText)`
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
  height: 40em;
  border-radius: 0.5em;
  margin: 1em 0;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: top center;
  background-repeat: no-repeat;
`;

export const PicturesWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 1em;
`;

export const HorizontalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1em;
`;
