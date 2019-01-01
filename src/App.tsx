import React, { Component } from "react";
import { Provider } from "react-redux";
import { store } from "./store";
import TabNavigator from "./TabNavigator";

export default class App extends Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <TabNavigator />
      </Provider>
    );
  }
}
