import React, { useState } from "react";
// import { BrowserRouter as Router, Route } from "react-router-dom"

function SignUp() {
    
    const [name, setName] = useState("")
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event)=> {

		event.preventDefault()

		fetch('https://jsonplaceholder.typicode.com/users', {
		method: 'POST',
		body: JSON.stringify({
		  name: name,
		  username: username,
		  email: email,
		  password: password
		}),
		headers: {
		  "Content-type": "application/json; charset=UTF-8"
		}
		}).then(response => response.json()).then(data => console.log(data))

		setName("")
		setUsername("")
		setEmail("")
		setPassword("")
    }

    return (
        <form>
            <h2 style={{"textAlign":"center","marginBottom":"15px"}}>Sign Up</h2>

            <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={(event)=>setName(event.target.value)}/>
            </div>

            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" placeholder="Username" value={username} onChange={(event)=>setUsername(event.target.value)}/>
            </div>

            <div className="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" placeholder="Enter email" value={email} onChange={(event)=>setEmail(event.target.value)}/>
            </div>

            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" placeholder="Enter password" value={password} onChange={(event)=>setPassword(event.target.value)}/>
            </div>

            <button type="submit" className="btn btn-primary btn-block" onClick={handleSubmit}>Sign Up</button>
            
            <p className="forgot-password text-right">
                Already registered <a href="#">Log In</a>
            </p>
        </form>
    )
}

export default SignUp