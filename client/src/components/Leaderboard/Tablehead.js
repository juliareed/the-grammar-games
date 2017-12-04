import React, { Component } from 'react';
import './table.css';

export default class Tablehead extends Component {
  render() {
    return (
      <thead id="table-head">
        <tr>
          <th>#</th>
          <th>Username</th>
          <th className="clickable" onClick={this.props.onChange.bind(this, 'alltime')}>All-time Score</th>
          <th className="clickable" onClick={this.props.onChange.bind(this, 'recent')}>Last 30 days</th>
        </tr>
      </thead>
    )
  }
}

