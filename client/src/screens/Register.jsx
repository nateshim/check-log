import { useState } from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from '@mui/styles';
import { Button, Container } from "@mui/material";
import FormInput from "../components/FormInput";
import { register } from "../services";

const useStyles = makeStyles({
  registerForm: {
    display: "flex",
    flexDirection: "column",
  }
});

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
    <section>
      <h3>Register</h3>
      <Container maxWidth="xs">
        <form className={classes.registerForm} onSubmit={handleSubmit}>
          <FormInput
            for="username"
            setter={setUsername}
            inputType="text"
            formValue={username}
          />
          <FormInput
            for="email"
            setter={setEmail}
            inputType="text"
            formValue={email}
          />
          <FormInput
            for="password"
            setter={setPassword}
            inputType="password"
            formValue={password}
          />
          <Button type="submit">Register</Button>
        </form>
      </Container>
    </section>
  );
};

export default Register;