import { screen, render } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom"
import Login from "../components/Login"

describe("<Login />", () => {
  it("renders a Login page", () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    )
    const elements = screen.queryAllByText(/Login/i)
    expect(elements.length).toBeGreaterThan(0)
  })
})
