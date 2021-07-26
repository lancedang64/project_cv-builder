import React, { useState } from 'react';
import 'antd/dist/antd.css';

import '../styles/App.css';
import FormContainer from './FormMode/FormContainer';
import SideNav from './SideNav';
import PreviewContainer from './PreviewMode/PreviewContainer';
import TEMPLATE from '../TEMPLATE';
import FormCV from './FormMode/FormCV';

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

	return (
		<div className='App'>
			<SideNav functions={sideNavFunctions} />
			{isEditMode ? (
				<FormContainer children={<FormCV />} />
			) : (
				<PreviewContainer personData={personData} />
			)}
		</div>
	);
}

export default App;
