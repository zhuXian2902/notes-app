/** @format */

import React from 'react';
import Modal from 'react-modal';
import './../App.css';

Modal.setAppElement('#root');

const UpdateModal = (props) => (
	<Modal
		isOpen={props.display}
		contentLabel="Update Note"
		onRequestClose={props.update}
		className="modal"
	>
		<h2>Update Note</h2>
		<input
			type="text"
			value={props.title}
			name="title"
			onChange={props.handleChange}
		></input>
		<textarea
			type="text"
			value={props.description}
			name="description"
			onChange={props.handleChange}
		></textarea>
		<button onClick={props.update}>update</button>
	</Modal>
);

export default UpdateModal;
