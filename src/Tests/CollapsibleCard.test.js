import CollapsibleCard from '../Components/Cards/CollapsibleCard';
import CardContentFlat from '../Components/Cards/CardContentFlat';
import CardContentList from '../Components/Cards/CardContentList';
import { render, screen, act, fireEvent } from "@testing-library/react";

describe(CollapsibleCard,()=>{
    const header = "Test Header"
    const sections = [
        {id: 1, header: "Header1", text: "Text1"},
        {id: 2, header: "Header2", text: "Text2"},
        {id: 3, header: "Header3", text: "Text3"},
        {id: 4, header: "Header4", tags: ["tag1", "tag2", "taaaaaaaaaaaaaaaaaaag3"]}
    ]
    const flatContent = <CardContentFlat sections = {sections} />

    it("checks if header exists",() => {
        render(<CollapsibleCard header={header} content={flatContent} hasButton={true} />);
        const headerElement = screen.getByText(header);
        expect(headerElement).toBeInTheDocument();
    });
    it("check toggle",() => {
        render(<CollapsibleCard header={header} content={flatContent} hasButton={false} />);
        const button = screen.getByRole('button');
        act(() => fireEvent.click(button));
        const content = screen.getAllByText(/Header/);
        content.forEach((value, index, array) => {
            expect(value).toBeInTheDocument();
        })
    });
  
});