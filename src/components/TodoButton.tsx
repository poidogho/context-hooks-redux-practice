import { Button } from "@mui/material"
import { Todo } from "../types/todo"
import { FC } from "react"

type TodoButtonProps = {
    addTodo: () => void
}

const TodoButton: FC<TodoButtonProps> = ({ addTodo }) => {
    const handleClick = () => {
        console.log("called")
        addTodo()
    }

    return (
        <Button variant="contained" onClick={handleClick}>Add Todo Task</Button>
    )
}

export default TodoButton