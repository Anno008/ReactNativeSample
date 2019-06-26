import { IIconProps } from "components/icons/IIconProps";
import React from "react";
import { TabScene } from "react-navigation";

export const getMainNavigationIcon = (
    WrappedComponent: React.SFC<IIconProps>,
    tabIconInfo: TabScene
): JSX.Element => (
    <WrappedComponent
        size={tabIconInfo.focused ? 30 : 24}
        tintColor={tabIconInfo.tintColor || "gray"}
    />
);
