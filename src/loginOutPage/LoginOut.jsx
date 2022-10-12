import React from "react";
import { Box, TextField, Typography, Button } from "@mui/material";
import { useState } from "react";
import LoginIcon from '@mui/icons-material/Login';
import HowToRegIcon from '@mui/icons-material/HowToReg';
export default function LoginOut() {
  const [isSighnup, setSighnup] = useState(false);
  const [inputs, setInputs] = useState([
    {
      name: "",
      email: "",
      password: "",
    },
  ]);
  const handleChange =(e)=>{
    setInputs((prevState)=>({
         ...prevState,
         [e.target.name] : e.target.value
    }))
}
   const handleSubmit=(e)=>{
      e.preventDefault();
      console.log(inputs)
   }
   const resetState = ()=>{
    
        setSighnup(!isSighnup);
        setInputs({name: '', email: '', password:''})
     
   }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={500}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"2px 6px 10px #A7C6DA"}
          sx={{
            ":hover": {
              boxShadow: "30px 8px 30px #0E2C40",
              // background : 'red'
            },
            background: "#EEFCCE",
          }}
        >
          <Typography variant="h3" padding={5} textAlign="center">
            {isSighnup ? "Sign Up" : "Log In"}
          </Typography>
          {isSighnup && <TextField type="name" margin="normal" value={inputs.name} name='name' label="Name" onChange={handleChange} />}
          <TextField type="email" margin="normal" value={inputs.email} name='email' label="Email" onChange={handleChange} />
          <TextField type="password" margin="normal" value={inputs.password} name='password' label="Password" onChange={handleChange}  />
          <Button endIcon = {isSighnup ? <HowToRegIcon/> : <LoginIcon/>}
           type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "5px", borderRadius: 4 }}
           
          >
            {isSighnup ? "Sign Up" : "Log In"}
          </Button>
          <Button
          onClick={resetState}
            sx={{ marginTop: "5px", borderRadius: 4 }}
            endIcon = {isSighnup ? <LoginIcon/> : <HowToRegIcon/>  }
          >
            Change to {isSighnup ? "Log in" : "SighnUp"}
          </Button>
        </Box>
      </form>
    </div>
  );
}
