import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import Greener from './components/Greener';
import Camel from './components/Camel';
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/greener">
            <Greener />
          </Route>
          <Route path="/camel">
            <Camel />
          </Route>
        </Switch>

      </Router>
    </div>
  );
}

export default App;
