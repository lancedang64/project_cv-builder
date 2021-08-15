import React, { useState } from 'react';
import 'antd/dist/antd.css';
import styled from 'styled-components';

import '../styles/App.css';
import FormContainer from './form-mode/FormContainer/';
import SideNav from './SideNav';
import { workExperienceTemplate } from './form-mode/FormCV/components/fields-group/WorkExperienceFields';
import { educationTemplate } from './form-mode/FormCV/components/fields-group/EducationFields';
import FormCV from './form-mode/FormCV/';
import { PDFViewer } from '@react-pdf/renderer';
import DocumentCV from './DocumentCV/DocumentCV';
import { getLocalStorageData } from './form-mode/FormCV/utils';
import Footer from './common/footer';

const AppContainer = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;

	@media (min-width: 768px) {
		padding: 0 0 0 230px;
		flex-direction: column;
	}
`;

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
		<AppContainer>
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
			<Footer />
		</AppContainer>
	);
}

export default App;
