import { connect } from "react-redux";

import { IAppState } from "../../store/IAppState";
import { Todo } from "./Todo";
import { addTodoItem, toggleTodoItem, deleteTodoItem } from "./TodoActions";
import { getTodos } from "./TodoSelectors";

export const mapStateToProps = (state: IAppState) => ({
  todos: getTodos(state),
});

export default connect(
  mapStateToProps,
  { addToDoItem: addTodoItem, toggleToDoItem: toggleTodoItem, deleteToDoItem: deleteTodoItem,  },
)(Todo);
