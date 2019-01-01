import React from "react";
import { Button, Text, TouchableOpacity } from "react-native";
import styles from "./TodoItemStyle";
import { ITodoItem } from "../../../models/ITodoItem";

interface IProps {
  todo: ITodoItem;
  toggleTodo: (todoItem: ITodoItem) => void;
  deleteTodo: (id: number) => void;
}

export const TodoItem: React.SFC<IProps> = (props: IProps) => {
  const strikeOutStyle = props.todo.finished ? styles.strikeout : null
  return (
    <TouchableOpacity style={styles.container} onPress={_ => props.toggleTodo(props.todo)}>
      <Text style={[styles.text, strikeOutStyle]}>{props.todo.name}</Text>
      <Button title="Delete" onPress={() => props.deleteTodo(props.todo.id)}/>
    </TouchableOpacity>
  );
};
