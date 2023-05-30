import { screen, render } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import Signup from "../components/Signup";

describe("<Signup />", () => {
  it("renders a Signup page", () => {
    render(
      <Router>
        <Signup />
      </Router>
    )
    const element = screen.getByPlaceholderText(/Email/i)
    expect(element).toBeInTheDocument()
  })
})