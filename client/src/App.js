import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "./context/context";
import "./css/App.css";

// Imported Components
import Navbar from "./components/layout/Navigation";
import Header from "./components/layout/Header";
import CardList from "./components/CardList";
import Edit from "./components/modal/EditModal";
import Particle from "./components/layout/Particle";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <React.Fragment>
          <React.Fragment>
            <Provider>
              <Particle />
              <Navbar />
              <Header />
              <br />
              <p class="paragraph">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
              <br /> 
              <Route path="/" component={CardList} exact />
              <Route path="/edit/:id" component={Edit} />
            </Provider>
          </React.Fragment>
        </React.Fragment>
      </BrowserRouter>
    );
  }
}

export default App;