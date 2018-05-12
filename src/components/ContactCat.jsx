import React, { Component } from 'react'
import Contact from './Contact';
import uuid from 'uuid/v4';
export default class ContactCat extends Component {
  render() {
    const keyChar = this.props.catLetter;
    const { category } = this.props;
    return (
      <div class="contact-ctgr" id={keyChar}>
        { category.length > 0 && <p class="ctgr-header">{ keyChar }</p> }
        { category.map(contact => <Contact key={uuid()} contact={contact}/>) }
      </div>
    )
  }
}
