import React, {Component} from "react";

export default class AddToList extends Component {
	render () {
		return (
			<div className="buttons">
				<input type="button" value=">>"/>
				<input className="turned-around" 
							 type="button" 
							 value=">>"
							 onClick={() => this.props.deletePeople(this.props.rightPeople, "right")}/>
			</div>
		);
	};
};