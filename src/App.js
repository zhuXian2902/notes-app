/** @format */

import React, { Component } from 'react';
import Header from './components/Header';
// import AddNote from './components/AddNote';
import List from './components/List';
import './App.css';
import InputModal from './components/InputModal';
import UpdateModal from './components/UpdateModal';
import ReadModal from './components/ReadModal';

export default class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			list: [],
			title: '',
			description: '',
			id: '',
			edit: false,
			read: false,
			display: false,
		};
	}

	handleChange = (e) => {
		// console.log(e.target.name);
		this.setState({ [e.target.name]: e.target.value });
	};

	showModal = () => {
		this.setState(() => {
			return {
				display: true,
			};
		});
	};

	hideModal = () => {
		this.setState(() => {
			return {
				display: false,
				title: '',
				description: '',
				id: '',
			};
		});
	};

	handleSumit = (e) => {
		e.preventDefault();

		let title = this.state.title.trim();
		let description = this.state.description.trim();
		if (title.length === 0) return;
		if (this.state.list.some((obj) => obj.title === title)) return;
		let newNote = Object.assign({}, { title, description, id: Date.now() });
		this.handleAddNote(newNote);
		this.setState(() => {
			return {
				title: '',
				description: '',
				display: false,
			};
		});
	};

	handleAddNote = (note) => {
		// console.log(option);
		this.setState((prev) => {
			return {
				list: prev.list.concat(note),
			};
		});
	};

	handleDelete = (id) => {
		this.setState((prev) => ({
			list: prev.list.filter((obj) => id !== obj.id),
			read: false,
			display: false,
		}));
	};

	handleUpdate = (id) => {
		let updateObj = this.state.list.filter((obj) => obj.id === id);
		// console.log(updateObj[0]);
		this.setState({
			edit: true,
			title: updateObj[0].title,
			description: updateObj[0].description,
			id: updateObj[0].id,
			display: true,
			read: false,
		});
	};

	update = (e) => {
		e.preventDefault();
		this.setState((prev) => {
			return {
				list: this.state.list.map((obj) => {
					if (obj.id === this.state.id) {
						obj.title = this.state.title;
						obj.description = this.state.description;
						return obj;
					}
					return obj;
				}),
				display: false,
			};
		});
		this.setState({
			edit: false,
			id: '',
			description: '',
			title: '',
		});
	};

	close = () => {
		this.setState({
			read: false,
			display: false,
			title: '',
			description: '',
			id: '',
		});
	};

	handleRead = (id) => {
		let readObj = this.state.list.filter((obj) => obj.id === id);
		this.setState(() => {
			return {
				read: true,
				id: readObj[0].id,
				display: true,
				title: readObj[0].title,
				description: readObj[0].description,
			};
		});
	};

	render() {
		return (
			<div>
				<div className="container">
					{this.state.read && (
						<ReadModal
							title={this.state.title}
							description={this.state.description}
							display={this.state.display}
							close={this.close}
							handleUpdate={this.handleUpdate}
							id={this.state.id}
							handleDelete={this.handleDelete}
						/>
					)}

					{this.state.read === false && (
						<Header showModal={this.showModal} title="My Notes" />
					)}
					{this.state.edit && (
						<UpdateModal
							title={this.state.title}
							handleChange={this.handleChange}
							description={this.state.description}
							update={this.update}
							display={this.state.display}
							hide={this.hideModal}
						/>
					)}
					<ul>
						{this.state.list.length > 0 &&
							this.state.edit === false &&
							this.state.read === false}
						{this.state.edit === false && this.state.read === false && (
							<List
								list={this.state.list}
								handleDelete={this.handleDelete}
								handleUpdate={this.handleUpdate}
								handleRead={this.handleRead}
							/>
						)}
					</ul>
				</div>
				{this.state.read === false && this.state.edit === false && (
					<InputModal
						display={this.state.display}
						hide={this.hideModal}
						handleChange={this.handleChange}
						handleSumit={this.handleSumit}
						handleAddNote={this.handleAddNote}
						title={this.state.title}
						description={this.state.description}
					/>
				)}
				<i onClick={this.showModal} className="fas fa-plus"></i>
			</div>
		);
	}
}
