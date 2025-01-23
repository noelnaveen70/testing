import { Box, TextField } from '@mui/material'
import React from 'react'

const Register = () => {
  return (
    

<Box class="reg"
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}
      noValidate
      autoComplete="off"
    >

        <h1>Registration Form</h1>
      <div>
        <TextField
          required
          id="outlined-required"
          label="student Name"
         
        />
        <TextField
          disabled
          id="outlined-disabled"
          label="Student ID"
            
        />
        </div>
        <div>
        <TextField
          id="outlined-number"
          label="Phone Number"
          type="number"
         
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
         
        />
        
        </div> 
        <div>
       
        <TextField id="outlined-search" label="Address" type="search" />
        <TextField
          id="outlined-helperText"
          label="Qualification"
          
        />
      </div>
    </Box>





  )
}

export default Register