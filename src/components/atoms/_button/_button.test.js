import React from 'react';
import { shallow ,mount} from 'enzyme';
import Button from './_button';
import '../../../setupTests'
describe("Button component",() =>{
    test("Matches the snapshot",() => {
        const button = shallow(<Button />);
        expect(button).toMatchSnapshot();

    })
    test("button element is rendered",() => {
        const wrapper = shallow(<Button />);
        expect(wrapper.find('#button').exists()).toEqual(true);
        
    });
    test("button element is enabled",() => {
        const wrapper =shallow(<Button value="save" disabled={false}/>);
        expect(wrapper.find("#button").props()['disabled']).toBe(false)
        
    });
    test("button element is disabled",() => {
        const wrapper =shallow(<Button value="save" disabled={true}/>);
        expect(wrapper.find("#button").props()['disabled']).toBe(true)
        
    });
   
    test("on click of button",() => {
        const mockOnClick = jest.fn();
        const wrapper =mount(<Button value="save" disabled={false} onClick={mockOnClick} />);
        //console.log(wrapper.debug());
        const button=wrapper.find("#button").last();
        button.simulate('click');
        wrapper.unmount();
        //fireEvent.click(getByRole("button"));
        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});