import React from "react"
import style from "./TodoForm.css"

const TodoForm = (props) => (
    <form>
        <input type="text" value={props.value} onChange={(e) => props.fill(e)} placeholder="Task"/>
        <span type="submit" className="submit" value="Submit" onClick={(e) => props.submit(e, props.input)}>Submit</span>
    </form>
)

export default TodoForm
