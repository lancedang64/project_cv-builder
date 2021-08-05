import React from 'react';

function Section(props) {
	return (
		<div className='Section'>
			<h2>{props.name}</h2>
			{props.children}
		</div>
	);
}

export default Section;
