import React from "react";
// Eventually try out react-native-navigation, better performance and richer configuration
// requires setup
import {
  createAppContainer,
  createBottomTabNavigator,
  NavigationContainer
} from "react-navigation";
import { HomeIcon } from "./components/icons/HomeIcon";
import { InfoIcon } from "./components/icons/InfoIcon";
import AboutScreen from "./screens/AboutScreen";
import HomeScreen from "./screens/HomeScreen";

const AppNavigation: NavigationContainer = createBottomTabNavigator(
  {
    About: {
      navigationOptions: {
        // props is of type TabScene from react-navigation
        // didn't specify it to avoid crazy ternaries
        tabBarIcon: (props: any) => <InfoIcon {...props} />,
        tabBarLabel: "About"
      },
      screen: AboutScreen
    },
    Home: {
      navigationOptions: {
        tabBarIcon: (props: any) => <HomeIcon {...props} />,
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
