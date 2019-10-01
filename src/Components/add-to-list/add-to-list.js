import React, {Component} from "react";

export default class AddToList extends Component {
	render () {
		const {leftPeople, rightPeople} = this.props;
		return (
			<div className="buttons">
				<input type="button" 
							 value=">>"
							 onClick={() => this.props.deletePeople(leftPeople, "left")}/>
				<input className="turned-around" 
							 type="button" 
							 value=">>"
							 onClick={() => this.props.deletePeople(rightPeople, "right")}/>
			</div>
		);
	};
};