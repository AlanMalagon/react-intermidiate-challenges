import React from "react";
import { Container, TitleText } from "./Title.styles";

export const Title = ({ text }) => {
  return (
    <Container>
      <TitleText data-testid="title">{text}</TitleText>
    </Container>
  );
};
