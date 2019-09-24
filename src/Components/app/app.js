import React, {Component} from "react";

import Filter from "../filter";
import Card from "../card";
import ModalWindow from "../modal-window";

import "./css/app.css"

export default class App extends Component {

	id = 0;

	createPupil = (avatar, surname, name, secondName, birthDate, email, gender) => {
		return {
			avatar: avatar,
			name: name,
			secondName: secondName,
			surname: surname,
			birthDate: birthDate,
			email: email,
			gender: gender,
			id: this.id++
		};
	};

	state = {
		people: [
			this.createPupil("https://api.adorable.io/avatars/150/bott@adorable.io.png", 
											 "Васильев","Александр", "Олегович", "2008", "example@mail.ru", 
											 "Мужчина"),
			this.createPupil("https://api.adorable.io/avatars/150/abott@adorable.io.png",
											 "Петров", "Владимир", "Васильевич", "1982", "example@mail.ru",
											 "Мужчина"),
			this.createPupil("https://api.adorable.io/avatars/150/bot@adorable.io.png",
											 "Сидорова", "Юлия", "Алексеевна", "2002", "example@mail.ru",
											 "Женщина"),
			this.createPupil("https://api.adorable.io/avatars/150/abot@adorable.io.png",
											 "Антипова", "Анастасия", "Александровна", "2019", "example@mail.ru",
											 "Женщина")
		],
		changeableCardId: 0,
		changeableCard: {
			avatar: "",
			name: "",
			secondName: "",
			surname: "",
			birthDate: "",
			email: "",
			gender: "",
		},
		filter: "all"
	};

	filter = (items, filter) => {
		if (filter === "olderTen") {
			// eslint-disable-next-line 
			return items.filter(item => {
				if ((new Date().getFullYear() - Number.parseInt(item.birthDate)) > 10) return item;
			});
		} else if (filter === "youngerTwenty") {
			// eslint-disable-next-line 
			return items.filter(item => {
				if ((new Date().getFullYear() - Number.parseInt(item.birthDate)) < 20) return item;
			});
		} else if (filter === "male") {
			// eslint-disable-next-line 
			return items.filter(item => {
				if (item.gender === "Мужчина") return item;
			});
		} else if (filter === "female") {
			// eslint-disable-next-line 
			return items.filter(item => {
				if (item.gender === "Женщина") return item;
			});
		};
		return items;
	};

	setFilter = (filter) => {
		this.setState({filter: filter});
	};

	modalWindowActions = (param) => {
		if (param === "close") {
			function closeModal () {
				const modalWindow = document.querySelector(".modal");
				modalWindow.style = `display: none;`
			};
			closeModal();
		} else if (param === "open") {
			function openModal () {
				const modalWindow = document.querySelector(".modal");
				modalWindow.style = `display: block;`
			};
			openModal();
		} else {
			console.log(`Your parameter "${param}" is incorrect`);
		}
	};

	editCard = (id) => {
		this.modalWindowActions("open");
		let newPupil = this.state.changeableCard;
		const oldPeopleArr = this.state.people;
		const newPeopleArr = [
			...oldPeopleArr.slice(0, id),
			newPupil,
			...oldPeopleArr.slice(id + 1)
		]
		this.setState({people: newPeopleArr});
	};
	
	modalInputsChange = (e, inputType) => {
		switch (inputType) {
			case "avatar":
				this.setState({
					changeableCard: {
						avatar: e.target.value
					}
				});
				break;
			case "name":
				this.setState({
					changeableCard: {
						name: e.target.value
					}
				});
				break;
			case "secondName":
				this.setState({
					changeableCard: {
						secondName: e.target.value
					}
				});
				break;
			case "surname":
				this.setState({
					changeableCard: {
						surname: e.target.value
					}
				});
				break;
			case "birthDate":
				this.setState({
					changeableCard: {
						birthDate: e.target.value
					}
				});
				break;
			case "email":
				this.setState({
					changeableCard: {
						email: e.target.value
					}
				});
				break;
			case "gender":
				this.setState({
					changeableCard: {
						gender: e.target.value
					}
				});
				break;
			default:
				console.log(`The type of your input "${inputType}" is not defined`);
		} 
	}

	render () {
		const {people, filter} = this.state;
		const visibleItems = this.filter(people, filter);
		return (
			<div>
				<ModalWindow close={this.modalWindowActions}
										 changeInput={this.modalInputsChange}
										 values={this.state.changeableCard}/>
				<div className="people">
					<Filter people={this.state}
									filterPeople={this.filter}
									setFilter={this.setFilter}/>
					<Card people={visibleItems}
								changeCard={this.editCard}/>
				</div>
			</div>
		);
	};
};