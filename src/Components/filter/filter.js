import React, {Component} from "react";

export default class Filter extends Component {

	render () {
		return (
			<div className="filter-panel">
				<p>Выберите один из фильтров, чтобы отсортировать элементы</p>
				<div className="buttons">
					<input type="button" value="Старше 10 лет"
								 onClick={() => {this.props.setFilter("olderTen")}}/>
					<input type="button" value="Младше 20 лет"
								 onClick={() => {this.props.setFilter("youngerTwenty")}}/>
					<input type="button" value="Только мужчины"
								 onClick={() => {this.props.setFilter("male")}}/>
					<input type="button" value="Только женщины"
								 onClick={() => {this.props.setFilter("female")}}/>
					<input type="button" value="Показать всех"
								 onClick={() => {this.props.setFilter("all")}}/>
				</div>
			</div>
		);
	};
};