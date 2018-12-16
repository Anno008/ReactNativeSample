import * as React from "react";
import { Platform, Text, View } from "react-native";
import styles from "./HomeScreenStyles";

const instructions: string = Platform.select({
  android:
    `Double tap R on your keyboard to reload,
    Shake or press menu button for dev menu`,
  ios: `Press Cmd+R to reload, Cmd+D or shake for dev menu`,
});

export const HomeScreen: React.StatelessComponent = (): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.instructions}>Home screen</Text>
    <Text style={styles.instructions}>{instructions}</Text>
  </View>
);

