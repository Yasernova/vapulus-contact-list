import React, { Component } from 'react';
 import Contact from './Contact';
export default class LatestContacts extends Component {
  render() {
    return (
      <div class="latest">
          <p>Latest contacts</p>
          {
            this.props
            .recentContacts
            .map((contact, index) =>  <Contact key={index * Date.now()} contact={contact}/>)
          }
      </div>
    )
  }
}
