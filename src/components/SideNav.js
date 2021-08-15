import React from 'react';
import templateData from '../templateData';
import { defaultData } from './App';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

const MySwal = withReactContent(Swal);

function SideNav(props) {
	const handleReset = action => {
		MySwal.fire({
			icon: 'warning',
			title: 'Are you sure?',
			html: 'This will replace/clear all fields in the form',
			showCancelButton: true,
			confirmButtonText: `Ok, I am sure`,
		}).then(result => {
			if (result.isConfirmed) {
				props.setPersonData(action === 'reset' ? defaultData : templateData);
			}
		});
	};

	return (
		<div className='SideNav'>
			<span onClick={() => props.setEditMode(prev => !prev)}>
				{props.isEditMode ? 'Preview' : 'Edit'}
			</span>

			<span onClick={() => console.log('download PDF')}>Download PDF</span>

			<span onClick={() => handleReset('fillWithTemplate')}>
				Fill with template
			</span>

			<span onClick={() => handleReset('reset')}>Reset form</span>
		</div>
	);
}

export default SideNav;
