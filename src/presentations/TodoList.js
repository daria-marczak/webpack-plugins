import React from "react";
import style from "./TodoList.css";

const TodoList = (props) => {
    const todoItem = props.items.map((item) => {
        return <li content={item} key={item.id}>
            {item.text}
            <button type="button" onClick={item.remove}>x</button>
        </li>
    });
    return <ul className={"style.TodoList"}>{todoItem}</ul>
};

export default TodoList;
