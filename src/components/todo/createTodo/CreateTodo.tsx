import styles from "components/todo/createTodo/CreateTodoStyle";
import React from "react";
import { TextInput, View } from "react-native";

interface Props {
    addTodoItem: (todoName: string) => void;
}

interface State {
    todoName: string;
}

export class CreateTodo extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.state = {
            todoName: ""
        };
    }

    render(): JSX.Element {
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

    public handleTextChange = (text: string): void => this.setState({ todoName: text });

    public createTodoItem = (): void => {
        this.props.addTodoItem(this.state.todoName);
        this.setState({ todoName: "" });
    }
}

export default CreateTodo;
