import React from "react"
import style from "./TodoForm.css"

const TodoForm = (props) => (
    <form onSubmit={(e) => props.submit(e, props.input)}>
        <input type="text" value={props.value} onChange={(e) => props.fill(e)} placeholder="Task"/>
        <button type="submit" className="submit" value="Submit">Submit</button>
    </form>
)

export default TodoForm
