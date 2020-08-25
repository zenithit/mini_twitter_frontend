import React from 'react';
import Sidebar from "./Sidebar"
import Feed from "./Feed"
import SignUp from "./SignUp"
import LogIn from "./LogIn"
import "./SignUp.css"

const WhichComponent = (props) => {
  
	localStorage.clear();
	localStorage.setItem('isLoggedIn', "true");
	// console.log(localStorage.getItem('authentication_token'))

	if(localStorage.getItem('isLoggedIn')!="false"){
		return( 
			<div className="signUp">
				<LogIn />
				<SignUp />
			</div>
			)
	} else{
		return (
			<div className="App">
				<Sidebar />
				<Feed />
			</div>
		)
	}
}

export default WhichComponent;

////<LogIn /><SignUp />