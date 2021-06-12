import '../styles/App.css';
import React, { useState } from 'react';
import FormContainer from './FormMode/FormContainer';
import SideNav from './SideNav';
import PreviewContainer from './PreviewMode/PreviewContainer';
import TEMPLATE from '../TEMPLATE';

function App() {
	const [isEditMode, setEditMode] = useState(true);
	const [personData, setPersonData] = useState(TEMPLATE);

	const sideNavFunctions = {
		Preview: function togglePreviewMode() {
			setEditMode(prevState => !prevState);
		},
		'Download PDF': function downloadPDF() {
			console.log('download PDF');
		},
		'Fill with template': function fillWithTemplate() {
			console.log('fill with template');
		},
	};

	function handleOnChange(event) {
		setPersonData(prevState => {
			const name = event.target.name;
			console.log(event.target.key);
			let updatedState;
			if (name === 'contacts') {
				updatedState = prevState.contacts.map((contact, index) => {
					if (event.target.id === `contact${index}`)
						contact = event.target.value;
					return contact;
				});
			} else updatedState = event.target.value;

			return {
				...prevState,
				[name]: updatedState,
			};
		});
	}

	return (
		<div className='App'>
			<SideNav functions={sideNavFunctions} />
			{isEditMode ? (
				<FormContainer
					personData={personData}
					handleOnChange={handleOnChange}
				/>
			) : (
				<PreviewContainer personData={personData} />
			)}
		</div>
	);
}

export default App;
