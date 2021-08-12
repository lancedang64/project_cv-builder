import React from 'react';
import { Form, Button } from 'antd';
import { useForm } from 'react-hook-form';
import GeneralInfoSection from './components/Section/GeneralInfoSection';
import SkillListSection from './components/Section/SkillListSection';
import WorkExperienceSection, {
	workExperienceTemplate,
} from './components/Section/WorkExperienceSection';
import EducationSection, {
	educationTemplate,
} from './components/Section/EducationSection';

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
			<GeneralInfoSection formControl={control} />

			<SkillListSection formControl={control} />

			<WorkExperienceSection formControl={control} />

			<EducationSection formControl={control} />

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
