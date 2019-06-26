import { shallow } from "enzyme";
import React from "react";
import { HomeIcon } from "../HomeIcon";
import { InfoIcon } from "../InfoIcon";

describe("Icon tests", (): void => {
    it("Should match HomeIcon snapshot", (): void => {
        const wrapper = shallow(<HomeIcon size={20} tintColor="blue" />);

        expect(wrapper).toMatchSnapshot();
    });

    it("Should match InfoIcon snapshot", (): void => {
        const wrapper = shallow(<InfoIcon size={20} tintColor="blue" />);

        expect(wrapper).toMatchSnapshot();
    });
});
