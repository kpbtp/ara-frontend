import { screen, render } from '@testing-library/react';
import MyAnimeList from '../pages/MyAnimeList'

describe('<MyAnimeList />', () => {
  it('renders a MyAnimeList page', () => {
    render(<MyAnimeList />)
    const element = screen.getByText(/Filter by genre/i)
    expect(element).toBeInTheDocument()
  })
})