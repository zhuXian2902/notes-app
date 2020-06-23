/** @format */

import React from 'react';
import Modal from 'react-modal';
import './../App.css';

const InputModal = (props) => (
	<Modal
		isOpen={props.display}
		contentLabel="Add Note"
		onRequestClose={props.hide}
		className="modal"
	>
		<h2>Add Notes</h2>
		<input
			type="text"
			value={props.title}
			name="title"
			onChange={props.handleChange}
			placeholder="Notes Title"
			autoComplete="off"
		></input>
		<textarea
			type="text"
			value={props.description}
			name="description"
			onChange={props.handleChange}
			placeholder="add your description here..."
			autoComplete="off"
		></textarea>
		<button onClick={props.handleSumit}>Add Note</button>
	</Modal>
);

export default InputModal;
