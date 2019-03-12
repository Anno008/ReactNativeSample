import { HomeIcon } from "components/icons/HomeIcon";
import { getMainNavigationIcon } from "decorators/GetMainNavigationIcon";
import { shallow } from "enzyme";
import { View } from "react-native";
import { Path } from "react-native-svg";
import { NavigationRoute, TabScene } from "react-navigation";

describe("GetMainNavigationIcon tests", () => {
  it("Should render the provided icon", () => {
    const mockProps: TabScene = {
      focused: false,
      index: 1,
      route: {} as NavigationRoute,
      tintColor: "blue"
    };
    const wrapper = shallow(getMainNavigationIcon(HomeIcon, mockProps));

    expect(wrapper).toMatchSnapshot();
  });

  it("Should render icon with width and height set to 30 if focused", () => {
    const mockProps: TabScene = {
      focused: true,
      index: 1,
      route: {} as NavigationRoute,
      tintColor: "blue"
    };

    const wrappedIcon = getMainNavigationIcon(HomeIcon, mockProps);
    const wrapper = shallow(wrappedIcon);

    const { height, width } = wrapper
      .find(View)
      .first()
      .getElement().props.children.props;

    expect(height).toEqual(30);
    expect(width).toEqual(30);
  });

  it("Should render icon with width and height set to 24 if not focused", () => {
    const mockProps: TabScene = {
      focused: false,
      index: 1,
      route: {} as NavigationRoute,
      tintColor: "blue"
    };

    const wrappedIcon = getMainNavigationIcon(HomeIcon, mockProps);
    const wrapper = shallow(wrappedIcon);

    const { height, width } = wrapper
      .find(View)
      .first()
      .getElement().props.children.props;

    expect(height).toEqual(24);
    expect(width).toEqual(24);
  });

  it("Should render icon with provided tint color if it exists in props", () => {
    const mockProps: TabScene = {
      focused: false,
      index: 1,
      route: {} as NavigationRoute,
      tintColor: "blue"
    };

    const wrappedIcon = getMainNavigationIcon(HomeIcon, mockProps);
    const wrapper = shallow(wrappedIcon);

    const { fill } = wrapper
      .find(Path)
      .get(1)
      .props;

    expect(fill).toEqual(mockProps.tintColor);
  });

  it("Should render icon with fallback tint color if it does not exists in props", () => {
    const mockProps: TabScene = {
      focused: false,
      index: 1,
      route: {} as NavigationRoute,
    };

    const wrappedIcon = getMainNavigationIcon(HomeIcon, mockProps);
    const wrapper = shallow(wrappedIcon);

    const { fill } = wrapper
      .find(Path)
      .get(1)
      .props;

    expect(fill).toEqual("gray");
  });
});
