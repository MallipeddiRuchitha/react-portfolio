import React from 'react';
import { create } from "react-test-renderer";
import { render ,fireEvent} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AboutCard from './_about-card';
 
const array=["Spring","React"]
describe("AboutCard component",() =>{
    test("Matches the snapshot",() => {
        const  aboutCard= create(<AboutCard heading="Technical Skills" array={array}/>);
        expect(aboutCard.toJSON()).toMatchSnapshot();

    })
    test("about card element is rendered",() => {
        const { getByTestId} = render(<AboutCard heading="Technical Skills" array={array}/>);
        expect(getByTestId("aboutCard")).toBeInTheDocument();
        
    });

  
});