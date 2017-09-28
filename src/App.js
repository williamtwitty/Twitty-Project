import React, { Component } from 'react';
import './App.css';
import { HashRouter, Route} from 'react-router-dom'
import Login from './components/Login/Login'
import axios from 'axios'
import Dashboard from './components/dashboard/Dashboard'
import PrivateData from './components/PrivateData/PrivateData'

class App extends Component {

  render() {

    return (
      <div className="App">

         <HashRouter>

        <div>
          <Route exact path='/' component={ Login } />
          <Route exact path='/dashboard' component={ Dashboard } />
          <Route path='/privatedata' component={ PrivateData } />
        </div>
      </HashRouter>
      </div>
    );
  }
}

export default App;
