import React from "react";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";

interface IProps {
  tintColor: string;
  focused: boolean;
}

// Duplicated, extract it or start using react-native-navigation
const getIconsSize = (focused: boolean) => {
  const result = focused ? 30 : 24;
  return { width: result, height: result };
};

export const HomeIcon = (props: IProps) => (
  <View>
    <Svg {...getIconsSize(props.focused)} viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0V0z" />
      <Path fill={props.tintColor} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
    </Svg>
  </View>
);
