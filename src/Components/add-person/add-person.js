import React, {Component} from "react";
import AddPupilCard from "./add-person-card";

export default class AddPerson extends Component {

	state = {
		avatar: "",
		surname: "",
		name: "",
		secondName: "",
		birthDate: "",
		email: "",
		gender: ""
	};

	inputChange = (e, data) => {
		switch (data) {
			case "avatar":
				this.setState({avatar: e.target.value});
				break;
			case "surname":
				this.setState({surname: e.target.value});
				break;
			case "name":
				this.setState({name: e.target.value});
				break;
			case "secondName":
				this.setState({secondName: e.target.value});
				break;
			case "birthDate":
				this.setState({birthDate: e.target.value});
				break;
			case "email":
				this.setState({email: e.target.value});
				break;
			case "gender":
				this.setState({gender: e.target.value});
				break;
			default:
				console.log(`Your data "${data}" is incorrect`);
		}
	};

	render () {
		return (
			<div className="add-pupil">
				<div className="add-characteristics">
					<input type="text" 
								 placeholder="Введите аватар"
								 value={this.state.avatar}
								 onChange={e => this.inputChange(e, "avatar")}/>
					<input type="text" 
								 placeholder="Введите фамилию"
								 value={this.state.surname}
								 onChange={e => this.inputChange(e, "surname")}/>
					<input type="text" 
								 placeholder="Введите имя"
								 value={this.state.name}
								 onChange={e => this.inputChange(e, "name")}/>
					<input type="text" 
								 placeholder="Введите отчество"
								 value={this.state.secondName}
								 onChange={e => this.inputChange(e, "secondName")}/>
					<input type="text" 
								 placeholder="Введите год рождения"
								 value={this.state.birthDate}
								 onChange={e => this.inputChange(e, "birthDate")}/>
					<input type="text" 
								 placeholder="Введите email"
								 value={this.state.email}
								 onChange={e => this.inputChange(e, "email")}/>
					<input type="text" 
								 placeholder="Введите пол"
								 value={this.state.gender}
								 onChange={e => this.inputChange(e, "gender")}/>
					<input type="button" value="Добавить"
								 onClick={() => this.props.addSelectedPupil(this.state)}/>
				</div>
				<AddPupilCard newPupil={this.state}/>
			</div>
		);
	};
};