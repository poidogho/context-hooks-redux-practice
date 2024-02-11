import { createContext, ReactNode, FC, useState } from 'react';
import uuid4 from "uuid4";
import { Todo, TodoContextType } from '../types/todo';

export const TodoContext = createContext<TodoContextType | null>({
    todos: [],
    createTodo: (todo) => { },
    updateTodo: (id) => { },
    setTodos: (todo) => { },
    deleteTodo: (id) => { }
})

const TodoProvider: FC<{ children: ReactNode }> = ({ children }) => {
    const [todos, setTodos] = useState<Todo[]>([])

    const createTodo = (todo: Todo) => {
        const newTodo: Todo = {
            id: uuid4(),
            description: todo.description,
            // title: todo.title,
            status: false
        }

        console.log("from context", newTodo)

        setTodos([...todos, newTodo])
    }

    const updateTodo = (id: string) => {
        todos.filter((todo: Todo) => {
            if (todo.id === id) {
                todo.status = true;
                setTodos([...todos]);
            }
        });
    };

    const deleteTodo = (id: string) => {
        setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id))
    }

    return (
        <TodoContext.Provider value={{ todos, setTodos, createTodo, updateTodo, deleteTodo }}>{children} </TodoContext.Provider>
    )

}

export default TodoProvider;