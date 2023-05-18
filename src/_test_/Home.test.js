import {screen, render} from '@testing-library/react';
import Home from '../pages/Home';

describe('<Home />', () => {
    it('renders a home page', () => {
        render(<Home />);
        const element = screen.getByText(/Welcome/i)
        expect(element).toBeInTheDocument()
    })
})