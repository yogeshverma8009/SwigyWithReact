import {render, screen} from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


//grouping testcases
//this is unit testing
describe("Contact Us Page Test Case", ()=>{
    test("Should load contact us component", () => {
        render(<Contact/>);
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    });
    
    test("Should load button inside Contact  component", () => {
        render(<Contact/>);
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    });
})





// test("Should load 2 input boxex inside Contact  component", () => {
//     render(<Contact/>);
// When ever there multiple item we use getAllByRole and when ever by specific item use getByRole
//     const inputBoxes = screen.getAllByRole("textbox");

//     console.log(inputBoxes);

//      expect(inputBoxes.length).not.toBe(3);
// });