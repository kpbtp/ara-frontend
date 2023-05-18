import {screen, render} from '@testing-library/react';
import AnimeIndex from '../pages/AnimeIndex';

describe('<AnimeIndex />', () => {
    it('renders a AnimeIndex page', () => {
        render(<AnimeIndex />);
        const element = screen.getByText(/bunch/i)
        expect(element).toBeInTheDocument()
    })
})