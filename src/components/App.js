import React, { useState } from 'react';
import 'antd/dist/antd.css';

import '../styles/App.css';
import FormContainer from './form-mode/FormContainer/';
import SideNav from './SideNav';
import { workExperienceTemplate } from './form-mode/FormCV/components/fields-group/WorkExperienceFields';
import { educationTemplate } from './form-mode/FormCV/components/fields-group/EducationFields';
import FormCV from './form-mode/FormCV/';
import { PDFViewer } from '@react-pdf/renderer';
import DocumentCV from './DocumentCV/DocumentCV';
import { getLocalStorageData } from './form-mode/FormCV/utils';

export const defaultData = {
	fullName: '',
	jobTitle: '',
	contacts: ['', '', '', '', ''],
	skills: ['', '', ''],
	profile: '',
	workExperience: [workExperienceTemplate],
	education: [educationTemplate],
};

function App() {
	const [isEditMode, setEditMode] = useState(true);
	const [personData, setPersonData] = useState(
		getLocalStorageData() || defaultData
	);

	return (
		<div className='App'>
			<SideNav
				isEditMode={isEditMode}
				setEditMode={setEditMode}
				personData={personData}
				setPersonData={setPersonData}
			/>
			{isEditMode ? (
				<FormContainer>
					<FormCV defaultData={personData} setPersonData={setPersonData} />
				</FormContainer>
			) : (
				<PDFViewer>
					<DocumentCV personData={personData} />
				</PDFViewer>
			)}
		</div>
	);
}

export default App;
