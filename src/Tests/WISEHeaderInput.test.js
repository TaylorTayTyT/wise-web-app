import WISEHeaderInput from '../Components/Headers/WISEHeaderInput';
import { render, screen } from "@testing-library/react";

describe(WISEHeaderInput,()=>{
    const title = 'Test Title';
    const hasTextButton = true;
    const darkModeOn = true;
    const darkModeOff = false;
    const backgroundColor = "#F2C864";
    const placeholder = "Placeholder";

    it("checks if title exists",() => {
        render(<WISEHeaderInput dark = {darkModeOn} hasTextButton = {hasTextButton} title = {title} textInTextField = {placeholder} />);
        const textElement = screen.getByText(title);
        expect(textElement.textContent).toBe(title);
    });
    it("checks if Dark theme colors are displayed if dark",() => {
        render(<WISEHeaderInput dark = {darkModeOn} hasTextButton = {hasTextButton} title = {title} textInTextField = {placeholder}/>);
        const textElement = screen.getByText(title);
        expect(textElement).toHaveStyle(`background-color: var(--space-cadet)`);
    });
    it("checks if background colors is correct, if not dark theme",() => {
        render(<WISEHeaderInput dark = {darkModeOff} hasTextButton = {hasTextButton} title = {title} textInTextField = {placeholder}/>);
        const textElement = screen.getByText(title);
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveStyle(`background-color: ` + {backgroundColor});
    });
    it("check if text field renders",() => {
        render(<WISEHeaderInput dark = {darkModeOff} hasTextButton = {hasTextButton} title = {title} textInTextField = {placeholder}/>);
        const inputElement = screen.getByPlaceholderText(placeholder);
        expect(inputElement).toBeInTheDocument();
    })
});