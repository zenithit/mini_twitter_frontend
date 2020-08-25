import React from 'react';
import Sidebar from "./Sidebar"
import Feed from "./Feed"

const WhichComponent = (props) => {
  
	localStorage.clear();
	localStorage.setItem('isLoggedIn', "true");

	if(localStorage.getItem('isLoggedIn')=="false"){
		return( 
			<div>
				<login />
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