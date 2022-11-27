import React, { useState } from "react";
import { Box, Button, Typography, TextField } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import HowToRegIcon from "@mui/icons-material/HowToReg";
const Auth = () => {
  const [isSignup, setisSignup] = useState(false);
  console.log(isSignup);
  const [info, setinfo] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: "",
  });
  const handleChange = (e) => {
    setinfo((prevState) => ({
      ...prevState,
        [e.target.name] : e.target.value,
    }));
   
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(info);
  };
  const setall=(e)=>{
    setisSignup(!isSignup);
    setinfo({
        name: "",
        email: "",
        password: "",
        cpassword: ""
    })
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          display="flex"
          flexDirection={"column"}
          maxWidth={400}
          alignItems="center"
          justifyContent={"center"}
          margin="auto"
          marginTop={5}
          padding={3}
          borderRadius={5}
          boxShadow={"5px 5px 10px #ccc"}
          sx={{
            ":hover": {
              boxShadow: "10px 10px 20px #ccc",
            },
          }}
        >
          <Typography variant="h2" padding={3} textAlign="center">
            {" "}
            {!isSignup ? "Login" : "SIGNUP"}
          </Typography>
          {isSignup && (
            <TextField
              onChange={handleChange}
                value={info.name}
              name="name"
              margin="normal"
              type={"text"}
              variant="outlined"
              placeholder="name"
            />
          )}
          <TextField
            onChange={handleChange}
            value={info.email}
            name="email"
            margin="normal"
            type={"email"}
            variant="outlined"
            placeholder="email"
          />
          <TextField
            onChange={handleChange}
            value={info.password}
            name="password"
            margin="normal"
            type={"password"}
            variant="outlined"
            placeholder="password"
          />
          {isSignup && (
            <TextField
              onChange={handleChange}
                value={info.cpassword}
              name="cpassword"
              margin="normal"
              type={"password"}
              variant="outlined"
              placeholder="confirm password"
            />
          )}
          <Button
            endIcon={!isSignup ? <LoginIcon /> : <HowToRegIcon />}
            sx={{
              marginTop: 3,
              borderRadius: 3,
            }}
            type="submit"
            variant="contained"
            color="warning"
          >
            {!isSignup ? "Login" : "Sign Up"}
          </Button>
          <Button

            endIcon={isSignup ? <LoginIcon /> : <HowToRegIcon />}
            onClick={ setall}
            sx={{
              marginTop: 3,
              borderRadius: 3,
            }}
          >
            Change To {isSignup ? "Login" : "Sign Up"}
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default Auth;
