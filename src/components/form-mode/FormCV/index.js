import React from 'react';
import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import GeneralInfoFields from './components/fields-group/GeneralInfoFields';
import SkillListFields from './components/fields-group/SkillListFields';
import WorkExperienceFields, {
	workExperienceTemplate,
} from './components/fields-group/WorkExperienceFields';
import EducationFields, {
	educationTemplate,
} from './components/fields-group/EducationFields';
import Section from './components/reusable/Section';

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
			<Section title='General Information'>
				<GeneralInfoFields formControl={control} />
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
