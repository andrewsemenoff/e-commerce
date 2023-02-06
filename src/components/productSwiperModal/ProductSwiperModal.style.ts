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
