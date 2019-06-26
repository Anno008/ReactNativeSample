import { connect } from "react-redux";

import { Todo } from "components/todo/Todo";
import { deleteTodoItem, toggleTodoItem } from "components/todo/TodoActions";
import { getTodos } from "components/todo/TodoSelectors";
import { IAppState } from "models/IAppState";

export const mapStateToProps = (state: IAppState) => ({
    todos: getTodos(state),
});

export default connect(
    mapStateToProps,
    { toggleTodoItem, deleteTodoItem },
)(Todo);
