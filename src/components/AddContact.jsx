import React, { Component } from 'react'

export default class AddContact extends Component {
  render() {
    return (
      <div class="add-header">
        <p>Add new contact</p>
        <i class="fa fa-plus" onClick={this.props.handleAddClick}></i>
      </div>
    )
  }
}
