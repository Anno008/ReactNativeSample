import AppNavigation from "navigation/AppNavigation";
import { shallow } from "enzyme";
import React from "react";

describe("AppNavigation tests", (): void => {
    it("Should match AppNavigation snapshot", (): void => {
        const wrapper = shallow(<AppNavigation />);
        expect(wrapper).toMatchSnapshot();
    });
});
