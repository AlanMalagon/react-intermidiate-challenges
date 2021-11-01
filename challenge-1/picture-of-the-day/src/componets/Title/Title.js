import React from "react";
import { Container, TitleText } from "./Title.styles";

export const Title = ({ text }) => {
  return (
    <Container>
      <TitleText>{text}</TitleText>
    </Container>
  );
};
