import React, {Component} from "react";

export default class Avatar extends Component {
	render () {
		return (
		<div className="avatar">
			<img src={this.props.avatar} alt="This is user's avatar"/>
		</div>
		);
	}
}