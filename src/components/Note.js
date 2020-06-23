/** @format */

import React from 'react';

const Note = (props) => {
	return (
		<li>
			<span>
				<i
					onClick={(e) => {
						props.handleRead(props.note.id);
					}}
					className="fab fa-readme"
				></i>
				<i
					onClick={(e) => {
						props.handleDelete(props.note.id);
					}}
					className="fas fa-trash-alt"
				></i>
				<i
					onClick={(e) => {
						props.handleUpdate(props.note.id);
					}}
					className="far fa-edit"
				></i>
			</span>
			{props.note.title}
		</li>
	);
};

export default Note;
