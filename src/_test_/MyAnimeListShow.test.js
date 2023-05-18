import {screen, render} from '@testing-library/react';
import MyAnimeListShow from '../pages/MyAnimeListShow';

describe('<MyAnimeListShow/>', () => {
    it('renders a MyAnimeListShow   page', () => {
        render(<MyAnimeListShow />);
        const element = screen.getByText(/show/i)
        expect(element).toBeInTheDocument()
    })
})