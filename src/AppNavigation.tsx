import React from "react";
// Eventually try out react-native-navigation, better performance and richer configuration
// requires setup
import {
  createAppContainer,
  createBottomTabNavigator,
  NavigationContainer,
  TabScene,
} from "react-navigation";

import { HomeIcon } from "components/icons/HomeIcon";
import { InfoIcon } from "components/icons/InfoIcon";
import { getMainNavigationIcon } from "decorators/GetMainNavigationIcon";
import AboutScreen from "screens/AboutScreen";
import HomeScreen from "screens/HomeScreen";

const AppNavigation: NavigationContainer = createBottomTabNavigator(
  {
    About: {
      navigationOptions: {
        tabBarIcon: (props: TabScene) => getMainNavigationIcon(InfoIcon, props),
        tabBarLabel: "About"
      },
      screen: AboutScreen
    },
    Home: {
      navigationOptions: {
        tabBarIcon: (props: TabScene) => getMainNavigationIcon(HomeIcon, props),
        tabBarLabel: "Home"
      },
      screen: HomeScreen
    }
  },
  // Router config
  {
    initialRouteName: "Home",
    order: ["Home", "About"],
    tabBarOptions: {
      // activeBackgroundColor: "rgba(107, 185, 240, 0.6)",
      activeTintColor: "navy",
      inactiveTintColor: "gray",
      labelStyle: {
        fontSize: 14
      },
      style: {
        backgroundColor: "rgba(107, 185, 240, 0.5)",
        height: 50
      }
    }
  }
);

export default createAppContainer(AppNavigation);
