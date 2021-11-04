import { useState } from 'react';
import {useHistory} from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Box, Button, Container, Typography } from '@mui/material'; 
import FormInput from '../components/FormInput';
import { login } from '../services';

const useStyles = makeStyles({
  loginForm: {
    display: "flex",
    flexDirection: "column",
  }
});

const Login = (props) => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userInfo = {
      username,
      password,
    };
    const user = await login(userInfo);
    props.setUser(user);
    history.push(`/${username}/tables`);
  }

  return (
    <section>
      <h3>Login</h3>
      <Container maxWidth="xs">
      <form className={classes.loginForm} onSubmit={handleSubmit}>
        <FormInput
          for="username"
          setter={setUsername}
          inputType="text"
          formValue={username}
          required={true}
        />
        <FormInput
          for="password"
          setter={setPassword}
          inputType="password"
          formValue={password}
          required={true}
        />
        <Button type="submit">Login</Button>
      </form>
      </Container>
    </section>
  );
};

export default Login;