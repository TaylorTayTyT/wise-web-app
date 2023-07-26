import WISEHeaderSearch from '../Components/Headers/WISEHeaderSearch';
import { render, screen } from "@testing-library/react";

describe(WISEHeaderSearch,()=>{
    const title = 'Test Title';
    const hasTextButton = true;
    const darkModeOn = true;
    const darkModeOff = false;
    const backgroundColor = "var(--maize-crayola)";
    const placeholder = "Placeholder";
    const selectTitle = "Test Select Title";

    it("checks if title exists",() => {
        render(<WISEHeaderSearch dark = {darkModeOn} hasTextButton = {hasTextButton} title = {title} textInTextField = {placeholder} selectTitle = {selectTitle} />);
        const textElement = screen.getByText(title);
        expect(textElement.textContent).toBe(title);
    });
    it("checks if Dark theme colors are displayed if dark",() => {
        render(<WISEHeaderSearch dark = {darkModeOn} hasTextButton = {hasTextButton} title = {title} textInTextField = {placeholder} selectTitle = {selectTitle}/>);
        const textElement = screen.getByText(title);
        expect(textElement).toHaveStyle(`background-color: var(--space-cadet)`);
    });
    it("checks if background colors is correct, if not dark theme",() => {
        render(<WISEHeaderSearch dark = {darkModeOff} hasTextButton = {hasTextButton} title = {title} textInTextField = {placeholder} selectTitle = {selectTitle}/>);
        const textElement = screen.getByText(title);
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveStyle(`background-color: ` + {backgroundColor});
    });
    it("check if text field renders",() => {
        render(<WISEHeaderSearch dark = {darkModeOff} hasTextButton = {hasTextButton} title = {title} textInTextField = {placeholder} selectTitle = {selectTitle}/>);
        const inputElement = screen.getByPlaceholderText(placeholder);
        expect(inputElement).toBeInTheDocument();
    });
    it("check if select renders",() => {
        render(<WISEHeaderSearch items = {[]} dark = {darkModeOff} hasTextButton = {hasTextButton} title = {title} textInTextField = {placeholder} selectTitle = {selectTitle}/>);
        const selectElement = screen.getByText(selectTitle);
        expect(selectElement).toBeInTheDocument();
    })
});