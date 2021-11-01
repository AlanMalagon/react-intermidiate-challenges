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

export const SubtitleText = styled.h1`
  font-size: 25px;
`;
