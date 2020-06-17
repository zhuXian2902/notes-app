/** @format */

import React, { Component } from 'react';
import Header from './components/header';
import AddNote from './components/AddNote';
import List from './components/List';
import './App.css';

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
		};
	}

	handleChange = (e) => {
		// console.log(e.target.name);
		this.setState({ [e.target.name]: e.target.value });
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
		}));
	};

	renderEditForm = () => {
		// console.log(this.state);
		return (
			<>
				<input
					type="text"
					value={this.state.title}
					name="title"
					onChange={this.handleChange}
				></input>
				<textarea
					type="text"
					value={this.state.description}
					name="description"
					onChange={this.handleChange}
				></textarea>
				<button onClick={this.Update}>update</button>
			</>
		);
	};

	handleUpdate = (id) => {
		let updateObj = this.state.list.filter((obj) => obj.id === id);
		// console.log(updateObj[0]);
		this.setState({
			edit: true,
			title: updateObj[0].title,
			description: updateObj[0].description,
			id: updateObj[0].id,
		});
	};

	Update = (e) => {
		e.preventDefault();
		console.log('hi');
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
		this.setState({ read: false });
	};

	handleRead = (id) => {
		this.setState(() => {
			return { read: true, id };
		});
	};

	read = () => {
		if (this.state.read) {
			let readObj = this.state.list.filter((obj) => obj.id === this.state.id);
			console.log(readObj, this.state.read);
			return (
				<>
					<Header title={readObj[0].title} />
					<p className="desc">{readObj[0].description}</p>
					<button onClick={this.close}>close</button>
				</>
			);
		}
	};

	render() {
		// console.log(this.state.edit);
		return (
			<div>
				<div className="container">
					{this.state.read && this.read()}

					{this.state.read === false && <Header title="My Notes" />}
					{this.state.edit && this.renderEditForm()}

					{this.state.edit === false && this.state.read === false && (
						<AddNote
							handleChange={this.handleChange}
							handleSumit={this.handleSumit}
							handleAddNote={this.handleAddNote}
							title={this.state.title}
							description={this.state.description}
						/>
					)}
					<ul>
						{this.state.list.length > 0 &&
							this.state.edit === false &&
							this.state.read === false && <h1>My List</h1>}
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
			</div>
		);
	}
}
