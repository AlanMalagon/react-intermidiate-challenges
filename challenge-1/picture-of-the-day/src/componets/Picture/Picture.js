import React from "react";
import { Container, Image } from "./Picture.styles";

export const Picture = ({ src }) => {
  return (
    <Container>
      <Image src={src} />
    </Container>
  );
};
