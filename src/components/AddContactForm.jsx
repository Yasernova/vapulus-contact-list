import React, { Component } from 'react'

export default class AddContactForm extends Component {
	state = {
		contact: {
			userId: "",
			email: "",
			userName: "",
			image: "",
			mobileNumber: "",
			firstName: "",
			lastName: ""
		},
		category: ""
	}
	handleChange = ({ target }) => {
		this.setState({
			contact: {
				...this.state.contact,
				[target.name]: target.value
			},
		})
	}
	handleFirstName = (e) => this.setState({ category: e.target.value.charAt(0) })

	render() {
		return (
			<form
				onChange={this.handleChange}
				onSubmit={(e) => this.props.addContact(e, this.state.category, this.state.contact)}
			>
				<h1>Add a New Contact</h1>
				<div class="pp">
					<img src="https://i1.wp.com/www.winhelponline.com/blog/wp-content/uploads/2017/12/user.png?fit=256%2C256&quality=100" alt="user" />
				</div>
				<input placeholder="Add Photo" required name="image" type="text" />
				<input placeholder="First name" required name="firstName" type="text" onChange={this.handleFirstName} />
				<input placeholder="Last name" required name="lastName" type="text" />
				<div className="phone-number">
					<input type="number" placeholder="+44" name="prefix" />
					<input placeholder="Phone number" required name="mobileNumber" type="number" />
				</div>
				<input placeholder="Email address" required name="email" type="email" />
				<div style={{ display: "flex", flexDirection: "column", alignContent: "center" }}>
					<button style={{ marginBottom: "20px" }} class="save" type="submit">Add Contact</button>
					<button class="cancel" onClick={this.props.handleCancel}>Cancel</button>
				</div>
			</form>
		)
	}
}

