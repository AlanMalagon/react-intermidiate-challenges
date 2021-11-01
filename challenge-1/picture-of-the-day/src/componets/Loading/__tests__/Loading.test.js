import { render, screen } from "@testing-library/react";
import { Loading } from "../Loading";

describe("Loading", () => {
  it("should render correctly", () => {
    render(<Loading />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });
});
