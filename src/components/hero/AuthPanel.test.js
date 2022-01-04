import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import AuthPanel from "./AuthPanel";

test('Check if', () => {
    render(<BrowserRouter><AuthPanel className="test"/></BrowserRouter>);
    const panelDiv = screen.getByRole('main');
    expect(panelDiv).toHaveClass('test');
})