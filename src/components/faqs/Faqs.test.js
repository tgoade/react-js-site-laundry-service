import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import userEvent from '@testing-library/user-event';
import Faqs from "./Faqs";

describe('Test suit for FAQs section', () => {
    test ('to check if H2 has rendered', () => {
        render(<BrowserRouter><Faqs /></BrowserRouter>);
        const heading = screen.getByText(/frequently asked questions/i);
        expect(heading).toBeInTheDocument();
    })
    test('to check the first slide has the active-slide class without the user clicking', async () => {
        render(<BrowserRouter><Faqs /></BrowserRouter>);
        const defaultSlide = await screen.findByLabelText(/slide0/i);
        expect(defaultSlide).toHaveClass('active-slide'); 
    });
    test('to check if answer appears when question0 is clicked and if the slide has the active-slide class', async () => {
        render(<BrowserRouter><Faqs /></BrowserRouter>);
        const question0 = screen.getByLabelText(/question0/i);
        userEvent.click(question0);
        const answer0 = screen.getByLabelText(/answer0/i);
        const slide0 = await screen.findByLabelText(/slide0/i);
        expect(answer0).toBeVisible();      
        expect(slide0).toHaveClass('active-slide'); 
    });
    test('to check if answer appears when question1 is clicked and if the slide has the active-slide class', async () => {
        render(<BrowserRouter><Faqs /></BrowserRouter>);
        const question1 = screen.getByLabelText(/question1/i);
        userEvent.click(question1);
        const answer1 = screen.getByLabelText(/answer1/i);
        const slide1 = await screen.findByLabelText(/slide1/i);
        expect(answer1).toBeVisible();      
        expect(slide1).toHaveClass('active-slide'); 
    });
    test('to check if answer appears when question2 is clicked and if the slide has the active-slide class', async () => {
        render(<BrowserRouter><Faqs /></BrowserRouter>);
        const question2 = screen.getByLabelText(/question2/i);
        userEvent.click(question2);
        const answer2 = screen.getByLabelText(/answer2/i);
        const slide2 = await screen.findByLabelText(/slide2/i);
        expect(answer2).toBeVisible();      
        expect(slide2).toHaveClass('active-slide'); 
    });
    test('to check if answer appears when question3 is clicked and if the slide has the active-slide class', async () => {
        render(<BrowserRouter><Faqs /></BrowserRouter>);
        const question3 = screen.getByLabelText(/question3/i);
        userEvent.click(question3);
        const answer3 = screen.getByLabelText(/answer3/i);
        const slide3 = await screen.findByLabelText(/slide3/i);
        expect(answer3).toBeVisible();      
        expect(slide3).toHaveClass('active-slide'); 
    });
    test('to check if answer appears when question4 is clicked and if the slide has the active-slide class', async () => {
        render(<BrowserRouter><Faqs /></BrowserRouter>);
        const question4 = screen.getByLabelText(/question4/i);
        userEvent.click(question4);
        const answer4 = screen.getByLabelText(/answer4/i);
        const slide4 = await screen.findByLabelText(/slide4/i);
        expect(answer4).toBeVisible();      
        expect(slide4).toHaveClass('active-slide'); 
    });
});