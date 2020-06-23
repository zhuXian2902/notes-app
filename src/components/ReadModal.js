/** @format */

import React from 'react';
import Modal from 'react-modal';
import './../App.css';

const ReadModal = (props) => {
	return (
		<Modal
			isOpen={props.display}
			contentLabel="Add Note"
			onRequestClose={props.close}
			className="modal"
		>
			<h2>{props.title} </h2>
			<p className="desc">{props.description}</p>
			<button onClick={props.close}>close</button>
		</Modal>
	);
};

export default ReadModal;
