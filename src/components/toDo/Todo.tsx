import React, { Component } from "react";
import { Text, View, ScrollView } from "react-native";

import { ITodoItem } from "../../models/ITodoItem";
import { TodoItem } from "./todoItem/TodoItem";
import styles from "./TodoStyle";
import CreateTodo from "./createToDo";
import { IAction } from "../../models/IAction";

interface IProps {
  todos: ITodoItem[];
  addTodoItem: (todo: ITodoItem) => IAction<string>;
  toggleTodoItem: (todo: ITodoItem) => IAction<ITodoItem>;
  deleteTodoItem: (id: number) => IAction<number>;
}

export class Todo extends Component<IProps> {
  scrollView: React.RefObject<ScrollView>;
  
  constructor(props: IProps) {
    super(props)
    this.scrollView = React.createRef<ScrollView>()
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
      onContentSizeChange={this.scrollToBottom}>
      {todos.map(todoItem => (
          <TodoItem key={todoItem.id} todo={todoItem} toggleTodo={this.toggleTodo} deleteTodo={this.deleteTodo} />
        ))}
    </ScrollView>
  );

  public toggleTodo = (todo: ITodoItem) => this.props.toggleTodoItem(todo);

  public deleteTodo = (id: number) => this.props.deleteTodoItem(id);

  private scrollToBottom = () => {
    if(this.scrollView.current) {
      this.scrollView.current.scrollToEnd();
    }
  }
}

export default Todo;
