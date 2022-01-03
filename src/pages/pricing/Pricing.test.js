import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Pricing from "./Pricing";

describe('Test suite for Pricing elements', () => {
    test('to check if the page heading renders', () => {
        render(<BrowserRouter><Pricing /></BrowserRouter>);
        const headingElement = screen.getByRole('heading', {level: 1});
        expect(headingElement).toHaveTextContent(/pricing/i);
    });
    test('to check if the href on the three buttons renders the correct url', () => {
        render(<BrowserRouter><Pricing /></BrowserRouter>)
        const button1 = screen.getByLabelText(/button 1/i);
        const button2 = screen.getByLabelText(/button 2/i);
        const button3 = screen.getByLabelText(/button 3/i);
        expect(button1.closest('a')).toHaveAttribute('href', '/login');
        expect(button2.closest('a')).toHaveAttribute('href', '/login');
        expect(button3.closest('a')).toHaveAttribute('href', '/login');
    });
});