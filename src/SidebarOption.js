import React from 'react';
import "./SidebarOption.css"

function SidebarOption(props) {
  return (
    <div className="sidebarOption">
    	<props.Icon />
    	<h3>{props.text} </h3>
    </div>
  )
}

export default SidebarOption;