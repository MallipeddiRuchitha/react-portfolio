import React from 'react';
import { shallow, mount ,cleanup} from 'enzyme';
import ContactMainContent from './_contact-main-content';
import * as Constants from "../../../constants";

describe("ContactMainContent component",() =>{
  
  
    test("Matches the snapshot",() => {
        const contact= shallow(<ContactMainContent/>);
        expect(contact).toMatchSnapshot();

    })
    test("ContactMainContent is rendered",() => {

        const contact = shallow(<ContactMainContent/>);
        expect(contact.find("#contact").exists()).toEqual(true);
        
    });

    test("initially no error messages", () => {
        const contact = mount(<ContactMainContent />);
       
        // expect(() => screen.getByText(Constants.INVALID_NAME)).toThrow('Unable to find an element');
        // expect(() => screen.getByText(Constants.INVALID_EMAIL)).toThrow('Unable to find an element');
        // expect(() => screen.getByText(Constants.INVALID_MESSAGE)).toThrow('Unable to find an element');
        expect(contact.find(Constants.INVALID_NAME).last().exists()).toEqual(false);
        expect(contact.find(Constants.INVALID_EMAIL).last().exists()).toEqual(false);
        expect(contact.find(Constants.INVALID_MESSAGE).last().exists()).toEqual(false);
       contact.unmount();
        
      });
    
      test("error msgs for inavlid inputs", () => {
        const contact = mount(<ContactMainContent />);
       
          contact.find('#Name').last().simulate('change',{ target: { value: 'ram' }});
          contact.find('#Name').last().simulate('change',{ target: { value: '' }});
          contact.find('#Email').last().simulate('change',{ target: { value: 'ram@' }});        
          contact.find('#Message').last().simulate('change',{ target: { value: '' }});  
          console.log("11111111",contact.find('#invalidEmail').debug());
          expect(contact.find('#emailError').last().text()).toEqual("invalid email")
          expect(contact.text().includes(Constants.INVALID_EMAIL)).toBe(true);
          expect(contact.text().includes(Constants.INVALID_NAME)).toBe(true);
          expect(contact.text().includes(Constants.INVALID_MESSAGE)).toBe(true);
          
        
        contact.unmount();
     });
    
     test("valid inputs", () => {
      const contact = mount(<ContactMainContent />);
       
      contact.find('#Name').last().simulate('change',{ target: { value: 'ram' }});
     
      contact.find('#Email').last().simulate('change',{ target: { value: 'ram@gmail.com' }});        
      contact.find('#Message').last().simulate('change',{ target: { value: 'hii' }});  
      expect(contact.find(Constants.INVALID_NAME).last().exists()).toEqual(false);
      expect(contact.find(Constants.INVALID_EMAIL).last().exists()).toEqual(false);
      expect(contact.find(Constants.INVALID_MESSAGE).last().exists()).toEqual(false);
      expect(contact.text().includes(Constants.INVALID_EMAIL)).toBe(false);
      expect(contact.text().includes(Constants.INVALID_NAME)).toBe(false);
      expect(contact.text().includes(Constants.INVALID_MESSAGE)).toBe(false);
    contact.unmount();
     });

});