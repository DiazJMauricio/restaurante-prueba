import React, { Component } from "react";
import "./App.css";
import Home from "./Pages/Home/Home";
import Menu from "./Pages/Menu/Menu";
import Marca from "./Pages/Marca/Marca";
import Contacto from "./Pages/Contacto/Contacto";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Error404 from "./Pages/Error404/Error404";

class App extends Component {
  render() {
    return (
      // <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Menu" component={Menu} />
          <Route path="/Marca" component={Marca} />
          <Route path="/Contacto" component={Contacto} />
          <Route component={Error404} />
        </Switch>
      </Router>
      //   {/* <Home />
      // </div> */}
    );
  }
}

export default App;
