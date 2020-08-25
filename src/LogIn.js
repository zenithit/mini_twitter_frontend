import React, { Component, useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import "./LogIn.css"

function LogIn() {
	
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")

	const getToken = (event) => {
		console.log(event.target.value.email)
		event.preventDefault()
		fetch('http://localhost:3001/v1/sessions', {
		method: 'POST',
		body: JSON.stringify({
		  email: email,
		  password: password
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
		}).then(response => response.json()).then(json => console.log(json)).then(json => {localStorage.setItem("token", json.authentication_token).setItem("isLoggedIn",true)})
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
				<Input type="email" placeholder="Email" value={email} onChange={(event)=>setEmail(event.target.value)} />
				<Label>Password</Label>
				<Input type="Password" placeholder="Password" value={password} onChange={(event)=>setPassword(event.target.value)} />
			</FormGroup>
			<Button type="submit" className="btn-lg btn-dark btn-block" onClick={getToken}>Log In</Button>
			<div className="text-center">
				<a href="/SignUp">Sign Up</a>
			</div>
		</Form>
	)
}

export default LogIn;
