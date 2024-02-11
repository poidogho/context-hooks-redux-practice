import AddTodo from './AddTodo';
import TodoProvider from '../contexts/todoContext';
import TodoList from './TodoList';
import { useGetQuestions } from '../hooks/useGetQuestions';
// import { useInterval } from '../hooks/useInterval';

const Todos = () => {
    // const count = useInterval()
    const questions = useGetQuestions()
    console.log(questions)
    return (
        <TodoProvider>
            {/* <div>{count}</div> */}
            <AddTodo />
            <TodoList />
        </TodoProvider>
    )
}

export default Todos