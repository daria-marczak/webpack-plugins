import React from "react";
import uuid from "uuid";
import style from "./App.css";
import Title from "./../presentations/Title";
import TodoList from "./../presentations/TodoList";
import TodoForm from "./../presentations/TodoForm";
import Todo from "./../presentations/Todo";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id: 1,
                    text: "Tidy up the room"
                }, {
                    id: 2,
                    text: "Wash the dishes"
                }, {
                    id: 3,
                    text: "Walk the dog"
                }
            ]
        };
    }
    addTodo(val) {
        const todo = {
            text: val,
            id: uuid.v4(),
        };
        const data = [...this.state.data, todo];
        this.setState({data});
        this.setState({
            input:""
        });
    }
    removeTodo(id) {
        const remainder = this.state.data.filter(todo => todo.id !== id);
        this.setState({data: remainder});
    }
    onChangeHandler(event) {
        let task = event.target.value;
        this.setState({input: task});
        event.preventDefault();
    }
    render() {
        return (
            <div className={style.TodoApp}>
                <Title counter={this.state.data.length}/>
                <TodoList items={this.state.data}  remove={this.removeTodo.bind(this)} />
                <TodoForm
                    input={this.state.input}
                    fill={this.onChangeHandler.bind(this)}
                    submit={this.addTodo.bind(this)}
                />
            </div>
        );
    }
};

export default App;
