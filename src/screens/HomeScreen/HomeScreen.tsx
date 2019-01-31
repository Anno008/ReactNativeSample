import * as React from "react";
import { Platform, Text, View } from "react-native";
import Todo from "../../components/todo";
import styles from "./HomeScreenStyles";

const instructions: string = Platform.select({
  android: `Android`,
  ios: `iOS`
});

export const HomeScreen: React.StatelessComponent = (): JSX.Element => (
  <View style={styles.container}>
    <Text style={styles.instructions}>Home screen</Text>
    <Text style={styles.instructions}>{instructions}</Text>
    <Todo />
  </View>
);

export default HomeScreen;
