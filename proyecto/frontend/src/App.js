import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navegacion'
import Productos from './components/Productos'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Switch>
          <Route exact path="/productos" component={Productos}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
