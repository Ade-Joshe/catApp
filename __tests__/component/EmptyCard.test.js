import React from "react"
import { render } from '@testing-library/react-native';
import { EmptyCard } from "../../src/components";
import { create } from "react-test-renderer";

// // renders loading
it("renders correctly when loading is passed", () => {
    const { getAllByText } = render(<EmptyCard status={"loading"} />);

    expect(getAllByText("Loading...")).toBeTruthy();
});

// // renders error
it("renders correctly when error is passed", () => {
    const { getAllByText } = render(<EmptyCard status={"error"} />);

    expect(getAllByText("No data found!")).toBeTruthy();
});

// // renders  v
it("renders correctly when error is passed", () => {
    const { getAllByText } = render(<EmptyCard status={"emptyFav"} />);

    expect(getAllByText("We keep your favouites here")).toBeTruthy();
});

it("snapshot testing for matching loading", () => {
    let component = create(<EmptyCard status={"loading"} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

it("snapshot testing for matching error", () => {
    let component = create(<EmptyCard status={"error"} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

it("snapshot testing for matching emptyFav", () => {
    let component = create(<EmptyCard status={"emptyFav"} />);
    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});