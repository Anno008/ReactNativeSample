import { REDUCER_KEY as todoReducerKey } from "../components/todo/TodoConstants";
import todoReducer from "../components/todo/TodoReducer";

const reducers = {
  [todoReducerKey]: todoReducer,
};

export default reducers;
