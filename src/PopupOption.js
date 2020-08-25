import React from 'react';
import UserListDisplay from "./UserListDisplay"
import DisplayProfile from "./DisplayProfile"

const PopupOption = (props) => {
  if(props.text === "List"){
	return (
		<UserListDisplay />
	)	
  }
  if(props.text === "Profile"){
  	return (
		<DisplayProfile />
	)	
  }
  return (
    <div>
    	PopUP Text
    </div>
  )
  
}

export default PopupOption;