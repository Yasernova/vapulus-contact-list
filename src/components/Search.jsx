import React, { Component } from 'react'

export default class Search extends Component {
  render() {
    return (
      <div class="search">
        <input type="text" placeholder="search contacts" onChange={this.props.handleSearch}/>
      </div>
    )
  }
}
