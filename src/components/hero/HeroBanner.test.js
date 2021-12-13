import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import HeroBanner from "./HeroBanner";

describe('Test suit for hero banner', () => {
    test('to check if button exists', () => {
        render(<BrowserRouter><HeroBanner /></BrowserRouter>)
        const ctaButton = screen.getByRole('button');
        expect(ctaButton).toHaveTextContent(/schedule laundry service/i);
        expect(ctaButton.classList.contains('btn--large')).toBe(true);
    });
});