import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { toast } from 'react-toastify';
import { Navigate } from 'react-router-dom';
// import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import base_url from "../api/bootapi";

const Register = () => {
	const [fields, setFields] = useState(
		{
			name: "",
			email: "",
			contact: "",
			pass: "",
			conpass: ""
		}
	)
	const [willRedirect, setWillRedirect] = useState(false)

	const validate = async (e) => {
		e.preventDefault()
		if (fields.name == "" || fields.email == "" || fields.contact == "" || fields.pass == "" || fields.conpass == "") {
			toast.warn('Fields should not be empty', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else if (!validateEmail(fields.email)) {
			toast.warn('Email is Invalid!', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else if (parseInt(fields.contact) < 0 || fields.contact.length !== 10) {
			toast.warn("contact cannot be negative or length must contain 10 digits")
		} else if (!validatePass(fields.pass)) {
			// TODO: 
			toast.warn('Password and confirm password do not match. Please try again!', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		}
		else if (fields.conpass !== fields.pass) {
			toast.warn('Password and confirm password do not match. Please try again!', {
				position: "top-right",
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			});
		} else {
			const { name, email, pass, conpass, contact } = fields
			const postData = {
				emailid: email,
				name: name,
				username: name,
				password: pass,
				confirmPassword: conpass,
				contact: contact

			}

			// console.log(fields)
			const { data } = await axios.post(`${base_url}/user`, postData)
			console.log({data});
			toast.success("Registered SuccessFully")
			localStorage.setItem("isLogged", true)
			localStorage.setItem("userid", data.id)
			localStorage.setItem("email", data?.emailid)
			localStorage.setItem("username", data?.name)
			setWillRedirect(true)
		}
	}
	const validatePass = (pass) => {
		var re = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
		console.log({ test: re.test(String(pass).toLowerCase()) })
		return re.test(String(pass).toLowerCase());
	}
	const validateEmail = (email) => {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}




	return (
		<>
			{/* <Navbar /> */}

			<div className="container">
				{
					(willRedirect) ?
						<Navigate to="/login" />
						:
						""
				}
				<div className="row">
					<div className="col-md-4 col-md-offset-4">
						<form className="registrationForm">
							<h4>Registration form </h4>
							<div className={'has-error'}>
								<label htmlFor="full_name">Name</label>
								<input
									type="string"
									className="form-control"
									name="name"
									placeholder="Full Name"
									value={fields.name}
									onChange={(e) => { setFields({ name: e.target.value, email: fields.email, contact: fields.contact, pass: fields.pass, conpass: fields.conpass }) }}
								/>
								<span className="help-block">{""}</span> </div>
							<div className={'has-error'}>
								<label htmlFor="email">Email address</label>
								<input type="email" className="form-control" name="emailid" placeholder="Email address"
									value={fields.email}
									onChange={(e) => { setFields({ name: fields.name, email: e.target.value, contact: fields.contact, pass: fields.pass, conpass: fields.conpass }) }}
								/>
								<span className="help-block">{ }</span> </div>
							<div className={'has-error'}>
								<label htmlFor="phone">Contact(enter only 10 digit number)</label>
								<input type="text" className="form-control" name="contact" placeholder="contact"
									value={fields.contact}
									onChange={(e) => { setFields({ name: fields.name, email: fields.email, contact: e.target.value, pass: fields.pass, conpass: fields.conpass }) }}
								/>
								<span className="help-block">{ }</span> </div>
							<div className={'has-error'}>
								<label htmlFor="password">Password</label>
								<input type="password" className="form-control" placeholder="Password" name="password"
									value={fields.pass}
									onChange={(e) => { setFields({ name: fields.name, email: fields.email, contact: fields.contact, pass: e.target.value, conpass: fields.conpass }) }}
								/> <span className="help-block">{ }</span> </div>
							<div className={'has-error'}>
								<label htmlFor="password_confirmation">Confirm Password</label>
								<input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword"
									value={fields.conpass}
									onChange={(e) => { setFields({ name: fields.name, email: fields.email, contact: fields.contact, pass: fields.pass, conpass: e.target.value }) }}
								/> <span className="help-block">{ }</span> </div>
							<br>
							</br>
							<button className="btn btn-primary" onClick={validate}> Register </button>
							<Link to="/login" a class="nav-link" aria-current="page">Already have an account? Login Here</Link>
							{/* <Footer/> */}
						</form>
					</div>

				</div>
			</div>

		</>
	)
}

export default Register