import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Services from "./Services";

describe('Test suite for Service elements', () => {
    test('to check if the page heading renders', () => {
        render(<BrowserRouter><Services /></BrowserRouter>);
        const headingElement = screen.getByRole('heading', {level:1});
        expect(headingElement).toHaveTextContent(/services/i);
    });
    test('to check if the ImageCopyPanel renders props properly for 1st panel', () => {
        render(<BrowserRouter><Services /></BrowserRouter>);
        const title1 = /wash and fold services/i;
        const imageElement1 = screen.getByAltText(title1);
        expect(imageElement1.src).toContain('wash-n-fold.jpg');
        const titleElement1 = screen.getByText(title1);
        expect(titleElement1).toBeTruthy();
    });
    test('to check if the ImageCopyPanel renders props properly for 2nd panel', () => {
        render(<BrowserRouter><Services /></BrowserRouter>);
        const title2 = /dry cleaning/i;
        const imageElement2 = screen.getByAltText(title2);
        expect(imageElement2.src).toContain('dry-cleaning.jpg');
        const titleElement1 = screen.getByText(title2);
        expect(titleElement1).toBeTruthy();
    });
    test('to check if the ImageCopyPanel renders props properly for 3rd panel', () => {
        render(<BrowserRouter><Services /></BrowserRouter>);
        const title3 = /commercial services/i;
        const imageElement3 = screen.getByAltText(title3);
        expect(imageElement3.src).toContain('commercial.jpg');
        const titleElement3 = screen.getByText(title3);
        expect(titleElement3).toBeTruthy();
    });
});