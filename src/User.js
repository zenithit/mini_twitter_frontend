import React from 'react';

const User = (props) => {
  return (
    <div>
    	<li>Name: {props.name} </li>
    	<li>Username: {props.username} </li>
    	<li>Email: {props.email} </li>
    	<li>Phone: {props.phone} </li>
    	<hr/>
    </div>
  )
}

export default User;