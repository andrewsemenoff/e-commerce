import styled from "styled-components";
import SvgLightSpot from "../../svg_components/LightSpot";
import SvgLightSpot2 from "../../svg_components/LightSpot2";

export const QuickShopSliderContainer = styled.div`
  position: relative;
  width: 100%;
  height: 30vh;
  background: #17181f;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  display: flex;
  padding: 0 20%;
  width: 100%;
  height: 100%;
  position: absolute;
  z-index: 4;
`;

export const ProductPicture = styled.img`
  padding: 1em;
  background-color: "lightblue";
  width: 11em;
  height: 11em;
  border-radius: 0.5em;
  cursor: pointer;
  transition: all 0.3s;
  filter: drop-shadow(rgba(0, 0, 0, 0.65) 1px 1px 3px);
  &:hover {
    transform: scale(1.3);
    filter: drop-shadow(rgba(0, 0, 0, 0.65) 4px 6px 10px);
  }
`;
export const LightSpot1 = styled(SvgLightSpot)`
  position: absolute;
  fill: rgb(203, 105, 193, 0.2);
  width: 100%;
  height: 100%;
  transform: scale(1);
  filter: url("#blur");
`;
export const LightSpot2 = styled(SvgLightSpot2)`
  position: absolute;
  width: 100%;
  height: 100%;
  fill: rgba(143, 126, 236, 0.35);
  transform: scale(2);
  filter: url("#blur");
`;

export const BrandTitle = styled.div`
  position: absolute;
  z-index: 3;
  width: 100%;
  height: 100%;
  font-size: 11em;
  color: rgba(238, 237, 240, 0.2);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

interface SubtitleProps {
  fontSize: number;
}

export const Subtitle = styled.div`
  position: absolute;
  color: white;
  opacity: 0.5;
  font-size: 0.2em;
  top: 0.2em;
`;

export const SmallText = styled.div`
  position: absolute;
  color: white;
  opacity: 0.2;
  font-size: 0.1em;
  bottom: 0.5em;
`;

export const ButtonsGroup = styled.div`
  display: flex;
  gap: 1em;
  position: absolute;
  bottom: .7em;
  left: 20%;
  z-index: 10;
`;
