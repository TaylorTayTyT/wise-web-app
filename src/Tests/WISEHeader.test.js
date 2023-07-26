import WISEHeader from '../Components/Headers/WISEHeader';
import { render, screen} from "@testing-library/react";

describe(WISEHeader,()=>{
    const title = 'title';
    const hasTextButton = true;
    const darkModeOn = true;
    const darkModeOff = false;
    const backgroundColor = "#F2C864";

    it("checks if title exists",() =>{
        render(<WISEHeader dark = {darkModeOn} hasTextButton = {hasTextButton} title = {title}/>);
        const textElement = screen.getByText(title);
        expect(textElement.textContent).toBe(title);
    });
    it("checks if Dark theme colors are displayed if dark",() =>{
        render(<WISEHeader dark = {darkModeOn} hasTextButton = {hasTextButton} title = {title}/>);
        const textElement = screen.getByText(title);
        
        // expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveStyle(`background-color: var(--space-cadet)`);
    });
    it("checks if background colors is correct, if not dark theme",() =>{
        render(<WISEHeader dark = {darkModeOff} hasTextButton = {hasTextButton} title = {title}/>);
        const textElement = screen.getByText(title);
        expect(textElement).toBeInTheDocument();
        expect(textElement).toHaveStyle(`background-color: ` + {backgroundColor});
    });
});

// position: sticky;
// position: -webkit-sticky;