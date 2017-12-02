import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./navbar.css";
import LoginBackground from './signin.png';
import LogoutBackground from './signout.png';

const textColor = {
  color: "white",
  fontSize: 50
}

const tabColor = {
  color: "white",
  fontSize: 20
}

const loginStyle ={
  width: "130px",
  height: "40px",
  backgroundImage: 'url('+ {LoginBackground} +')',
  backgroundWidth: "130px",
  backgroundHeight: "40px",
}

const logoutStyle= {
  width: 70,
  height: 30,
  backgroundImage: 'url('+ {LogoutBackground} +')',
  backgroundWidth: 70,
  backgroundHeight: 30,
}

 const authUrl = document.location.href.includes("localhost")
    ? "//localhost:3001/auth/google"
    : "/auth/google";

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
          <NavbarBrand style={textColor} href="/">  The Grammar Games</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={tabColor} href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={tabColor} href="/leaderboard">Leaderboard</NavLink>
              </NavItem>
              <NavItem>
                <NavLink type="button" id="login" style={loginStyle} href={authUrl} />
              </NavItem>
              <NavItem>
                <NavLink type="button" id="logout" style={logoutStyle} href="/logout" />
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}