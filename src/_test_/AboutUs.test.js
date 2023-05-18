import {screen, render} from '@testing-library/react';
import AboutUs from '../pages/AboutUs';

describe('<AboutUs />', () => {
    it('renders a AboutUs page', () => {
        render(<AboutUs />);
        const element = screen.getByText(/Borja/i)
        expect(element).toBeInTheDocument()
    })
})