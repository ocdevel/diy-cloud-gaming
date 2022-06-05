import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
    return (
        <Box
            component="form"
            sx={{
                '& > :not(style)': { m: 6, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
            <TextField id="outlined-basic" label="Name" variant="standard" />
            <TextField id="filled-basic" label="Address" variant="standard" />
            <TextField id="standard-basic" label="Credit Card Number" variant="standard" />
            <TextField id="standard-basic" label="Social Security Number" variant="standard" />
            <TextField id="standard-basic" label="Mother's Maiden Name" variant="standard" />
            <TextField id="standard-basic" label="Favorite Food" variant="standard" />
            <TextField id="standard-basic" label="Deepest Darkest Secret" variant="standard" />
        </Box>
    );
}