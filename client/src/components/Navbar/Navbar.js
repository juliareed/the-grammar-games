import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import "./navbar.css";
import LoginBackground from './signin.png';
import LogoutBackground from './signout.png';
import axios from 'axios';
import Cookies from 'universal-cookie';
import $ from 'jquery';

const textColor = {
  color: "white",
  fontSize: 50
}

const tabColor = {
  color: "white",
  fontSize: 20
}

const userStyle = {
  fontSize: 15
}

 const authUrl = document.location.href.includes("localhost")
    ? "//localhost:3001/auth/google"
    : "/auth/google";

const cookies = new Cookies();

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  componentDidMount() {
    console.log(document.cookie);
    let cookie = cookies.get('gg-user');
    $('.username').append(`<h2>${cookie}</h2>`);
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
                <NavLink id="login" href={authUrl} />
              </NavItem>
              <NavItem>
                <NavLink> <br/> </NavLink>
              </NavItem>
              <NavItem>
                <NavLink id="logout" href="/logout" />
              </NavItem>
            </Nav>
            
          </Collapse>
        </Navbar>
         <div className="username" style={userStyle} />
      </div>
    );
  }
}