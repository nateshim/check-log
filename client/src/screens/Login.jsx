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
    padding: '15px',
    margin: '10px',
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
    <Box display="flex" flexDirection="column" alignItems="center" height="500px" justifyContent="center">
      <Typography
        color="textPrimary"
        style={{
          fontWeight: 'bold',
          fontSize: '20px'
        }}
      >Login</Typography>
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
        <Button style={{marginTop: '20px'}} color="secondary" variant="contained" type="submit">
          <Typography color="primary">Login</Typography>
        </Button>
      </form>
      </Container>
    </Box>
  );
};

export default Login;