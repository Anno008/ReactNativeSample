import AppNavigation from "AppNavigation";
import { shallow } from "enzyme";
import React from "react";

describe("AppNavigation tests", () => {
  it("should render", () => {
    const wrapper = shallow(<AppNavigation />);
    expect(wrapper).toMatchSnapshot();
  });
});
