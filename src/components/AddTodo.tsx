import { useState, useContext } from 'react'
import styled from 'styled-components';
import Box from '@mui/material/Box';
import TextInput from './TextInput';
import TodoButton from './TodoButton';
import { TodoContext } from '../contexts/todoContext';
import { TodoContextType } from '../types/todo';

const AddTodo = () => {

    const [description, setDescription] = useState('')
    const { createTodo } = useContext(TodoContext) as TodoContextType

    const handleValueChange = (value: string) => {
        setDescription(value)
    };

    const handleAddTodo = () => {
        const newTodo = {
            description
        }
        createTodo(newTodo)
        setDescription("")
    }
    console.log({ description })

    return (
        <Container>
            <TextInput onValueChange={handleValueChange} value={description} />
            <TodoButton addTodo={handleAddTodo} />
        </Container>


    )
}

const Container = styled(Box)`
    display: flex;
    margin-top: 1.5rem;
`;

export default AddTodo