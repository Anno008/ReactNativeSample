import React, { Component } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistor, { store } from "./store";
import TabNavigator from "./TabNavigator";

export default class App extends Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <TabNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
