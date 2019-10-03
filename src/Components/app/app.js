import React, {Component} from "react";

import Filter from "../filter";
import Card from "../card";
import ModalWindow from "../modal-window";
import AddPerson from "../add-person";
import AddToList from "../add-to-list";

import "./css/app.css"

export default class App extends Component {

	id = 0;

	createPerson = (avatar, surname, name, secondName, birthDate, email, gender) => {
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
			this.createPerson("https://api.adorable.io/avatars/150/bott@adorable.io.png", 
											 "Васильев","Александр", "Олегович", "2008", "example@mail.ru", 
											 "Мужчина"),
			this.createPerson("https://api.adorable.io/avatars/150/abott@adorable.io.png",
											 "Петров", "Владимир", "Васильевич", "1982", "example@mail.ru",
											 "Мужчина"),
			this.createPerson("https://api.adorable.io/avatars/150/bot@adorable.io.png",
											 "Сидорова", "Юлия", "Алексеевна", "2002", "example@mail.ru",
											 "Женщина"),
			this.createPerson("https://api.adorable.io/avatars/150/abot@adorable.io.png",
											 "Антипова", "Анастасия", "Александровна", "2019", "example@mail.ru",
											 "Женщина")
		],
		selectedPeople: [],
		transitionListRightPeople: new Set(),
		transitionListLeftPeople: new Set(),
		changeableCard: {
			avatar: "",
			name: "",
			secondName: "",
			surname: "",
			birthDate: "",
			email: "",
			gender: "",
		},
		stateId: this.id,
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

	//TODO доделать функции для изменения элемента с помощью модального окна ниже

	// modalWindowActions = (param) => {
	// 	switch (param) {
	// 		case "close":
	// 				function closeModal () {
	// 					const modalWindow = document.querySelector(".modal");
	// 					modalWindow.style = `display: none;`
	// 				};
	// 				closeModal();	
	// 				break;
	// 		case "open":
	// 				function openModal () {
	// 					const modalWindow = document.querySelector(".modal");
	// 					modalWindow.style = `display: block;`
	// 				};
	// 				openModal();
	// 				break;
	// 		default:
	// 			console.log(`Your parameter "${param}" is incorrect`);
	// 	}
	// };

	// editCard = (id) => {
	// 	this.modalWindowActions("open");
	// 	let newPerson = this.state.changeableCard;
	// 	const oldPeopleArr = this.state.people;
	// 	const newPeopleArr = [
	// 		...oldPeopleArr.slice(0, id),
	// 		newPerson,
	// 		...oldPeopleArr.slice(id++)
	// 	]
	// 	this.setState({people: newPeopleArr});
	// };
	
	// modalInputsChange = (e, inputType) => {
	// 	switch (inputType) {
	// 		case "avatar":
	// 			let avatar = this.state.changeableCard;
	// 			avatar.avatar = e.target.value;
	// 			this.setState({changeableCard: avatar});
	// 			break;
	// 		case "name":
	// 				let name = this.state.changeableCard;
	// 				name.name = e.target.value;
	// 				this.setState({changeableCard: name});
	// 			break;
	// 		case "secondName":
	// 				let secondName = this.state.changeableCard;
	// 				secondName.secondName = e.target.value;
	// 				this.setState({changeableCard: secondName});
	// 			break;
	// 		case "surname":
	// 				let surname = this.state.changeableCard;
	// 				surname.surname = e.target.value;
	// 				this.setState({changeableCard: surname});
	// 			break;
	// 		case "birthDate":
	// 				let birthDate = this.state.changeableCard;
	// 				birthDate.birthDate = e.target.value;
	// 				this.setState({changeableCard: birthDate});
	// 			break;
	// 		case "email":
	// 				let email = this.state.changeableCard;
	// 				email.email = e.target.value;
	// 				this.setState({changeableCard: email});
	// 			break;
	// 		case "gender":
	// 				let gender = this.state.changeableCard;
	// 				gender.gender = e.target.value;
	// 				this.setState({changeableCard: gender});
	// 			break;
	// 		default:
	// 			console.log(`The type of your input "${inputType}" is not defined`);
	// 	}
	// };

	addToSelectedPeople = ({avatar, surname, name, secondName, birthDate, email, gender}) => {
		const newPerson = this.createPerson(avatar, surname, name, secondName, birthDate, email, gender);
		const oldArr = this.state.selectedPeople;
		const newArr = [newPerson, ...oldArr];
		this.setState({selectedPeople: newArr});
	};

	changeBackgroundOnClick = (e, avatar, name, secondName, surname, birthDate, email, gender, id, sideParam) => {
		switch (sideParam) {
			case "right":
				const newPersonRight = {avatar, name, secondName, surname, birthDate, email, gender, id};
					if (e.target.style.backgroundColor !== "rgb(232, 202, 30)") {
						this.state.transitionListRightPeople.forEach(person => {
							if (person.id === id) {
										this.state.transitionListRightPeople.delete(person);
									}
						});
						e.target.style.backgroundColor = "rgb(232, 202, 30)";
						this.setState({transitionListRightPeople: this.state.transitionListRightPeople});
					} else {
						e.target.style.backgroundColor = "rgb(39, 144, 230)";
						this.state.transitionListRightPeople.add(newPersonRight);
						this.setState({transitionListRightPeople: this.state.transitionListRightPeople});
					}
				break;
			case "left":
					const newPersonLeft = {avatar, name, secondName, surname, birthDate, email, gender, id};
					if (e.target.style.backgroundColor !== "rgb(232, 202, 30)") {
						e.target.style.backgroundColor = "rgb(232, 202, 30)";
						this.state.transitionListLeftPeople.forEach(person => {
							if (person.id === id) {
										this.state.transitionListLeftPeople.delete(person);
									}
						});
						this.setState({transitionListLeftPeople: this.state.transitionListLeftPeople});
					} else {
						e.target.style.backgroundColor = "rgb(39, 144, 230)";
						this.state.transitionListLeftPeople.add(newPersonLeft);
						this.setState({transitionListLeftPeople: this.state.transitionListLeftPeople});
					}
				break;
			default:
				console.error(`Your param "${sideParam}" is incorrect`);
		}
	};

	deletePerson = (idsArr, sideParam) => {
		switch (sideParam) {
			case "right":
				idsArr.forEach(person => {
					for (let i = 0; i < this.state.people.length; i++) {
						if (this.state.people[i] && this.state.people[i].id === person.id) {
							this.state.selectedPeople.push(this.state.people[i]);
							delete this.state.people[i];
						}
					}
				});
				this.setState({selectedPeople: this.state.selectedPeople});
				this.setState({people: this.state.people});
				this.setState({transitionListRightPeople: new Set()});
				break;
			case "left":
				idsArr.forEach(person => {
					for (let i = 0; i < this.state.selectedPeople.length; i++) {
						if (this.state.selectedPeople[i] && this.state.selectedPeople[i].id === person.id) {
							this.state.people.push(this.state.selectedPeople[i]);
							delete this.state.selectedPeople[i];
						}
					}
				});
				this.setState({selectedPeople: this.state.selectedPeople});
				this.setState({people: this.state.people});
				this.setState({transitionListLeftPeople: new Set()});
				break;
			default:
				console.error(`Your sideParam "${sideParam}" is incorrect`);
		}
	};

	render () {
		const {people, filter} = this.state;
		const visibleItems = this.filter(people, filter);
		return (
			<div>
				<ModalWindow close={this.modalWindowActions}
										 changeInput={this.modalInputsChange}
										 values={this.state.changeableCard}/>
				<div className="filter-people">
					<Filter people={this.state}
									filterPeople={this.filter}
									setFilter={this.setFilter}/>
				</div>
				<div className="people">
					<div className="not-selected-people">
						<Card people={visibleItems}
									side="right"
									changeCard={this.changeBackgroundOnClick}/>
					</div>
					<div className="buttons">
						<AddToList rightPeople={this.state.transitionListRightPeople}
											 deletePeople={this.deletePerson}
											 leftPeople={this.state.transitionListLeftPeople}/>
					</div>
					<div className="selected-people">
						<Card people={this.state.selectedPeople}
									side="left"
									changeCard={this.changeBackgroundOnClick}/>
					</div>
				</div>
				<AddPerson addSelectedPerson={this.addToSelectedPeople}/>
			</div>
		);
	};
};