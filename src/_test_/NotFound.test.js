import {screen, render} from '@testing-library/react';
import NotFound from '../pages/NotFound';

describe('<NotFound />', () => {
    it('renders a NotFound page', () => {
        render(<NotFound />);
        const element = screen.getByText(/Found/i)
        expect(element).toBeInTheDocument()
    })
})