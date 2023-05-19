import { screen, render } from "@testing-library/react";
import AnimeShow from "../pages/AnimeShow";
import { BrowserRouter } from "react-router-dom";
import mockAnime from "../mockAnime";

describe("<AnimeShow />", () => {
  it("renders an AnimeShow page", () => {
    render(
      <BrowserRouter>
        <AnimeShow anime={mockAnime} />
      </BrowserRouter>
    );
    const element = screen.getByText(/Anime not found/i);
    expect(element).toBeInTheDocument();
  });
});
