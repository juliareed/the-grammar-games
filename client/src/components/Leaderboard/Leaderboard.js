import React, { Component } from 'react';
import Table from './Table';
import Navbar from "../Navbar/Navbar"

export default class Leaderboard extends Component {
  render() {
    return (
     
      <div className="Leaderboard">
        <div className="main">
           <Navbar />
           <Table />
        </div>
      </div>
    );
  }
}

