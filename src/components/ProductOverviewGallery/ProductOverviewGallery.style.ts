import styled from "styled-components";

interface ProductPhotoProps {
  src: string;
}

export const Wrapper = styled.div`
position: relative;
  width: 70%;
  height: 50em;
  display: flex;
  margin: 5% 0% 5% 10%;
  justify-content: space-between;
  gap: 2em;
`;
export const ProductPhotosGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
  gap: 0.5%;
`;


export const ProductPhoto = styled.div<ProductPhotoProps>`
  height: 100%;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  border-radius: 0.5em;
`;

