import styles from "components/todo/createTodo/CreateTodoStyle";
import React from "react";
import { TextInput, View } from "react-native";
interface IProps {
  addTodoItem: (todoName: string) => void;
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
          onChangeText={this.handleTextChange}
          onSubmitEditing={this.createTodoItem}
          placeholder="Enter a new todo"
          returnKeyType="done"
        />
      </View>
    );
  }

  public handleTextChange = (text: string) => this.setState({ todoName: text });

  public createTodoItem = () => {
    this.props.addTodoItem(this.state.todoName);
    this.setState({ todoName: "" });
  }
}

export default CreateTodo;
