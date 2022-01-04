import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Button from "./Button";

test('Check if the Button component passes in props correctly', () => {
    render(<BrowserRouter><Button path="/login" /></BrowserRouter>);
    const btnElement = screen.getByRole('button');
    expect(btnElement.closest('a')).toHaveAttribute('href', '/login');
});