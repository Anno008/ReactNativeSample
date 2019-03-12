import { shallow } from "enzyme";
import React from "react";
import { HomeIcon } from "../HomeIcon";
import { InfoIcon } from "../InfoIcon";

describe("Icon tests", () => {
  it("Should render HomeIcon", () => {
    const wrapper = shallow(<HomeIcon size={20} tintColor="blue" />);

    expect(wrapper).toMatchSnapshot();
  });

  it("Should render InfoIcon", () => {
    const wrapper = shallow(<InfoIcon size={20} tintColor="blue" />);

    expect(wrapper).toMatchSnapshot();
  });
});
