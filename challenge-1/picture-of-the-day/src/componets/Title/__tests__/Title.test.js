import { render, screen } from "@testing-library/react";
import { Title } from "../Title";

describe("Title", () => {
  it("should render correctly", () => {
    const text = "Mock text title";
    render(<Title text={text} />);
    const title = screen.getByText(text);
    expect(title).toBeInTheDocument();
  });

  it("should render correctly without text prop", () => {
    render(<Title />);
    const title = screen.getByTestId("title");
    expect(title).toBeInTheDocument();
  });
});
