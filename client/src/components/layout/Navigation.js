import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";
import logo from "../../image/whase.png";
// Credit to <div>Icons made by <a href="https://www.freepik.com/" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
import AddModal from "../modal/AddModal";
import { Consumer } from "../../context/context";
import axios from "axios";

export default class Navigation extends Component {
  state = {
    modal: false
  };

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  };

  addCard = (dispatch, card) => {
    dispatch({
      type: "ADD_CARD",
      payload: card
    });
    this.setState({
      modal: false
    });
    axios.post("api/add", {
      title: card.title,
      image: card.image,
      description: card.description,
      liveLink: card.liveLink
    });
  };

  render() {
    return (
      <Consumer>
        {value => {
          const { dispatch, admin } = value;
          if (admin === false) {
            return (
              <React.Fragment>
                <Navbar expand="xs">
                  <NavbarBrand className="float-left Navlink" href="/">
                    <img className="logo" alt="jsx-a11y/alt-text" src={logo} />
                    WHASE
                  </NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="Navlink" />
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="Navlink"
                        href={"https://github.com/abdullahalam/whase"}
                        target="_blank"
                      >
                        <i className="icon fab fa-github fa-2x icon-navigation" />
                      </NavLink>
                    </NavItem>

                    <NavItem>
                      <NavLink className="Navlink"
                        href={"https://github.com/abdullahalam/whase/pulls"}
                        target="_blank"
                      > 
                        <i className="icon fas fa-code fa-2x icon-navigation" />
                      </NavLink>
                    </NavItem>


                  </Nav>
                </Navbar>
              </React.Fragment>
            );
          } else {
            return (
              <React.Fragment>
                <Navbar expand="xs">
                  <NavbarBrand className="float-left Navlink" href="/">
                    <img className="logo" alt="jsx-a11y/alt-text" src={logo} />
                    WHASE
                  </NavbarBrand>
                  <Nav className="ml-auto" navbar>
                    <NavItem>
                      <NavLink className="Navlink">
                        <span onClick={this.toggle}>
                          <i className="icon fas fa-folder-plus  fa-2x icon-navigation" />
                        </span>
                      </NavLink>
                    </NavItem>
                    <NavItem>
                      <NavLink
                        className="Navlink"
                        href={"https://github.com/abdullahalam/whase"}
                        target="_blank"
                      >
                        <i className="icon fab fa-github fa-2x icon-navigation" />
                      </NavLink>
                    </NavItem>


                    <NavItem>
                      <NavLink className="Navlink"
                        href={"https://github.com/abdullahalam/whase/pulls"}
                        target="_blank"
                      >
                        <i className="icon fas fa-code fa-2x icon-navigation" />
                      </NavLink>
                    </NavItem>


                  </Nav>
                </Navbar>
                <AddModal
                  modal={this.state.modal}
                  toggle={this.toggle}
                  addCard={this.addCard.bind(this, dispatch)}
                />
              </React.Fragment>
            );
          }
        }}
      </Consumer>
    );
  }
}