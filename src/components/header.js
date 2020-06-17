/** @format */

import React from 'react';

function Header(props) {
	return (
		<div className="header">
			<h1>{props.title}</h1>
		</div>
	);
}

Header.defaultProps = {
	title: 'My Notes',
};

export default Header;
