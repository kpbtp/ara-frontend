import { screen, render } from "@testing-library/react";
import Footer from "../components/Footer";
import { BrowserRouter } from "react-router-dom";

describe("<Footer />", () => {
  it("renders a Footer page", () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    )
    const element = screen.getByText(/ご主人様たち/i)
    expect(element).toBeInTheDocument()
  })
})