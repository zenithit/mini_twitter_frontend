import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "./LogIn.css"

function LogIn() {
	
	const getToken = (event) => {
		console.log(event.target.value.email)
		event.preventDefault()
		fetch('http://localhost:3001/v1/sessions', {
		method: 'POST',
		body: JSON.stringify({
		  email: event.target.value.email,
		  password: event.target.value.password
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
		}).then(response => response.json()).then(json => {localStorage.setItem("token", json.authentication_token).setItem("isLoggedIn",true)})
	}

	return (
		<Form className="login_form"> 
			<h1>
				<span className="font-weight-bold">
					Mini Twitter
				</span>
			</h1>
			<h2 className="text-center">Welcome</h2>
			<FormGroup>
				<Label>Email</Label>
				<Input type="email" placeholder="Email" name="email"/>
				<Label>Password</Label>
				<Input type="Password" placeholder="Password" name="password"/>
			</FormGroup>
			<Button type="submit" className="btn-lg btn-dark btn-block" onClick={getToken}>Log In</Button>
			<div className="text-center">
				<a href="/SignUp">Sign Up</a>
			</div>
		</Form>
	)
}

export default LogIn;
