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
			title:''
		}
	}
	render(){
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
							
						</TableBody>
					</Table>
				</div>
			)
	}
	
}
export default BodyLinks;