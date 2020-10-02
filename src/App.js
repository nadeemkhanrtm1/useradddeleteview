import React from 'react';
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import About from './component/About';
import Contact from './component/Contact';
import Home from './component/Home';
import Navbar from "./component/layout/Navbar";
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Adduser from './component/Adduser';
import EditUser from './component/EditUser';
import View from './component/View';

function App() {
  return (
    <BrowserRouter>
      <Navbar/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/about" component={About}/>
        <Route exact path="/contact" component={Contact}/>
        <Route exact path="/adduser" component={Adduser}/>
        <Route exact path="/edituser/:id" component={EditUser}/>
        <Route exact path="/viewuser/:id" component={View}/>
        <Route component={Home}/>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
