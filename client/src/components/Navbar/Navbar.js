import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./navbar.css";

const textColor = {
  color: "white",
  fontSize: 50
}

const tabColor = {
  color: "white",
  fontSize: 20
}

const toggleColor = {
  color: "white"
}

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <div>
        <Navbar className = "navbar" color="faded" light expand="md">
          <NavbarBrand style={textColor} href="/"><img src={"https://cdn.dribbble.com/users/201560/screenshots/2179479/pencil-brilliant.gif"} width={80} height={60} />  The Grammar Games</NavbarBrand>
          <NavbarToggler style={toggleColor} onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={tabColor} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={tabColor} href="/leaderboard">Leaderboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={tabColor} href="/">Logout</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}