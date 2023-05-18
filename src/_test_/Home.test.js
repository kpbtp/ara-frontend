import {screen, render} from '@testing-library/react';
import Home from '../pages/Home';

describe('<Home />', () => {
    it('renders a home page', () => {
        render(<Home />);
        const element = screen.getByText(/Welcome/i)
        expect(element).toBeInTheDocument()
    })
})

describe ('<Home/>', () => {
    it('renders without error', () => {
        render(<Home />)
    })

    it('renders carousel images', () => {
        render(<Home />);
        const carouselImages = screen.getAllByRole('img');
        expect(carouselImages).toHaveLength(3);
      })
})