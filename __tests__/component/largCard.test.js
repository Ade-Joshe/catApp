import React, { useContext } from "react"
import { render, fireEvent } from '@testing-library/react-native';
import { LargeCard } from "../../src/components";
import { create } from "react-test-renderer";
import { AppContext } from "../../src/util";

const mockData = {
    name: "Bengal",
    id: "dfsd",
    image: { url: "https://cdn2.thecatapi.com/images/mj.jpg" }
};

// renders
it("renders correctly", () => {

    const { getAllByText } = render(
        <AppContext.Provider value={{ faveCats: [], setFaveCats: () => { } }}>
            <LargeCard data={mockData} />
        </AppContext.Provider>
    );

    expect(getAllByText("Bengal")).toBeTruthy();
});

// toggleFavourite
it("renders correctly", async () => {

    let mock = [mockData];

    const { getByTestId, toJSON } = render(
        <AppContext.Provider value={{ faveCats: mock, setFaveCats: () => { } }}>
            <LargeCard data={mockData} />
        </AppContext.Provider>
    );

    await fireEvent.press(getByTestId("favourite-btn"));
    await expect(toJSON()).toMatchSnapshot();
});

it("snapshot testing for default loading", () => {
    let component = create(
        <AppContext.Provider value={{ faveCats: [], setFaveCats: () => { } }}>
            <LargeCard data={mockData} />
        </AppContext.Provider>);

    let tree = component.toJSON();

    expect(tree).toMatchSnapshot();
});

