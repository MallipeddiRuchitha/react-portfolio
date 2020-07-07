import React from "react";
import { create } from "react-test-renderer";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import EditImageForm from "./_edit-image-form";
const name = "image1";
const nameError = "";
describe("EditImageForm component", () => {
  test("Matches the snapshot", () => {
    const editImageForm = create(
      <EditImageForm name={name} nameError={nameError} />
    );
    expect(editImageForm.toJSON()).toMatchSnapshot();
  });
  test("Matches the snapshot for name Error", () => {
    const editImageForm = create(
      <EditImageForm name={name} nameError="invalid name" />
    );
    expect(editImageForm.toJSON()).toMatchSnapshot();
  });
  test("component is rendered", () => {
    const { getByTestId, getByText } = render(
      <EditImageForm name={name} nameError={nameError} />
    );
    expect(getByTestId("editImageForm")).toBeInTheDocument();
  });

 
});
