import React from "react";
import { Container, Dot, Spinner } from "./Loading.styles";

export const Loading = () => {
  return (
    <Container data-testid="spinner">
      <Spinner>
        <Dot id="dot1" />
        <Dot id="dot2" />
      </Spinner>
    </Container>
  );
};
