import React from "react";
import { Container, Dot, Spinner } from "./Loading.styles";

export const Loading = () => {
  return (
    <Container>
      <Spinner>
        <Dot id="dot1" />
        <Dot id="dot2" />
      </Spinner>
    </Container>
  );
};
