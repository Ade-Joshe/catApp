import React from "react"
import { render } from '@testing-library/react-native';
import { PageTitle } from "../../src/components";
import { create } from "react-test-renderer";

it("renders correctly when children is passed", () => {
    const { getAllByText } = render(<PageTitle>Titles</PageTitle>);

    expect(getAllByText("Titles")).toBeTruthy();
});

it("snapshot testing for matching", () => {
    let component = create(<PageTitle />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});