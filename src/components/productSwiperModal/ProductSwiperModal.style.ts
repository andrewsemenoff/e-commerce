import styled from "styled-components";
interface Props {
  src: string;
}

export const Wrapper = styled.div`
  right: 15%;
  top: 5em;
  width: 70%;
  position: absolute;
`;

export const ProductPhoto = styled.div<Props>`
  height: 40em;
  width: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 0.5em;
`;

export const DarkBG = styled.div`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;
  background-color: black;
  opacity: .6;
  width: 100% ;
  height: 100%;
  backdrop-filter: blur(10px);
`
