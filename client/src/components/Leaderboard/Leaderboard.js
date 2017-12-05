import React, { Component } from 'react';
import Table from './Table';

export default class Leaderboard extends Component {
  render() {
    return (
      <div className="Leaderboard">
        <div className="main">
          <Table />
        </div>
      </div>
    );
  }
}

