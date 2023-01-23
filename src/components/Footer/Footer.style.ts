import styled from "styled-components";
import SvgTwitter from "../../svg_components/Twitter";
import SvgFacebook from "../../svg_components/Facebook";
import SvgInstagram from "../../svg_components/Instagram";

interface Props {
  isHighlighted?: boolean;
}

export const FooterBar = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  height: fit-content;
  padding: 1em 7em;
  background: black;
`;

export const SiteMapList = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 2em;
`;
export const SubList = styled.div`
  height: fit-content;
  width: fit-content;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;
export const SubItem = styled.div`
  font-size: 1em;
  color: #4c5c68;
  &:hover {
    color: #1985a1;
  }
`;
export const TitleItem = styled.div`
  font-size: 1.3em;
  color: white;
  &: hover {
    color: #1985a1;
  }
`;
export const Logo = styled.div`
  font-size: 2em;
  color: white;
`;
export const ContactFieldWrapper = styled.div`
  margin-bottom: 1em;
`;
export const ContactFieldName = styled.div`
  color: #4c5c68;
`;
export const ContactValue = styled.div<Props>`
  color: ${(props) => (props.isHighlighted ? "#1985a1" : "white")};
`;

export const Line = styled.hr`
  margin-bottom: 1em;
  width: 100%;
  border: none;
  height: 1px;
  background-color: #4c5c68;
`;

export const TwitterIcon = styled(SvgTwitter)`
  width: 70%;
`;
export const FacebookIcon = styled(SvgFacebook)`
  width: 70%;
`;
export const InstagramIcon = styled(SvgInstagram)`
  width: 70%;
`;

export const Circle = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background-color: #4c5c68;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const SquareWrapper = styled.div`
  position: relative;
  width: 30%;
  padding-bottom: 30%;
`;
export const VeryBottomContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SocialMediaIcons = styled.div`
  width: 10vw;
  display: flex;
  justify-content: space-between;
`;
