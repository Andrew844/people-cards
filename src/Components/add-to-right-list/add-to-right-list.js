import React, {Component} from "react";

export default class AddToRightList extends Component {
	render () {
		return (
			<div className="buttons">
				<input type="button" value=">>"/>
				<input className="turned-around" type="button" value=">>"/>
			</div>
		);
	};
};