import { createBottomTabNavigator, createNavigationContainer, NavigationContainer } from "react-navigation";
import { AboutScreen } from "./screens/AboutScreen/AboutScreen";
import { HomeScreen } from "./screens/HomeScreen/HomeScreen";

const TabNavigator: NavigationContainer = createBottomTabNavigator({
  Home: HomeScreen,
  // tslint:disable-next-line:object-literal-sort-keys
  About: AboutScreen,
});

export default createNavigationContainer(TabNavigator);
