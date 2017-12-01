import React, { Component } from 'react';

export default class Tablehead extends Component {
  render() {
    return (
      <thead>
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

