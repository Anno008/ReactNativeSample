import React from "react";
import { View } from "react-native";
import { Path, Svg } from "react-native-svg";
import { IIconProps } from "./IIconProps";

export const HomeIcon: React.SFC<IIconProps> = (props: IIconProps): JSX.Element => (
    <View>
        <Svg width={props.size} height={props.size} viewBox="0 0 24 24">
            <Path fill="none" d="M0 0h24v24H0V0z" />
            <Path fill={props.tintColor} d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8h5z" />
        </Svg>
    </View>
);
