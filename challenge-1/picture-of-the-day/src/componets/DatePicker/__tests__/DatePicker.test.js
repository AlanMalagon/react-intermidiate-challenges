import React, { useState } from "react";
import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { DatePicker } from "../DatePicker";
import { getTodayDate } from "../../../utils/utils";

describe("DatePicker", () => {
  it("should render correctly", () => {
    render(<DatePicker />);
    const label = screen.getByText(/Select a date:/i);
    const input = screen.getByDisplayValue("");
    expect(label).toBeInTheDocument();
    expect(input).toBeInTheDocument();
    expect(input.getAttribute("name")).toBe("date");
    expect(input.getAttribute("type")).toBe("date");
  });

  const DatePickerTestComponent = () => {
    const [date, setDate] = useState(getTodayDate());
    const onChange = ({ target: { value } }) => {
      setDate(value);
    };
    return <DatePicker date={date} onChange={onChange} />;
  };

  it("should handleOnChange", () => {
    render(<DatePickerTestComponent />);
    const input = screen.getByDisplayValue(getTodayDate());
    fireEvent.change(input, { target: { value: "1999-12-12" } });
    expect(input.getAttribute("value")).toBe("1999-12-12");
  });
});
