import {screen, render} from '@testing-library/react';
import Login from '../components/Login';

describe('<Login />', () => {
    it('renders a Login page', () => {
        render(<Login />);
        const element = screen.getByText(/Login/i)
        expect(element).toBeInTheDocument()
    })
})