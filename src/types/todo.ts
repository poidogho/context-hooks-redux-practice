export type Todo = {
    id?: string;
    // title: string;
    description: string;
    status?: boolean
}

export type TodoContextType = {
    todos: Todo[] | null;
    setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
    createTodo: (todo: Todo) => void;
    updateTodo: (id: string) => void;
    deleteTodo: (id: string) => void
}