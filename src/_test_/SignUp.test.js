import {screen, render} from '@testing-library/react';
import Signup from '../components/Signup';

describe('<Signup />', () => {
    it('renders a Signup page', () => {
        render(<Signup />);
        const element = screen.getByText(/Email/i)
        expect(element).toBeInTheDocument()
    })
})