import {useState} from "react";
import {Switch, Route} from "react-router-dom";
import Nav from './components/Nav';
import Home from './screens/Home';
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
          <Route path="/register">
            <Register setUser={setUser}/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
