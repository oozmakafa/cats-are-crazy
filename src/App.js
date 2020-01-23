import React, { Component } from 'react';
import Breed from './components/Breed';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Detail from './components/Detail';

class App extends Component {
  render() { 
    return (
      <Router>
        <Switch>
          <Route path="/" exact>
            <Breed></Breed>
          </Route>
          <Route path="/:id" exact>
              <Detail></Detail>
          </Route>
        </Switch>
      </Router>
    );
  }
}
 
export default App;