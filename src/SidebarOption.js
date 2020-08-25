import React from 'react';
import "./SidebarOption.css"
import Popup from "reactjs-popup";
import PopupOption from "./PopupOption"

function SidebarOption(props) {

	return (
	<div className="sidebarOption">
		<props.Icon />
		<Popup modal trigger={<button> {props.text} </button>}>
			<PopupOption text={props.text}/>
		</Popup>
	</div>
	)
}

export default SidebarOption