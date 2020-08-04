import React from "react";
import { shallow ,mount} from 'enzyme';
import EditImageForm from "./_edit-image-form";
const name = "image1";
const nameError = "";
describe("EditImageForm component", () => {
  test("Matches the snapshot", () => {
    const editImageForm = shallow(
      <EditImageForm name={name} nameError={nameError} />
    );
    expect(editImageForm).toMatchSnapshot();
  });
 
  test("component is rendered", () => {
    const editImageForm = shallow(
      <EditImageForm name={name} nameError={nameError} />
    );
    expect(editImageForm.find("#editImageForm").exists()).toEqual(true);
  });

 
});
