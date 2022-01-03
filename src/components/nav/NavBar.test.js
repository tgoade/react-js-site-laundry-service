import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe('Test suit for navigation elements', () => {
    test('to check if "Home" renders on the screen and if the href is correct', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const navHomeElement = screen.getByRole('link', {name: /home/i});
        expect(navHomeElement).toBeInTheDocument();
        expect(navHomeElement).toHaveAttribute('href', '/');
    });
    test('to check if "Services" renders on the screen and if the href is correct', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const navServicesElement = screen.getByRole('link', {name: /services/i});
        expect(navServicesElement).toBeInTheDocument();
        expect(navServicesElement).toHaveAttribute('href', '/services');
    });
    test('to check if "Pricing" renders on the screen and if the href is correct', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const navPricingElement = screen.getByRole('link', {name: /pricing/i});
        expect(navPricingElement).toBeInTheDocument();
        expect(navPricingElement).toHaveAttribute('href', '/pricing');
    });
    test('to check if "Login" renders on the screen and if the href is correct', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const navLoginElement = screen.getByRole('link', {name: /login/i});
        expect(navLoginElement).toBeInTheDocument();
        expect(navLoginElement).toHaveAttribute('href', '/login');
    });
    test('to check if logo href is correct', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const logoLink = screen.getByLabelText(/logo link/i);
        expect(logoLink).toHaveAttribute('href', '/');
    });
});