import React from 'react';
import SidebarOption from './SidebarOption'
import TwitterIcon from '@material-ui/icons/Twitter';
import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';
import ListIcon from '@material-ui/icons/List';
import { Button } from '@material-ui/core';
import "./Sidebar.css"

function Sidebar() {
	return ( 
		<div>
			<TwitterIcon />
			<SidebarOption Icon={HomeIcon} text="Home"/>
			<SidebarOption Icon={SearchIcon} text="Explore"/>
			<SidebarOption Icon={PersonIcon} text="Profile"/>
			<SidebarOption Icon={ListIcon} text="List"/>
			<Button variant="contained" size="large" color="primary">Tweet</Button>
		</div>
	)
}

export default Sidebar