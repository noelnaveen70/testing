import { Button, TextField } from '@mui/material'
import React from 'react'


const Login = () => {
  return (
    <div className='main'>
        <h1>Login Page</h1>
        <TextField id="outlined-basic" label="UserName" variant="outlined" /><br /><br />
        <TextField id="outlined-basic" label="Password" variant="outlined" /><br /><br />
        <Button variant="outlined" id='btn'>Login</Button >
    </div>
  )
}

export default Login