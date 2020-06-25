/** @format */

import React from 'react';
import Note from './Note';

const Search = (props) => {
	// console.log(props);
	return (
		<div>
			<input
				className="search"
				type="text"
				value={props.searchText}
				name="searchText"
				onChange={(e) => props.searchList(e.target.value)}
				placeholder="search"
				autoComplete="off"
			></input>
		</div>
	);
};

export default Search;
