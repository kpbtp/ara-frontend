import { screen, render } from "@testing-library/react"
import AnimeIndex from "../pages/AnimeIndex"
import { BrowserRouter } from "react-router-dom"
import mockAnime from "../mockAnime"

describe("<AnimeIndex />", () => {
  it("renders a AnimeIndex page", () => {
    render(
      <BrowserRouter>
        <AnimeIndex anime={mockAnime} />
      </BrowserRouter>
    )
    const element = screen.getAllByText(/Read/i)
    expect(element.length).toBeGreaterThan(0)
  })
})
