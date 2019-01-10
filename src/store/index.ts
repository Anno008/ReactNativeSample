import {
  applyMiddleware,
  combineReducers,
  createStore,
  Store
} from "redux";

import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import { IAppState } from "./IAppState";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage
};

const rootReducer = combineReducers<IAppState>(reducers);

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store: Store = createStore(
  persistedReducer,
  applyMiddleware(thunk)
);

export default persistStore(store);
