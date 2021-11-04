import { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Box, Button, Container, Typography } from "@mui/material";
import FormInput from "../components/FormInput";
import { register } from "../services";

const useStyles = makeStyles((theme) => ({
  registerForm: {
    display: "flex",
    flexDirection: "column",
    padding: '15px',
  },
}));

const Register = (props) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newUser = {
      username,
      email,
      password
    };
    const user = await register(newUser);
    props.setUser(user);
    history.push(`/${username}/tables`);
  }

  return (
    <Box display="flex" flexDirection="column" alignItems="center">
      <Typography
        color="textPrimary"
        style={{
          fontWeight: 'bold',
          fontSize: '20px'
        }}
      >Register</Typography>
      <Container maxWidth="xs">
        <form className={classes.registerForm} onSubmit={handleSubmit}>
          <FormInput
            for="username"
            setter={setUsername}
            inputType="text"
            formValue={username}
            required={true}
          />
          <FormInput
            for="email"
            setter={setEmail}
            inputType="email"
            formValue={email}
            required={true}
          />
          <FormInput
            for="password"
            setter={setPassword}
            inputType="password"
            formValue={password}
            required={true}
          />
          <Button color="secondary" variant="contained" type="submit">
            <Typography color="primary">Register</Typography>
          </Button>
        </form>
      </Container>
    </Box>
  );
};

export default Register;