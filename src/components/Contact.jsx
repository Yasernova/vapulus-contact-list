import React, { Component } from 'react'

export default class Contact extends Component {
  render() {

    const { firstName, lastName, email } = this.props.contact;
    // const firstName = this.props.contact && this.props.contact.firstName
    // const lastName = this.props.contact && this.props.contact.lastName
    // const email = this.props.contact && this.props.contact.email

    return (
      <div class="contact">
        <img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100" alt="user"/>
        <div class="contact-info">
          <p class="name">{firstName+" "+lastName}</p>
          <p>{email}</p>
        </div>
      </div>
    )
  }
}
