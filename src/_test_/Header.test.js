import { screen, render } from '@testing-library/react';
import Header from '../components/Header';
import { BrowserRouter } from 'react-router-dom';

describe('<Header />', () => {
    it('renders a Header page', () => {
        render(
        <BrowserRouter>
            <Header currentUser={null} logout={() => {}} />
        </BrowserRouter>)
        const element = screen.getByAltText('logo')
        expect(element).toBeInTheDocument()
    })
})