import { AnyAction, applyMiddleware, combineReducers, createStore, Store } from "redux";
import { IAppState } from "./IAppState";

import thunk from "redux-thunk";
import reducers from "./reducers";

const rootReducer = combineReducers<IAppState>(reducers);

export const store: Store = createStore<IAppState, AnyAction, {}, {}>(rootReducer, applyMiddleware(thunk));
