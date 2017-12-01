import React, { Component } from 'react';
import './Leaderboard.css';
import Table from './Table';

export default class Leaderboard extends Component {
  render() {
    return (
      <div className="Leaderboard">
          <h2>The Grammar Games Leaderboard</h2>
        <div className="main">
          <Table />
        </div>
      </div>
    );
  }
}

