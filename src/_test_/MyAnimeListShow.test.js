import { screen, render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import MyAnimeListShow from '../pages/MyAnimeListShow';

describe('<MyAnimeListShow/>', () => {
  it('renders a MyAnimeListShow page', () => {
    const anime = [
      {
        id: 1,
        name: 'Anime Name',
        year: 2022,
        synopsis: 'Anime synopsis',
        run_time: '30 min',
        seasons: 1,
        episodes: 12,
        studio: 'Studio Name',
        genres: 'Action, Adventure',
      },
    ]
    render(
      <MemoryRouter>
        <MyAnimeListShow anime={anime} />
      </MemoryRouter>
    )

    const element = screen.getByText(/Anime Name/i)
    expect(element).toBeInTheDocument()
  })
})
