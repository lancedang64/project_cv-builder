import React, { useEffect } from 'react';
import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';

import GeneralInfoFields from './components/fields-group/GeneralInfoFields';
import SkillListFields from './components/fields-group/SkillListFields';
import WorkExperienceFields from './components/fields-group/WorkExperienceFields';
import EducationFields from './components/fields-group/EducationFields';
import Section from './components/reusable/Section';
import templateData from '../../../templateData';

const FormStyled = styled(Form)`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SubmitButton = styled(Button)`
	width: 50%;
`;

function FormCV(props) {
	const { handleSubmit, control, getValues, reset } = useForm({
		defaultValues: props.defaultData,
	});

	useEffect(() => {
		reset(props.defaultData);
	}, [props.defaultData, reset]);

	const onSubmit = data => console.log(data);

	return (
		<FormStyled onSubmit={handleSubmit(onSubmit)}>
			<Section title='General Information'>
				<GeneralInfoFields formControl={control} values={getValues()} />
			</Section>

			<Section title='Skill List' subtitle='(recommended: minimum 3)'>
				<SkillListFields formControl={control} />
			</Section>

			<Section title='Work Experience' subtitle='(recommended: minimum 2)'>
				<WorkExperienceFields formControl={control} />
			</Section>

			<Section title='Education' subtitle='(recommended: minimum 1)'>
				<EducationFields formControl={control} />
			</Section>

			<SubmitButton
				type='primary'
				onClick={() => console.log(JSON.stringify(getValues(), null, 2))}
			>
				Submit
			</SubmitButton>
		</FormStyled>
	);
}

export default FormCV;
