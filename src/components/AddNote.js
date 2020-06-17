/** @format */

import React, { Component } from 'react';

class AddNote extends Component {
	render() {
		// console.log(this.props);
		return (
			<>
				<input
					type="text"
					value={this.props.title}
					name="title"
					onChange={this.props.handleChange}
					placeholder="Notes Title"
				></input>
				<textarea
					type="text"
					value={this.props.description}
					name="description"
					onChange={this.props.handleChange}
					placeholder="add your description here..."
				></textarea>
				<button onClick={this.props.handleSumit}>Add Note</button>
			</>
		);
	}
}

export default AddNote;
