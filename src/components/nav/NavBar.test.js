import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import NavBar from "./NavBar";

describe('Test suit for navigation elements', () => {
    test('to check if "Home" renders on the screen', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const navHomeElement = screen.getByText(/home/i);
        expect(navHomeElement).toBeInTheDocument();
    });
    test('if the Home href is correct', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const homeLink = screen.getByLabelText(/home link/i);
        expect(homeLink).toHaveAttribute('href', '/');
    });
    test('to check if "Services" renders on the screen', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const navServicesElement = screen.getByText(/services/i);
        expect(navServicesElement).toBeInTheDocument();
    });
    test('to check if "Schedule" renders on the screen', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const navScheduleElement = screen.getByText(/schedule/i);
        expect(navScheduleElement).toBeInTheDocument();
    });
    test('if the Schedule href is correct', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const scheduleLink = screen.getByLabelText(/schedule link/i);
        expect(scheduleLink).toHaveAttribute('href', '/login');
    });
    test('to check if "Contact Us" renders on the screen', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const navContactElement = screen.getByText(/contact us/i);
        expect(navContactElement).toBeInTheDocument();
    });
    test('to check if logo href is correct', () => {
        render(<BrowserRouter><NavBar /></BrowserRouter>);
        const logoLink = screen.getByLabelText(/logo link/i);
        expect(logoLink).toHaveAttribute('href', '/');
    });
});