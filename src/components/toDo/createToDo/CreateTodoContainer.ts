import { connect } from "react-redux";

import { addTodoItem } from "../TodoActions";
import { CreateTodo } from "./CreateTodo";

export const mapStateToProps = () => ({});

export default connect(
  mapStateToProps,
  { addTodoItem }
)(CreateTodo);
