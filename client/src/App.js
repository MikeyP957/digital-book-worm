import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Card from 'react-bootstrap/Card'
import Nav from "./components/Nav";
import Home from "./pages/Home";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import './App.css'


function App() {
  return (

    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
          <Route exact path="/saved">
            <Saved />
          </Route>
        </Switch>
  
      </div>
    </Router>

  );
}

export default App;
