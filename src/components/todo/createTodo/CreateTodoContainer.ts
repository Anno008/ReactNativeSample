import { connect } from "react-redux";

import { CreateTodo } from "components/todo/createTodo/CreateTodo";
import { addTodoItem } from "components/todo/TodoActions";

export default connect(
  null,
  { addTodoItem }
)(CreateTodo);
