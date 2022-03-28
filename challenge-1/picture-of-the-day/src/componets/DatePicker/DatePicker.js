import React from "react";
import { Container } from "./DatePicker.styles";

export const DatePicker = ({ date, onChange }) => {
  return (
    <Container>
      <label>Select a date:</label>
      <input type="date" name="date" value={date} onChange={onChange} />
    </Container>
  );
};
