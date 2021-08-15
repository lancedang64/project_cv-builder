import React from 'react';
import templateData from '../templateData';
import { defaultData } from './App';

function SideNav(props) {
	return (
		<div className='SideNav'>
			<span onClick={() => props.setEditMode(prev => !prev)}>
				{props.isEditMode ? 'Preview' : 'Edit'}
			</span>

			<span onClick={() => console.log('download PDF')}>Download PDF</span>

			<span onClick={() => props.setPersonData(templateData)}>
				Fill with template
			</span>

			<span onClick={() => props.setPersonData(defaultData)}>Reset form</span>
		</div>
	);
}

export default SideNav;
