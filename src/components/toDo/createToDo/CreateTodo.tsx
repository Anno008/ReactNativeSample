import React from "react";
import { TextInput, View } from "react-native";
import styles from "./CreateTodoStyle";

interface IProps {
  addToDoItem: (todoName: string) => void;
}

interface IState {
  todoName: string;
}

export class CreateTodo extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      todoName: ""
    };
  }

  public render(): JSX.Element {
    return (
      <View style={styles.container}>
        <TextInput
          value={this.state.todoName}
          onChangeText={(text: string) => this.setState({ todoName: text })}
          onSubmitEditing={this.createTodoItem}
          placeholder="Enter a new todo"
          returnKeyType="done"
        />
      </View>
    );
  }

  public createTodoItem = () => {
    this.props.addToDoItem(this.state.todoName);
    this.setState({ todoName: "" });
  };
}

export default CreateTodo;
