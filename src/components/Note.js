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
					class="fab fa-readme"
				></i>
				<i
					onClick={(e) => {
						props.handleDelete(props.note.id);
					}}
					class="fas fa-trash-alt"
				></i>
				<i
					onClick={(e) => {
						props.handleUpdate(props.note.id);
					}}
					class="far fa-edit"
				></i>
			</span>
			{props.note.title}
		</li>
	);
};

export default Note;
