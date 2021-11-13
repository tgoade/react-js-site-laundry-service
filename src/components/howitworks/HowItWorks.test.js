import { render, screen } from '@testing-library/react';    // To render our test in a virtual DOM
import HowItWorks from './HowItWorks';
import { BrowserRouter } from "react-router-dom";

describe('Test suit for How It Works section', () => {
  test('to check if title is rendered', () => {
    render(<BrowserRouter><HowItWorks /></BrowserRouter>);
    const textElement = screen.getByText(/how it works/i);
    expect(textElement).toBeInTheDocument();
  });
  test('to check if icons is rendered', () => {
    render(<BrowserRouter><HowItWorks /></BrowserRouter>);
    const iconElement = screen.getAllByTestId('icon');
    expect(iconElement).not.toBeNull();
  });
  test('to check if label is rendered', () => {
    render(<BrowserRouter><HowItWorks /></BrowserRouter>);
    const labelElement = screen.getByText(/schedule your pickup/i);
    expect(labelElement).toBeInTheDocument();
  });
});
