import { useContext } from "react"
import { TodoContextType } from "../types/todo"
import { TodoContext } from "../contexts/todoContext"
import { Box, Chip } from "@mui/material"

const TodoList = () => {
    const { todos, deleteTodo } = useContext(TodoContext) as TodoContextType

    const handleDelete = (id: string) => {
        deleteTodo(id)
    }

    return (
        <Box>
            {todos?.length ? todos.map((todo) => <Box>{todo.description} <Chip onDelete={() => handleDelete(todo.id as string)} /></Box>) : null}
        </Box>
    )
}

export default TodoList