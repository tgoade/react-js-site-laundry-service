import { render, screen } from '@testing-library/react';    // To render our test in a virtual DOM
import HowItWorks from './HowItWorks';
import { BrowserRouter } from "react-router-dom";
import Step from './Step';

describe('Test suit for How It Works section', () => {
  test('to check if title is rendered', () => {
    render(<BrowserRouter><HowItWorks /></BrowserRouter>);
    const textElement = screen.getByText(/how we can help you/i);
    expect(textElement).toBeInTheDocument();
  });
  test('to check if label is rendered', () => {
    render(<BrowserRouter><HowItWorks /></BrowserRouter>);
    const labelElement = screen.getByText(/you schedule laundry pickup/i);
    expect(labelElement).toBeInTheDocument();
  });
  test('to check if the Step component passes in props properly', () => {
    render(<BrowserRouter><Step icon="fa-desktop"/></BrowserRouter>);
    const iconElement = screen.getByRole('img');
    expect(iconElement).toHaveClass('fa-desktop');
  });
});
