import React, { useEffect } from 'react';
import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

import GeneralInfoFields from './components/fields-group/GeneralInfoFields';
import SkillListFields from './components/fields-group/SkillListFields';
import WorkExperienceFields from './components/fields-group/WorkExperienceFields';
import EducationFields from './components/fields-group/EducationFields';
import Section from './components/reusable/Section';
import { setLocalStorageData } from './utils';

const MySwal = withReactContent(Swal);

const FormStyled = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export const SubmitButton = styled(Button)`
	width: 50%;
`;

function FormCV(props) {
	const { control, getValues, reset } = useForm({
		defaultValues: props.defaultData,
	});

	useEffect(() => {
		reset(props.defaultData);
	}, [props.defaultData, reset]);

	const handleSubmit = () => {
		props.setPersonData(getValues());
		setLocalStorageData(getValues());
		MySwal.fire({
			icon: 'success',
			title: 'Data is saved! You can preview or/and download your CV',
			showConfirmButton: true,
		});
	};

	if (typeof Storage == 'undefined')
		alert('Sorry, your browser does not support Web Storage...');

	return (
		<FormStyled>
			<Section title='General Information' handleSubmit={handleSubmit}>
				<GeneralInfoFields formControl={control} values={getValues()} />
			</Section>

			<Section
				title='Skill List'
				subtitle='(recommended: minimum 3)'
				handleSubmit={handleSubmit}
			>
				<SkillListFields formControl={control} />
			</Section>

			<Section
				title='Work Experience'
				subtitle='(recommended: minimum 2)'
				handleSubmit={handleSubmit}
			>
				<WorkExperienceFields formControl={control} />
			</Section>

			<Section
				title='Education'
				subtitle='(recommended: minimum 1)'
				handleSubmit={handleSubmit}
			>
				<EducationFields formControl={control} />
			</Section>

			<SubmitButton type='primary' onClick={handleSubmit}>
				Submit
			</SubmitButton>
		</FormStyled>
	);
}

export default FormCV;
