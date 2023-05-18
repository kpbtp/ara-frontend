import {screen, render} from '@testing-library/react';
import AnimeShow from '../pages/AnimeShow';

describe('<AnimeShow />', () => {
    it('renders a AnimeShow page', () => {
        render(<AnimeShow />);
        const element = screen.getByText(/show/i)
        expect(element).toBeInTheDocument()
    })
})