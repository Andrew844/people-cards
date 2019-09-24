import React, {Component} from "react";

export default class ModalWindow extends Component {

	render() {
		return (
				<div className="modal" id="modal">
					<div className="modal-content">
						<h4>Изменение данных</h4>
						<p>Для изменения введите новые данные и нажмите кнопку "Сохранить"</p>
					</div>
					<div className="change-characteristics">
						<input type="text" value={this.props.values.surname}
									 placeholder="Введите фамилию"
									 onChange={e => this.props.changeInput(e, "surname")}/>
						<input type="text" value={this.props.values.name}
									 placeholder="Введите имя"
									 onChange={e => this.props.changeInput(e, "name")}/>
						<input type="text" value={this.props.values.secondName}
									 placeholder="Введите отчество"
									 onChange={e => this.props.changeInput(e, "secondName")}/>
						<input type="text" value={this.props.values.birthDate}
									 placeholder="Введите год рождения"
									 onChange={e => this.props.changeInput(e, "birthDate")}/>
						<input type="text" value={this.props.values.email}
									 placeholder="Введите email"
									 onChange={e => this.props.changeInput(e, "email")}/>
						<input type="text" value={this.props.values.gender}
									 placeholder="Введите пол"
									 onChange={e => this.props.changeInput(e, "gender")}/>
					</div>
					<div className="modal-footer">
						<input type="button" 
									 className="modal-close" 
									 value="Сохранить"
									 onClick={() => this.props.close("close")}/>
						<input type="button" 
									 className="modal-close" 
									 value="Отменить"
									 onClick={() => this.props.close("close")}/>
					</div>
				</div>
		);
	};
};