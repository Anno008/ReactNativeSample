import React from "react";

import AppNavigation from "navigation/AppNavigation";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import persistor, { store } from "store";

const App = (): JSX.Element =>
    <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
            <AppNavigation />
        </PersistGate>
    </Provider>


export default App;