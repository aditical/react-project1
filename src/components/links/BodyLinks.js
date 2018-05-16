import React, {Component} from 'react';
import {
  Table,
  TableBody,
  TableHeader,
  TableHeaderColumn,
  TableRow,
  TableRowColumn,
} from 'material-ui/Table';

class BodyLinks extends Component{
	constructor(props){
		super(props)
		this.state = {
			data : []
		}
	}
		
	render(){
		let data =this.state.data
		return(
				<div>
					<Table>
						<TableHeader displaySelectAll= {false} 
									adjustForCheckbox= {false}
						> 
							<TableRow>
								<TableHeaderColumn> Title </TableHeaderColumn>
								<TableHeaderColumn> Destination </TableHeaderColumn>
								<TableHeaderColumn> Short Url </TableHeaderColumn>
							</TableRow>
						</TableHeader>
						<TableBody displayRowCheckbox ={false}>
							<TableRowColumn></TableRowColumn>
						</TableBody>
					</Table>
				</div>
			)
	}
	displayLink(){
		return fetch('https://api.rebrandly.com/v1/links')
			.then(response => {return response.json()})
			.then(({results:data}) => this.setState({data}))
	}	
	
}
export default BodyLinks;