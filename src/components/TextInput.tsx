import { FC } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

type TextInputProps = {
    value: string;
    onValueChange: (todo: string) => void
}

const TextInput: FC<TextInputProps> = ({ value, onValueChange }) => {

    const changeValue = (e: any) => {
        e.preventDefault()
        onValueChange(e.target.value);
    }
    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField
                required
                id="outlined-required"
                label="Required"
                // defaultValue="Hello World"
                value={value}
                onChange={changeValue}
            />
        </Box>
    )
}

export default TextInput