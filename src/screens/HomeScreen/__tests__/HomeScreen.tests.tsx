import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import HomeScreen from "screens/HomeScreen";

describe("HomeScreen test", (): void => {
    it("Should match HomeScreen snapshot", (): void => {
        const wrapper: ShallowWrapper = shallow(<HomeScreen />);
        expect(wrapper).toMatchSnapshot();
    });
});
