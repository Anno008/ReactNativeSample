import React from "react";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";
import { IIconProps } from "./IIconProps";

export const InfoIcon: React.SFC<IIconProps> = (props: IIconProps) => (
  <View>
    <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
      <Path fill="none" d="M0 0h24v24H0V0z" />
      <Path
        fill={props.tintColor}
        d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
      />
    </Svg>
  </View>
);
