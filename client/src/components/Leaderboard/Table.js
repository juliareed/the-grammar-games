import React, { Component } from 'react';
import Tablehead from './Tablehead';
import Tablerow from './Tablerow';
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
    fetch('https://fcctop100.herokuapp.com/api/fccusers/top/recent')
      .then((response) => response.json())
      .then((json) => this.setState({
        data: json
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
        username={row.username}
        alltime={row.alltime}
        recent={row.recent}
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

