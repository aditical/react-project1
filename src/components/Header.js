import React, {Component} from 'react';
import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import {Link} from 'react-router-dom';
class Header extends Component{
	constructor(props){
		super(props)
		this.state={
			sidebarOpen : false // dashboard khulda sidebar aaunu hunna so paila hami esko value false rakhchau ani pachi kholda esko value update bhayera true huncha 

		}
	}
	render() {
		return(
				<div>
					<AppBar
						title= "Welcome to Dashboard"
						onLeftIconButtonClick={() => this.toggleSidebar()}
					/>
					<Drawer open= {this.state.sidebarOpen} 
						docked={false} 
						onRequestChange={() => this.toggleSidebar()} 
					>
						<MenuItem> <Link to= "/dashboard"> Home </Link> </MenuItem>
						<MenuItem><Link to = "/links"> Link </Link> </MenuItem>
					
					</Drawer>
				</div>
			)
	}
	toggleSidebar(){
		this.setState({sidebarOpen: !this.state.sidebarOpen}) 
	}

}
export default Header; 