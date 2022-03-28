import { render, screen } from "@testing-library/react";
import { Picture } from "../Picture";

describe("Picture", () => {
  it("should render correctly", () => {
    const src = "Mock src value";
    render(<Picture src={src} />);
    const picture = screen.getByRole("img");
    expect(picture).toBeInTheDocument();
    expect(picture.getAttribute("src")).toBe(src);
  });

  it("should render without src value", () => {
    render(<Picture />);
    const picture = screen.getByAltText("picture-of-the-day");
    expect(picture).toBeInTheDocument();
    expect(picture.getAttribute("src")).toBe(null);
  });
});
