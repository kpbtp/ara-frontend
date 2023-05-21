import {screen, render} from '@testing-library/react';
import Footer from '../components/Footer';

describe('<Footer />', () => {
    it('renders a Footer page', () => {
        render(
            <BrowserRouter>
                <Footer />
            </BrowserRouter>);
        const element = screen.getByText(/Jose/i)
        expect(element).toBeInTheDocument()
    })
})