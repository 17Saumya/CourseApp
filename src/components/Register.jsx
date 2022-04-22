import React, {Component} from 'react';
import FormValidator from './FormValidator';
//import './App.css';




class Register extends Component{
constructor(){
super();
this.validator = new FormValidator([{
field: 'full_name',
method: 'isEmpty',
validWhen: false,
message: 'Enter full name.'
}, {
field: 'email',
method: 'isEmpty',
validWhen: false,
message: 'Enter your email address.'
}, {
field: 'email',
method: 'isEmail',
validWhen: true,
message: 'Enter valid email address.'
}, {
field: 'phone',
method: 'isEmpty',
validWhen: false,
message: 'Enter a phone number.'
}, {
field: 'phone',
method: 'matches',
args: [/^\(?\d\d\d\)? ?\d\d\d-?\d\d\d\d$/],
validWhen: true,
message: 'Enter valid phone number.'
}, {
field: 'password',
method: 'isEmpty',
validWhen: false,
message: 'Enter password.'
}, {
field: 'password_confirmation',
method: 'isEmpty',
validWhen: false,
message: 'Enter Password confirmation.'
}, {
field: 'password_confirmation',
method: this.passwordMatch, // notice that we are passing a custom function here
validWhen: true,
message: 'Password and password confirmation do not match.'
}]);
this.state = {
full_name: '',
email: '',
phone: '',
password: '',
password_confirmation: '',
validation: this.validator.valid(),
}
this.submitted = false;
}
passwordMatch = (confirmation, state) => (state.password === confirmation)
handleInputChange = event => {
event.preventDefault();
this.setState({
[event.target.name]: event.target.value,
});
}
handleFormSubmit = event => {
event.preventDefault();
const validation = this.validator.validate(this.state);
this.setState({
validation
});
this.submitted = true;
if(validation.isValid) {
//reaches here if form validates successfully...
}
}
render() {
let validation = this.submitted ?this.validator.validate(this.state) : this.state.validation
return (
<div className="container">
<div className="row">
<div className="col-md-4 col-md-offset-4">
<form className="registrationForm">
<h2>Registration form </h2>
<div className={validation.email.isInvalid && 'has-error'}>
<label htmlFor="full_name">Full Name</label>
<input type="string" className="form-control" name="full_name" placeholder="Full Name" onChange={this.handleInputChange} /> <span className="help-block">{validation.full_name.message}</span> </div>
<div className={validation.email.isInvalid && 'has-error'}>
<label htmlFor="email">Email address</label>
<input type="email" className="form-control" name="email" placeholder="Email address" onChange={this.handleInputChange} /> <span className="help-block">{validation.email.message}</span> </div>
<div className={validation.phone.isInvalid && 'has-error'}>
<label htmlFor="phone">Phone(enter only 10 digit number)</label>
<input type="phone" className="form-control" name="phone" placeholder="Phone Number" onChange={this.handleInputChange} /> <span className="help-block">{validation.phone.message}</span> </div>
<div className={validation.password.isInvalid && 'has-error'}>
<label htmlFor="password">Password</label>
<input type="password" className="form-control" placeholder="Password" name="password" onChange={this.handleInputChange} /> <span className="help-block">{validation.password.message}</span> </div>
<div className={validation.password_confirmation.isInvalid && 'has-error'}>
<label htmlFor="password_confirmation">Confirm Password</label>
<input type="password" className="form-control" placeholder="Confirm Password" name="password_confirmation" onChange={this.handleInputChange} /> <span className="help-block">{validation.password_confirmation.message}</span> </div>
<br>
</br>
<button onClick={this.handleFormSubmit} className="btn btn-primary"> Register </button>
</form>
</div>
</div>
</div>
)
}
}

export default Register;








{/*import React from 'react';
import { useState } from 'react';

 function Register() {

// States for registration
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

// States for checking the errors
const [submitted, setSubmitted] = useState(false);
const [error, setError] = useState(false);

// Handling the name change
const handleName = (e) => {
	setName(e.target.value);
	setSubmitted(false);
};

// Handling the email change
const handleEmail = (e) => {
	setEmail(e.target.value);
	setSubmitted(false);
};

// Handling the password change
const handlePassword = (e) => {
	setPassword(e.target.value);
	setSubmitted(false);
};

// Handling the form submission
const handleSubmit = (e) => {
	e.preventDefault();
	if (name === '' || email === '' || password === '') {
	setError(true);
	} else {
	setSubmitted(true);
	setError(false);
	}
};

// Showing success message
const successMessage = () => {
	return (
	<div
		className="success"
		style={{
		display: submitted ? '' : 'none',
		}}>
		<h1>User {name} successfully registered!!</h1>
	</div>
	);
};

// Showing error message if error is true
const errorMessage = () => {
	return (
	<div
		className="error"
		style={{
		display: error ? '' : 'none',
		}}>
		<h1>Please enter all the fields</h1>
	</div>
	);
};

return (
	<div className="form">
	<div>
		<h1>User Registration</h1>
	</div>

	{/* Calling to the methods */}
	{/*<div className="messages">
		{errorMessage()}
		{successMessage()}
	</div>

	<form>
		{/* Labels and inputs for form data */}
		{/*<label className="label">Name</label>
		<input onChange={handleName} className="input"
		value={name} type="text" />

		<label className="label">Email</label>
		<input onChange={handleEmail} className="input"
		value={email} type="email" />

		<label className="label">Password</label>
		<input onChange={handlePassword} className="input"
		value={password} type="password" />

		<button onClick={handleSubmit} className="btn" type="submit">
		Submit
		</button>
	</form>
	</div>
);
}*/}
