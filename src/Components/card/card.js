import React, {Component} from "react";

import Avatar from "../avatar";

export default class Card extends Component {

	parsePeople = () => {
		const people = this.props.people;
		let ul = [];
		people.map(({avatar, name, secondName, surname, birthDate, email, gender, id}) => {
				ul.push(
					<div className="card" 
							 key={id + 1} id={id}
							 style={{backgroundColor: "rgb(232, 202, 30)"}}
							 onClick={e => {
								 this.props.changeCard(e, avatar, name, secondName, surname, 
																			 birthDate, email, gender, id, this.props.side);
								 }}>
						<Avatar avatar={avatar}/>
						<div className="characteristics">
							<div className="name">
								<p>{surname} </p>
								<p>{name} </p>
								<p>{secondName} </p>
							</div>
							<div className="other">
								<p>{birthDate}г.р.</p>
								<p>{email} </p>
								<p>{gender}</p>
							</div>
						</div>
					</div>
				);
			return null;
		});
		return ul;
	};

	render () {
		return (
			<div className="characteristics">
				{this.parsePeople()}
			</div>
		);
	};
}