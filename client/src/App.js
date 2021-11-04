import {useState} from "react";
import {Switch, Route} from "react-router-dom";
import { createTheme, ThemeProvider} from '@mui/material/styles';
import Nav from './components/Nav';
import Home from './screens/Home';
import Tables from './screens/Tables';
import Log from './screens/Log';
import Login from './screens/Login';
import Register from './screens/Register';
import './App.css';

const theme = createTheme({
  typography: {
    fontFamily: [
      'Roboto',
      'sans-serif',
    ].join(','),
  },
  palette: {
    text: {
      primary: '#331E36',
      secondary: '#41337A'
    },
    primary: {
      main: '#FFFFFF',
    },
    secondary: {
      main: '#331E36',
    },
    divider: {
      main: '#C2EFEB',
    },
  },
});

function App() {
  const [user, setUser] = useState(null);

  return (
    <ThemeProvider className="App" theme={theme}>
      <Nav user={user} setUser={setUser}/>
      <Switch>
        <main>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login user={user} setUser={setUser}/>
          </Route>
          <Route path="/register">
            <Register setUser={setUser}/>
          </Route>
          <Route path="/:username/tables">
            <Tables user={user}/>
          </Route>
          <Route path="/:username/:table_id/log">
            <Log user={user}/>
          </Route>
        </main>
      </Switch>
    </ThemeProvider>
  );
}

export default App;
