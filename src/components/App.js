import React, { useState } from 'react';
import 'antd/dist/antd.css';

import '../styles/App.css';
import FormContainer from './form-mode/FormContainer/';
import SideNav from './SideNav';
import PreviewContainer from './PreviewMode/PreviewContainer';
import { workExperienceTemplate } from './form-mode/FormCV/components/fields-group/WorkExperienceFields';
import { educationTemplate } from './form-mode/FormCV/components/fields-group/EducationFields';
import FormCV from './form-mode/FormCV/';

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
	const [personData, setPersonData] = useState(defaultData);

	return (
		<div className='App'>
			<SideNav
				isEditMode={isEditMode}
				setEditMode={setEditMode}
				setPersonData={setPersonData}
			/>
			{isEditMode ? (
				<FormContainer>
					<FormCV defaultData={personData} setPersonData={setPersonData} />
				</FormContainer>
			) : (
				<PreviewContainer personData={personData} />
			)}
		</div>
	);
}

export default App;
