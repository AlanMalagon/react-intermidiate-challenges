import styled from "styled-components";

export const Background = styled.div`
  background-image: url(${({ src }) => src});
  background-position: center;
  background-size: cover;
  filter: blur(10px);
  height: 100%;
  left: 0;
  position: fixed;
  transform: scale(1.1);
  top: 0;
  width: 100%;
  z-index: -1;
`;
