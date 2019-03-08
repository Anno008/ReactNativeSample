import React, { Component } from "react";

import AppNavigation from "AppNavigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistor, { store } from "store";

export default class App extends Component {
  public render(): JSX.Element {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
