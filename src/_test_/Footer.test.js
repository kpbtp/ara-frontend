import {screen, render} from '@testing-library/react';
import Footer from '../components/Footer';

describe('<Footer />', () => {
    it('renders a Footer page', () => {
        render(<Footer />);
        const element = screen.getByText(/Footer/i)
        expect(element).toBeInTheDocument()
    })
})