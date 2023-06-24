import { Box, Button, Paper, TextField, Typography } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from "react-chrome-extension-router";



const Login = () => {
    const [formValues, setFormValues] = useState({
        email: '',
        password: ''
    });
    const [successMsg, setSuccessMsg] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const userData = {
            email: formValues.email,
            password: formValues.password
        };

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(userData)
        };

        fetch('https://login-signup-65h0.onrender.com/api/users/login', requestOptions)
            .then(res => res.json())
            .then(data => {
                setSuccessMsg(data)
                data.success && toast.success("Login Successfully!!")
                data.success && setFormValues({ email: '', password: '' })
            })
            .catch(err => console.log(err))

    }


    const paperStyle = { padding: '20px', height: '75vh', width: '400px', margin: '40px auto' }
    return (
        <Box>

            <Paper elevation={10} style={paperStyle}>

                <Typography align='center' sx={{ margin: '20px 0px' }} variant='h4'>Login</Typography>
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', rowGap: '15px' }}>
                    <Box>
                        <TextField
                            name='email'
                            type='email'
                            label="Email"
                            variant="standard"
                            fullWidth
                            onChange={handleChange}
                        />
                        <Typography color="red" variant='subtitle1'>{successMsg ? successMsg.email ? successMsg.email : successMsg.emailnotfound ? successMsg.emailnotfound : '' : ''}</Typography>
                    </Box>
                    <Box>
                        <TextField
                            name='password'
                            type='password'
                            label="Password"
                            variant="standard"
                            fullWidth
                            onChange={handleChange}
                        />
                        <Typography color="red" variant='subtitle1'>{successMsg ? successMsg.password ? successMsg.password : successMsg.passwordincorrect ? successMsg.passwordincorrect : '' : ''}</Typography>
                    </Box>

                    <br />

                    <Button type='submit' style={{ textTransform: 'none' }} variant='contained' fullWidth>Login</Button>
                    <Typography align='center'>Don't have an account? <Link color='primary' style={{ textDecoration: 'none' }} to="/">Registration</Link></Typography>
                </form>


            </Paper>
            <ToastContainer />
        </Box>
    )
}

export default Login;

