import { shallow, ShallowWrapper } from "enzyme";
import React from "react";
import AboutScreen from "screens/AboutScreen";

describe("AboutScreen test", () => {
  it("should render", () => {
    const wrapper: ShallowWrapper = shallow(<AboutScreen />);
    expect(wrapper).toMatchSnapshot();
  });
});
