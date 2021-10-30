import {useState} from "react";
import {Switch, Route} from "react-router-dom";
import Nav from './components/Nav';
import Home from './screens/Home';
import Tables from './screens/Tables';
import './App.css';

function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="App">
      <Nav/>
      <Switch>
        <main>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route path="/login">
            <Login/>
          </Route>
          <Route path="/register">
            <Register setUser={setUser}/>
          </Route>
          <Route path="/:username/tables">
            <Tables user={user}/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
