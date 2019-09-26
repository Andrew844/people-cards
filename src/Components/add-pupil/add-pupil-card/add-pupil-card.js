import React, {Component} from "react";
import Avatar from "../../avatar";

export default class AddPupilCard extends Component {
	render () {
		const {avatar, surname, name, secondName, birthDate, email, gender, id} = this.props.newPupil;
		return (
			<div className="card" key={id} id={id}>
				<Avatar avatar={avatar}/>
				<div className="add-characteristics">
					<div className="name">
						<p>{surname}</p>
						<p>{name}</p>
						<p>{secondName}</p>
					</div>
					<div className="other">
						<p>{birthDate}г.р.</p>
						<p>{email}</p>
						<p>{gender}</p>
					</div>
				</div>
			</div>
		);
	};
};