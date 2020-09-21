import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Router,Link} from '@reach/router';
import Main from './views/Main';
import Show from './views/Show';
import New from './views/New';
import Edit from './views/Edit';

function App() {
  return (
    <div className="App">
      <div className="justify-content-around mx-auto col-8">
        <Link to="/create" className="btn btn-md btn-group-sm btn-info text-warning font-italic btn-outline-warning">Donate a friggin' pet</Link>
        <Link to="/" className="btn btn-md btn-group-sm btn-info text-warning font-italic btn-outline-warning">Home, something these animals don't have</Link>
      </div>
      <div>
        <h2 className="col-5 mx-auto bg-primary m-0 text-warning font-weight-bolder">Pet Shelter</h2>
        <h4 className="col-5 mx-auto bg-primary m-0 text-warning font-weight-lighter font-italic">We will literally follow you home</h4>
      </div>
      <Router>
        <Main path="/" />
        <Show path="/pet/:id" />
        <New path="/create" />
        <Edit path="/edit/:id" />
      </Router>
    </div>
  );
}

export default App;
