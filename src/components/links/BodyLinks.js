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
							{
								this.state.data.map(link => {
									return <TableRow key={link.id}>
										<TableRowColumn>{link.title}</TableRowColumn>
										<TableRowColumn>{link.destination}</TableRowColumn>
										<TableRowColumn>{link.shortUrl}</TableRowColumn>
									</TableRow>
								})
							}
						</TableBody>
					</Table>
				</div>
			)
	}

	componentWillMount(){
		return fetch('https://api.rebrandly.com/v1/links', {
			headers: {
				apikey: sessionStorage.getItem("password")
			}
		})
			.then(response => {return response.json()})
			.then(data => { this.setState({data})})
	}	
	
}
export default BodyLinks;