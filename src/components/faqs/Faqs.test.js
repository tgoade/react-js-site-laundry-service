import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import Faqs from "./Faqs";

describe('Test suit for FAQs section', () => {
    test('to check if answer appears when question is clicked', () => {
        render(<BrowserRouter><Faqs /></BrowserRouter>);
        const question1 = screen.getByLabelText(/question 1/i);
        userEvent.click(question1);
        const answer = screen.getByLabelText(/answer 1/i);
        expect(answer).toBeVisible();
    });
    test ('to check if H2 has rendered', () => {
        render(<BrowserRouter><Faqs /></BrowserRouter>);
        const heading = screen.getByText(/frequently asked questions/i);
        expect(heading).toBeInTheDocument();
    })
});