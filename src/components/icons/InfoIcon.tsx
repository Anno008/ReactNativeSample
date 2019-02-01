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

export const InfoIcon = (props: IProps) => (
  <View>
    <Svg {...getIconsSize(props.focused)} viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0V0z" />
      <Path
        fill={props.tintColor}
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      />
    </Svg>
  </View>
);
