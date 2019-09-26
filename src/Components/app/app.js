import React, {Component} from "react";

import Filter from "../filter";
import Card from "../card";
import ModalWindow from "../modal-window";
import AddPupil from "../add-pupil";
import AddToRightList from "../add-to-right-list";

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
		selectedPeople : [],
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

	modalWindowActions = (param) => {
		switch (param) {
			case "close":
					function closeModal () {
						const modalWindow = document.querySelector(".modal");
						modalWindow.style = `display: none;`
					};
					closeModal();	
					break;
			case "open":
					function openModal () {
						const modalWindow = document.querySelector(".modal");
						modalWindow.style = `display: block;`
					};
					openModal();
					break;
			default:
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
			...oldPeopleArr.slice(id++)
		]
		this.setState({people: newPeopleArr});
	};
	
	modalInputsChange = (e, inputType) => {
		switch (inputType) {
			case "avatar":
				let avatar = this.state.changeableCard;
				avatar.avatar = e.target.value;
				this.setState({changeableCard: avatar});
				break;
			case "name":
					let name = this.state.changeableCard;
					name.name = e.target.value;
					this.setState({changeableCard: name});
				break;
			case "secondName":
					let secondName = this.state.changeableCard;
					secondName.secondName = e.target.value;
					this.setState({changeableCard: secondName});
				break;
			case "surname":
					let surname = this.state.changeableCard;
					surname.surname = e.target.value;
					this.setState({changeableCard: surname});
				break;
			case "birthDate":
					let birthDate = this.state.changeableCard;
					birthDate.birthDate = e.target.value;
					this.setState({changeableCard: birthDate});
				break;
			case "email":
					let email = this.state.changeableCard;
					email.email = e.target.value;
					this.setState({changeableCard: email});
				break;
			case "gender":
					let gender = this.state.changeableCard;
					gender.gender = e.target.value;
					this.setState({changeableCard: gender});
				break;
			default:
				console.log(`The type of your input "${inputType}" is not defined`);
		}
	};

	addToSelectedPeople = ({avatar, surname, name, secondName, birthDate, email, gender}) => {
		const newPupil = this.createPupil(avatar, surname, name, secondName, birthDate, email, gender);
		const oldArr = this.state.selectedPeople;
		const newArr = [newPupil, ...oldArr];
		this.setState({selectedPeople: newArr});
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
										changeCard={this.editCard}/>
					</div>
					<div className="buttons">
						<AddToRightList />
					</div>
					<div className="selected-people">
						<Card people={this.state.selectedPeople}
									changeCard={this.editCard}/>
					</div>
				</div>
				<AddPupil addSelectedPupil={this.addToSelectedPeople}/>
			</div>
		);
	};
};