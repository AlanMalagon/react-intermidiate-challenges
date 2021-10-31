import React from "react";
import { Container, SubtitleText, TitleText } from "./Title.styles";

export const Title = ({ text }) => {
  return (
    <Container>
      <SubtitleText>NASA: Picture of the day</SubtitleText>
      <TitleText>{text}</TitleText>
    </Container>
  );
};
