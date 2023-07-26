import WISEHeaderProfile from '../Components/Headers/WISEHeaderProfile';
import { render, screen } from "@testing-library/react";

describe(WISEHeaderProfile,()=>{
    const title = 'Test Title';
    const text = "Test Text";
    const hasTextButton = true;
    const darkModeOn = true;
    const darkModeOff = false;
    const backgroundColor = "var(--maize-crayola)";
    const placeholder = "Placeholder";
    const selectTitle = "Test Select Title";
    const buttons = [
        {id: "1", children: "button1"},
        {id: "2", children: "button2"},
        {id: "3", children: "button3"},
        {id: "4", children: "button4"}
    ]

    it("checks if title and subtitle exist",() => {
        render(<WISEHeaderProfile dark = {darkModeOn} hasTextButton = {hasTextButton} titleText = {title} text = {text} buttonData = {buttons} />);
        const titleElement = screen.getByText(title);
        const textElement = screen.getByText(text);
        expect(titleElement).toBeInTheDocument();
        expect(textElement).toBeInTheDocument();
    });
    it("checks if Dark theme colors are displayed if dark",() => {
        render(<WISEHeaderProfile dark = {darkModeOn} hasTextButton = {hasTextButton} titleText = {title} text = {text} buttonData = {buttons} />);
        const textElement = screen.getByText(title);
        expect(textElement).toHaveStyle(`background-color: var(--space-cadet)`);
    });
    it("checks if background colors is correct, if not dark theme",() => {
        render(<WISEHeaderProfile dark = {darkModeOff} hasTextButton = {hasTextButton} titleText = {title} text = {text} buttonData = {buttons} />);
        const textElement = screen.getByText(title);
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveStyle(`background-color: ` + {backgroundColor});
    });
    it("check if buttons render",() => {
        render(<WISEHeaderProfile dark = {darkModeOff} hasTextButton = {hasTextButton} titleText = {title} text = {text} buttonData = {buttons} />);
        const buttonElements = screen.getAllByText(/button/);
        buttonElements.forEach((value, index, array) => {
            expect(value).toBeInTheDocument();
        })
        
    });
  
});