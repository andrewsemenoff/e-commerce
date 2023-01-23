import { url } from "inspector";
import styled, { css } from "styled-components";

export const Wrapper = styled.div`
  height: 30em;
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const Column = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: #dcdcdd;
`;

export const BlogImage = styled.div<{ src: string }>`
  width: 100%;
  height: 70%;
  background-image: ${({ src }) => `url(${src})`};
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
`;

export const FirstBlog = css`
  margin-top: 20%;
  line-height: 2em;
  height: 90%;
  font-size: 2em;
`;

export const BlogTitle = styled.div<{ isFirst: boolean }>`
  height: 20%;
  padding: 1em;
  font-size: 1.2em;
  ${({isFirst})=> isFirst&&FirstBlog}
`;

export const DateInfo = styled.div`
  height: 10%;
  padding: 1em;
  font-size: 1em;
  color: #46494c;
`;
