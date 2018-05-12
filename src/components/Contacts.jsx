import React, { Component } from 'react'
import ContactCat from './ContactCat'
export default class Contacts extends Component {
  render() {
    return (
      <div>
        {/* {this.props.contacts.map((category, index) => <ContactCat key={index} category={ category }/>) } */}
        {Object.keys(this.props.contacts).map((category, index) => <ContactCat key={index} catLetter={category} category={ this.props.contacts[category] }/>) }
      </div>
    )
  }
}
