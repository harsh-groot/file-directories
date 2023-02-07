import { Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { login } from "../api/login";
import { Notifications } from "../Components/Notifications";

function Login() {
const navigate = useNavigate();
  const initialState = {
    username: "",
    password: "",
  };

  const [formValue, setFormValue] = useState(initialState);

  useEffect(() => {
    console.log(window.localStorage.getItem("token") !== undefined);
    if(window.localStorage.getItem("token")){
        navigate("/file-directories");
    }
  },[])

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if(formValue.password === "" || formValue.username === ""){
        Notifications("warning", "Warning", "Please fill all fields"); 
    }else{
        login(formValue); 
        setTimeout(() => {
          navigate("/file-directories")
        }, 4000);      
    }
  };

  return (
    <div>
      <Typography gutterBottom variant="h4" component="div">
        Login Page
      </Typography>
      <form onSubmit={(e) => handleSubmit(e)}>
        <Grid container rowSpacing={2} alignItems="center" justify="center" direction="column" sx={{marginTop : "15px"}}>
          <Grid item>
            <TextField
              id="name-input"
              name="username"
              label="Username"
              type="text"
              value={formValue.username}
              sx={{width:"120%"}}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Grid item>
            <TextField
              id="password-input"
              name="password"
              label="Password"
              type="password"
              value={formValue.password}
              sx={{width:"120%"}}
              onChange={(e) => handleInputChange(e)}
            />
          </Grid>
          <Button variant="contained" color="primary" type="submit" style={{marginTop : "15px"}}>
            Submit
          </Button>
        </Grid>
      </form>
    </div>
  );
}

export default Login;
