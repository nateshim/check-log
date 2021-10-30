import {useState} from "react";
import {useHistory} from "react-router-dom";
import {register} from "../services";

const Register = (props) => {
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
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input 
          id="username" 
          type="text" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <label htmlFor="email">Email:</label>
        <input 
          id="email" 
          type="text" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <label htmlFor="password">Password:</label>
        <input 
          id="password" 
          type="text" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Register</button>
      </form>
    </section>
  );
};

export default Register;