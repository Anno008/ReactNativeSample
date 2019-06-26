import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import AboutScreen from "screens/AboutScreen";

describe("AboutScreen test", (): void => {
    it("Should match AboutScreen Snapshot", (): void => {
        const wrapper: ShallowWrapper = shallow(<AboutScreen />);
        expect(wrapper).toMatchSnapshot();
    });
});
