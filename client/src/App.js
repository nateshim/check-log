import {useState} from "react";
import {Switch, Route} from "react-router-dom";
import Nav from './components/Nav';
import Home from './screens/Home';
import Tables from './screens/Tables';
import Log from './screens/Log';
import Login from './screens/Login';
import Register from './screens/Register';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [table, setTable] = useState(null);

  return (
    <div className="App">
      <Nav user={user} setUser={setUser}/>
      <Switch>
        <main>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login setUser={setUser}/>
          </Route>
          <Route path="/register">
            <Register setUser={setUser}/>
          </Route>
          <Route path="/:username/tables">
            <Tables user={user}/>
          </Route>
          <Route path="/:username/:table_name/log">
            <Log user={user}/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
