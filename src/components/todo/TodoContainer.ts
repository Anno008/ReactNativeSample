import { connect } from "react-redux";

import { IAppState } from "../../store/IAppState";
import { Todo } from "./Todo";
import { deleteTodoItem, toggleTodoItem } from "./TodoActions";
import { getTodos } from "./TodoSelectors";

export const mapStateToProps = (state: IAppState) => ({
  todos: getTodos(state),
});

export default connect(
  mapStateToProps,
  { toggleTodoItem, deleteTodoItem },
)(Todo);
