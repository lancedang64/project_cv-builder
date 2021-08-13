import React from 'react';
import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import GeneralInfoFields from './components/FieldsGroup/GeneralInfoFields';
import SkillListFields from './components/FieldsGroup/SkillListFields';
import WorkExperienceFields, {
	workExperienceTemplate,
} from './components/FieldsGroup/WorkExperienceFields';
import EducationFields, {
	educationTemplate,
} from './components/FieldsGroup/EducationFields';
import Section from './components/Section';

export const defaultValues = {
	fullName: '',
	jobTitle: '',
	contacts: ['', '', '', '', ''],
	skills: ['', '', ''],
	profile: '',
	workExperience: [workExperienceTemplate],
	education: [educationTemplate],
};

const formItemLayout = {
	layout: 'horizontal',
	labelCol: {
		span: 2,
	},
	wrapperCol: {
		span: 14,
	},
};

const buttonItemLayout = {
	wrapperCol: {
		span: 14,
		offset: 2,
	},
};

const FormCV = props => {
	const { handleSubmit, control, register, getValues } = useForm({
		defaultValues: defaultValues,
	});

	const onSubmit = data => console.log(data);

	return (
		<Form onSubmit={handleSubmit(onSubmit)} {...formItemLayout}>
			<Section name='General Information'>
				<GeneralInfoFields formControl={control} />
			</Section>

			<Section name='Skill List' subtitle='(recommended: minimum 3)'>
				<SkillListFields formControl={control} />
			</Section>

			<Section name='Work Experience' subtitle='(recommended: minimum 2)'>
				<WorkExperienceFields formControl={control} />
			</Section>

			<Section name='Education' subtitle='(recommended: minimum 1)'>
				<EducationFields formControl={control} />
			</Section>

			<Button
				type='primary'
				onClick={() => console.log(JSON.stringify(getValues(), null, 2))}
			>
				Submit
			</Button>
		</Form>
	);
};

export default FormCV;
