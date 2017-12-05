import React, { Component } from 'react';
import Tablehead from './Tablehead';
import Tablerow from './Tablerow';
import $ from "jquery"
import 'pure-css';
import './table.css';

export default class Table extends Component {
  constructor(props) {
    super(props)
    this.state = {
      data: []
    }
    this.componentDidMount = this.componentDidMount.bind(this)
    this.handleSort = this.handleSort.bind(this)
  }

  componentDidMount() {
    $.get("/scores")
      .then((response) => this.setState({
        data: response
    }))
  }

  handleSort(attribute) {
    this.setState({
      data: this.state.data.sort(
        (a,b) => parseInt(a[attribute], 10) > parseInt(b[attribute], 10) ? -1 : 1
    )})
  }

  render() {
    const rows = this.state.data.map((row, index) =>
      <Tablerow
        key={row.username}
        position={index + 1}
        username={row.displayName}
        alltime={row.scores}
        recent={row.scores}
        className={index % 2 === 0 ? 'pure-table-odd' : ''}
      />)

    return (
      <table className="pure-table">
        <Tablehead onChange={this.handleSort} />
        <tbody>
          {rows}
        </tbody>
      </table>
    )
  }
}

