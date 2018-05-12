import React, { Component } from 'react';
import uuid from 'uuid/v4';
import Search from './components/Search';
import AddContact from './components/AddContact';
import RecentContacts from './components/RecentContacts';
import Contacts from './components/Contacts';
import Contact from './components/Contact';
import Letters from './components/Letters';
import AddContactForm from './components/AddContactForm';
import { categories, recentContacts } from './api';
import { data as allContacts } from './contacts.json';
import './App.css';

class App extends Component {
  state = {
    contacts: categories,
    query: "",
    searchRes: [],
    viewList: true,
    allContacts,
    recentContacts
  }
  handleSearch = ({ target }) => {
    const query = target.value.trim().toLowerCase();
    query ?
      this.setState(
        { query },
        () => this.setState({
          searchRes: this.state.allContacts.filter(cntct => {
            if (cntct.firstName && cntct.lastName) {
              return `${cntct.firstName.toLowerCase()} ${cntct.lastName.toLowerCase()}`.startsWith(this.state.query)
            }
            else return false;
          })
        })) : this.setState({ query }, () => this.setState({ searchRes: [] }))
  }
  handleAddClick = () => this.setState({ viewList: !this.state.viewList })
  addContact = (e, category, contact) => {
    const catKey = category.toUpperCase();
    const categoryUpdated = [...this.state.contacts[catKey]];
    categoryUpdated.push(contact);
    this.setState({
      contacts: {...this.state.contacts, [catKey]: categoryUpdated },
      allContacts: [...this.state.allContacts, contact],
      viewList: true
    }, ()=>{
      document.getElementById("app").scrollTo(0, document.getElementById(catKey).offsetTop -100);
    })
  }
  handleCancel = (e) => this.setState({viewList: true})
  render() {
    return (
      <div class="app" id="app">
        {this.state.viewList ?
          <div class="contact-list">
            <div class="controls">
              <Search handleSearch={this.handleSearch} />
              <AddContact handleAddClick={this.handleAddClick} />
            </div>
            {
              this.state.query.trim() ?
                this.state.searchRes.map(cntct => <Contact key={uuid()} contact={cntct} />) :
                <div id="body">
                  <RecentContacts recentContacts={this.state.recentContacts} />
                  <Contacts contacts={this.state.contacts} />
                </div>
            }
            <Letters />
          </div> : <AddContactForm handleCancel={this.handleCancel} addContact={this.addContact} />
        }
      </div>
    );
  }
}
export default App;
