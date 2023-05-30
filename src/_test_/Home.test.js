import { screen, render } from '@testing-library/react';
import Home from '../pages/Home';

describe('<Home />', () => {
  it('renders a home page', () => {
    render(<Home />)
    const element = screen.getByText(/Ara is the Best/i)
    expect(element).toBeInTheDocument()
  });

  it('renders carousel images', async () => {
    render(<Home />)
    const carouselImages = await screen.findAllByRole('img')
    expect(carouselImages).toHaveLength(3)
  })
})