/** @format */

import React from 'react';
import Note from './Note';

class List extends React.Component {
	render() {
		return (
			<>
				{this.props.list.map((note) => (
					<Note
						key={note.id}
						note={note}
						handleDelete={this.props.handleDelete}
						handleUpdate={this.props.handleUpdate}
						handleRead={this.props.handleRead}
					/>
				))}
			</>
		);
	}
}

export default List;
