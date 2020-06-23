/** @format */

import React from 'react';

const Header = (props) => {
	return (
		<div className="header">
			<h1>
				<i onClick={props.showModal} className="fas fa-plus"></i>
				{props.title}
			</h1>
		</div>
	);
};

Header.defaultProps = {
	title: 'My Notes',
};

export default Header;
