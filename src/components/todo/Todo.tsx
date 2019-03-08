import React, { Component } from "react";
import { ScrollView, Text, View } from "react-native";

import CreateTodo from "components/todo/createTodo";
import { TodoItem } from "components/todo/todoItem/TodoItem";
import styles from "components/todo/TodoStyle";
import { IAction } from "models/IAction";
import { ITodoItem } from "models/ITodoItem";

interface IProps {
  todos: ITodoItem[];
  toggleTodoItem: (todo: ITodoItem) => IAction<ITodoItem>;
  deleteTodoItem: (id: number) => IAction<number>;
}

export class Todo extends Component<IProps> {
  public scrollView: React.RefObject<ScrollView>;

  constructor(props: IProps) {
    super(props);
    this.scrollView = React.createRef<ScrollView>();
  }

  public render(): JSX.Element {
    const { todos } = this.props;
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Todos</Text>
        {this.renderTodos(todos)}
        <CreateTodo />
      </View>
    );
  }

  public renderTodos = (todos: ITodoItem[]) => (
    <ScrollView
      contentContainerStyle={styles.scrollViewStyle}
      style={styles.todoContainer}
      ref={this.scrollView}
      onContentSizeChange={this.scrollToBottom}
    >
      {todos.map((todoItem: ITodoItem) => (
        <TodoItem
          key={todoItem.id}
          todo={todoItem}
          toggleTodo={this.toggleTodo}
          deleteTodo={this.deleteTodo}
        />
      ))}
    </ScrollView>
  )

  public toggleTodo = (todo: ITodoItem) => this.props.toggleTodoItem(todo);

  public deleteTodo = (id: number) => this.props.deleteTodoItem(id);

  private scrollToBottom = () => {
    if (this.scrollView.current) {
      this.scrollView.current.scrollToEnd();
    }
  }
}

export default Todo;
