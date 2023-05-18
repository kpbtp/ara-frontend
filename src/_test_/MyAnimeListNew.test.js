import {screen, render} from '@testing-library/react';
import MyAnimeListNew from '../pages/MyAnimeListNew';

describe('<MyAnimeListNew />', () => {
    it('renders a MyAnimeListNew page', () => {
        render(<MyAnimeListNew />);
        const element = screen.getByText(/add/i)
        expect(element).toBeInTheDocument()
    })
})