import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import HomeScreen from "screens/HomeScreen";

describe("HomeScreen test", () => {
  it("should render", () => {
    const wrapper: ShallowWrapper = shallow(<HomeScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
