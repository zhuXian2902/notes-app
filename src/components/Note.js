/** @format */

import React from 'react';

const Note = (props) => {
	return (
		<li
			onClick={(e) => {
				props.handleRead(props.note.id);
			}}
		>
			{props.note.title}
		</li>
	);
};

export default Note;
