import styled from "styled-components";

export const Container = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 96vh;
  padding: 2vh;

  & h1,
  label {
    color: white;
    line-height: 40px;
    margin: 0;
    text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
  }
`;

export const Background = styled.div`
  background-color: slateblue;
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
