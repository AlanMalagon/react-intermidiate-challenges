import { render, screen } from "@testing-library/react";
import { Content } from "../Content";
import { mockData } from "../../../mockData";
import { act } from "react-dom/test-utils";

describe("Content", () => {
  it("should render correctly without API call", () => {
    const date = "2021-10-31";
    render(<Content date={date} />);
    const spinner = screen.getByTestId("spinner");
    expect(spinner).toBeInTheDocument();
  });

  it("should render correctly with API call", (done) => {
    const date = "2021-10-31";
    global.fetch = jest
      .fn()
      .mockReturnValue(Promise.resolve({ json: () => Promise.resolve(mockData) }));
    act(async () => {
      render(<Content date={date} />);
    }).then(() => {
      const title = screen.getByText(mockData.title);
      const img = screen.getByRole("img");
      expect(title).toBeInTheDocument();
      expect(img.getAttribute("src")).toBe(mockData.url);
      done();
    });
  });

  it("should render correctly with API call error", (done) => {
    const date = "2021-10-31";
    global.fetch = jest.fn().mockReturnValue(Promise.reject(new Error("Error mock message")));
    act(async () => {
      render(<Content date={date} />);
    }).then(() => {
      const title = screen.getByTestId("title");
      const img = screen.getByRole("img");
      expect(title).toBeInTheDocument();
      expect(img.getAttribute("src")).toBe("");
      done();
    });
  });
});
