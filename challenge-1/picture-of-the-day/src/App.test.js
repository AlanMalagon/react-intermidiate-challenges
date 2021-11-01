import { render, screen } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
import { getTodayDate } from "./utils/utils";
import App from "./App";

it("should render correctly withouth fetch", () => {
  render(<App />);
  const appTitle = screen.getByText(/NASA: Picture of the day/i);
  const label = screen.getByText(/Select a date:/i);
  const dateInput = screen.getByDisplayValue(getTodayDate());
  const spinner = screen.getByTestId("spinner");
  expect(appTitle).toBeInTheDocument();
  expect(label).toBeInTheDocument();
  expect(dateInput).toBeInTheDocument();
  expect(spinner).toBeInTheDocument();
});

it("updates DatePicker component", () => {
  render(<App />);
  const currentDate = getTodayDate();
  const dateInput = screen.getByDisplayValue(currentDate);
  expect(dateInput.getAttribute("value")).toBe(currentDate);
  fireEvent.change(dateInput, { target: { value: "1999-12-12" } });
  expect(dateInput.getAttribute("value")).toBe("1999-12-12");
});
