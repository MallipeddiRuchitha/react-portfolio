import React from 'react';
import { shallow ,mount} from 'enzyme';
import AboutCard from './_about-card';
 
const array=["Spring","React"]
describe("AboutCard component",() =>{
    test("Matches the snapshot",() => {
        const  aboutCard= shallow(<AboutCard heading="Technical Skills" array={array}/>);
        expect(aboutCard).toMatchSnapshot();

    })
    test("about card element is rendered",() => {
        const aboutCard = shallow(<AboutCard heading="Technical Skills" array={array}/>);
        expect(aboutCard.find("#aboutCard").exists()).toEqual(true);
        
    });

  
});