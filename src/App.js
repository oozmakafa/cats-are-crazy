import React, { Component } from 'react';
import Breed from './components/Breed';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import CatDetail from './components/CatDetail';

class App extends Component {
  render() { 
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="/" exact>
              <Breed></Breed>
            </Route>
            <Route path="/:id" exact>
                <CatDetail></CatDetail>
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}
 
export default App;