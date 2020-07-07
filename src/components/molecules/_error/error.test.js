import React from 'react';
import { create } from "react-test-renderer";
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import * as Constants from "../../../constants";
import Error from './_error';

describe("Error component",() =>{
    test("Matches the snapshot",() => {
        const error = create(<Error />);
        expect(error.toJSON()).toMatchSnapshot();

    })
    test("Error element is rendered",() => {
        const { getByTestId, getByText } = render(<Error />);
        expect(getByTestId("error")).toBeInTheDocument();
        
    });
    test("is Link element present ",() => {   
        const { getByTestId, getByText } = render(<Error />);
        expect(getByText( Constants.BACK_TO_LOGIN_PAGE).closest('a')).toHaveAttribute('href', '/')
});
});