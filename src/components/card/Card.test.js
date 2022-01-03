import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Card from "./Card";

test('to check if the Card component passes in props correctly', () => {
    render(<BrowserRouter><Card title="testing" /></BrowserRouter>);
    const cardTitle = screen.getByText(/testing/i);
    expect(cardTitle).toBeInTheDocument();
});
