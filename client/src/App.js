import {Switch, Route} from "react-router-dom";
import Nav from './components/Nav';
import Home from './screens/Home';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <Nav/>
      <Switch>
        <main>
          <Route exact path="/">
            <Home/>
          </Route>
        </main>
      </Switch>
    </div>
  );
}

export default App;
